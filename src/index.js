import { appHeader } from "./components/appHeader.js";
import { taskController } from "./components/taskController.js";
import { menuController } from "./components/menuController";
import { addTaskButton } from "./components/addTaskButton.js";
import { addClass, createElement } from "./helper.js";
import { menubar } from "./components/menubar.js";
import "./stylesheets/style.css";

function initControllers() {
  taskController();
  menuController();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = createElement("main"),
    taskList = createElement("div"),
    addTaskButtonOnLoad = addTaskButton();

  addClass(taskList, "task-list");

  taskList.append(addTaskButtonOnLoad);
  mainTag.append(menubar(), taskList);
  bodyTag.append(appHeader(), mainTag);
}

(function initApp() {
  renderPage();
  initControllers();
})();
