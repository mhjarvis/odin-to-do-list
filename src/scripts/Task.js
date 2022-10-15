// add notes
// add checklist

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function createTask(title, description, dueDate, priority) {
    let arr = [];
    let task = new Task(title, description, dueDate, priority);
    arr.push(task);
    return arr;
}

export { createTask }