import { appHeader } from "./components/appHeader/appHeader.js";
import { taskController } from "./components/controls/taskController.js";
import { menuController } from "./components/controls/menuController";
import { addTaskButton } from "./components/task/addTaskButton.js";
import { addClass, createElement } from "./components/helper/helper.js";
import { menubar } from "./components/menubar/menubar.js";
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
