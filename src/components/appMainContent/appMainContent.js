import { mainContentHeader } from "./mainContentHeader.js";
import { taskViewer } from "./taskViewer.js";
import { addClass, createElement } from "../helper/helper.js";

function appMainContent() {
  let appMainContent = createElement("div"),
    linebreak = createElement("div");

  addClass(linebreak, "linebreak");
  addClass(appMainContent, "main-content", "scrollable-y");

  appMainContent.append(mainContentHeader(), linebreak, taskViewer());

  return appMainContent;
}

export { appMainContent };
