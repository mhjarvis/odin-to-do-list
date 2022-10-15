import { displayProjects } from './ToDoList'

class Project {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }
}

let allProjects = [];
let currentProject = allProjects[0];

addProject('First', ["Eat Bfast", "Eat Dinner"]);
addProject('Second', ["Eat Something", "Eat Nothing"]);

console.log(allProjects);

function addTaskToCurrentProject(task) {
    console.log(currentProject.tasks);
    currentProject.tasks.push(task);
    displayProjects();
}

function addProject(title, tasks) {
    let temp = new Project(title, tasks);
    allProjects.push(temp);
}

function getProjects() {
    return allProjects;
}



export { getProjects, addTaskToCurrentProject }