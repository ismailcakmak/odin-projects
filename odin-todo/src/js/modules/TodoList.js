import UI from "../ui.js"
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
        this.render();
    }

    getTodos(){
        return this.#todos;
    }

    render() {
        UI.renderTodoList(this);
    }

    startAutoRefresh() {
        setInterval(() => this.render(), 1000);
    }
}

export default TodoList;