














































/* import { createNewProject } from "./Project"; 

// Control all buttons/events from here

function initializeListeners() {

    const newProjectButton = document.querySelector('.new-project-button');
    const addButton = document.querySelector('.add-button');
    const cancelButton = document.querySelector('.cancel-button');
    const individualProjects = document.querySelectorAll('project-container a');
    
    // New Project Button
    newProjectButton.addEventListener('click', () => {
        toggleForm();
    });

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

export { initializeListeners } */