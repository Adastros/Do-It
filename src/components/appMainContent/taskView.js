import { addClass, createElement } from "../generalHelper/generalHelper.js";
import "../../stylesheets/taskView.css";

function taskView() {
  let taskView = createElement("div");

  addClass(taskView, "task-view");

  return taskView;
}

export { taskView };
