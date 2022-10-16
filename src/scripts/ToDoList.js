import { createNewTask, addTaskToCurrentProject, createNewProject, getProjectsArray, setActiveProject } from './Project';

const projectContainer = document.querySelector('.project-container');

displayProjects();

function displayProjects() {

    let projectsList = getProjectsArray();

    for(let i = 0; i < projectsList.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = projectsList[i].title;
        projectContainer.appendChild(p);
    }
}

createNewProject('Default');
setActiveProject(0);


createNewTask('Work Out', 'get to the gym', '10/10/22', 'high');





























export { displayProjects }



/* addProject('Second', ["Eat Something", "Eat Nothing"]); */