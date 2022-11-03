import { taskForm } from "../appMainContent/task/taskForm.js";
import { addTaskButton } from "../appMainContent/task/addTaskButton.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { addClass, removeClass, toggleClass } from "../helper/helper.js";

function addNewTaskButtonListener() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskFormComponent = taskForm();

    taskViewer.append(taskFormComponent);
    taskViewer.removeChild(addTaskButton);

    let formTaskHeader = taskFormComponent.querySelector("#form-task-header"),
      formAddTaskButton = taskFormComponent.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    cancelTaskEditListener(taskFormComponent);
    addTaskToTaskViewerListener(taskFormComponent);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskEditListener(taskForm, taskItemNumber) {
  let formCancelButton = taskForm.querySelector(".form-cancel-button");

  formCancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.querySelector("#form-task-header").value,
      taskDescriptionValue = taskForm.querySelector(
        "#form-task-description"
      ).value;

    // Checks to see if user is editing a task by checking if a
    // taskItemNumber exists.
    if (taskItemNumber !== undefined) {
      taskViewer.insertBefore(
        taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber),
        taskForm.nextSibling
      );
    }

    taskForm.remove();
    doesNewTaskButtonExist();
  });
}

function addTaskToTaskViewerListener(taskForm, taskItemNumber) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.querySelector("#form-task-header").value,
      taskDescriptionValue = taskForm.querySelector(
        "#form-task-description"
      ).value;

    // Only enters if the user is creating a new task.
    // Otherwise, the user is editing and saving a task and a
    // new task item # is not needed.
    if (!taskItemNumber) {
      taskItemNumber = document.getElementsByClassName("task-item").length;
    }

    taskViewer.insertBefore(
      taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber),
      taskForm.nextSibling
    );
    taskForm.remove();
    doesNewTaskButtonExist();
  });
}

function AddEditButtonListener(editButton, taskItemNumber) {
  editButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskItemToEdit = taskViewer.querySelector(
        `[data-task-item="${taskItemNumber}"]`
      ),
      taskHeaderValue =
        taskItemToEdit.querySelector(".task-header").textContent,
      taskDescriptionValue =
        taskItemToEdit.querySelector(".task-description").textContent,
      taskFormToInsert = taskForm(
        "Save",
        taskHeaderValue,
        taskDescriptionValue
      ),
      formTaskHeader = taskFormToInsert.querySelector("#form-task-header"),
      formAddTaskButton = taskFormToInsert.querySelector(
        ".form-add-or-save-task-button"
      );
    console.log(taskHeaderValue);
    taskViewer.insertBefore(taskFormToInsert, taskItemToEdit.nextSibling);
    taskViewer.removeChild(taskItemToEdit);

    cancelTaskEditListener(taskFormToInsert, taskItemNumber);
    addTaskToTaskViewerListener(taskFormToInsert, taskItemNumber);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
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

function doesNewTaskButtonExist() {
  let taskViewer = document.querySelector(".task-viewer");

  if (!taskViewer.contains(document.querySelector(".add-task-button"))) {
    taskViewer.append(addTaskButton());
    addNewTaskButtonListener();
  }
}

function taskController() {
  // initialize event listener on app load
  addNewTaskButtonListener();
}

export { taskController, toggleTaskStatus, AddEditButtonListener };
