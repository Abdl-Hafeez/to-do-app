import "./style.css";
import { Project } from "./project";
import { Task } from "./task";
import { renderProjects } from "./dom";
import { renderTasks } from "./dom";

const addProjectInput = document.querySelector(".project-title");
const addProjectBtn = document.querySelector(".add-project");

const allProjects = [];

const inbox = new Project('Inbox');
const work = new Project('Work');
const personal = new Project('Personal');

allProjects.push(inbox);
allProjects.push(work);
allProjects.push(personal);

const task1 = new Task('Buy groceries', 'Milk, eggs, bread', '2025-04-30', 'urgent',"completed");
const task2 = new Task('Finish Odin Project', 'Complete to-do app step', '2025-05-06', 'not-urgent', "not completed");
const task3 = new Task('Call Mom', 'Ask about weekend plans', '2025-04-29', 'urgent', "not completed");

inbox.tasks.push(task1);
work.tasks.push(task2);
personal.tasks.push(task3);

addProjectBtn.addEventListener('click', () => {
    if(addProjectInput.value.trim() !== "") {
        const project = new Project(addProjectInput.value);
        allProjects.push(project);
        addProjectInput.value = "";
        console.log(allProjects);
        renderProjects(allProjects);
    } else {
        alert("Please enter a project name");
        addProjectInput.focus();
    }
})

let currentProject = inbox;

sidebar.addEventListener('click', (event) => {
    const selectedDiv = event.target.closest("[data-id]");
    if(!selectedDiv) return;
    currentProject = allProjects.find(proj => proj.id === selectedDiv.dataset.id);
    console.log(selectedDiv);
    console.log(currentProject);
    renderTasks(currentProject.tasks);
})

const taskList = document.getElementById("task-list");
const dialog = document.getElementById("add-task-dialog-box");

taskList.addEventListener('click', (event) => {
    const addTaskbtn = event.target.closest(".add-task-btn");
    if(!addTaskbtn) return;
    dialog.showModal();
})

const taskTitleInput = document.getElementById("task-title");
const taskDescriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("due-date");
const priorityInput = document.getElementById('priority'); 
const statusInput = document.querySelector("#status");
const closeDialogbtn = document.getElementById("close");
const addTaskDialogBtn = document.getElementById("submit");

closeDialogbtn.addEventListener('click', () => dialog.close());
addTaskDialogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!taskTitleInput.value.trim()) {
        alert("Task title is required");
        return;
    }
    const task = new Task(taskTitleInput.value, taskDescriptionInput.value, dueDateInput.value, priorityInput.value, statusInput.value);
    currentProject.addTask(task);
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "not urgent";
    statusInput.value = "not started";
    console.log(currentProject.tasks);
    renderTasks(currentProject.tasks);
    dialog.close();
})

renderProjects(allProjects);
console.log(allProjects);