import { addClass, createElement } from "../helper/helper.js";

function taskViewer() {
  let taskViewer = createElement("div");

  addClass(taskViewer, "task-viewer");

  return taskViewer;
}

export { taskViewer };
