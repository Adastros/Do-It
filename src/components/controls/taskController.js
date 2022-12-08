import { format, addDays, differenceInDays } from "date-fns";
import { taskForm } from "../appMainContent/task/taskForm.js";
import { taskItem } from "../appMainContent/task/taskItem.js";
import { taskPriorityBoard } from "../appMainContent/taskPriorityBoard.js";
import {
  saveTaskItem,
  getTaskItem,
  getData,
  getTaskPriority,
} from "./webStorageController.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { toggleClass } from "../helper/helper.js";

function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let newTaskForm = taskForm("Add Task", createTaskItemObj());

    document.body.append(newTaskForm);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    cancelTaskFormListener(newTaskForm);
    addOrSaveTaskButtonListener(newTaskForm);
    missingValueAggressiveValidation(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskFormListener(taskForm, taskItemId) {
  let formCancelButton = taskForm.querySelector(".form-cancel-button");

  formCancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer");

    // Reverts the task information back to its original data.
    // Checks to see if user is editing a task by checking if a
    // taskItemId exists.
    if (taskItemId) {
      let currentTaskItemObj = getTaskItem(taskItemId);

      taskViewer.insertBefore(
        taskItem(taskItemId, currentTaskItemObj),
        taskForm.nextSibling
      );
    }

    taskForm.remove();
  });
}

function addOrSaveTaskButtonListener(taskForm, taskItemId) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let taskItemObj = createTaskItemObj(taskForm),
      currentTaskBoardView = document.querySelector(".main-content-heading");

    if (!taskItemId) {
      // This is where the taskItemId is created. Only enters if the user is creating a new task.
      // Otherwise, the user is editing and saving a task. A new task item # is not needed.
      taskItemId = createTaskItemIdNumber();
    } else {
      // If the user edits and saves a task, remove the task before replacing it
      // with an updated version of it
      document.querySelector(`[data-task-item-id = '${taskItemId}']`).remove();
    }

    saveTaskItem(taskItemId, taskItemObj);
    insertTaskBasedOnView(taskItemId, taskItemObj, currentTaskBoardView);
    taskForm.remove();
  });
}

// Adds tasks to the relevant board based on the page view
function addTaskToBoard(taskItemId, taskItemObj, taskBoard) {
  if (!taskItemObj) {
    taskItemObj = getTaskItem(taskItemId);
  }

  if (!taskBoard) {
    taskBoard = document.querySelector(".task-viewer");
  }

  taskBoard.append(taskItem(taskItemId, taskItemObj));
}

