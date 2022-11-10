import { addClass, createElement } from "../../helper/helper.js";

function taskPriorityDropdown() {
  let taskPriorityDropdown = createElement("div"),
    label = createElement("label"),
    dropdown = createElement("select"),
    noPriorityOption = createElement("option"),
    lowPriorityOption = createElement("option"),
    mediumPriorityOption = createElement("option"),
    highPriorityOption = createElement("option");

  label.textContent = "Priority:";
  label.setAttribute("for", "task-priority-dropdown");
  dropdown.id = "task-priority-dropdown";

  noPriorityOption.textContent = "None";
  lowPriorityOption.textContent = "Low";
  mediumPriorityOption.textContent = "Medium";
  highPriorityOption.textContent = "High";

  noPriorityOption.setAttribute("value", "none");
  lowPriorityOption.setAttribute("value", "low");
  mediumPriorityOption.setAttribute("value", "medium");
  highPriorityOption.setAttribute("value", "high");

  dropdown.append(
    noPriorityOption,
    lowPriorityOption,
    mediumPriorityOption,
    highPriorityOption
  );
  taskPriorityDropdown.append(label, dropdown);

  return taskPriorityDropdown;
}

export { taskPriorityDropdown };
