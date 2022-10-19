import { initializeListeners } from './scripts/EnventControl';
import { setActiveProject, addProject } from './scripts/ToDoList.js';
import { createNewProject } from './scripts/Project.js';
import { createTask } from './scripts/Task';


initializeListeners();      // initialize all eventListeners
setActiveProject(0);


/**************** Temporary population data - DELETE ***************/
for(let i = 0; i < 2; i++) {
    let temp = createNewProject('Project-' + i);
    addProject(temp);
}

let t = createTask('Eat Breakfast', 'Various Foods', '10/10/22', 'high');

/*******************************************************************/
