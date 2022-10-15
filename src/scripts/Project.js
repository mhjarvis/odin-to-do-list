import { displayProjects } from './ToDoList'
import { createTask } from './Task'

class Project {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }
}

let allProjects = [];

let currentProject = allProjects[0];









function addTaskToCurrentProject(task) {
    console.log(currentProject.tasks);
    currentProject.tasks.push(task);
    displayProjects();
}

function addProject(title, tasks) {
    let temp = new Project(title, tasks);
    allProjects.push(temp);
    displayProjects();
}

function getProjectsArray() {
    return allProjects;
}



export { addTaskToCurrentProject, addProject, getProjectsArray }