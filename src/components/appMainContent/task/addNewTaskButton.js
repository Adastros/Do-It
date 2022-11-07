import { addClass, createElement } from "../../helper/helper.js";

function addNewTaskButton() {
  let addNewTaskButton = createElement("button");

  addNewTaskButton.textContent = "Add task";
  addClass(addNewTaskButton, "add-new-task-button");

  return addNewTaskButton;
}

export { addNewTaskButton };
