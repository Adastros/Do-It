import {
  format,
  addDays,
  differenceInDays,
  compareDesc,
  isBefore,
} from "date-fns";
import { taskForm } from "../appMainContent/task/taskForm.js";
import { confirmDeleteTaskOverlay } from "../appMainContent/task/confirmDeleteTaskOverlay.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { secondaryTaskBoard } from "../appMainContent/secondaryTaskBoard.js";
import { projectList } from "../menubar/projectList.js";
import {
  saveTaskItem,
  getTaskItem,
  getData,
  deleteTaskItem,
  deleteEmptyCompletionDateKeys,
  getTaskPriorityKey,
  determineLocalStorageKey,
  saveData,
} from "./webStorageController.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import {
  addClass,
  capitalizeFirstLetter,
  removeClass,
} from "../helper/helper.js";
import demoJson from "../../../data/demo.json" assert { type: "json" };

function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let newTaskForm = taskForm("Add Task", createTaskItemObj()),
      newTaskFormCancelButton = newTaskForm.querySelector(
        ".form-cancel-button"
      );

    document.body.append(newTaskForm);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    createCancelButtonListener(newTaskForm, newTaskFormCancelButton);
    addTaskButtonListener(newTaskForm);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function createCancelButtonListener(formOrOverlay, cancelButton) {
  cancelButton.addEventListener("click", () => {
    formOrOverlay.remove();
  });
}

function addTaskButtonListener(taskForm) {
  let formAddTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddTaskButton.addEventListener("click", () => {
    let taskItemObj = createTaskItemObj(taskForm),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      taskItemId = createTaskItemIdNumber();

    if (primaryTaskBoardHeading !== "Completed") {
      saveTaskItem(primaryTaskBoardHeading, taskItemId, taskItemObj);
      insertTaskBasedOnView(primaryTaskBoardHeading, taskItemId, taskItemObj);
    } else {
      saveTaskItem("inbox", taskItemId, taskItemObj);
    }

    taskForm.remove();
  });
}

function saveTaskButtonListener(taskForm, taskItemId) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let editedTaskObj = createTaskItemObj(taskForm),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent;

    deleteTaskItem(primaryTaskBoardHeading, taskItemId);
    saveTaskItem(primaryTaskBoardHeading, taskItemId, editedTaskObj);
    getTaskSortMethod(primaryTaskBoardHeading);

    taskForm.remove();
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

function createDeleteConfirmationOverlayListener(deleteButton, taskItemId) {
  deleteButton.addEventListener("click", () => {
    let taskHeader = getTaskItem(taskItemId).headerValue;

    document.body.append(confirmDeleteTaskOverlay(taskHeader, taskItemId));
  });
}

function deleteConfirmationButtonListener(
  confirmButton,
  overlayContainer,
  taskItemId
) {
  confirmButton.addEventListener("click", () => {
    let taskToDelete = document.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      ),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent;

    deleteTaskItem(primaryTaskBoardHeading, taskItemId);
    removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskToDelete);
    overlayContainer.remove();
  });
}

function toggleTaskCompletion(checkbox, taskItemId) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      ),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      task = getTaskItem(taskItemId);

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

    deleteTaskItem(primaryTaskBoardHeading, taskItemId);
    removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskItem);
  });
}

function removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskToDelete) {
  // remove the secondary task board if this is the last task left.
  // Otherwise, remove the task from the secondary task board
  switch (primaryTaskBoardHeading.toLowerCase()) {
    case "today":
    case "upcoming":
      taskToDelete.remove();
      break;
    case "completed":
      if (taskToDelete.parentElement.childElementCount === 1) {
        deleteEmptyCompletionDateKeys();
        taskToDelete.parentElement.parentElement.remove();
      } else {
        taskToDelete.remove();
      }
      break;
    default: // Project tabs and inbox
      if (taskToDelete.parentElement.childElementCount === 1) {
        taskToDelete.parentElement.parentElement.remove();
      } else {
        taskToDelete.remove();
      }
      break;
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
      taskType: determineTaskType(),
    };
  }
}

function determineTaskType() {
  let taskType,
    primaryTaskBoardHeading = document.querySelector(
      ".main-content-heading"
    ).textContent;

  switch (primaryTaskBoardHeading.toLowerCase()) {
    case "inbox":
    case "today":
    case "upcoming":
    case "completed":
      taskType = "General Task";
      break;
    default:
      taskType = "Project Task: " + primaryTaskBoardHeading;
      break;
  }

  return taskType;
}