function AddEditButtonListener(editButton, taskItemId) {
  editButton.addEventListener("click", () => {
    let currentTaskItemObj = getTaskItem(taskItemId);

    // Create the task edit form and render it on the screen
    let taskEditForm = taskForm("Save", currentTaskItemObj);
    document.body.append(taskEditForm);

    // Get the task edit form header and save button to validate and
    // toggle button status, respectively.
    let formTaskHeader = taskEditForm.querySelector("#form-task-header"),
      formAddTaskButton = taskEditForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Set listeners for task edit form
    cancelTaskFormListener(taskEditForm, taskItemId);
    addOrSaveTaskButtonListener(taskEditForm, taskItemId);
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

function getSortAllTasksMethod(tabName) {
  let taskDataObj = JSON.parse(getData("taskData")),
    priorityKeyArr = Object.keys(taskDataObj);

  switch (tabName) {
    case "Inbox":
      // Create the task priority boards first before sorting tasks
      createTaskPriorityBoards();
      sortAllTasksByInbox(taskDataObj, priorityKeyArr);
      break;
    case "Today":
      sortAllTasksByToday(taskDataObj, priorityKeyArr);
      break;
    case "Upcoming":
      sortAllTasksByUpcoming(taskDataObj, priorityKeyArr);
      break;
    default:
      return;
  }

  localStorage.previousMenuTab = tabName;
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
    taskViewer.append(taskPriorityBoard(boardHeader, priorityKeys[i]));
  });
}

function sortAllTasksByInbox(taskDataObj, priorityKeyArr) {
  let taskViewer = document.querySelector(".task-viewer");

  priorityKeyArr.forEach((priorityKey) => {
    let taskPriorityBoard = taskViewer.querySelector(
      `[data-priority-key="${priorityKey}"]`
    );

    let priorityBoardTaskList = taskPriorityBoard.querySelector(".task-list");

    //Append the tasks to each priority board
    Object.keys(taskDataObj[priorityKey]).forEach((taskItemKey) => {
      addTaskToBoard(
        taskItemKey,
        taskDataObj[priorityKey][taskItemKey],
        priorityBoardTaskList
      );
    });
  });
}

function sortAllTasksByToday(taskDataObj, priorityKeyArr) {
  let todaysDate = format(new Date(), "PP");

  priorityKeyArr.forEach((priorityKey) => {
    Object.keys(taskDataObj[priorityKey]).forEach((taskItemKey) => {
      let taskDueDate = taskDataObj[priorityKey][taskItemKey].dueDateValue;

      if (taskDueDate === todaysDate) {
        addTaskToBoard(taskItemKey, taskDataObj[priorityKey][taskItemKey]);
      }
    });
  });
}

function sortAllTasksByUpcoming(taskDataObj, priorityKeyArr) {
  let todaysDate = new Date(),
    weekFromTodaysDate = addDays(todaysDate, 6);

  priorityKeyArr.forEach((priorityKey) => {
    Object.keys(taskDataObj[priorityKey]).forEach((taskItemKey) => {
      let taskDueDate = new Date(
          taskDataObj[priorityKey][taskItemKey].dueDateValue
        ),
        dayDifference = differenceInDays(weekFromTodaysDate, taskDueDate);

      if (dayDifference < 7 && dayDifference >= 0) {
        addTaskToBoard(taskItemKey, taskDataObj[priorityKey][taskItemKey]);
      }
    });
  });
}

function insertTaskBasedOnView(taskItemId, taskItemObj, currentTaskBoardView) {
  let taskViewer = document.querySelector(".task-viewer");

  switch (currentTaskBoardView.textContent) {
    case "Inbox":
      insertTaskForInboxView(taskItemId, taskItemObj, taskViewer);
      break;
    case "Today":
      insertTaskForTodayView(taskItemId, taskItemObj, taskViewer);
      break;
    case "Upcoming":
      insertTaskForUpcomingView(taskItemId, taskItemObj, taskViewer);
      break;
    default:
      return;
  }
}

function insertTaskForInboxView(taskItemId, taskItemObj, taskViewer) {
  let priorityKey = getTaskPriority(taskItemObj.priorityValue),
    taskBoard = taskViewer.querySelector(
      `[data-priority-key="${priorityKey}"]`
    ),
    taskList = taskBoard.querySelector(".task-list");

  addTaskToBoard(taskItemId, taskItemObj, taskList);
}

function insertTaskForTodayView(taskItemId, taskItemObj, taskViewer) {
  let taskDueDate = getTaskPriority(taskItemObj.dueDateValue),
    todaysDate = format(new Date(), "PP"),
    taskList = taskViewer.querySelector(".task-list");

  if (taskDueDate === todaysDate) {
    addTaskToBoard(taskItemId, taskItemObj, taskList);
  }
}

function insertTaskForUpcomingView(taskItemId, taskItemObj, taskViewer) {
  let taskDueDate = getTaskPriority(taskItemObj.dueDateValue),
    weekFromTodaysDate = addDays(new Date(), 6), // today's date + 6 days
    dayDifference = differenceInDays(weekFromTodaysDate, taskDueDate),
    taskList = taskViewer.querySelector(".task-list");

  if (dayDifference < 7 && dayDifference >= 0) {
    addTaskToBoard(taskItemId, taskItemObj, taskList);
  }
}

function taskController() {
  // Sort tasks by priority for the Inbox menu tab on page load
  getSortAllTasksMethod("Inbox");

  addNewTaskButtonListener();
}

export {
  taskController,
  toggleTaskStatus,
  AddEditButtonListener,
  addOrSaveTaskButtonListener,
  clearTaskViewer,
  getSortAllTasksMethod,
};
