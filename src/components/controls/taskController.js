import { taskForm } from "../appMainContent/task/taskForm.js";
import { addTaskButton } from "../appMainContent/task/addTaskButton.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { addClass, removeClass, toggleClass } from "../helper/helper.js";

function setTaskEditable() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (e) => {
    let taskViewer = document.querySelector(".task-viewer");

    taskViewer.append(taskForm());
    taskViewer.removeChild(addTaskButton);

    let formTaskHeader = document.querySelector("#form-task-header"),
      formAddTaskButton = document.querySelector(".form-add-task-button");

    // Activate listeners for form buttons
    cancelTaskEditListener();
    addTaskToTaskListListener();
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskEditListener() {
  let cancelButton = document.querySelector(".form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskFormContainer = document.querySelector(".task-form-container");

    taskViewer.removeChild(taskFormContainer);

    if (!taskViewer.contains(document.querySelector(".add-task-button"))) {
      taskViewer.append(addTaskButton());
      setTaskEditable();
    }
  });
}

function addTaskToTaskListListener() {
  let formAddTaskButton = document.querySelector(".form-add-task-button");

  formAddTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskFormContainer = document.querySelector(".task-form-container"),
      taskHeaderValue = document.querySelector("#form-task-header").value,
      taskDescriptionValue = document.querySelector(
        "#form-task-description"
      ).value,
      taskItemNumber = document.getElementsByClassName("task-item").length + 1;

    taskViewer.removeChild(taskFormContainer);
    taskViewer.append(
      taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber),
      addTaskButton()
    );

    setTaskEditable();
  });
}

// Aggressively checks if task header field is empty and disables "Add task button" if empty
function isFormTaskHeaderEmpty() {
  let formTaskHeader = document.querySelector("#form-task-header"),
    formAddTaskButton = document.querySelector(".form-add-task-button");

  formTaskHeader.addEventListener("input", (e) => {
    if (e.currentTarget.validity.valid) {
      formAddTaskButton.removeAttribute("disabled", "");
    } else {
      formAddTaskButton.setAttribute("disabled", "");
    }
  });
}

function toggleTaskStatus(checkbox, taskItemNumber) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item = '${taskItemNumber}']`
      ),
      checkmark = checkbox.firstChild;

    toggleClass(taskItem, "completed");
    toggleClass(checkmark, "fade-in-out");
  });
}

function taskController() {
  // initialize event listener on app load
  setTaskEditable();
}

export { taskController, toggleTaskStatus };
