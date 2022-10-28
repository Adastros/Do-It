import { addTaskButton } from "./task/addTaskButton.js";
import { addClass, createElement } from "../helper/helper.js";

function taskViewer() {
  let taskViewer = createElement("div");

  addClass(taskViewer, "task-viewer");

  taskViewer.append(addTaskButton());

  return taskViewer;
}

export { taskViewer };
