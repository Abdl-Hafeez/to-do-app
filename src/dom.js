
export function renderProjects(projects) {
    const sidebar = document.getElementById("sidebar");
    const existing = sidebar.querySelector(".projects-container");
    if(existing) existing.remove();

    const projectsContainer = document.createElement("div");
    projectsContainer.classList.add("projects-container");
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div data-id="${project.id}">
                <ul class="project">
                    <li>${project.title}</li>
                </ul>
            </div>   
        `
    });
    sidebar.appendChild(projectsContainer);
}

export function renderTasks(tasks) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.textContent = "Add Task";
    taskList.appendChild(addTaskBtn);
    tasks.forEach(task => {
        const taskContainer = document.createElement("div");
        taskContainer.setAttribute("data-id", task.id);
        taskContainer.innerHTML = `
            <div class="frontline">
                <div class="first-div">
                    <input type="checkbox" class="check-status" {task.completed ? 'checked' : ''}>
                    <h3 class="task-title ${task.completed ? 'completed' : ''}">${task.title}</h3>
                </div>
                
                <div class="edit-delete">
                    <button type=button class="edit-task">Edit</button>
                    <button type=button class="delete-task">Delete</button>
                </div>
            </div>
            <ul>
                <li>${task.description}</li>
                <li>${task.dueDate}</li>
                <li>${task.priority}</li>
                <li>${task.status}</li>
            </ul>        
            `
        taskList.appendChild(taskContainer);
    });
}