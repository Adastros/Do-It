import { taskForm } from "./taskForm.js";
import { addTaskButton } from "./addTaskButton.js";
import { taskItem } from "./taskItem.js";
import "../stylesheets/style.css";
import { addClass, removeClass } from "../helper.js";

function setTaskEditable() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (e) => {
    let taskList = document.querySelector(".task-list");

    taskList.append(taskForm());
    taskList.removeChild(addTaskButton);

    // Activate listeners for form buttons
    cancelTaskEdit();
    addTaskToTaskList();
    isFormTaskHeaderEmpty();
  });
}

function cancelTaskEdit() {
  let cancelButton = document.querySelector(".form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskFormContainer = document.querySelector(".task-form-container");

    taskList.removeChild(taskFormContainer);

    if (!taskList.contains(document.querySelector(".add-task-button"))) {
      taskList.append(addTaskButton());
      setTaskEditable();
    }
  });
}

function addTaskToTaskList() {
  let formAddTaskButton = document.querySelector(".form-add-task-button");

  formAddTaskButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskFormContainer = document.querySelector(".task-form-container"),
      taskHeaderValue = document.querySelector("#form-task-header").value,
      taskDescriptionValue = document.querySelector(
        "#form-task-description"
      ).value,
      taskItemNumber = document.getElementsByClassName("task-item").length + 1;

    taskList.removeChild(taskFormContainer);
    taskList.append(
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

    if (taskItem.classList.contains("completed")) {
      removeClass(taskItem, "completed");
      addClass(checkmark, "fade-in-out");
    } else {
      addClass(taskItem, "completed");
      removeClass(checkmark, "fade-in-out");
    }
  });
}

function taskController() {
  // initialize event listener on app load
  setTaskEditable();
}

export { taskController, toggleTaskStatus };
