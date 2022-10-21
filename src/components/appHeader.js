import { appLogo } from "./appLogo.js";
import { menuButton } from "../components/menuButton.js";
import { themeButton } from "../components/themeButton.js";
import { viewOptions } from "./viewOptions.js";
import { addClass, createElement } from "../helper.js";

function appHeader() {
  let appHeader = createElement("header");

  addClass(appHeader, "appHeader");
  appHeader.append(menuButton(), appLogo(), themeButton());

  return appHeader;
}

export { appHeader };
