import { initializeListeners } from './EnventControl';
import { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject, getActiveProject } from './Project';

const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container')

initializeListeners();
/************* Default filler - Delete Later ***********/

// temporary actions - add initial default project and set active project to it
createNewProject('Default');
createNewProject('Week 1');

setActiveProject(0);
// temporaary actions - create initial task and add to default project

createNewTask('Work Out', 'get to the gym', '10/10/22', 'high');
createNewTask('Go to Sleep', 'by 8:00', '10/22/22', 'low');

/*******************************************************/

displayProjects();
displayTasks();


function displayProjects() {

    projectContainer.innerHTML = '';                // reset container
    let projectsList = getProjectsArray();

    for(let i = 0; i < projectsList.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = projectsList[i].title;
        projectContainer.appendChild(p);
    }

    highlightCurrentProject();
}

function displayTasks() {

    taskContainer.innerHTML = '';                   // reset container
    let tasksLength = getProjectsArray()[getActiveProject()].tasks.length;

    for(let i = 0; i < tasksLength; i++) {
        //tasks[i][0] needs to get fixed as there is  unnecessary array depth
        //console.log(getActiveProject().tasks[i][0].title);

        const div = document.createElement('div');
        div.innerHTML = getProjectsArray()[getActiveProject()].tasks[i][0].title;
        taskContainer.appendChild(div);
    }
}

function highlightCurrentProject() {
    
    let activeProject = getActiveProject();

    let projectContainerChildren = document.querySelector('.project-container').children;

    projectContainerChildren.item(activeProject).style.color = 'white';
        
}

















export { displayProjects }



/* addProject('Second', ["Eat Something", "Eat Nothing"]); */