function clearPrimaryTaskBoard() {
  let primaryTaskBoard = document.querySelector(".task-viewer");

  while (primaryTaskBoard.firstElementChild) {
    primaryTaskBoard.firstElementChild.remove();
  }
}

function clearProjectTabs() {
  document.querySelector(".project-list").remove();
}

function reloadProjectTabs() {
  let projectSection = document.querySelector(".project-section");

  projectSection.append(projectList());
}

function getTaskSortMethod(primaryTaskBoardHeading) {
  let localStorageKey = determineLocalStorageKey(primaryTaskBoardHeading),
    overDueTasks = checkForAllOverdueTasks(
      localStorageKey,
      primaryTaskBoardHeading
    );

  clearPrimaryTaskBoard();

  switch (primaryTaskBoardHeading.toLowerCase()) {
    case "inbox":
      createPriorityBoards();
      sortTasksByInbox();
      break;
    case "today":
      sortTasksByToday(primaryTaskBoardHeading);
      break;
    case "upcoming":
      createDateTaskBoards();
      sortTasksByUpcoming();
      break;
    case "completed":
      sortTasksByCompleted(primaryTaskBoardHeading);
      break;
    default: // Sort Project Tabs
      sortTasksByProject(primaryTaskBoardHeading);
      break;
  }

  if (overDueTasks.length > 0 && primaryTaskBoardHeading !== "Completed") {
    createOverDueTaskBoard(overDueTasks);
  }

  if (primaryTaskBoardHeading !== "Upcoming") {
    clearEmptyTaskBoards();
  }

  localStorage.previousTab = primaryTaskBoardHeading;
}

function clearEmptyTaskBoards() {
  let taskBoards = document.getElementsByClassName("secondary-task-board");

  for (let i = 0; i < taskBoards.length; i++) {
    if (taskBoards[i].lastElementChild.childElementCount === 0) {
      taskBoards[i].remove();
    }
  }
}

function sortByDueDateAsc(entries) {
  return entries.sort((entryLeft, entryRight) => {
    return compareDesc(
      new Date(entryRight[1].dueDateValue),
      new Date(entryLeft[1].dueDateValue)
    );
  });
}

function combineGeneralAndProjectTasks() {
  let taskDataObj = JSON.parse(getData("taskData")),
    projectDataObj = JSON.parse(getData("projects")),
    combinedTaskObj = {};

  [taskDataObj, projectDataObj].forEach((dataObj, i) => {
    Object.keys(dataObj).forEach((secondaryKey) => {
      if (!combinedTaskObj.hasOwnProperty(secondaryKey) && i === 0) {
        combinedTaskObj[secondaryKey] = {};
      }

      Object.entries(dataObj[secondaryKey]).forEach((entry) => {
        if (!isTaskOverdue(entry[1])) {
          if (i === 0) {
            combinedTaskObj[secondaryKey][entry[0]] = entry[1];
          } else {
            combinedTaskObj[getTaskPriorityKey(entry[1].priorityValue)][
              entry[0]
            ] = entry[1];
          }
        }
      });
    });
  });

  return combinedTaskObj;
}

function createOverDueTaskBoard(overDueTasks) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    overDueBoard = secondaryTaskBoard("Overdue Tasks");

  addClass(overDueBoard, "overdue-task-board");
  primaryTaskBoard.prepend(overDueBoard);

  overDueTasks.forEach((task) => {
    addTaskToBoard(task[0], task[1], overDueBoard);
  });
}

function createPriorityBoards() {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    priorityBoardHeaderArr = ["High", "Medium", "Low", "No"],
    priorityKeys = [
      "highPriorityTasks",
      "mediumPriorityTasks",
      "lowPriorityTasks",
      "noPriorityTasks",
    ];

  priorityBoardHeaderArr.forEach((header, i) => {
    let priorityBoard = secondaryTaskBoard(header + " Priority");

    // An identifier that is used when sorting through task data
    // to append tasks based on priority.
    priorityBoard.dataset.priorityKey = priorityKeys[i];

    primaryTaskBoard.append(priorityBoard);
  });
}

