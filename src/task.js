export class Task {
    static taskId = 1;
    constructor(title, description, dueDate, priority, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.id = `${this.title}-${Task.taskId++}`;
    }
}

