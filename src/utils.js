export function populateInputFields(task, inputs) {
    const { taskTitleInput, taskDescriptionInput, dueDateInput, priorityInput, statusInput } = inputs;
    taskTitleInput.value = task.title;
    taskDescriptionInput.value = task.description;
    dueDateInput.value = task.dueDate;
    priorityInput.value = task.priority;
    statusInput.value = task.status;
}

export function resetForm(inputs) {
    const { taskTitleInput, taskDescriptionInput, dueDateInput, priorityInput, statusInput } = inputs;
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "not urgent";
    statusInput.value = "not started";
}

