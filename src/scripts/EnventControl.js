import { createNewProject } from "./Project"; 

// Control all buttons/events from here

function initializeListeners() {

    // New Project button init
    const newProjectButton = document.querySelector('.new-project-button');
    const addButton = document.querySelector('.add-button');
    const cancelButton = document.querySelector('.cancel-button');
    
    newProjectButton.addEventListener('click', () => {
        toggleForm();
    });

    // Add Button
    addButton.addEventListener('click', () => {         // need to rework 
        createNewProject();                         //createNewProject() to take 
    })                                              //form info

    // Cancel Button
    cancelButton.addEventListener('click', () => {
        
    })



}



function toggleForm() {
    const selectContainer = document.querySelector('.project-container');
    const selectButton = document.querySelector('.new-project-button');
    const selectForm = document.querySelector('.project-form-container');
    
    selectButton.style.display = 'none';
    selectForm.style.display = 'block';

}

export { initializeListeners }