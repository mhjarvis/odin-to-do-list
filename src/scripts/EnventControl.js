import { setActiveProject, addProject, displayProjects } from './ToDoList';
import { createNewProject } from './Project'


function initializeListeners() {

    const projectButton = document.querySelector('.new-project-button');
    const taskButton = document.querySelector('.new-task-button');
    const individualProjects = document.querySelectorAll('.project-container h4');
    const addButton = document.querySelector('.add-button');
    const cancelButton = document.querySelector('.cancel-button');
    
    // event listener for 'Add Project' button
    projectButton.addEventListener('click', () => {
        toggleProjectForm();
        console.log('testbutton');
    })

    // Add Project Button
    addButton.addEventListener('click', () => {
        let projectInputValue = document.querySelector('#project-name').value;
        let x = createNewProject(projectInputValue);
        projectInputValue = '';
        addProject(x);
        toggleProjectForm();
        displayProjects();
    })

    // Cancel Project Button
    cancelButton.addEventListener('click', () => {
        toggleProjectForm();
    })

    // event listener for 'Add Task' button
    taskButton.addEventListener('click', () => {

        // get task container element for appending
        const taskContainer = document.querySelector('.task-container');

        // create form element and append
        const form = document.createElement('form');
        form.className = 'new-task-form';
        taskContainer.appendChild(form);

        // get form container
        const formContainer = document.querySelector('.new-task-form');

        // create label and append
        const label = document.createElement('label');
        label.className = 'new-task-label';
        label.innerText = 'New Task Name:'
        label.for = 'task-title';
        formContainer.appendChild(label);
    

        // create input and append
        const input = document.createElement('input');
        input.className = 'new-task-form';
        formContainer.appendChild(input);

        
        console.log(formContainer);

    })

    // event listeners for each 'Project' object
    individualProjects.forEach(proj => {
        proj.addEventListener('click', function handleClick(event) {
            let index = this.className.substring(1);
            setActiveProject(index);    
            displayProjects(); 
            console.log(index);
        });
    })

    


}

function toggleProjectForm() {
    const selectContainer = document.querySelector('.project-container');
    const selectButton = document.querySelector('.new-project-button');
    const selectForm = document.querySelector('.project-form-container');
        
    if(selectButton.style.display == 'none') {
        selectForm.style.display = 'none';
        selectButton.style.display = 'block';
        console.log('shit')
        return;
    }
    selectButton.style.display = 'none';
    selectForm.style.display = 'block';
}

function toggleTaskForm() {
    const selectContainer = document.querySelector('.')
}


export { initializeListeners }