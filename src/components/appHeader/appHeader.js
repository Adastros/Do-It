import { appLogo } from "./appLogo.js";
import { iconButtonMedium } from "../generalButtons/iconButtonMedium.js";
import { addClass, createElement } from "../helper/helper.js";
import menuIcon from "../../icons/menu.svg";
import lightIcon from "../../icons/light-theme.svg";

function appHeader() {
  let appHeader = createElement("header"),
    menuButton = iconButtonMedium(menuIcon, "Menu icon"),
    themeButton = iconButtonMedium(lightIcon, "Light theme icon");

  addClass(menuButton, "menu-button");
  addClass(themeButton, "theme-button");
  addClass(appHeader, "appHeader");
  appHeader.append(menuButton, appLogo(), themeButton);

  return appHeader;
}

export { appHeader };
