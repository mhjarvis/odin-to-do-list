import { projects } from './ToDoList';
import { isToday, isTomorrow, isFuture, parseISO } from 'date-fns';

const taskContainer = document.querySelector('.task-container');

function populateToday() {

    //taskContainer.innerHTML = '';

    console.log("in today");



    for(let i = 0; i < projects.length; i++) {
        for(let j = 0; j < projects[i].tasks.length; j++) {

            let taskDate = projects[i].tasks[j].dueDate;

            if(isToday(parseISO(taskDate))) {
                
                // create container element
                const div = document.createElement('div');
                div.id = `p${i}t${j}`;
                div.className = 'task';
                taskContainer.appendChild(div);

                // get new div element
                const getDiv = document.getElementById(`p${i}t${j}`);

                // add checkbox element with event listener
                const checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                
                // set checkbox status
                checkbox.checked = projects[i].tasks[j].checked;
                checkbox.className = 'checkbox';

                if(projects[i].tasks[j].checked == true) {
                    document.getElementById(`p${i}t${j}`).style.color = 'var(--veryDarkGrayishBlue)';
                    document.getElementById(`p${i}t${j}`).style.textDecoration = 'line-through';
                }

                checkbox.addEventListener('change', function() {
                    if(this.checked) {
                        this.parentElement.style.color = 'var(--veryDarkGrayishBlue)';
                        this.parentElement.style.textDecoration = 'line-through';
                        projects[i].tasks[j].checked = true;
                    } else {
                        this.parentElement.style.color = 'var(--lightishGrayBlueHover)';
                        this.parentElement.style.textDecoration = 'none';
                        projects[i].tasks[j].checked = false;
                    }
                })
                getDiv.appendChild(checkbox);

                // add task title to div
                const taskTitle = document.createElement('h6');
                taskTitle.className = 'task-title';
                taskTitle.innerText = projects[i].tasks[j].title;
                getDiv.appendChild(taskTitle);
                
                // add due date to field
                const dateInput = document.createElement('input');
                dateInput.type = 'date';
                dateInput.className = 'date-input';
                dateInput.id = `p${i}t${j}-date`;
                dateInput.value = projects[i].tasks[j].dueDate;
                dateInput.min = '2022-10-01';
                dateInput.max = '2099-12-31';


                getDiv.appendChild(dateInput)

            }
        }
    }
}

function populateTomorrow() {

    console.log('in tomorrow')

    for(let i = 0; i < projects.length; i++) {
        for(let j = 0; j < projects[i].tasks.length; j++) {

            let taskDate = projects[i].tasks[j].dueDate;

            if(isTomorrow(parseISO(taskDate))) {
                
                // create container element
                const div = document.createElement('div');
                div.id = `p${i}t${j}`;
                div.className = 'task';
                taskContainer.appendChild(div);

                // get new div element
                const getDiv = document.getElementById(`p${i}t${j}`);

                // add checkbox element with event listener
                const checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                
                // set checkbox status
                checkbox.checked = projects[i].tasks[j].checked;
                checkbox.className = 'checkbox';

                if(projects[i].tasks[j].checked == true) {
                    document.getElementById(`p${i}t${j}`).style.color = 'var(--veryDarkGrayishBlue)';
                    document.getElementById(`p${i}t${j}`).style.textDecoration = 'line-through';
                }

                checkbox.addEventListener('change', function() {
                    if(this.checked) {
                        this.parentElement.style.color = 'var(--veryDarkGrayishBlue)';
                        this.parentElement.style.textDecoration = 'line-through';
                        projects[i].tasks[j].checked = true;
                    } else {
                        this.parentElement.style.color = 'var(--lightishGrayBlueHover)';
                        this.parentElement.style.textDecoration = 'none';
                        projects[i].tasks[j].checked = false;
                    }
                })
                getDiv.appendChild(checkbox);

                // add task title to div
                const taskTitle = document.createElement('h6');
                taskTitle.className = 'task-title';
                taskTitle.innerText = projects[i].tasks[j].title;
                getDiv.appendChild(taskTitle);
                
                // add due date to field
                const dateInput = document.createElement('input');
                dateInput.type = 'date';
                dateInput.className = 'date-input';
                dateInput.id = `p${i}t${j}-date`;
                dateInput.value = projects[i].tasks[j].dueDate;
                dateInput.min = '2022-10-01';
                dateInput.max = '2099-12-31';


                getDiv.appendChild(dateInput)

            }
        }
    }
}


function populateComingSoon() {

    console.log('in coming soon')

    for(let i = 0; i < projects.length; i++) {
        for(let j = 0; j < projects[i].tasks.length; j++) {

            let taskDate = projects[i].tasks[j].dueDate;

            if( !(isTomorrow(parseISO(taskDate))) && (isFuture(parseISO(taskDate))) ) {
                
                // create container element
                const div = document.createElement('div');
                div.id = `p${i}t${j}`;
                div.className = 'task';
                taskContainer.appendChild(div);

                // get new div element
                const getDiv = document.getElementById(`p${i}t${j}`);

                // add checkbox element with event listener
                const checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                
                // set checkbox status
                checkbox.checked = projects[i].tasks[j].checked;
                checkbox.className = 'checkbox';

                if(projects[i].tasks[j].checked == true) {
                    document.getElementById(`p${i}t${j}`).style.color = 'var(--veryDarkGrayishBlue)';
                    document.getElementById(`p${i}t${j}`).style.textDecoration = 'line-through';
                }

                checkbox.addEventListener('change', function() {
                    if(this.checked) {
                        this.parentElement.style.color = 'var(--veryDarkGrayishBlue)';
                        this.parentElement.style.textDecoration = 'line-through';
                        projects[i].tasks[j].checked = true;
                    } else {
                        this.parentElement.style.color = 'var(--lightishGrayBlueHover)';
                        this.parentElement.style.textDecoration = 'none';
                        projects[i].tasks[j].checked = false;
                    }
                })
                getDiv.appendChild(checkbox);

                // add task title to div
                const taskTitle = document.createElement('h6');
                taskTitle.className = 'task-title';
                taskTitle.innerText = projects[i].tasks[j].title;
                getDiv.appendChild(taskTitle);
                
                // add due date to field
                const dateInput = document.createElement('input');
                dateInput.type = 'date';
                dateInput.className = 'date-input';
                dateInput.id = `p${i}t${j}-date`;
                dateInput.value = projects[i].tasks[j].dueDate;
                dateInput.min = '2022-10-01';
                dateInput.max = '2099-12-31';


                getDiv.appendChild(dateInput)

            }
        }
    }
}















export { populateToday, populateTomorrow, populateComingSoon }