let projects = ['default', 'project1'];

let createProjectSection() {
    const getProjectContainer = document.querySelector(".project-container");

    for(let i = 0; i <= projects.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = projects[0];
        getProjectContainer.appendChild(div);
    }
}
