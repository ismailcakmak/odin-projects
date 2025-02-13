
function openToDoForm() {

    return new Promise((resolve)=>{

        
        // Create the form element
        const form = document.createElement('form');
        form.setAttribute('id', 'todoForm');
        
        // Create Title input
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('name', 'title');
        titleInput.setAttribute('required', true);
        
        // Create Description input
        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description:';
        const descriptionInput = document.createElement('textarea');
        descriptionInput.setAttribute('id', 'description');
        descriptionInput.setAttribute('name', 'description');
        
        // Create Date input
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Date:';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');
        dateInput.setAttribute('required', true);
        
        // Create Estimated Time input
        const timeLabel = document.createElement('label');
        timeLabel.setAttribute('for', 'estimatedTime');
        timeLabel.textContent = 'Estimated Time (hours):';
        const timeInput = document.createElement('input');
        timeInput.setAttribute('type', 'number');
        timeInput.setAttribute('id', 'estimatedTime');
        timeInput.setAttribute('name', 'estimatedTime');
        timeInput.setAttribute('min', '0');
        timeInput.setAttribute('required', true);
        
        // Create Submit button
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Add Task';
        
        // Append all the elements to the form
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(document.createElement('br')); // line break
        form.appendChild(descriptionLabel);
        form.appendChild(descriptionInput);
        form.appendChild(document.createElement('br')); // line break
        form.appendChild(dateLabel);
        form.appendChild(dateInput);
        form.appendChild(document.createElement('br')); // line break
        form.appendChild(timeLabel);
        form.appendChild(timeInput);
        form.appendChild(document.createElement('br')); // line break
        form.appendChild(submitButton);
        
        // Append the form to the DOM
        const container = document.querySelector('.container');
        container.appendChild(form);
        
        // Optionally, handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const task = {
                title: titleInput.value,
                description: descriptionInput.value,
                date: dateInput.value,
                estimatedTime: timeInput.value,
            };
            
            // Displaying task details in the console (you can modify this to do something else)
            console.log('New Task:', task);
            
            // Optionally, show a confirmation message
            alert(`Task Added: \nTitle: ${task.title}\nDescription: ${task.description}\nDate: ${task.date}\nEstimated Time: ${task.estimatedTime} hours`);
            
            // Remove the form from the DOM
            container.removeChild(form);
            
            resolve(task);
        });
        
    });
}


function createTodo(){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = `<h2>${title}</h2> <p>${description}</p> <p>${date}</p> <p>${estimatedTime}</p>`;
    return todo;
}

function displayTodos(todoList) {

    const todoContainer = document.querySelector(".todo-container");

    // Clear the todo container
    while(todoContainer.firstChild(".todo")){
        const firstChild = todoContainer.firstChild(".todo");
        todoContainer.removeChild(firstChild);
    }

    // Append todos to the todo container
    todoList.forEach((element) => {
        const todo = createTodo(element);
        todoContainer.appendChild(todo);
    });

}

export {openToDoForm, displayTodos};