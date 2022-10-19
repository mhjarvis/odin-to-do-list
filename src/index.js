import { initializeListeners } from './scripts/EnventControl';
//import { } from './ToDoList.js';
//import { } from './Projects.js';


initializeListeners();      // initialize all eventListeners

let projects = [];

class Project {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let p = new Project('Today');
let t = new Task('Eat Lunch', 'ffffffffffffffffff', '10/10/22', 'high');

projects.push(p);
projects[0].tasks.push(t);







console.log(projects);
console.log(p.title);



/* import { getProjects } from "./scripts/ToDoList";
 */
//initializeListeners();      // do I need this?
