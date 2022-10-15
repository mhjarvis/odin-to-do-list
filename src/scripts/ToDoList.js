import { addTaskToCurrentProject, addProject, getProjectsArray } from './Project';

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


addProject('First');
console.log(getProjectsArray())



























export { displayProjects }



/* addProject('Second', ["Eat Something", "Eat Nothing"]); */