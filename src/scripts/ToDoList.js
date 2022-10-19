import { createNewProject } from './Project';
import { createTask } from './Task';

let projects = [];

let activeProject;

// function to delete Projects and all associated tasks
// function to delete individual tasks
// function to display all Projects
// function to display all Tasks related to Project
// function to update active project
// function to get list of tasks from current project


/**************** Temporary population data - DELETE ***************/


function init() {

    setActiveProject(0);

    // Create filler projects
    for(let i = 0; i < 2; i++) {
        let temp = createNewProject('Project-' + i);
        addProject(temp);
    }

    // Create filler tasks
    let t = createTask('Eat Breakfast', 'Various Foods', '10/10/22', 'high');
    addTask(t);


    displayProjects();
}
/*******************************************************************/



function setActiveProject(num) {
    activeProject = num;
}

function getActiveProject() {
    return activeProject;
}

function addProject(proj) {
    projects.push(proj);
}

function addTask(task) {
    projects[activeProject].tasks.push(task);
}

function displayProjects() {

    const projectContainer = document.querySelector('.project-container');
    const taskContainer = document.querySelector('.task-container');

    projectContainer.innerHTML = '';

    // display projects
    for(let i = 0; i < projects.length; i++) {
        const h4 = document.createElement('h4');
        h4.className = 'p' + i;
        h4.innerText = projects[i].title;
        projectContainer.appendChild(h4);
    }

    // display tasks (if true)
    console.log(projects[activeProject].tasks.length)
    if(projects[activeProject].tasks.length > 0) {
        for(let i = 0; i < projects[activeProject].tasks.length; i++) {
            const h5 = document.createElement('h5');
            h5.className = 't' + i;
            h5.innerText = projects[activeProject].tasks[i].title;
            taskContainer.appendChild(h5);
        }
    }
}








export { getActiveProject, addProject, addTask, displayProjects, init }









/* import { initializeListeners } from './EnventControl';
import { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject, getActiveProject } from './Project';

const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container')

initializeListeners();
/************* Default filler - Delete Later ***********/

// temporary actions - add initial default project and set active project to it
/* createNewProject('Default');
createNewProject('Week 1');

setActiveProject(0);
// temporaary actions - create initial task and add to default project

createNewTask('Work Out', 'get to the gym', '10/10/22', 'high');
createNewTask('Go to Sleep', 'by 8:00', '10/22/22', 'low');

/*******************************************************/

/* displayProjects();
displayTasks(); */


/* function displayProjects() {

    projectContainer.innerHTML = '';                // reset container
    let projectsList = getProjectsArray();

    for(let i = 0; i < projectsList.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = projectsList[i].title;
        projectContainer.appendChild(p);
    }

    highlightCurrentProject();
} */

/* function displayTasks() {

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
 */
/* function highlightCurrentProject() {
    
    let activeProject = getActiveProject();

    let projectContainerChildren = document.querySelector('.project-container').children;

    projectContainerChildren.item(activeProject).style.color = 'var(--cool-grey)';
    projectContainerChildren.item(activeProject).style.borderBottom = '3px solid var(--cool-grey)';
        
} */

















/* export { displayProjects } */



/* addProject('Second', ["Eat Something", "Eat Nothing"]); */