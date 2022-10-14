import { taskController } from "./components/taskController.js";
import { addTaskButton } from "./components/addTaskButton.js";
import { addClass, createElement } from "./helper.js";
import "./stylesheets/style.css";

function initControllers() {
  taskController();
}

function renderPage() {
  let taskListContainer = createElement("div"),
    addTaskButtonOnLoad = addTaskButton();

  addClass(taskListContainer, "task-list");

  taskListContainer.append(addTaskButtonOnLoad);
  document.body.append(taskListContainer);
}

(function initApp() {
  renderPage();
  initControllers();
})();
