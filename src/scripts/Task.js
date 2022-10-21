// - checkbox?

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function createTask(title, description, dueDate, priority) {
    let newTask = new Task(title, description, dueDate, priority);
    return newTask;
}

export { createTask }