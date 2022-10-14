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
  });
}

function cancelTaskEdit() {
  let cancelButton = document.querySelector(".form-cancel-button");

  cancelButton.addEventListener("click", (e) => {
    let taskList = document.querySelector(".task-list");

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
