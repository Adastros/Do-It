import { addClass, createElement } from "../helper.js";
import "../stylesheets/style.css";

function addTaskButton() {
  let taskButton = createElement("button");

  taskButton.textContent = "Add task";
  addClass(taskButton, "add-task-button");

  return taskButton;
}

export { addTaskButton };
