
class Project {
    constructor(title) {
        this.title = title;
    }
}

let allProjects = [];

addProject('Default');

// add new project
function addProject(title) {
    let temp = new Project(title);
    allProjects.push(temp);
}

// getter to export projects array
function getProjects() {
    return allProjects;
}



export { getProjects }