function createDateTaskBoards() {
  let date = new Date(), //Today's date
    primaryTaskBoard = document.querySelector(".task-viewer");

  for (let i = 0; i < 7; i++) {
    let formattedDate = format(date, "MMM d - EEEE");

    if (i === 0) {
      formattedDate += " - Today";
    } else if (i === 1) {
      formattedDate += " - Tomorrow";
    }

    primaryTaskBoard.append(secondaryTaskBoard(formattedDate));
    date = addDays(date, 1);
  }
}

function checkForAllOverdueTasks(localStorageKey, primaryTaskBoardHeading) {
  let todaysDate = new Date().setHours(0, 0, 0, 0),
    taskDataObj = JSON.parse(getData("taskData")),
    projectDataObj = JSON.parse(getData("projects")),
    overDueTasks = [];

  // For project view
  if (localStorageKey === "projects") {
    Object.keys(projectDataObj[primaryTaskBoardHeading]).forEach((taskKey) => {
      let dueDate = new Date(
        projectDataObj[primaryTaskBoardHeading][taskKey].dueDateValue
      );

      if (compareDesc(todaysDate, dueDate) === -1) {
        overDueTasks.push([
          taskKey,
          projectDataObj[primaryTaskBoardHeading][taskKey],
        ]);
      }
    });
  }
  // For inbox, today, and upcoming view
  else {
    [taskDataObj, projectDataObj].forEach((dataObj) => {
      Object.keys(dataObj).forEach((secondaryKey) => {
        Object.keys(dataObj[secondaryKey]).forEach((taskKey) => {
          let dueDate = new Date(dataObj[secondaryKey][taskKey].dueDateValue);

          if (compareDesc(todaysDate, dueDate) === -1) {
            overDueTasks.push([taskKey, dataObj[secondaryKey][taskKey]]);
          }
        });
      });
    });
  }

  if (overDueTasks.length > 1) {
    overDueTasks = sortByDueDateAsc(overDueTasks);
  }

  return overDueTasks;
}

function sortTasksByInbox() {
  let combinedTaskObj = combineGeneralAndProjectTasks();

  Object.keys(combinedTaskObj).forEach((priorityKey) => {
    let taskEntries = sortByDueDateAsc(
      Object.entries(combinedTaskObj[priorityKey])
    );

    taskEntries.forEach((entry) => {
      let taskItemKey = entry[0],
        taskObj = entry[1];

      addTaskToBoard(
        taskItemKey,
        taskObj,
        document.querySelector(`[data-priority-key="${priorityKey}"]`)
      );
    });
  });
}

function sortTasksByToday(primaryTaskBoardHeading) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    taskDataObj = JSON.parse(getData("taskData")),
    projectDataObj = JSON.parse(getData("projects")),
    todaysDate = format(new Date(), "PP"),
    todayBoard = secondaryTaskBoard(primaryTaskBoardHeading);

  [taskDataObj, projectDataObj].forEach((dataObj) => {
    Object.keys(dataObj).forEach((secondaryKey) => {
      Object.keys(dataObj[secondaryKey]).forEach((taskItemKey) => {
        let taskDueDate = dataObj[secondaryKey][taskItemKey].dueDateValue;

        if (taskDueDate === todaysDate) {
          if (!isTaskOverdue(dataObj[secondaryKey][taskItemKey])) {
            addTaskToBoard(
              taskItemKey,
              dataObj[secondaryKey][taskItemKey],
              todayBoard
            );
          }
        }
      });
    });
  });

  primaryTaskBoard.append(todayBoard);
}

function sortTasksByUpcoming() {
  let taskDataObj = JSON.parse(getData("taskData")),
    projectDataObj = JSON.parse(getData("projects")),
    todaysDate = new Date().setHours(0, 0, 0, 0), // Todays date with time component zero'd out
    weekFromTodaysDate = addDays(todaysDate, 6), // Today's date + 6 days
    dateTaskBoardsArr = document.getElementsByClassName("secondary-task-board");

  [taskDataObj, projectDataObj].forEach((dataObj) => {
    Object.keys(dataObj).forEach((secondaryKey) => {
      Object.keys(dataObj[secondaryKey]).forEach((taskItemKey) => {
        let taskDueDate = new Date(
            dataObj[secondaryKey][taskItemKey].dueDateValue
          ),
          dayDifference = differenceInDays(weekFromTodaysDate, taskDueDate);

        if (dayDifference < 7 && dayDifference >= 0) {
          if (!isTaskOverdue(dataObj[secondaryKey][taskItemKey])) {
            addTaskToBoard(
              taskItemKey,
              dataObj[secondaryKey][taskItemKey],
              dateTaskBoardsArr[6 - dayDifference]
            );
          }
        }
      });
    });
  });
}

