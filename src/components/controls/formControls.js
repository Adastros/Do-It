import { confirmDeletePromptOverlay } from "../appMainContent/confirmDeletePromptOverlay.js";
import { createTaskItemObj, createTaskItemIdNumber } from "./taskController.js";
import {
  getTaskSortMethod,
  insertTaskBasedOnView,
} from "./taskSortingMethods.js";
import {
  getData,
  saveTaskItem,
  getTaskItem,
  deleteTaskItem,
} from "./webStorageController.js";
import { removeClass, addClass } from "../generalHelper/generalHelper.js";

// Aggressively checks and disables the add button if if form field is empty
function missingValueAggressiveValidation(input, buttonToDisable) {
  input.addEventListener("input", (e) => {
    let errorField = document.querySelector(".error-field"),
      errorMessage = document.querySelector(".error-message");

    if (e.currentTarget.validity.valid) {
      buttonToDisable.removeAttribute("disabled", "");
      errorMessage.textContent = "";
      removeClass(input, "error");
      addClass(errorField, "hide");
    } else {
      buttonToDisable.setAttribute("disabled", "");
      errorMessage.textContent = "Please enter a task name.";
      addClass(input, "error");
      removeClass(errorField, "hide");
    }
  });
}

function createDeletePromptOverlayListener(deleteButton, itemObj) {
  deleteButton.addEventListener("click", () => {
    let taskOrProjectText;

    if (itemObj.hasOwnProperty("taskItemId")) {
      taskOrProjectText = getTaskItem(itemObj.taskItemId).headerValue;
    } else {
      taskOrProjectText = itemObj.projectName;
    }

    document.body.append(
      confirmDeletePromptOverlay(taskOrProjectText, itemObj)
    );
  });
}

function addTaskButtonListener(taskForm) {
  let formAddTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddTaskButton.addEventListener("click", () => {
    let taskItemObj = createTaskItemObj(taskForm),
      mainContentHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      taskItemId = createTaskItemIdNumber();

    if (mainContentHeading !== "Completed") {
      saveTaskItem(mainContentHeading, taskItemId, taskItemObj);
      insertTaskBasedOnView(mainContentHeading, taskItemId, taskItemObj);
    } else {
      saveTaskItem("inbox", taskItemId, taskItemObj);
    }

    taskForm.remove();
  });
}

function createCancelButtonListener(formOrOverlay, cancelButton) {
  cancelButton.addEventListener("click", () => {
    formOrOverlay.remove();
  });
}

function saveTaskButtonListener(taskForm, taskItemId) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let completedDataObj = JSON.parse(getData("completed")),
      completionDates = Object.keys(completedDataObj),
      completionDateKey;

    for (let i = 0; i < completionDates.length; i++) {
      if (
        completedDataObj[completionDates[i]].hasOwnProperty(`${taskItemId}`)
      ) {
        completionDateKey = completionDates[i];
        break;
      }
    }

    let editedTaskObj = createTaskItemObj(taskForm, taskItemId),
      mainContentHeading = document.querySelector(
        ".main-content-heading"
      ).textContent;

    deleteTaskItem(taskItemId);
    saveTaskItem(
      mainContentHeading,
      taskItemId,
      editedTaskObj,
      completionDateKey
    );
    getTaskSortMethod(mainContentHeading);

    taskForm.remove();
  });
}

function doesProjectNameExist(projectName) {
  let projectDataObj = JSON.parse(getData("projects")),
    inputField = document.querySelector("#new-project-name"),
    errorField = document.querySelector(".error-field"),
    errorMessage = document.querySelector(".error-message"),
    existsFlag = true;

  if (projectDataObj.hasOwnProperty(projectName)) {
    errorMessage.textContent = "This project name already exists!";
    addClass(inputField, "error");
    removeClass(errorField, "hide");
    existsFlag = false;
  }

  return existsFlag;
}

export {
  missingValueAggressiveValidation,
  createDeletePromptOverlayListener,
  addTaskButtonListener,
  createCancelButtonListener,
  saveTaskButtonListener,
  doesProjectNameExist,
};
