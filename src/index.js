import { appHeader } from "./components/appHeader.js";
import { taskController } from "./components/taskController.js";
import { addTaskButton } from "./components/addTaskButton.js";
import { addClass, createElement } from "./helper.js";
import "./stylesheets/style.css";

function initControllers() {
  taskController();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = createElement("main"),
    taskList = createElement("div"),
    addTaskButtonOnLoad = addTaskButton();

  addClass(taskList, "task-list");

  taskList.append(addTaskButtonOnLoad);
  mainTag.append(taskList);
  bodyTag.append(appHeader(), mainTag);
}

(function initApp() {
  renderPage();
  initControllers();
})();
