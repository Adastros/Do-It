import { appHeader } from "./components/appHeader/appHeader.js";
import { appMainContent } from "./components/appMainContent/appMainContent.js";
import { taskController } from "./components/controls/taskController.js";
import { menuController } from "./components/controls/menuController";
import { createElement } from "./components/helper/helper.js";
import { menubar } from "./components/menubar/menubar.js";
import { saveTaskItem } from "./components/controls/webStorageController.js";
import "./stylesheets/style.css";

function initLocalStorageGlobalVariables() {
  saveTaskItem("previousMenuTab", "");
}

function initControllers() {
  taskController();
  menuController();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = createElement("main");

  mainTag.append(menubar(), appMainContent());
  bodyTag.append(appHeader(), mainTag);
}

(function initApp() {
  renderPage();
  initLocalStorageGlobalVariables();
  initControllers();
})();
