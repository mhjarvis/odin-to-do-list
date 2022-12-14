import { createNewProject } from './Project';
import { createTask } from './Task';
import { initializeListeners } from './EnventControl';
import { populateComingSoon, populateToday, populateTomorrow } from './dateSort';
import { isToday, parseISO } from 'date-fns';

let projects = [];

let activeProject;

const taskContainer = document.querySelector('.task-container');

/**************** Temporary population data - DELETE ***************/
function init() {

    setActiveProject(0);

    let today = createNewProject('Today');
    let tomorrow = createNewProject('Tomorrow');
    let comingSoon = createNewProject('Coming Soon');

    addProject(today);
    addProject(tomorrow);
    addProject(comingSoon);

    // Create filler projects
    let temp = createNewProject('Random Things');
    addProject(temp);

    // Create filler tasks
    let t = createTask('Eat Breakfast', 'Various Foods', '2022-10-25', 'high');
    let u = createTask('Buy Christmas Presents', 'none', '2022-10-29', 'low', true);
    let w = createTask('Buy Presents', 'none', '2022-10-26', 'low', true);
    projects[3].tasks.push(t);
    projects[3].tasks.push(u);
    projects[3].tasks.push(w);

    displayProjects();
}
/*******************************************************************/

function deleteObject(index) {
    projects[activeProject].tasks.splice(index, 1);
    displayProjects();
}

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

    if(projects.length == 0) {
        return;
    }

    // display projects
    for(let i = 0; i < projects.length; i++) {

        const div = document.createElement('div');
        div.id = 'p' + i;
        div.className = 'indProjDivs';
        projectContainer.appendChild(div);

        const indProjDivs = document.getElementById('p' + i);
        
        const h4 = document.createElement('h4');
        h4.className = 'p' + i;
        h4.innerText = projects[i].title;
        indProjDivs.appendChild(h4);

        if(i>=3) {
            const h5 = document.createElement('h5');
            h5.className = 'p' + i;
            h5.innerText = 'x';

            h5.addEventListener('click', function handleClick(event) {
                projects.splice(i, 1);
                displayProjects();
            })
            indProjDivs.appendChild(h5);
        }
    }

    // highlight active object
    if(projects.length > 0) {
        let children = document.querySelector('.project-container').children;
        children[activeProject].style.color = 'var(--darkGrayishBlue)';
        children[activeProject].style.borderBottom = '2px dashed var(--darkGrayishBlue';
        children[activeProject].style.fontSize = '2.5rem';
    }

    // display tasks (if true)
    if(projects[activeProject].tasks.length > 0) {
        buildTaskContainer();

    }
    initializeListeners();
    console.log(activeProject);

    if(activeProject == 0) {
        populateToday();
        return;
    } 
    if(activeProject == 1) {
        populateTomorrow();
        return;
    }
    if(activeProject == 2) {
        populateComingSoon();
        return;
    }
}


///////////////div needs to be re-worked; create additional html elements to show description, dates, priority, checkbox?, etc.
///////////////

function buildTaskContainer() {

    console.log(activeProject)

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
        checkbox.checked = projects[activeProject].tasks[i].checked;
        checkbox.className = 'checkbox';

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
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.className = 'date-input';
        dateInput.id = `p${getActiveProject}t${i}-date`;
        dateInput.value = projects[activeProject].tasks[i].dueDate;
        dateInput.min = '2022-10-01';
        dateInput.max = '2099-12-31';


        getDiv.appendChild(dateInput)
    }
}

export { getActiveProject, setActiveProject, addProject, addTask, displayProjects, init, deleteObject, projects }