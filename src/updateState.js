import { Task } from "./task";
import { Project } from "./project";

export const allProjects = [];

export let currentProject = null;
export let currentTask = null;
export let editingTaskId = null;

export function getCurrentProject(project) {

}

export function setCurrentProject(project) {
    currentProject = project;
}

export function setCurrentTask(task) {
    currentTask = task;
}

export function setEditingTaskId(id) {
    editingTaskId = id;
}

export function initialTodo() {
    const inbox = new Project('Inbox');
    const work = new Project('Work');
    const personal = new Project('Personal');

    inbox.addTask(new Task('Buy groceries', 'Milk, eggs, bread', '2025-04-30', 'urgent',"completed"));
    work.addTask(new Task('Finish Odin Project', 'Complete to-do app step', '2025-05-06', 'not urgent', "not completed"));
    personal.addTask(new Task('Call Mom', 'Ask about weekend plans', '2025-04-29', 'urgent', "not completed"));

    allProjects.push(inbox, work, personal);
    currentProject = inbox;
}
