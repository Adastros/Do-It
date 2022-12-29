import { appLogo } from "./appLogo.js";
import { iconButtonMedium } from "../generalButtons/iconButtonMedium.js";
import { textButton } from "../generalButtons/textButton.js";
import { addClass, createElement } from "../helper/helper.js";
import menuIcon from "../../icons/menu.svg";
import lightIcon from "../../icons/light-theme.svg";

function appHeader() {
  let appHeader = createElement("header"),
    menuButton = iconButtonMedium(menuIcon, "Menu icon"),
    themeButton = iconButtonMedium(lightIcon, "Light theme icon"),
    addNewTaskButton = textButton("Add task", "add-new-task-button"),
    demoButton = textButton("Demo", "demo-button"),
    topRightButtonContainer = createElement("div");

  addClass(menuButton, "menu-button");
  addClass(themeButton, "theme-button");
  addClass(topRightButtonContainer, "top-right-side-button-container");
  addClass(appHeader, "appHeader");

  topRightButtonContainer.append(addNewTaskButton, demoButton, themeButton);
  appHeader.append(menuButton, appLogo(), topRightButtonContainer);

  return appHeader;
}

export { appHeader };
