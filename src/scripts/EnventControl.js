import { createNewProject, addNewProject } from "./Project"; 

// Control all buttons/events from here

function initializeListeners() {

    // New Project button init
    const newProjectButton = document.querySelector('.new-project-button');
    
    newProjectButton.addEventListener('click', () => {
        addNewProject();
    });



}

export { initializeListeners }