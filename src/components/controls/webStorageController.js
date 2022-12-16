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
function saveTaskItem(taskItemKey, taskItemObj) {
  let priorityKey = getTaskPriority(taskItemObj.priorityValue),
    taskDataObj = JSON.parse(getData("taskData"));

  // add the new task item to the taskData object
  taskDataObj[priorityKey][`${taskItemKey}`] = taskItemObj;
  saveData("taskData", JSON.stringify(taskDataObj));
}

// Get task data from the user's browser's local storage
function getTaskItem(taskItemKey) {
  let taskItem,
    taskDataObj = JSON.parse(getData("taskData")),
    priorityKeyArr = Object.keys(taskDataObj);

  for (let i = 0; i < priorityKeyArr.length; i++) {
    let priorityKey = priorityKeyArr[i];

    if (taskDataObj[priorityKey].hasOwnProperty(`${taskItemKey}`)) {
      taskItem = taskDataObj[priorityKey][`${taskItemKey}`];
      break;
    }
  }

  return taskItem;
}

// Gets a copy of all task data, deletes a task, and rewrites
// the mutated task data back to localStorage. localStorage.removeItem()
// was not used since it only removes the first level of keys available to it.
function deleteTaskItem(taskItemKey) {
  let taskDataObj = JSON.parse(getData("taskData")),
    priorityKeys = Object.keys(taskDataObj);

  for (let i = 0; i < priorityKeys.length; i++) {
    if (taskDataObj[priorityKeys[i]].hasOwnProperty(taskItemKey)) {
      delete taskDataObj[priorityKeys[i]][taskItemKey];
      break;
    }
  }

  saveData("taskData", JSON.stringify(taskDataObj));
}

function saveTaskToCompleted(taskItemKey) {
  let completedTaskDataObj = JSON.parse(getData("completed")),
    taskItemObj = getTaskItem(taskItemKey),
    todaysDate = format(new Date, "MMM d - EEEE");

  // If this is the first task completed for a given day, create the key based on the
  // date completed prior to moving the task data over to the completed key
  if (!completedTaskDataObj.hasOwnProperty(todaysDate)) {
    completedTaskDataObj[todaysDate] = {};
  }

  completedTaskDataObj[todaysDate][`${taskItemKey}`] = taskItemObj;
  saveData("completed", JSON.stringify(completedTaskDataObj));
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

export {
  saveData,
  getData,
  saveTaskItem,
  getTaskItem,
  deleteTaskItem,
  saveTaskToCompleted,
  getTaskPriority,
};
