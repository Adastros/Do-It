import { addClass } from "../helper.js";
import "./style.css";

function createAddTaskButton() {
  let taskButton = document.createElement("button");

  taskButton.textContent = "Add task";
  addClass(taskButton, 'add-task-button');

  return taskButton;
}

export { createAddTaskButton };
