import { format } from "date-fns";
import { taskForm } from "../appMainContent/task/taskForm.js";
import { addNewTaskButton } from "../appMainContent/task/addNewTaskButton.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { saveTaskItem } from "./webStorageController.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { toggleClass } from "../helper/helper.js";

function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      newTaskForm = taskForm();

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

function cancelTaskEditListener(taskForm, taskItemNumber) {
  let formCancelButton = taskForm.querySelector(".form-cancel-button");

  formCancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.dataset.currentTaskHeaderValue,
      taskDescriptionValue = taskForm.dataset.currentTaskDescriptionValue,
      taskPriorityValue = taskForm.dataset.currentTaskPriorityValue,
      taskDueDateValue = taskForm.dataset.currentTaskDueDate;

    // Checks to see if user is editing a task by checking if a
    // taskItemNumber exists and reverts the task information back
    // to its original data.
    if (taskItemNumber !== undefined) {
      taskViewer.insertBefore(
        taskItem(
          taskHeaderValue,
          taskDescriptionValue,
          taskItemNumber,
          taskPriorityValue,
          taskDueDateValue
        ),
        taskForm.nextSibling
      );
    }

    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function addTaskToTaskViewerListener(taskForm, taskItemNumber) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    // Only enters if the user is creating a new task.
    // Otherwise, the user is editing and saving a task.
    // A new task item # is not needed.
    if (!taskItemNumber) {
      taskItemNumber = document.getElementsByClassName("task-item").length;
    }

    let taskViewer = document.querySelector(".task-viewer"),
      taskItemObj = createTaskItemObj(taskForm),
      taskItemKey = "taskItemNumber" + taskItemNumber;

    saveTaskItem(taskItemKey, taskItemObj);

    taskViewer.insertBefore(
      taskItem(taskItemObj, taskItemNumber),
      taskForm.nextSibling
    );
    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function AddEditButtonListener(editButton, taskItemNumber) {
  editButton.addEventListener("click", () => {
    // Locate the task item to edit
    let taskViewer = document.querySelector(".task-viewer"),
      taskItemToEdit = taskViewer.querySelector(
        `[data-task-item="${taskItemNumber}"]`
      );

    // Get the current task data for the task item that will be edited
    let currentTaskHeaderValue =
        taskItemToEdit.querySelector(".task-header").textContent,
      currentTaskDescriptionValue =
        taskItemToEdit.querySelector(".task-description").textContent,
      currentTaskPriorityValue = taskItemToEdit
        .querySelector(".date-and-priority-indicator-container")
        .lastElementChild.textContent.slice(10), // returns any characters after "Priority: "
      currentTaskDueDate = taskItemToEdit
        .querySelector(".date-and-priority-indicator-container")
        .firstElementChild.textContent.slice(10); // return any character after "Due Date: "

    // Set the task edit form
    let taskEditForm = taskForm(
      "Save",
      currentTaskHeaderValue,
      currentTaskDescriptionValue,
      currentTaskDueDate
    );

    // Validate the task edit form header and toggle state of save button
    let formTaskHeader = taskEditForm.querySelector("#form-task-header"),
      formAddTaskButton = taskEditForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Store the current task data below in a data- attribute.
    // If the user cancels the edit action, revert the task data back
    // to its original state.
    taskEditForm.dataset.currentTaskHeaderValue = currentTaskHeaderValue;
    taskEditForm.dataset.currentTaskDescriptionValue =
      currentTaskDescriptionValue;
    taskEditForm.dataset.currentTaskPriorityValue = currentTaskPriorityValue;
    taskEditForm.dataset.currentTaskDueDate = currentTaskDueDate;

    taskViewer.insertBefore(taskEditForm, taskItemToEdit.nextSibling);
    taskViewer.removeChild(taskItemToEdit);

    // Set listeners for task edit form
    cancelTaskEditListener(taskEditForm, taskItemNumber);
    addTaskToTaskViewerListener(taskEditForm, taskItemNumber);
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

function checkNewTaskButtonExist() {
  let taskViewer = document.querySelector(".task-viewer");

  if (!taskViewer.contains(document.querySelector(".add-new-task-button"))) {
    taskViewer.append(addNewTaskButton());
    addNewTaskButtonListener();
  }
}

function createTaskItemObj(taskForm) {
  return {
    headerValue: taskForm.querySelector("#form-task-header").value,
    descriptionValue: taskForm.querySelector("#form-task-description").value,
    priorityValue: taskForm.querySelector("#task-priority-dropdown").value,
    // reconverts it into a more widely recognizable date form (e.g.: November 11, 2022)
    // the '-' are replaced with '/' due to an issue where formatting the date with '-'
    // causes the date to be one day behind the desired date
    dueDateValue: format(
      new Date(
        taskForm.querySelector("#task-due-date-input").value.replace(/-/g, "/")
      ),
      "PP"
    ),
  };
}

function taskController() {
  // initialize event listener on app load
  addNewTaskButtonListener();
}

export { taskController, toggleTaskStatus, AddEditButtonListener };
