import { menuTabs } from "./menuTabs.js";
import { projectSection } from "./project/projectSection.js";
import { addClass, createElement } from "../generalHelper/generalHelper.js";

function menubar() {
  let menubar = createElement("div"),
    linebreak = createElement("div");

  addClass(menubar, "menu-bar");
  addClass(linebreak, "linebreak");

  menubar.append(menuTabs(), linebreak, projectSection());

  return menubar;
}

export { menubar };
