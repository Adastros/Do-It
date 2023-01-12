import { appLogo } from "./appLogo.js";
import { iconButtonMedium } from "../generalButtons/iconButtonMedium.js";
import { textButton } from "../generalButtons/textButton.js";
import { iconAndTextButton } from "../generalButtons/iconAndTextButton.js";
import { addClass, createElement } from "../generalHelper/generalHelper.js";
import menuIcon from "../../icons/menu.svg";
import addIcon from "../../icons/plus.svg";

function appHeader() {
  let appHeader = createElement("header"),
    menuButton = iconButtonMedium(menuIcon, "Menu icon"),
    addNewTaskButton = iconAndTextButton(
      "Add task",
      addIcon,
      "",
      "add-new-task-button"
    ),
    demoButton = textButton("Demo", "demo-button"),
    topRightButtonContainer = createElement("div");

  addClass(menuButton, "menu-button");
  addClass(topRightButtonContainer, "top-right-side-button-container");
  addClass(appHeader, "appHeader");

  topRightButtonContainer.append(addNewTaskButton, demoButton);
  appHeader.append(menuButton, appLogo(), topRightButtonContainer);

  return appHeader;
}

export { appHeader };
