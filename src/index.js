import { taskController } from "./components/taskController.js";
import { addTaskButton } from "./components/addTaskButton.js";
import { addClass, createElement } from "./helper.js";
import "./stylesheets/style.css";

function initControllers() {
  taskController();
}

function renderPage() {
  let taskList = createElement("div"),
    addTaskButtonOnLoad = addTaskButton();

  addClass(taskList, "task-list");

  taskList.append(addTaskButtonOnLoad);
  document.body.append(taskList);
}

(function initApp() {
  renderPage();
  initControllers();
})();
