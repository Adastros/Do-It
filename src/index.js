import { taskController } from "./components/taskController.js";
import { createAddTaskButton } from "./components/addTaskButton.js";
import { addClass, createElement } from "./helper.js";
import "./stylesheets/style.css";

function initControllers() {
  taskController();
}

function renderPage() {
  let taskListContainer = createElement("div"),
    addTaskButton = createAddTaskButton();

  taskListContainer.append(addTaskButton);
  document.body.append(taskListContainer);
}

(function initApp() {
  console.log("hello");
  renderPage();
  initControllers();
})();
