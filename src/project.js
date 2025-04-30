export class Project {
    static nextId = 1;
    constructor(title) {
        this.title = title;
        this.id =`project-${Project.nextId++}`;
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}

