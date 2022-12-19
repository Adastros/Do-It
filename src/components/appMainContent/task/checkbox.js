import { toggleTaskCompletion } from "../../controls/taskController.js";
import { addClass, createElement } from "../../helper/helper.js";
import checkmarkIcon from "../../../icons/check.svg";

function checkbox(taskItemId) {
  let checkboxContainer = createElement("div"),
    checkbox = createElement("div"),
    checkmark = createElement("img");

  checkmark.setAttribute("src", checkmarkIcon);
  checkmark.setAttribute("alt", "Checkmark icon");

  addClass(checkbox, "checkbox");
  addClass(checkmark, "fade-in-out");
  toggleTaskCompletion(checkbox, taskItemId);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
}

export { checkbox };
