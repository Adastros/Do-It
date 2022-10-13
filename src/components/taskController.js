import { taskForm } from "./taskForm.js";
import "../stylesheets/style.css";

function setTaskEditable() {
  let addTaskBtn = document.querySelector(".add-task-button");

  addTaskBtn.addEventListener("click", (e) => {
    let parent = e.currentTarget.parentNode;

    parent.append(taskForm());
    parent.removeChild(addTaskBtn);
  });
}

function taskController() {
  setTaskEditable();
}

export { taskController };
