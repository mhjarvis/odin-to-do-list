import { displayProjects } from './ToDoList'
import { createTask } from './Task'

class Project {
    constructor(title, tasks = ['default']) {
        this.title = title;
        this.tasks = tasks;
    }
}

let allProjects = [];

let currentProject = allProjects[0];






function createNewTask(title, description, dueDate, priority) {
    let newTask = createTask(title, description, dueDate, priority);
    currentProject.tasks.push(newTask);
}


function addTaskToCurrentProject(task) {
    console.log(currentProject.tasks);
    currentProject.tasks.push(task);
    displayProjects();
}

function createNewProject(title, tasks) {
    let temp = new Project(title, tasks);
    allProjects.push(temp);
    displayProjects();
}

function getProjectsArray() {
    return allProjects;
}

function setActiveProject(num) {
    currentProject = allProjects[num];
}



export { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject }