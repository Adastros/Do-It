import { secondaryTaskBoard } from "../appMainContent/secondaryTaskBoard.js";
import {
  addTaskToBoard,
  clearTaskView,
  clearEmptyTaskBoards,
  addMainContentBackground,
  removeMainContentBackground,
  emptyTaskBoardMessage,
  isTaskViewEmpty,
} from "./taskController.js";
import {
  getData,
  getTaskPriorityKey,
  determineLocalStorageKey,
} from "./webStorageController.js";
import { addClass, removeClass } from "../generalHelper/generalHelper.js";
import {
  format,
  addDays,
  differenceInDays,
  isBefore,
  compareDesc,
} from "date-fns";

//
//
//  Sort All Tasks
//
//

function getTaskSortMethod(mainContentHeading) {
  let localStorageKey = determineLocalStorageKey(mainContentHeading),
    overDueTasks = checkForAllOverdueTasks(localStorageKey, mainContentHeading);

  clearTaskView();

  switch (mainContentHeading.toLowerCase()) {
    case "inbox":
      createPriorityBoards();
      sortTasksByInbox();
      break;
    case "today":
      sortTasksByToday(mainContentHeading);
      break;
    case "upcoming":
      createDateTaskBoards();
      sortTasksByUpcoming();
      emptyTaskBoardMessage();
      break;
    case "completed":
      sortTasksByCompleted(mainContentHeading);
      break;
    default: // Sort Project Tabs
      sortTasksByProject(mainContentHeading);
      break;
  }

  if (overDueTasks.length && mainContentHeading !== "Completed") {
    createOverDueTaskBoard(overDueTasks);
  }

  if (mainContentHeading !== "Upcoming") {
    clearEmptyTaskBoards();
  }

  if (isTaskViewEmpty() && mainContentHeading !== "Upcoming") {
    addMainContentBackground(mainContentHeading);
  } else {
    removeMainContentBackground();
  }

  localStorage.previousTab = mainContentHeading;
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
  let taskView = document.querySelector(".task-view"),
    overDueBoard = secondaryTaskBoard("Overdue Tasks");

  addClass(overDueBoard, "overdue-task-board");
  taskView.prepend(overDueBoard);

  overDueTasks.forEach((task) => {
    addTaskToBoard(task[0], task[1], overDueBoard);
  });
}

function createPriorityBoards() {
  let taskView = document.querySelector(".task-view"),
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

    taskView.append(priorityBoard);
  });
}

function createDateTaskBoards() {
  let date = new Date(), //Today's date
    taskView = document.querySelector(".task-view");

  for (let i = 0; i < 7; i++) {
    let formattedDate = format(date, "MMM d - EEEE");

    if (i === 0) {
      formattedDate += " - Today";
    } else if (i === 1) {
      formattedDate += " - Tomorrow";
    }

    taskView.append(secondaryTaskBoard(formattedDate));
    date = addDays(date, 1);
  }
}

function checkForAllOverdueTasks(localStorageKey, mainContentHeading) {
  let todaysDate = new Date().setHours(0, 0, 0, 0),
    taskDataObj = JSON.parse(getData("taskData")),
    projectDataObj = JSON.parse(getData("projects")),
    overDueTasks = [];

  // For project view
  if (localStorageKey === "projects") {
    Object.keys(projectDataObj[mainContentHeading]).forEach((taskKey) => {
      let dueDate = new Date(
        projectDataObj[mainContentHeading][taskKey].dueDateValue
      );

      if (compareDesc(todaysDate, dueDate) === -1) {
        overDueTasks.push([
          taskKey,
          projectDataObj[mainContentHeading][taskKey],
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

function sortTasksByToday(mainContentHeading) {
  let taskView = document.querySelector(".task-view"),
    taskDataObj = JSON.parse(getData("taskData")),
    projectDataObj = JSON.parse(getData("projects")),
    todaysDate = format(new Date(), "PP"),
    todayBoard = secondaryTaskBoard(mainContentHeading);

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

  taskView.append(todayBoard);
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

function sortTasksByCompleted(mainContentHeading) {
  let taskView = document.querySelector(".task-view"),
    completedTaskDataObj = JSON.parse(
      getData(determineLocalStorageKey(mainContentHeading))
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

    taskView.append(dateTaskBoard);
  });
}

function sortTasksByProject(projectName) {
  let taskView = document.querySelector(".task-view"),
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

        taskView.append(taskBoard);
      }

      addTaskToBoard(taskKey, taskValueObj, taskBoard);
    }
  });
}

//
//
//  Sort Tasks Individually
//
//

function insertTaskBasedOnView(mainContentHeading, taskItemId, taskItemObj) {
  if (isTaskOverdue(taskItemObj)) {
    insertOverdueTask(taskItemId, taskItemObj);
  } else {
    switch (mainContentHeading.toLowerCase()) {
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

  if (!todayBoard) {
    getTaskSortMethod("today");
  } else if (taskDueDate === todaysDate) {
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

  clearTaskView();
  getTaskSortMethod(projectName);
}

function isTaskOverdue(taskItemObj) {
  let todaysDate = new Date().setHours(0, 0, 0, 0);

  return isBefore(new Date(taskItemObj.dueDateValue), todaysDate);
}

export { getTaskSortMethod, insertTaskBasedOnView };
