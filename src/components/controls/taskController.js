import { format, addDays, differenceInDays, compareDesc } from "date-fns";
import { taskForm } from "../appMainContent/task/taskForm.js";
import { confirmDeleteTaskOverlay } from "../appMainContent/task/confirmDeleteTaskOverlay.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { secondaryTaskBoard } from "../appMainContent/secondaryTaskBoard.js";
import {
  saveTaskItem,
  getTaskItem,
  getData,
  deleteTaskItem,
  getTaskPriorityKey,
  determineLocalStorageKey,
} from "./webStorageController.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { addClass, removeClass } from "../helper/helper.js";

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
    addOrSaveTaskButtonListener(newTaskForm);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function createCancelButtonListener(formOrOverlay, cancelButton) {
  cancelButton.addEventListener("click", () => {
    formOrOverlay.remove();
  });
}

function addOrSaveTaskButtonListener(taskForm, taskItemId) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let taskItemObj = createTaskItemObj(taskForm),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent;

    if (!taskItemId) {
      // This is where the taskItemId is created. Only enters if the user is creating a new task.
      // Otherwise, the user is editing and saving a task. A new task item # is not needed.
      taskItemId = createTaskItemIdNumber();
    } else {
      // If the user edits and saves a task, remove the task from the DOM and
      // localStorage before replacing it with an updated version of it
      let taskToRemove = document.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      );
      // localStorageKey = determineLocalStorageKey(
      //   document.querySelector(".main-content-heading").textContent
      // );

      // deleteTaskItem(localStorageKey);
      taskToRemove.remove();
    }

    saveTaskItem(primaryTaskBoardHeading, taskItemId, taskItemObj);
    insertTaskBasedOnView(primaryTaskBoardHeading, taskItemId, taskItemObj);
    taskForm.remove();
  });
}

// Adds tasks to the relevant board based on the page view
function addTaskToBoard(taskItemId, taskItemObj, taskBoard) {
  if (!taskItemObj) {
    taskItemObj = getTaskItem("taskData", taskItemId);
  }

  if (!taskBoard) {
    taskBoard = document.querySelector(".task-viewer");
  } else {
    taskBoard = taskBoard.querySelector(".task-list");
  }

  taskBoard.append(taskItem(taskItemId, taskItemObj));
}

