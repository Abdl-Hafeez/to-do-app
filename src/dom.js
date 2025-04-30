
export function renderProjects(projects) {
    const sidebar = document.getElementById("sidebar");
    sidebar.querySelectorAll(".project").forEach(el => el.parentElement.remove());
    const div = document.createElement("div");
    div.classList.add("projects-container");
    projects.forEach(project => {
        div.innerHTML += `
            <div data-id="${project.id}">
                <ul class="project">
                    <li>${project.title}</li>
                </ul>
            </div>   
        `
    });
    sidebar.appendChild(div);
}

export function renderTasks(tasks) {
    const taskList = document.getElementById("task-list");
    taskList.textContent = "";
    tasks.forEach(task => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class="task-title">${task.title}</h3>
            <ul>
                <li>${task.description}</li>
                <li>${task.dueDate}</li>
                <li>${task.priority}</li>
                <li>${task.status}</li>
            </ul>        `
        taskList.appendChild(div);
    });

    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.textContent = "Add Task";
    taskList.appendChild(addTaskBtn);
}