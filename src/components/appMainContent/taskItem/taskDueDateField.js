import { format } from "date-fns";
import { createElement } from "../../generalHelper/generalHelper.js";
import "../../../stylesheets/taskDueDateField.css";

function taskDueDateField(dueDate) {
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
  if (dueDate) {
    dateInput.setAttribute(
      "value",
      `${format(new Date(dueDate), "yyyy-MM-dd")}`
    );
  } else {
    dateInput.setAttribute("value", `${format(new Date(), "yyyy-MM-dd")}`);
  }

  taskDueDateField.append(dateInputLabel, dateInput);

  return taskDueDateField;
}

export { taskDueDateField };
