import { taskForm } from "./taskForm.js";
import { addTaskButton } from "./addTaskButton.js";
import "../stylesheets/style.css";

function setTaskEditable() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (e) => {
    let parent = e.currentTarget.parentNode;

    parent.append(taskForm());
    parent.removeChild(addTaskButton);

    // Activate listeners for form buttons
    cancelTaskEdit();
    addTaskToTaskList();
  });
}

function cancelTaskEdit() {
  let cancelButton = document.querySelector(".form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list");

    taskList.removeChild(taskList.firstChild);
    taskList.append(addTaskButton());

    setTaskEditable();
  });
}

function addTaskToTaskList() {
  let formAddTaskButton = document.querySelector(".form-add-task-button");

  formAddTaskButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskHeaderValue = document.querySelector("#form-task-header").value,
      taskDescriptionValue = document.querySelector(
        "#form-task-description"
      ).value;
      
    console.log(taskHeaderValue);
    console.log(taskDescriptionValue);

    taskList.removeChild(taskList.firstChild);
    taskList.append(addTaskButton());

    setTaskEditable();
  });
}

function taskController() {
  // initialize event listener on app load
  setTaskEditable();
}

export { taskController };
