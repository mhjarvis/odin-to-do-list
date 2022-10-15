
class Project {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }
}

let allProjects = [];

addProject('First', ["Eat Bfast", "Eat Dinner"]);
addProject('Second', ["Eat Something", "Eat Nothing"]);

function addProject(title, tasks) {
    let temp = new Project(title, tasks);
    allProjects.push(temp);
}

function getProjects() {
    return allProjects;
}



export { getProjects }