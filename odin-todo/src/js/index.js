import "../styles.css";
import Todo from "./modules/Todo.js";
import { openToDoForm, displayTodos } from "./ui.js";


function addTodoCallback(todoList){
     
    let todo = null;

    openToDoForm().then((task)=>{

        todo = new Todo(
            task.title,
            task.description,
            task.date,
            task.estimatedTime
        );
    });

    addTodo(todoList, todo);
    displayTodos(todoList);
}

function addTodo(todoList,todo) {
    todoList.push(todo);
}

function main() {

    //array keeps todo lists objects
    const todoList = [];

    //Adding Event Listeners
    const addTodoButton = document.querySelector(".add-todo-button");
    addTodoButton.addEventListener("click", ()=>addTodoCallback(todoList));
    
    displayTodos(todoList);
}

main();
