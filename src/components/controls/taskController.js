import { taskForm } from "../appMainContent/taskForm.js";
import { taskItem } from "../appMainContent/taskItem/taskItem.js";
import { projectList } from "../menubar/project/projectList.js";
import { getTaskSortMethod } from "./taskSortingMethods.js";
import { updateMainContentHeading, closeMobileMenu } from "./menuController.js";
import {
  saveTaskItem,
  getTaskItem,
  deleteTaskItem,
  deleteProject,
  deleteEmptyCompletionDateKeys,
  saveData,
} from "./webStorageController.js";
import {
  missingValueAggressiveValidation,
  addTaskButtonListener,
  createCancelButtonListener,
  createCloseOverlayListener,
  saveTaskButtonListener,
} from "./formControls.js";
import {
  addClass,
  createElement,
  removeClass,
} from "../generalHelper/generalHelper.js";
import { format, addDays, compareDesc } from "date-fns";
import demoJson from "../../../data/demo.json" assert { type: "json" };

function taskController() {
  // Sort tasks by priority for the Inbox menu tab on page load
  getTaskSortMethod("Inbox");

  addNewTaskButtonListener();
  demoAppButtonListener();
}

function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    closeMobileMenu();

    let newTaskForm = taskForm("Add Task", createTaskItemObj()),
      newTaskFormCancelButton = newTaskForm.querySelector(
        ".form-cancel-button"
      );

    document.body.append(newTaskForm);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form overlay and buttons
    createCloseOverlayListener(newTaskForm);
    createCancelButtonListener(newTaskForm, newTaskFormCancelButton);
    addTaskButtonListener(newTaskForm);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

// Adds tasks to the relevant board based on the page view
function addTaskToBoard(taskItemId, taskItemObj, taskBoard) {
  if (!taskItemObj) {
    taskItemObj = getTaskItem(taskItemId);
  }

  taskBoard = taskBoard.querySelector(".task-list");

  taskBoard.append(taskItem(taskItemId, taskItemObj));
}

function AddEditButtonListener(editButton, taskItemId) {
  editButton.addEventListener("click", () => {
    let currentTaskItemObj = getTaskItem(taskItemId);

    // Create the task edit form and render it on the screen
    let taskEditForm = taskForm("Save", currentTaskItemObj),
      newTaskFormCancelButton = taskEditForm.querySelector(
        ".form-cancel-button"
      );

    document.body.append(taskEditForm);

    // Get the task edit form header and save button to validate and
    // toggle button status, respectively.
    let formTaskHeader = taskEditForm.querySelector("#form-task-header"),
      formAddTaskButton = taskEditForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Set listeners for task edit form
    createCancelButtonListener(taskEditForm, newTaskFormCancelButton);
    saveTaskButtonListener(taskEditForm, taskItemId);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function deleteConfirmationButtonListener(
  confirmButton,
  overlayContainer,
  itemObj
) {
  confirmButton.addEventListener("click", () => {
    if (itemObj.hasOwnProperty("taskItemId")) {
      let itemToDelete = document.querySelector(
          `[data-task-item-id = '${itemObj.taskItemId}']`
        ),
        mainContentHeading = document.querySelector(
          ".main-content-heading"
        ).textContent;

      deleteTaskItem(itemObj.taskItemId);
      removeTaskOrBoardFromDOM(mainContentHeading, itemToDelete);
      overlayContainer.remove();

      if (isTaskViewEmpty()) {
        addMainContentBackground(mainContentHeading);
      }

      if (mainContentHeading.toLowerCase() === "upcoming") {
        emptyTaskBoardMessage();
      }
    } else {
      deleteProject(itemObj.projectName);
      clearProjectTabs();
      reloadProjectTabs();
      getTaskSortMethod("inbox");
      updateMainContentHeading("Inbox");
      overlayContainer.remove();
    }
  });
}

function toggleTaskCompletion(checkbox, taskItemId) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      ),
      mainContentHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      task = getTaskItem(taskItemId);

    deleteTaskItem(taskItemId);

    if (taskItem.classList.contains("completed")) {
      // Determines where to move the completed task back to.
      if (task.taskType.includes("General")) {
        // Inbox is used since general tasks can be created during the
        // inbox, today, and upcoming views. All three views save tasks
        // to taskData.
        saveTaskItem("inbox", taskItemId, task);
      } else {
        saveTaskItem(
          task.taskType.replace("Project Task: ", ""),
          taskItemId,
          task
        );
      }
    } else {
      saveTaskItem("completed", taskItemId, task);
    }

    removeTaskOrBoardFromDOM(mainContentHeading, taskItem);

    if (isTaskViewEmpty()) {
      addMainContentBackground(mainContentHeading);
    }

    if (mainContentHeading.toLowerCase() === "upcoming") {
      emptyTaskBoardMessage();
    }
  });
}

function removeTaskOrBoardFromDOM(mainContentHeading, taskToDelete) {
  // remove the secondary task board if this is the last task left.
  // Otherwise, remove the task from the secondary task board
  switch (mainContentHeading.toLowerCase()) {
    case "upcoming":
      let overdueTaskBoard = document.querySelector(".overdue-task-board");

      if (overdueTaskBoard.lastElementChild.childElementCount === 1) {
        overdueTaskBoard.remove();
      } else {
        taskToDelete.remove();
      }

      break;
    case "completed":
      if (taskToDelete.parentElement.childElementCount === 1) {
        deleteEmptyCompletionDateKeys();
        taskToDelete.parentElement.parentElement.remove();
      } else {
        taskToDelete.remove();
      }
      break;
    default: // Project tabs, inbox, today
      if (taskToDelete.parentElement.childElementCount === 1) {
        taskToDelete.parentElement.parentElement.remove();
      } else {
        taskToDelete.remove();
      }
      break;
  }
}

