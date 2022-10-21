
// Project Class - contains:
//      - function to delete task

class Project {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

function createNewProject(title) {
    let p = new Project(title);
    return p;
}

export { createNewProject }