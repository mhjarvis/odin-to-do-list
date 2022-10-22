// - checkbox?

class Task {
    constructor(title, description, dueDate, priority, checked = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }
}

function createTask(title, description, dueDate, priority, checked) {
    let newTask = new Task(title, description, dueDate, priority, checked);
    return newTask;
}

export { createTask }