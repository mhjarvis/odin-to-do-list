import { createNewProject } from './Project';
import { createTask } from './Task';
import { initializeListeners } from './EnventControl';

let projects = [];

let activeProject;

const taskContainer = document.querySelector('.task-container');

// function to delete Projects and all associated tasks

// function to delete individual tasks

// function to add new task to current project

// Default (when loading) should siplay all tasks

// Add due date / priority parts to task element

// Create form for new task button

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
    let u = createTask('Buy Christmas Presents', 'none', '10/23/22', 'low');
    addTask(t);
    addTask(u);

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

    projectContainer.innerHTML = '';
    taskContainer.innerHTML = '';

    // display projects
    for(let i = 0; i < projects.length; i++) {
        const h4 = document.createElement('h4');
        h4.className = 'p' + i;
        h4.innerText = projects[i].title;
        projectContainer.appendChild(h4);
    }

    // highlight active object
    if(projects.length > 0) {
        let children = document.querySelector('.project-container').children;
        children[activeProject].style.color = 'var(--darkGrayishBlue)';
        children[activeProject].style.borderBottom = '2px dashed var(--darkGrayishBlue';
        children[activeProject].style.fontSize = '2.7rem';
        console.log(children);
    }

    // display tasks (if true)
    if(projects[activeProject].tasks.length > 0) {
        buildTaskContainer();

    }

    initializeListeners();
}


///////////////div needs to be re-worked; create additional html elements to show description, dates, priority, checkbox?, etc.
///////////////

function buildTaskContainer() {

    
    for(let i = 0; i < projects[activeProject].tasks.length; i++) {

        // create container element
        const div = document.createElement('div');
        div.id = `p${getActiveProject}t${i}`;
        div.className = 'task';
        // div.innerText = projects[activeProject].tasks[i].title;
        taskContainer.appendChild(div);

        // get new div element
        const getDiv = document.getElementById(`p${getActiveProject}t${i}`);

        // add checkbox element with event listener
        const checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', 'checkbox');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                this.parentElement.style.color = 'var(--veryDarkGrayishBlue)';
                this.parentElement.style.textDecoration = 'line-through';
            } else {
                this.parentElement.style.color = 'var(--lightishGrayBlueHover)';
                this.parentElement.style.textDecoration = 'none';
            }
        })
        getDiv.appendChild(checkbox);

        // add task title to div
        const taskTitle = document.createElement('h6');
        taskTitle.className = 'task-title';
        taskTitle.innerText = projects[activeProject].tasks[i].title;
        getDiv.appendChild(taskTitle);

        // add due date to field
    }

}

export { getActiveProject, setActiveProject, addProject, addTask, displayProjects, init }









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