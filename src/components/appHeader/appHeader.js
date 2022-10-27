import { appLogo } from "./appLogo.js";
import { iconButton } from "../generalButtons/iconButton.js";
import { addClass, createElement } from "../helper/helper.js";
import menuIcon from "../../icons/menu.svg";
import lightIcon from "../../icons/light-theme.svg";

function appHeader() {
  let appHeader = createElement("header"),
    menuButton = iconButton(menuIcon, "Menu icon", "menu-button"),
    themeButton = iconButton(lightIcon, "Light theme icon", "theme-button");

  addClass(appHeader, "appHeader");
  appHeader.append(menuButton, appLogo(), themeButton);

  return appHeader;
}

export { appHeader };
