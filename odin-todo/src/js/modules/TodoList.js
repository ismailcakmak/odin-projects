import Todo from "./Todo.js"

class TodoList {

    #todos = [];

    add(title,description,date,estimatedTime) {

        const todo = new Todo(
            title,
            description,
            date,
            estimatedTime
        );

        this.#todos.push(todo);
    }

    getTodos(){
        return this.#todos;
    }

}

export default TodoList;