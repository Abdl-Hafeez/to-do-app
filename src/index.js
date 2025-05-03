import "./style.css";
import { renderProjects } from "./dom";
import { renderTasks } from "./dom";
import { allProjects, currentProject, initialTodo } from "./updateState";
import { eventListeners } from "./events";


initialTodo();
renderProjects(allProjects);
renderTasks(currentProject.tasks);
console.log(allProjects);
eventListeners();