function AddEditButtonListener(editButton, taskItemId) {
  editButton.addEventListener("click", () => {
    let primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      currentTaskItemObj = getTaskItem(primaryTaskBoardHeading, taskItemId);

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
    addOrSaveTaskButtonListener(taskEditForm, taskItemId);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function createDeleteConfirmationOverlayListener(deleteButton, taskItemId) {
  deleteButton.addEventListener("click", () => {
    let primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      taskHeader = getTaskItem(primaryTaskBoardHeading, taskItemId).headerValue;

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

    // remove the secondary task board if this is the last task left
    switch (primaryTaskBoardHeading) {
      case "Today":
      case "Upcoming":
        taskToDelete.remove();
        break;
      default:
        if (taskToDelete.parentElement.childElementCount === 1) {
          taskToDelete.parentElement.parentElement.remove();
        } else {
          taskToDelete.remove();
        }
        break;
    }

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
      task = getTaskItem(primaryTaskBoardHeading, taskItemId);

    if (taskItem.classList.contains("completed")) {
      saveTaskItem("taskData", taskItemId, task);
    } else {
      saveTaskItem("completed", taskItemId, task);
    }

    deleteTaskItem(primaryTaskBoardHeading, taskItemId);
    taskItem.remove();
  });
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

function clearTaskViewer() {
  let taskViewer = document.querySelector(".task-viewer");

  while (taskViewer.firstElementChild) {
    taskViewer.firstElementChild.remove();
  }
}

function getTaskSortMethod(tabName) {
  let localStorageKey = determineLocalStorageKey(tabName),
    taskDataObj = JSON.parse(getData(localStorageKey)),
    taskDataKeys = Object.keys(taskDataObj);

  switch (tabName) {
    case "Inbox":
      // Create the task priority boards first before sorting tasks
      createTaskPriorityBoards();
      sortTasksByInbox(taskDataObj, taskDataKeys);
      break;
    case "Today":
      sortTasksByToday(taskDataObj, taskDataKeys);
      break;
    case "Upcoming":
      createDateTaskBoards();
      sortTasksByUpcoming(taskDataObj, taskDataKeys);
      break;
    case "Completed":
      sortTasksByCompleted(taskDataObj, taskDataKeys);
      break;
    default: // Sort Project Tabs
      sortTasksByProject(taskDataObj, tabName);
      break;
  }

  localStorage.previousTab = tabName;
}

function createTaskPriorityBoards() {
  let taskViewer = document.querySelector(".task-viewer"),
    priorityBoardHeaderArr = ["High", "Medium", "Low", "None"],
    priorityKeys = [
      "highPriorityTasks",
      "mediumPriorityTasks",
      "lowPriorityTasks",
      "noPriorityTasks",
    ];

  priorityBoardHeaderArr.forEach((boardHeader, i) => {
    let priorityBoard = secondaryTaskBoard(boardHeader + " Priority");

    // An identifier that is used when sorting through task data
    // to append tasks based on priority.
    priorityBoard.dataset.priorityKey = priorityKeys[i];

    taskViewer.append(priorityBoard);
  });
}

function createDateTaskBoards() {
  let date = new Date(), //Today's date
    taskViewer = document.querySelector(".task-viewer");

  for (let i = 0; i < 7; i++) {
    let formattedDate = format(date, "MMM d - EEEE");

    if (i === 0) {
      formattedDate += " - Today";
    } else if (i === 1) {
      formattedDate += " - Tomorrow";
    }

    taskViewer.append(secondaryTaskBoard(formattedDate));
    date = addDays(date, 1);
  }
}

function sortTasksByInbox(inboxTaskDataObj, priorityKeysArr) {
  let taskViewer = document.querySelector(".task-viewer");

  priorityKeysArr.forEach((priorityKey) => {
    let taskPriorityBoard = taskViewer.querySelector(
      `[data-priority-key="${priorityKey}"]`
    );

    //Append the tasks to each priority board
    Object.keys(inboxTaskDataObj[priorityKey]).forEach((taskItemKey) => {
      addTaskToBoard(
        taskItemKey,
        inboxTaskDataObj[priorityKey][taskItemKey],
        taskPriorityBoard
      );
    });
  });
}

function sortTasksByToday(todaysTaskDataObj, taskKeys) {
  let todaysDate = format(new Date(), "PP");

  taskKeys.forEach((priorityKey) => {
    Object.keys(todaysTaskDataObj[priorityKey]).forEach((taskItemKey) => {
      let taskDueDate =
        todaysTaskDataObj[priorityKey][taskItemKey].dueDateValue;

      if (taskDueDate === todaysDate) {
        addTaskToBoard(
          taskItemKey,
          todaysTaskDataObj[priorityKey][taskItemKey]
        );
      }
    });
  });
}

// Need to zero out time component to avoid any date calculation/ conversion issues.
function sortTasksByUpcoming(upcomingTaskDataObj, dueDateKeys) {
  let todaysDate = new Date().setHours(0, 0, 0, 0), // Todays date with time component zero'd out
    weekFromTodaysDate = addDays(todaysDate, 6), // Today's date + 6 days
    dateTaskBoardsArr = document.getElementsByClassName("secondary-task-board");

  dueDateKeys.forEach((priorityKey) => {
    Object.keys(upcomingTaskDataObj[priorityKey]).forEach((taskItemKey) => {
      let taskDueDate = new Date(
          upcomingTaskDataObj[priorityKey][taskItemKey].dueDateValue
        ),
        dayDifference = differenceInDays(weekFromTodaysDate, taskDueDate);

      if (dayDifference < 7 && dayDifference >= 0) {
        addTaskToBoard(
          taskItemKey,
          upcomingTaskDataObj[priorityKey][taskItemKey],
          dateTaskBoardsArr[6 - dayDifference]
        );
      }
    });
  });
}

function sortTasksByCompleted(completedTaskDataObj, orderedCompletionDates) {
  let taskViewer = document.querySelector(".task-viewer");

  // For Testing
  //
  // new Date(2022, 11, 4).setHours(0,0,0,0)
  // test = [
  //   1671091200000, 1670140800000, 1671955200000, 1670400000000, 1671350400000,
  // ],
  // console.log(
  //   orderedCompletionDates.map((date) => {
  //     return format(date, "MMM d - EEEE");
  //   })
  // );
  // console.log(Object.keys(completedTaskDataObj));
  // console.log(orderedCompletionDates);

  // Sort completion dates from most recent to oldest (descending).
  if (orderedCompletionDates.length > 1) {
    orderedCompletionDates = orderedCompletionDates.sort(
      (dateLeft, dateRight) =>
        compareDesc(new Date(dateLeft), new Date(dateRight))
    );
  }

  orderedCompletionDates.forEach((date) => {
    let formattedDate = format(new Date(date), "MMM d - EEEE"),
      dateTaskBoard = secondaryTaskBoard(formattedDate);

    Object.keys(completedTaskDataObj[date]).forEach((taskItemId) => {
      let completedTask = taskItem(
        taskItemId,
        completedTaskDataObj[date][taskItemId]
      );

      addClass(completedTask, "completed");
      removeClass(
        completedTask.querySelector(".checkbox").firstElementChild, // checkmark img element
        "fade-in-out"
      );
      dateTaskBoard.append(completedTask);
    });

    taskViewer.append(dateTaskBoard);
  });
}

function sortTasksByProject(projectTaskDataObj, projectName) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    todaysDate = new Date().setHours(0, 0, 0, 0), // Todays date with time component zero'd out
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

    // If the previous due date is different from the current task's due date,
    // create a new task board to append all tasks with the same due date until a
    // task with a different due date is found
    if (taskValueObj.dueDateValue !== previousEntryDueDate) {
      let dueDate = new Date(taskValueObj.dueDateValue),
        overDueStr =
          compareDesc(todaysDate, dueDate) === -1 ? " - Overdue" : "";

      previousEntryDueDate = taskValueObj.dueDateValue;

      taskBoard = secondaryTaskBoard(
        format(dueDate, "MMM d - EEEE") + overDueStr
      );

      primaryTaskBoard.append(taskBoard);
    }

    addTaskToBoard(taskKey, taskValueObj, taskBoard);
  });
}

function insertTaskBasedOnView(
  primaryTaskBoardHeading,
  taskItemId,
  taskItemObj
) {
  switch (primaryTaskBoardHeading) {
    case "Inbox":
      insertTaskForInboxView(taskItemId, taskItemObj);
      break;
    case "Today":
      insertTaskForTodayView(taskItemId, taskItemObj);
      break;
    case "Upcoming":
      insertTaskForUpcomingView(taskItemId, taskItemObj);
      break;
    case "Completed":
      break;
    default: // Project name
      insertTaskForProject();
      return;
  }
}

function insertTaskForInboxView(taskItemId, taskItemObj) {
  let priorityKey = getTaskPriorityKey(taskItemObj.priorityValue),
    taskBoard = document.querySelector(`[data-priority-key="${priorityKey}"]`);

  addTaskToBoard(taskItemId, taskItemObj, taskBoard);
}

function insertTaskForTodayView(taskItemId, taskItemObj) {
  let taskDueDate = taskItemObj.dueDateValue,
    todaysDate = format(new Date(), "PP");

  if (taskDueDate === todaysDate) {
    addTaskToBoard(taskItemId, taskItemObj);
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
    dateTaskBoardsArr = document.getElementsByClassName("secondary-task-board");

  if (dayDifference < 7 && dayDifference >= 0) {
    addTaskToBoard(
      taskItemId,
      taskItemObj,
      dateTaskBoardsArr[6 - dayDifference]
    );
  }
}

function insertTaskForProject() {
  let projectName = document.querySelector(".main-content-heading").textContent,
    projectTaskDataObj = JSON.parse(getData("projects"));

  clearTaskViewer();
  sortTasksByProject(projectTaskDataObj, projectName);
}

function taskController() {
  // Sort tasks by priority for the Inbox menu tab on page load
  getTaskSortMethod("Inbox");

  addNewTaskButtonListener();
}

export {
  taskController,
  toggleTaskCompletion,
  createCancelButtonListener,
  AddEditButtonListener,
  createDeleteConfirmationOverlayListener,
  deleteConfirmationButtonListener,
  addOrSaveTaskButtonListener,
  clearTaskViewer,
  getTaskSortMethod,
};
