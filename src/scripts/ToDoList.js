import { getProjects } from './Project';


const projectContainer = document.querySelector('.project-container');

displayProjects();

function displayProjects() {

    let projectsList = getProjects();

    for(let i = 0; i < projectsList.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = projectsList[i].title;
        projectContainer.appendChild(p);
    }
}

