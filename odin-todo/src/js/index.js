import "../styles.css";
import TodoList from "./modules/TodoList.js";
import UI from "./ui.js";
 

class TodoApp {

    constructor() {
        this.todoList = new TodoList();
        this.init();
    }

    init() {
        UI.applyAddTodoCallback(this.todoList);
    }
}

// Start the application
new TodoApp();