function clearTaskView() {
  let taskView = document.querySelector(".task-view");

  while (taskView.firstElementChild) {
    taskView.firstElementChild.remove();
  }
}

function emptyTaskBoardMessage() {
  let taskLists = document.querySelectorAll(".task-list");

  taskLists.forEach((list) => {
    let emptyTaskBoardMessage = createElement("p");

    emptyTaskBoardMessage.textContent = "There are no tasks due on this date.";
    addClass(emptyTaskBoardMessage, "empty-date-task-board-msg");

    if (list.childElementCount === 0) {
      list.append(emptyTaskBoardMessage);
    }
  });
}

function createTaskItemObj(taskForm, keepTaskType) {
  // When creating the first task in task viewer, assign empty values to
  // the object so that taskForm will display empty fields.
  if (!taskForm) {
    return {
      headerValue: "",
      priorityValue: "",
    };
  } else {
    return {
      headerValue: taskForm.querySelector("#form-task-header").value,
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
      taskType: determineTaskType(keepTaskType),
    };
  }
}

function addMainContentBackground(mainContentHeading) {
  let taskView = document.querySelector(".task-view"),
    noTasksMessage = createElement("p");

  if (mainContentHeading.toLowerCase() === "completed") {
    noTasksMessage.textContent = `You haven't completed any tasks yet! 
        Complete some tasks to see how much you've accomplished here.`;
  } else {
    noTasksMessage.textContent = `There doesn't seem to be anymore tasks! 
        Add some more if needed. Otherwise, enjoy the rest of your day!`;
  }

  taskView.append(noTasksMessage);

  if (!document.body.classList.contains("no-task-background")) {
    addClass(document.body, "no-task-background");
  }
}

function removeMainContentBackground() {
  removeClass(document.body, "no-task-background");
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

function determineTaskType(keepTaskType) {
  let taskType,
    mainContentHeading = document.querySelector(
      ".main-content-heading"
    ).textContent;

  switch (mainContentHeading.toLowerCase()) {
    case "inbox":
    case "today":
    case "upcoming":
      taskType = "General Task";
      break;
    case "completed":
      taskType = keepTaskType;
      break;
    default:
      taskType = "Project Task: " + mainContentHeading;
      break;
  }

  return taskType;
}

function clearProjectTabs() {
  document.querySelector(".project-list").remove();
}

function clearEmptyTaskBoards() {
  let taskBoards = document.querySelectorAll(".secondary-task-board");

  for (let i = 0; i < taskBoards.length; i++) {
    if (taskBoards[i].lastElementChild.childElementCount === 0) {
      taskBoards[i].remove();
    }
  }
}

function reloadProjectTabs() {
  let projectSection = document.querySelector(".project-section");

  projectSection.append(projectList());
}

function isTaskViewEmpty() {
  return !document.querySelector(".task-view").childElementCount;
}

function demoAppButtonListener() {
  let demoButton = document.querySelector(".demo-button");

  demoButton.addEventListener("click", () => {
    let todaysDate = new Date().setHours(0, 0, 0, 0);

    Object.keys(demoJson).forEach((primaryKey) => {
      let primaryObj = {};

      if (primaryKey !== "completed") {
        Object.keys(demoJson[primaryKey]).forEach((secondaryKey) => {
          primaryObj[secondaryKey] = {};

          demoJson[primaryKey][secondaryKey].forEach((task) => {
            task.dueDateValue = format(
              addDays(todaysDate, +task.dateOffset),
              "PP"
            );

            primaryObj[secondaryKey][`${createTaskItemIdNumber()}`] = task;
          });
        });
      } else {
        let completedArr = demoJson[primaryKey].map((completedTask) => {
          completedTask.dueDateValue = format(
            addDays(todaysDate, +completedTask.dateOffset),
            "PP"
          );

          return completedTask;
        });

        completedArr = completedArr.sort((dateLeft, dateRight) => {
          compareDesc(
            new Date(dateRight.dueDateValue),
            new Date(dateLeft.dueDateValue)
          );
        });

        completedArr.forEach((task) => {
          if (!primaryObj.hasOwnProperty(task.dueDateValue)) {
            primaryObj[task.dueDateValue] = {};
          }

          primaryObj[task.dueDateValue][`${createTaskItemIdNumber()}`] = task;
        });
      }

      saveData(primaryKey, JSON.stringify(primaryObj));
    });

    // Clear the following DOM components and reload the tasks
    clearTaskView();
    clearProjectTabs();
    getTaskSortMethod("inbox");
    updateMainContentHeading("Inbox");
    reloadProjectTabs();
  });
}

export {
  taskController,
  addTaskToBoard,
  createCancelButtonListener,
  AddEditButtonListener,
  toggleTaskCompletion,
  deleteConfirmationButtonListener,
  addTaskButtonListener,
  saveTaskButtonListener,
  clearTaskView,
  clearEmptyTaskBoards,
  addMainContentBackground,
  removeMainContentBackground,
  emptyTaskBoardMessage,
  createTaskItemObj,
  createTaskItemIdNumber,
  isTaskViewEmpty,
};
