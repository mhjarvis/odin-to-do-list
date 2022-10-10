let projects = ['default', 'project1'];

function createProjectSection() {
    const getProjectContainer = document.querySelector(".project-container");

    for(let i = 0; i < projects.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = projects[i];
        div.id = "project-" + i;
        getProjectContainer.appendChild(div);
        console.log(i);
    }
};

createProjectSection();