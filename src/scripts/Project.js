
// Project Class - contains:
//      - name
//      - [] for tasks
//      - function to delete task


class Project {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
















































/* import { displayProjects } from './ToDoList'
import { createTask } from './Task'
 */
/* class Project {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }

        // default const for tasks needs to be reworkedf
} */

/* let allProjects = [];
 */
/* let currentProject = 0;    //temp solution
 */





/* function createNewTask(title, description, dueDate, priority) {
    let newTask = createTask(title, description, dueDate, priority);
    allProjects[currentProject].tasks.push(newTask);
}
 */
/* function addTaskToCurrentProject(task) {
    allProjects[currentProject].tasks.push(task);
    displayProjects();
} */

/* function createNewProject(title, tasks) {
    let temp = new Project(title, tasks);
    allProjects.push(temp);
    displayProjects();
}

function getProjectsArray() {
    return allProjects;
}

function setActiveProject(num) {
    currentProject = num;
    displayProjects();
}

function getActiveProject() {
    return currentProject;
}



export { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject, getActiveProject } */