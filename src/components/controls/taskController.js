import { format } from "date-fns";
import { taskForm } from "../appMainContent/task/taskForm.js";
import { addNewTaskButton } from "../appMainContent/task/addNewTaskButton.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { saveTaskItem, getTaskItem } from "./webStorageController.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { toggleClass } from "../helper/helper.js";

function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      newTaskForm = taskForm("Add Task", createTaskItemObj());

    taskViewer.append(newTaskForm);
    taskViewer.removeChild(addNewTaskButton);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    cancelTaskEditListener(newTaskForm);
    addTaskToTaskViewerListener(newTaskForm);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskEditListener(taskForm, taskItemId) {
  let formCancelButton = taskForm.querySelector(".form-cancel-button");

  formCancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer");

    // Reverts the task information back to its original data.
    // Checks to see if user is editing a task by checking if a
    // taskItemId exists.
    if (taskItemId) {
      let currentTaskItemObj = getTaskItem(taskItemId);

      taskViewer.insertBefore(
        taskItem(currentTaskItemObj, taskItemId),
        taskForm.nextSibling
      );
    }

    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function addTaskToTaskViewerListener(taskForm, taskItemId) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskItemObj = createTaskItemObj(taskForm);

    // This is where the taskItemId is created. Only enters if the user is creating a new task.
    // Otherwise, the user is editing and saving a task. A new task item # is not needed.
    if (!taskItemId) {
      taskItemId = createTaskItemIdNumber();
    }

    let taskItemKey = taskItemId;

    saveTaskItem(taskItemKey, taskItemObj);

    taskViewer.insertBefore(
      taskItem(taskItemObj, taskItemId),
      taskForm.nextSibling
    );
    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function AddEditButtonListener(editButton, taskItemId) {
  editButton.addEventListener("click", () => {
    // Locate the task item to edit
    let taskViewer = document.querySelector(".task-viewer"),
      taskItemToEdit = taskViewer.querySelector(
        `[data-task-item-id="${taskItemId}"]`
      );

    let currentTaskItemObj = getTaskItem(taskItemId);

    // Set the task edit form
    let taskEditForm = taskForm("Save", currentTaskItemObj);

    // Get the task edit form header and save button to validate and
    // toggle button status, respectively.
    let formTaskHeader = taskEditForm.querySelector("#form-task-header"),
      formAddTaskButton = taskEditForm.querySelector(
        ".form-add-or-save-task-button"
      );

    taskViewer.insertBefore(taskEditForm, taskItemToEdit.nextSibling);
    taskViewer.removeChild(taskItemToEdit);

    // Set listeners for task edit form
    cancelTaskEditListener(taskEditForm, taskItemId);
    addTaskToTaskViewerListener(taskEditForm, taskItemId);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function toggleTaskStatus(checkbox, taskItemId) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      ),
      checkmark = checkbox.firstChild;

    toggleClass(taskItem, "completed");
    toggleClass(checkmark, "fade-in-out");
  });
}

function checkNewTaskButtonExist() {
  let taskViewer = document.querySelector(".task-viewer");

  if (!taskViewer.contains(document.querySelector(".add-new-task-button"))) {
    taskViewer.append(addNewTaskButton());
    addNewTaskButtonListener();
  }
}

// Random assigns a eight digit integer for the task ID.
function createTaskItemIdNumber() {
  let min = 0,
    max = 100000000,
    taskId;

  do {
    // The maximum is exclusive and the minimum is inclusive
    taskId = Math.floor(Math.random() * (max - min) + min);
  } while (Object.keys(localStorage).includes(`${taskId}`));

  return taskId;
}

function createTaskItemObj(taskForm) {
  if (!taskForm) {
    return {
      headerValue: "",
      descriptionValue: "",
      priorityValue: "",
    };
  } else {
    return {
      headerValue: taskForm.querySelector("#form-task-header").value,
      descriptionValue: taskForm.querySelector("#form-task-description").value,
      priorityValue: taskForm.querySelector("#task-priority-dropdown").value,
      // reconverts it into a more widely recognizable date form (e.g.: November 11, 2022)
      // the '-' are replaced with '/' due to an issue where formatting the date with '-'
      // causes the date to be one day behind the desired date
      dueDateValue: format(
        new Date(
          taskForm
            .querySelector("#task-due-date-input")
            .value.replace(/-/g, "/")
        ),
        "PP"
      ),
    };
  }
}

function taskController() {
  // initialize event listener on app load
  addNewTaskButtonListener();
}

export { taskController, toggleTaskStatus, AddEditButtonListener };
