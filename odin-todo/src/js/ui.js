class UI {
    
    static openToDoForm() {
        return new Promise((resolve) => {
            // Create the form element
            const form = document.createElement('form');
            form.setAttribute('class', 'todo-form');
            
            // Set the inner HTML of the form
            form.innerHTML = `
                <div>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required>
                    <br>
                    
                    <label for="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                    <br>
                    
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required>
                    <br>
                    
                    <label for="estimatedTime">Estimated Time (hours):</label>
                    <input type="number" id="estimatedTime" name="estimatedTime" min="0" required>
                    <br>
                    
                    <button type="submit">Add Task</button>
                </div>`;

            // Append the form to the DOM
            const root = document.querySelector('html');
            root.appendChild(form);

            // Handle form submission
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const task = {
                    title: form.querySelector('#title').value,
                    description: form.querySelector('#description').value,
                    date: form.querySelector('#date').value,
                    estimatedTime: form.querySelector('#estimatedTime').value,
                };
                
                console.log('New Task:', task);
                root.removeChild(form);
                resolve(task);
            });
        });
    }

    static createTodoDom(element) {
        const todo = document.createElement('div');
        todo.innerHTML = `                
            <div class="todo">
                <div class="todo-content">
                    <p class="title"> ${element.title} </p>
                    <!-- <p class="description">this is the description</p>-->
                    </div>
                <div class="todo-timer"> ${element.remainingTime} </div>
            </div>`;
        return todo;
    }

    static createTodoDomList(todoList) {
        return todoList.getTodos().map((todo) => this.createTodoDom(todo));
    }

    static renderTodoList(todoList) {
        // Don't reassign the parameter
        const todos = todoList.getTodos();
        const todoContainer = document.querySelector(".todo-container");

        // Clear the todo container
        while(todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild);
        }
        
        //get dom todo list from todo list
        const todoDomList = this.createTodoDomList(todoList);

        //apply timer callback for todo doms
        this.applyTodoTimerCallback(todos, todoDomList);

        //append todo doms to DOM
        todoDomList.forEach((todoDom) => {
            todoContainer.appendChild(todoDom);
        });
    }

    static applyAddTodoCallback(todoList) {
        const addTodoButton = document.querySelector(".add-todo-button");
        addTodoButton.addEventListener("click", () => {
            this.openToDoForm().then((task) => {
                todoList.add(
                    task.title,
                    task.description,
                    task.date,
                    task.estimatedTime
                );
                this.renderTodoList(todoList);
            });
        });
    }

    static applyTodoTimerCallback(todoList, todoDomList) {
        todoDomList.forEach((todoDom, index) => {
            const todoTimer = todoDom.querySelector(".todo-timer");
            todoTimer.addEventListener("click", () => {
                const timer = todoList[index].timer;
                if(timer.getTimerStatus()) {
                    timer.stop();
                } else {
                    timer.start();
                }
                this.renderTodoList(todoList);
            });
        });
    }
}

export default UI;
