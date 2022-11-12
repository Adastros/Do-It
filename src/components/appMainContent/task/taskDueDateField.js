import { format } from "date-fns";
import { addClass, createElement } from "../../helper/helper.js";

function taskDueDateField(taskDueDate) {
  let taskDueDateField = createElement("div"),
    dateInputLabel = createElement("label"),
    dateInput = createElement("input");

  dateInputLabel.textContent = "Due Date:";
  dateInputLabel.setAttribute("for", "task-due-date-input");
  dateInput.id = "task-due-date-input";
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "taskDueDate");

  // If editing a task, set the date value shown to the due date of the
  // task. Otherwise, set the due date to the current date by default.
  if (taskDueDate) {
    dateInput.setAttribute(
      "value",
      `${format(new Date(taskDueDate), "yyyy-MM-dd")}`
    );
  } else {
    dateInput.setAttribute("value", `${format(new Date(), "yyyy-MM-dd")}`);
  }

  addClass(taskDueDateField, "task-due-date-field");

  taskDueDateField.append(dateInputLabel, dateInput);

  return taskDueDateField;
}

export { taskDueDateField };
