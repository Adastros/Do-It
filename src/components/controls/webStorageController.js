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

export { saveData, getData, saveTaskItem, getTaskItem, getTaskPriority };
