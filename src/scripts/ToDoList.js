import { initializeListeners } from './EnventControl';
import { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject, getActiveProject } from './Project';

const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container')

// initialize eventListeners
initializeListeners();


/************* Default filler - Delete Later ***********/

// temporary actions - add initial default project and set active project to it
createNewProject('Default');
createNewProject('Week 1');

setActiveProject(0);
// temporaary actions - create initial task and add to default project
createNewTask('Work Out', 'get to the gym', '10/10/22', 'high');



/*******************************************************/

let test = getActiveProject().tasks.length;
console.log(test);

displayProjects();



function displayProjects() {

    projectContainer.innerHTML = '';

    let projectsList = getProjectsArray();

    for(let i = 0; i < projectsList.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = projectsList[i].title;
        projectContainer.appendChild(p);
    }

/*     if(getActiveProject == undefined) {
        return;
    } else {
        for(let i = 0; i < getActiveProject.tasks.length; i++) {
            console.log("teest")
        }        
    } */

}


function displayTasks() {

}



















export { displayProjects }



/* addProject('Second', ["Eat Something", "Eat Nothing"]); */