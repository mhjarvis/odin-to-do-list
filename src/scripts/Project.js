
class Project {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }
}

let allProjects = [];

addProject('Default', ["Eat Bfast", "Eat Dinner"]);

// add new project
function addProject(title, tasks) {
    let temp = new Project(title, tasks);
    allProjects.push(temp);
}

// getter to export projects array
function getProjects() {
    return allProjects;
}



export { getProjects }