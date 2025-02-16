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
    
    static renderTodoList(todoDomList) {

        const todoContainer = document.querySelector(".todo-container");

        // Clear the todo container
        while(todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild);
        }

        //append todo doms to DOM
        todoDomList.forEach((todoDom) => {
            todoContainer.appendChild(todoDom);
        });
    }
    
}

export default UI;
