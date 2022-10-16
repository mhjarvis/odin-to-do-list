import { createNewProject } from "./Project"; 

// Control all buttons/events from here

function initializeListeners() {

    // New Project button init
    const newProjectButton = document.querySelector('.new-project-button');
    newProjectButton.addEventListener('click', function() {
        console.log('Hello there Markus!');
    })



}

export { initializeListeners }