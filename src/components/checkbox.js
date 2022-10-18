import { toggleTaskStatus } from "./taskController.js";
import { addClass, createElement } from "../helper.js";
import checkmarkIcon from "../icons/check.svg";

// function checkbox(taskItemNumber) {
//   let checkboxContainer = createElement("div"),
//     checkboxLabel = createElement("label"),
//     checkbox = createElement("input");

//   checkbox.setAttribute("id", "task-item-checkbox-" + taskItemNumber);
//   checkbox.setAttribute("type", "checkbox");
//   checkboxLabel.setAttribute("for", "task-item-checkbox-" + taskItemNumber);

//   toggleTaskStatus(checkbox, taskItemNumber);

//   checkboxContainer.append(checkboxLabel, checkbox);

//   return checkboxContainer;
// }

function checkbox(taskItemNumber) {
  let checkboxContainer = createElement("div"),
    checkbox = createElement("div"),
    checkmark = createElement("img");

  checkmark.setAttribute("src", checkmarkIcon);
  checkmark.setAttribute("alt", "Checkmark icon");

  addClass(checkbox, "checkbox");
  addClass(checkmark, "fade-in-out");
  toggleTaskStatus(checkbox, taskItemNumber);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
}

export { checkbox };
