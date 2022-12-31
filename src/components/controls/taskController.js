import { format, addDays, differenceInDays, compareDesc } from "date-fns";
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
      ).textContent,
      taskToEdit = document.querySelector(
        `[data-task-item-id="${taskItemId}"]`
      ),
      currentTask = getTaskItem(primaryTaskBoardHeading, taskItemId);

    deleteTaskItem(primaryTaskBoardHeading, taskItemId);
    saveTaskItem(primaryTaskBoardHeading, taskItemId, editedTaskObj);

    switch (primaryTaskBoardHeading.toLowerCase()) {
      case "inbox":
        if (currentTask.priorityValue === editedTaskObj.priorityValue) {
          editTaskInPlace(taskToEdit, editedTaskObj);
        } else {
          removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskToEdit);
          insertTaskBasedOnView(
            primaryTaskBoardHeading,
            taskItemId,
            editedTaskObj
          );
        }
        break;
      case "upcoming":
        if (currentTask.dueDateValue === editedTaskObj.dueDateValue) {
          editTaskInPlace(taskToEdit, editedTaskObj);
        } else {
          removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskToEdit);
          insertTaskBasedOnView(
            primaryTaskBoardHeading,
            taskItemId,
            editedTaskObj
          );
        }
        break;
      case "today":
      case "completed":
        editTaskInPlace(taskToEdit, editedTaskObj);
        break;
      default: // Projects
        removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskToEdit);
        insertTaskBasedOnView(
          primaryTaskBoardHeading,
          taskItemId,
          editedTaskObj
        );
        break;
    }

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

function editTaskInPlace(taskToEdit, taskItemObj) {
  let taskHeader = taskToEdit.querySelector(".task-header"),
    dueDate = taskToEdit.querySelector(
      ".date-and-priority-indicator-container"
    ).firstElementChild,
    priority = taskToEdit.querySelector(
      ".date-and-priority-indicator-container"
    ).lastElementChild;

  taskHeader.textContent = taskItemObj.headerValue;
  dueDate.textContent = "Due Date: " + taskItemObj.dueDateValue;
  priority.textContent =
    "Priority: " + capitalizeFirstLetter(taskItemObj.priorityValue);
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
    saveTaskButtonListener(taskEditForm, taskItemId);
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
      task = getTaskItem(primaryTaskBoardHeading, taskItemId);

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

function clearTaskViewer() {
  let taskViewer = document.querySelector(".task-viewer");

  while (taskViewer.firstElementChild) {
    taskViewer.firstElementChild.remove();
  }
}

function clearProjectTabs() {
  document.querySelector(".project-list").remove();
}

function reloadProjectTabs() {
  let projectSection = document.querySelector(".project-section");

  projectSection.append(projectList());
}

function getTaskSortMethod(tabName) {
  let localStorageKey = determineLocalStorageKey(tabName),
    taskDataObj = JSON.parse(getData(localStorageKey)),
    taskDataKeys = Object.keys(taskDataObj);

  clearTaskViewer();

  switch (tabName.toLowerCase()) {
    case "inbox":
      // Create the task priority boards first before sorting tasks
      sortTasksByInbox(taskDataObj, taskDataKeys);
      break;
    case "today":
      sortTasksByToday(taskDataObj, taskDataKeys);
      break;
    case "upcoming":
      createDateTaskBoards();
      sortTasksByUpcoming(taskDataObj, taskDataKeys);
      break;
    case "completed":
      sortTasksByCompleted(taskDataObj, taskDataKeys);
      break;
    default: // Sort Project Tabs
      sortTasksByProject(taskDataObj, tabName);
      break;
  }

  localStorage.previousTab = tabName;
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
  let taskViewer = document.querySelector(".task-viewer"),
    priorityBoardHeaderArr = ["High", "Medium", "Low", "No"],
    priorityKeys = [
      "highPriorityTasks",
      "mediumPriorityTasks",
      "lowPriorityTasks",
      "noPriorityTasks",
    ];

  priorityKeysArr.forEach((priorityKey, i) => {
    // Check if an object is empty before appending tasks to the
    // priority board. If empty, do not create the priority task board.
    if (Object.keys(inboxTaskDataObj[priorityKey]).length) {
      let priorityBoard = secondaryTaskBoard(
        priorityBoardHeaderArr[i] + " Priority"
      );

      // An identifier that is used when sorting through task data
      // to append tasks based on priority.
      priorityBoard.dataset.priorityKey = priorityKeys[i];

      //Append the tasks to each priority board
      Object.keys(inboxTaskDataObj[priorityKey]).forEach((taskItemKey) => {
        addTaskToBoard(
          taskItemKey,
          inboxTaskDataObj[priorityKey][taskItemKey],
          priorityBoard
        );
      });

      taskViewer.append(priorityBoard);
    }
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
      insertTaskForCompleted(taskItemId, taskItemObj);
      break;
    default: // Project name
      insertTaskForProject();
      break;
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

function insertTaskForCompleted(taskItemId, taskItemObj) {
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

function insertTaskForProject() {
  let projectName = document.querySelector(".main-content-heading").textContent,
    projectTaskDataObj = JSON.parse(getData("projects"));

  clearTaskViewer();
  sortTasksByProject(projectTaskDataObj, projectName);
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
    clearTaskViewer();
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
  clearTaskViewer,
  getTaskSortMethod,
  emptyTaskData,
};
