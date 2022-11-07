import { addNewTaskButton } from "./task/addNewTaskButton.js";
import { addClass, createElement } from "../helper/helper.js";

function taskViewer() {
  let taskViewer = createElement("div");

  addClass(taskViewer, "task-viewer");

  taskViewer.append(addNewTaskButton());

  return taskViewer;
}

export { taskViewer };
