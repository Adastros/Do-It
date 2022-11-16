// Save task items to the user's browser's local storage
function saveTaskItem(taskItemKey, taskItemObj) {
  localStorage.setItem(taskItemKey, JSON.stringify(taskItemObj));
}

export { saveTaskItem };