function sortTasksByCompleted(primaryTaskBoardHeading) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    completedTaskDataObj = JSON.parse(
      getData(determineLocalStorageKey(primaryTaskBoardHeading))
    ),
    completionDates = Object.keys(completedTaskDataObj);

  // Sort completion dates from most recent to oldest (descending).
  if (completionDates.length > 1) {
    completionDates = completionDates.sort((dateLeft, dateRight) =>
      compareDesc(new Date(dateLeft), new Date(dateRight))
    );
  }

  completionDates.forEach((date) => {
    let formattedDate = format(new Date(date), "MMM d - EEEE"),
      dateTaskBoard = secondaryTaskBoard(formattedDate);

    Object.keys(completedTaskDataObj[date]).forEach((taskItemId) => {
      addTaskToBoard(
        taskItemId,
        completedTaskDataObj[date][taskItemId],
        dateTaskBoard
      );

      let completedTask = dateTaskBoard.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      );

      addClass(completedTask, "completed");
      removeClass(
        completedTask.querySelector(".checkbox").firstElementChild, // checkmark img element
        "fade-in-out"
      );
    });

    primaryTaskBoard.append(dateTaskBoard);
  });
}

function sortTasksByProject(projectName) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    projectTaskDataObj = JSON.parse(
      getData(determineLocalStorageKey(projectName))
    ),
    sortedProjectEntries = Object.entries(projectTaskDataObj[projectName]).sort(
      (entryLeft, entryRight) => {
        return compareDesc(
          new Date(entryRight[1].dueDateValue),
          new Date(entryLeft[1].dueDateValue)
        );
      }
    ),
    previousEntryDueDate,
    taskBoard;

  sortedProjectEntries.forEach((entry) => {
    let taskKey = entry[0],
      taskValueObj = entry[1];

    if (!isTaskOverdue(taskValueObj)) {
      // If the previous due date is different from the current task's due date,
      // create a new task board to append all tasks with the same due date until a
      // task with a different due date is found
      if (taskValueObj.dueDateValue !== previousEntryDueDate) {
        let dueDate = new Date(taskValueObj.dueDateValue);

        previousEntryDueDate = taskValueObj.dueDateValue;

        taskBoard = secondaryTaskBoard(format(dueDate, "MMM d - EEEE"));

        primaryTaskBoard.append(taskBoard);
      }

      addTaskToBoard(taskKey, taskValueObj, taskBoard);
    }
  });
}

function insertTaskBasedOnView(
  primaryTaskBoardHeading,
  taskItemId,
  taskItemObj
) {
  if (isTaskOverdue(taskItemObj)) {
    insertOverdueTask(taskItemId, taskItemObj);
  } else {
    switch (primaryTaskBoardHeading.toLowerCase()) {
      case "inbox":
        insertTaskForInboxView(taskItemId, taskItemObj);
        break;
      case "today":
        insertTaskForTodayView(taskItemId, taskItemObj);
        break;
      case "upcoming":
        insertTaskForUpcomingView(taskItemId, taskItemObj);
        break;
      case "completed":
        insertTaskForCompletedView(taskItemId, taskItemObj);
        break;
      default: // Project name
        insertTaskForProjectView();
        break;
    }
  }
}

function isTaskOverdue(taskItemObj) {
  let todaysDate = new Date().setHours(0, 0, 0, 0);

  return isBefore(new Date(taskItemObj.dueDateValue), todaysDate);
}

function insertOverdueTask(taskItemId, taskItemObj) {
  let overdueTaskBoard = document.querySelector(".overdue-task-board");

  if (overdueTaskBoard) {
    addTaskToBoard(taskItemId, taskItemObj, overdueTaskBoard);
  } else {
    createOverDueTaskBoard([taskItemId, taskItemObj]);
  }
}

function insertTaskForInboxView(taskItemId, taskItemObj) {
  let taskBoard = document.querySelector(
    `[data-priority-key="${getTaskPriorityKey(taskItemObj.priorityValue)}"]`
  );

  if (!taskBoard) {
    getTaskSortMethod("inbox");
  } else {
    addTaskToBoard(taskItemId, taskItemObj, taskBoard);
  }
}

