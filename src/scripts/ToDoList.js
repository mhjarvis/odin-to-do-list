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
    let u = createTask('Buy Christmas Presents', 'none', '10/23/22', 'low', true);
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
        
        // set checkbox status
        console.log(projects[activeProject].tasks[i].checked);
        checkbox.checked = projects[activeProject].tasks[i].checked;

        if(projects[activeProject].tasks[i].checked == true) {
            document.getElementById(`p${getActiveProject}t${i}`).style.color = 'var(--veryDarkGrayishBlue)';
            document.getElementById(`p${getActiveProject}t${i}`).style.textDecoration = 'line-through';
        }

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                this.parentElement.style.color = 'var(--veryDarkGrayishBlue)';
                this.parentElement.style.textDecoration = 'line-through';
                projects[activeProject].tasks[i].checked = true;
            } else {
                this.parentElement.style.color = 'var(--lightishGrayBlueHover)';
                this.parentElement.style.textDecoration = 'none';
                projects[activeProject].tasks[i].checked = false;
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