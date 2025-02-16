import UI from "./ui.js"


class CallbackManager{

    constructor(todoList){
        this.todoList = todoList;
        //this.todoListDom = todoListDom;
        //this.addTodoButton = addTodoButton; 
    }

    #callbacks = {
        "addTodoButton" : [
            {
                action: "click",
                function : function() {
                    UI.openToDoForm().then((task) => {
                        this.todoList.add(
                            task.title,
                            task.description,
                            task.date,
                            task.estimatedTime
                        );
                    });
                }
            }
        ],

        "todo" : [
            {
                action:"click",
                function: function(todoDom, index) {
                    const todoTimer = todoDom.querySelector(".todo-timer");
                    todoTimer.addEventListener("click", () => {
                        const timer = this.todoList.getTodos()[index].timer; 
                        console.log("timer a clicked");
                        if(timer.getTimerStatus()) {
                            timer.stop();
                        } else {
                            timer.start();
                        }
                    });
                }
                
            }
        ]
    }

    append(label, domObject, parameters=null) {
        // Get the callbacks array for the given label
        const callbacks = this.#callbacks[label];
        
        if (!callbacks) {
            console.error(`No callbacks found for label: ${label}`);
            return;
        }
    
        // Apply each callback for the label
        callbacks.forEach(callback => {
            if (parameters !== null) {
                // If parameters are provided, bind them to the function
                domObject.addEventListener(
                    callback.action, 
                    () => callback.function.call(this, ...parameters)
                );
            } else {
                // If no parameters, bind just 'this'
                domObject.addEventListener(
                    callback.action, 
                    callback.function.bind(this)
                );
            }
        });
    }

}


export default CallbackManager;