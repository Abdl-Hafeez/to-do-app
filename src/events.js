import { renderProjects, renderTasks } from "./dom";
import { populateInputFields, resetForm } from "./utils";
import { allProjects, currentProject, currentTask, editingTaskId, setCurrentProject, setCurrentTask, setEditingTaskId, } from "./updateState";
import { Project } from "./project";
import { Task } from "./task";


export function eventListeners() {
    const addProjectInput = document.querySelector(".project-title");
    const addProjectBtn = document.querySelector(".add-project");
    const sidebar = document.getElementById("sidebar");
    const taskList = document.getElementById("task-list");
    const dialog = document.getElementById("add-task-dialog-box");
    const taskTitleInput = document.getElementById("task-title");
    const taskDescriptionInput = document.getElementById("description");
    const dueDateInput = document.getElementById("due-date");
    const priorityInput = document.getElementById('priority'); 
    const statusInput = document.querySelector("#status");
    const closeDialogbtn = document.getElementById("close");
    const addTaskDialogBtn = document.getElementById("submit");

    const inputs = { taskTitleInput, taskDescriptionInput, dueDateInput, priorityInput, statusInput };

    addProjectBtn.addEventListener('click', () => {
        if(addProjectInput.value.trim() !== "") {
            const project = new Project(addProjectInput.value);
            allProjects.push(project);
            console.log(allProjects);
            renderProjects(allProjects);
            addProjectInput.value = "";
        } else {
            alert("Please enter a project name");
            addProjectInput.focus();
            return;
        }
    })

    sidebar.addEventListener('click', (event) => {
        const selectedDiv = event.target.closest("[data-id]");
        if(!selectedDiv) return;
        const selectedProject = allProjects.find(proj => proj.id === selectedDiv.dataset.id);
        if(!selectedProject) return;
        setCurrentProject(selectedProject);
        console.log(selectedDiv);
        console.log(currentProject);
        renderTasks(currentProject.tasks);
    })

    taskList.addEventListener('click', (event) => {
        const addTaskBtn = event.target.closest(".add-task-btn");
        const editTaskBtn = event.target.closest(".edit-task");
        const deleteTaskBtn = event.target.closest(".delete-task");

        if (addTaskBtn) {
            console.log("Add Task button clicked");
            resetForm(inputs);
            dialog.showModal();
            return;
        } 

        const currentTaskDiv = event.target.closest("[data-id]");
        if (!currentTaskDiv) return;
        const selectedTask = currentProject.tasks.find(task => task.id === currentTaskDiv.dataset.id);
        setCurrentTask(selectedTask);

        if(editTaskBtn) {
            if(selectedTask) {
                setEditingTaskId(currentTask.id);
                populateInputFields(currentTask, inputs);
                addTaskDialogBtn.textContent = "Save Changes";
                dialog.showModal();
                return;
            }
        }

        if(deleteTaskBtn) {
            currentProject.deleteTask(currentTask.id);
            renderTasks(currentProject.tasks);
        }
    })

    closeDialogbtn.addEventListener('click', () => dialog.close());

    addTaskDialogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(!taskTitleInput.value.trim()) {
            alert("Task title is required");
            return;
        }

        if(editingTaskId) {
            const taskToEdit = currentProject.tasks.find(t => t.id === editingTaskId);
            if(taskToEdit) {
                taskToEdit.title = taskTitleInput.value;
                taskToEdit.description = taskDescriptionInput.value;
                taskToEdit.dueDate = dueDateInput.value;
                taskToEdit.priority = priorityInput.value;
                taskToEdit.status = statusInput.value;
            }
            setEditingTaskId(null);
            addTaskDialogBtn.textContent = "Add Task";
        } else {
            const newTask = new Task(taskTitleInput.value, taskDescriptionInput.value, dueDateInput.value, priorityInput.value, statusInput.value);
            currentProject.addTask(newTask);
        }
        resetForm(inputs);
        renderTasks(currentProject.tasks);
        dialog.close();
    })
}