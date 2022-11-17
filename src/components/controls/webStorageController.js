// Save task items to the user's browser's local storage
function saveTaskItem(taskItemKey, taskItemObj) {
  localStorage.setItem(taskItemKey, JSON.stringify(taskItemObj));
}

function getTaskItem(taskItemKey) {
  return JSON.parse(localStorage.getItem(taskItemKey));
}

export { saveTaskItem, getTaskItem };
