import { appLogo } from "./appLogo.js";
import { menuButton } from "../components/menuButton.js";
import { viewOptions } from "./viewOptions.js";
import { addClass, createElement } from "../helper.js";

function appHeader() {
  let appHeader = createElement("header");

  addClass(appHeader, "appHeader");
  appHeader.append(menuButton(), appLogo(), viewOptions());

  return appHeader;
}

export { appHeader };
