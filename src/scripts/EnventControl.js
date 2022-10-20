import { setActiveProject, displayProjects } from './ToDoList';


function initializeListeners() {

    const projectButton = document.querySelector('.new-project-button');
    const taskButton = document.querySelector('.new-task-button');
    const individualProjects = document.querySelectorAll('.project-container h4');
    const addButton = document.querySelector('.add-button');
    const cancelButton = document.querySelector('.cancel-button');
    
    // event listener for 'Add Project' button
    projectButton.addEventListener('click', () => {
        toggleForm();
        console.log('test');
    })

    // Add Project Button
    addButton.addEventListener('click', () => {
        let value = document.querySelector('#project-name').value;
        toggleForm();
        createNewProject(value);
    })

    // Cancel Project Button
    cancelButton.addEventListener('click', () => {
        toggleForm();
    })

    // event listener for 'Add Task' button
    taskButton.addEventListener('click', () => {
        console.log('test');

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


    function toggleForm() {
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









}

export { initializeListeners }










































/* import { createNewProject } from "./Project"; 



    
    // New Project Button
    newProjectButton.addEventListener('click', () => {
        toggleForm();
    });


}

/*     // Individual Projects
    individualProjects.forEach(proj => {
        proj.addEventListener('click', function handleClick(event) {
            console.log("tst", event);
        });
    }) */


/*     individualProjects.addEventListener('click', () => {
        console.log("working");
    })

} */



/* 


export { initializeListeners } */