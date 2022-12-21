import { format } from "date-fns";

// Save general data to the user's browser's local storage
function saveData(key, value) {
  localStorage.setItem(key, value);
}

// Get general data from the user's browser's local storage
function getData(key) {
  return localStorage.getItem(key);
}

// Save task data to the user's browser's local storage
function saveTaskItem(localStorageKey, taskItemKey, taskItemObj) {
  let localStorageDataObj = JSON.parse(getData(localStorageKey));

  if (localStorageKey === "taskData") {
    let priorityKey = getTaskPriority(taskItemObj.priorityValue);
    // add the new task item to the taskData object
    localStorageDataObj[priorityKey][`${taskItemKey}`] = taskItemObj;
  } else {
    let todaysDate = format(new Date(), "PP");

    // If this is the first task completed for a given day, create the key based on the
    // date completed prior to moving the task data over to the completed key
    if (!localStorageDataObj.hasOwnProperty(todaysDate)) {
      localStorageDataObj[todaysDate] = {};
    }

    localStorageDataObj[todaysDate][`${taskItemKey}`] = taskItemObj;
  }

  saveData(localStorageKey, JSON.stringify(localStorageDataObj));
}

function saveProjectTaskData(projectName, taskItemKey, taskItemObj) {
  let projectData = JSON.parse(getData("projects"));

  if (projectData.hasOwnProperty(projectName)) {
    console.log("There is a project with this name already!");
    return;
  }

  if (!taskItemKey) {
    projectData[projectName] = {};
  } else {
    projectData[projectName][taskItemKey] = taskItemObj;
  }

  saveData("projects", JSON.stringify(projectData));
}

// Get task data from the user's browser's local storage
function getTaskItem(localStorageKey, taskItemKey) {
  let taskItem,
    localStorageDataObj = JSON.parse(getData(localStorageKey)),
    localStoragePrimaryKeys = Object.keys(localStorageDataObj);

  for (let i = 0; i < localStoragePrimaryKeys.length; i++) {
    let localStorageSecondaryKeys = localStoragePrimaryKeys[i];

    if (
      localStorageDataObj[localStorageSecondaryKeys].hasOwnProperty(
        `${taskItemKey}`
      )
    ) {
      taskItem =
        localStorageDataObj[localStorageSecondaryKeys][`${taskItemKey}`];
      break;
    }
  }

  return taskItem;
}

// Gets a copy of all task data, deletes a task, and rewrites
// the mutated task data back to localStorage. localStorage.removeItem()
// was not used since it only removes the first level of keys available to it.
function deleteTaskItem(localStorageKey, taskItemKey) {
  let localStorageDataObj = JSON.parse(getData(localStorageKey)),
    localStorageDataObjKeys = Object.keys(localStorageDataObj);

  for (let i = 0; i < localStorageDataObjKeys.length; i++) {
    if (
      localStorageDataObj[localStorageDataObjKeys[i]].hasOwnProperty(
        taskItemKey
      )
    ) {
      delete localStorageDataObj[localStorageDataObjKeys[i]][taskItemKey];
      break;
    }
  }

  saveData(localStorageKey, JSON.stringify(localStorageDataObj));
}

function getTaskPriority(priorityValue) {
  let priorityKey;

  switch (priorityValue) {
    case "high":
      priorityKey = "highPriorityTasks";
      break;
    case "medium":
      priorityKey = "mediumPriorityTasks";
      break;
    case "low":
      priorityKey = "lowPriorityTasks";
      break;
    case "none":
      priorityKey = "noPriorityTasks";
      break;
    default:
      console.log("Priority Value does not exist.");
      return;
  }

  return priorityKey;
}

function determineLocalStorageKey(currentTaskBoardViewHeading) {
  let key;

  switch (currentTaskBoardViewHeading) {
    case "Inbox":
    case "Today":
    case "Upcoming":
      key = "taskData";
      break;
    case "Completed":
      key = "completed";
      break;
    default: // Project specific data
      key = currentTaskBoardViewHeading.toLowerCase();
      break;
  }

  return key;
}

export {
  saveData,
  getData,
  saveTaskItem,
  saveProjectTaskData,
  getTaskItem,
  deleteTaskItem,
  getTaskPriority,
  determineLocalStorageKey,
};
