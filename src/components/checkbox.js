import { toggleTaskStatus } from "./taskController.js";
import { createElement } from "../helper.js";

function checkbox(taskItemNumber) {
  let checkboxContainer = createElement("div"),
    checkboxLabel = createElement("label"),
    checkbox = createElement("input");

  checkbox.setAttribute("id", "task-item-checkbox-" + taskItemNumber);
  checkbox.setAttribute("type", "checkbox");
  checkboxLabel.setAttribute("for", "task-item-checkbox-" + taskItemNumber);

  toggleTaskStatus(checkbox, taskItemNumber);

  checkboxContainer.append(checkboxLabel, checkbox);

  return checkboxContainer;
}

export { checkbox };
