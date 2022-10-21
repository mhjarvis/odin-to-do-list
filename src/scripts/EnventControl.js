import { setActiveProject, addProject, displayProjects, addTask } from './ToDoList';
import { createTask } from './Task';
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

        // get task / form containers
        const taskContainer = document.querySelector('.task-container');
        const formContainer = document.querySelector('.new-task-form');
        const sec = document.querySelector('.section');
        console.log(sec)
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

        const sec = document.querySelector('.section');
        console.log(sec);
    })

    const getCancelAddTaskButton = document.querySelector('.task-cancel-button');
    getCancelAddTaskButton.addEventListener('click', () => {
        toggleTaskForm();
    })

/*     addButton.addEventListener('click', () => {
        let projectInputValue = document.querySelector('#project-name').value;
        let x = createNewProject(projectInputValue);
        projectInputValue = '';
        addProject(x);
        toggleProjectForm();
        displayProjects();
    }) */

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


export { initializeListeners }