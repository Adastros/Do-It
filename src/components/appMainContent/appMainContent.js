import { mainContentHeader } from "./mainContentHeader.js";
import { taskView } from "./taskView.js";
import { addClass, createElement } from "../generalHelper/generalHelper.js";

function appMainContent() {
  let appMainContent = createElement("div"),
    linebreak = createElement("div");

  addClass(linebreak, "linebreak");
  addClass(appMainContent, "main-content");

  appMainContent.append(mainContentHeader(), linebreak, taskView());

  return appMainContent;
}

export { appMainContent };
