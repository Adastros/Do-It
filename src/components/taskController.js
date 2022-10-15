import { taskForm } from "./taskForm.js";
import { addTaskButton } from "./addTaskButton.js";
import { taskItem } from "./taskItem.js";
import "../stylesheets/style.css";

function setTaskEditable() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (e) => {
    let taskList = document.querySelector(".task-list");

    taskList.append(taskForm());
    taskList.removeChild(addTaskButton);

    // Activate listeners for form buttons
    cancelTaskEdit();
    addTaskToTaskList();
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
      ).value;

    taskList.removeChild(taskFormContainer);
    taskList.append(
      taskItem(taskHeaderValue, taskDescriptionValue),
      addTaskButton()
    );

    setTaskEditable();
  });
}

function taskController() {
  // initialize event listener on app load
  setTaskEditable();
}

export { taskController };
