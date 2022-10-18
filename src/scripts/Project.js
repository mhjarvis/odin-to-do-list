import { displayProjects } from './ToDoList'
import { createTask } from './Task'

class Project {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }

        // default const for tasks needs to be reworked

/*     setTask(arr) {
        this.tasks = arr;
    } */
}

let allProjects = [];

let currentProject = allProjects[0];    //temp solution







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

function getActiveProject() {
    return currentProject;
}



export { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject, getActiveProject }