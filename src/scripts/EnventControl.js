import { setActiveProject, addProject, displayProjects, addTask } from './ToDoList';
import { createTask } from './Task';
import { createNewProject } from './Project'


// fix issue with adding tasks
// fix issue with projects once tasks are finished

function initializeListeners() {

    const individualProjects = document.querySelectorAll('.project-container h4');

    // event listeners for each 'Project' object
    individualProjects.forEach(proj => {
        proj.addEventListener('click', function handleClick(event) {
            let index = this.className.substring(1);
            setActiveProject(index);    
            displayProjects(); 
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
        return;
    }
    selectButton.style.display = 'none';
    selectForm.style.display = 'block';
}

function toggleTaskForm() {
    const selectFormContainer = document.querySelector('.new-task-form');
    const selectNewTaskButton = document.querySelector('.new-task-button');

    if(selectNewTaskButton.style.display == 'none') {
        selectFormContainer.style.display = 'none';
        selectNewTaskButton.style.display = 'block';
        return;
    }

    selectNewTaskButton.style.display = 'none';
    selectFormContainer.style.display = 'block';
}

// These are to be initialized once, not each time the Container holding all projects is rebuild

function initMainButtons() {

    const projectButton = document.querySelector('.new-project-button');
    const addButton = document.querySelector('.add-button');
    const cancelButton = document.querySelector('.cancel-button');

    // event listener for 'Add Project' button
    projectButton.addEventListener('click', () => {
        toggleProjectForm();
    })

    // Add Project Button
    addButton.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        let projectInputValue = document.querySelector('#project-name');
        let x = createNewProject(projectInputValue.value);
        projectInputValue.value = '';
        addProject(x);
        toggleProjectForm();
        displayProjects();
    })
    
    // Cancel Project Button
    cancelButton.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        let projectInputValue = document.querySelector('#project-name');
        projectInputValue.value = '';
        toggleProjectForm();
    })

    const taskButton = document.querySelector('.new-task-button');
    const individualProjects = document.querySelectorAll('.project-container h4');

    // event listener for 'Add Task' button
    taskButton.addEventListener('click', () => {

        // get task / form containers
        const taskContainer = document.querySelector('.task-container');
        const formContainer = document.querySelector('.new-task-form');
        toggleTaskForm();
    })

    const getAddAddTaskButton = document.querySelector('.task-add-button');
    getAddAddTaskButton.addEventListener('click', () => {
        let taskInputValue = document.querySelector('#task-title').value;
        let x = createTask(taskInputValue, '', '', '');
        taskInputValue = '';
        addTask(x);
        toggleTaskForm();
        displayProjects();
    })

    const getCancelAddTaskButton = document.querySelector('.task-cancel-button');
    getCancelAddTaskButton.addEventListener('click', () => {
        toggleTaskForm();
    })

























}

export { initializeListeners, initMainButtons }