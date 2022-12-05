import { createTaskPriorityBoards } from "../controls/taskController.js";
import { addNewTaskButton } from "./task/addNewTaskButton.js";
import { addClass, createElement } from "../helper/helper.js";

function taskViewer() {
  let taskViewer = createElement("div");

  addClass(taskViewer, "task-viewer");

  taskViewer.append(addNewTaskButton());

  // createTaskPriorityBoards(taskViewer);

  return taskViewer;
}

export { taskViewer };