function insertTaskForTodayView(taskItemId, taskItemObj) {
  let todayBoard = document.getElementsByClassName("secondary-task-board")[1],
    taskDueDate = taskItemObj.dueDateValue,
    todaysDate = format(new Date(), "PP");

  if (taskDueDate === todaysDate) {
    addTaskToBoard(taskItemId, taskItemObj, todayBoard);
  }
}

// Need to zero out time component to avoid any date calculation/ conversion issues.
function insertTaskForUpcomingView(taskItemId, taskItemObj) {
  let todaysDate = new Date().setHours(0, 0, 0, 0), // Todays date with time component zero'd out
    weekFromTodaysDate = addDays(todaysDate, 6), // today's date + 6 days
    dayDifference = differenceInDays(
      weekFromTodaysDate,
      new Date(taskItemObj.dueDateValue)
    ),
    dateTaskBoardsArr = document.getElementsByClassName("secondary-task-board"),
    dateBoardIdx = dateTaskBoardsArr.length - 1; // only allows the index of date task boards. Overdue task board will be ignored

  if (dayDifference < 7 && dayDifference >= 0) {
    addTaskToBoard(
      taskItemId,
      taskItemObj,
      dateTaskBoardsArr[dateBoardIdx - dayDifference]
    );
  }
}

function insertTaskForCompletedView(taskItemId, taskItemObj) {
  let taskToEdit = document.querySelector(
      `[data-task-item-id="${taskItemId}"]`
    ),
    dateBoard = taskToEdit.parentElement.parentElement;

  //Remove the task from the DOM and localStorage before replacing it
  // with an updated version of it
  taskToEdit.remove();
  addTaskToBoard(taskItemId, taskItemObj, dateBoard);

  // Reselect the updated task and style it
  let updatedTask = dateBoard.querySelector(
    `[data-task-item-id="${taskItemId}"]`
  );
  addClass(updatedTask, "completed");
  removeClass(
    updatedTask.querySelector(".checkbox").firstElementChild, // checkmark img element
    "fade-in-out"
  );
}

function insertTaskForProjectView() {
  let projectName = document.querySelector(".main-content-heading").textContent;

  clearPrimaryTaskBoard();
  getTaskSortMethod(projectName);
}

function demoAppButtonListener() {
  let demoButton = document.querySelector(".demo-button"),
    primaryTaskBoardHeading = document.querySelector(
      ".main-content-heading"
    ).textContent;

  demoButton.addEventListener("click", () => {
    let todaysDate = new Date().setHours(0, 0, 0, 0);

    Object.keys(demoJson).forEach((primaryKey) => {
      let primaryObj = {};
      console.log(primaryKey);
      if (primaryKey !== "completed") {
        Object.keys(demoJson[primaryKey]).forEach((secondaryKey) => {
          primaryObj[secondaryKey] = {};

          demoJson[primaryKey][secondaryKey].forEach((task) => {
            task.dueDateValue = format(
              addDays(todaysDate, +task.dueDateValue),
              "PP"
            );

            primaryObj[secondaryKey][`${createTaskItemIdNumber()}`] = task;
          });
        });
      } else {
        let completedArr = demoJson[primaryKey].map((completedTask) => {
          completedTask.dueDateValue = format(
            addDays(todaysDate, +completedTask.dueDateValue),
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
      console.log(primaryObj);
      saveData(primaryKey, JSON.stringify(primaryObj));
    });

    // Clear the following DOM components and reload the tasks
    clearPrimaryTaskBoard();
    clearProjectTabs();
    getTaskSortMethod(primaryTaskBoardHeading);
    reloadProjectTabs();
  });
}

function emptyTaskData() {
  return JSON.stringify({
    highPriorityTasks: {},
    mediumPriorityTasks: {},
    lowPriorityTasks: {},
    noPriorityTasks: {},
  });
}

function taskController() {
  // Sort tasks by priority for the Inbox menu tab on page load
  getTaskSortMethod("Inbox");

  addNewTaskButtonListener();
  demoAppButtonListener();
}

export {
  taskController,
  toggleTaskCompletion,
  createCancelButtonListener,
  AddEditButtonListener,
  createDeleteConfirmationOverlayListener,
  deleteConfirmationButtonListener,
  addTaskButtonListener,
  saveTaskButtonListener,
  clearPrimaryTaskBoard,
  getTaskSortMethod,
  emptyTaskData,
};
