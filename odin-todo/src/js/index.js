import "../styles.css";
import TodoList from "./modules/TodoList.js";
import UI from "./ui.js";
import CallbackManager from "./CallbackManager.js";
import DomConverter from "./DomConverter.js";

class TodoApp {
    constructor() {
        this.todoList = new TodoList();
        this.callbackManager = new CallbackManager(this.todoList);
        this.init();
        this.startAutoRefreshing();
    }

    init() {
        const addTodoButton = document.querySelector(".add-todo-button");
        this.callbackManager.append("addTodoButton", addTodoButton);
    }

    startAutoRefreshing() {
        setInterval(() => this.displayTodoList(), 1000);
    }

    displayTodoList() {
        if (this.todoList.getTodos().length !== 0) {
            const todoDomList = DomConverter.convertTodoList(this.todoList);

            todoDomList.forEach((todoDom, index) => {
                this.callbackManager.append("todo", todoDom, [todoDom, index]);
            });

            UI.renderTodoList(todoDomList);
        }
    }
}

// Start the application
new TodoApp();

