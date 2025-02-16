
class DomConverter{

    static convertTodo(todo) {
        const todoDom = document.createElement('div');
        todoDom.innerHTML = `                
            <div class="todo">
                <div class="todo-content">
                    <p class="title"> ${todo.title} </p>
                    <!-- <p class="description">this is the description</p>-->
                    </div>
                <div class="todo-timer"> ${todo.remainingTime + " min"} </div>
            </div>`;
        return todoDom;
    }

    static convertTodoList(todoList){
        return todoList.getTodos().map((todo) => this.convertTodo(todo))
    }
}

export default DomConverter;