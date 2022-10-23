import { menuTabs } from "./menuTabs.js";
import { projectSection } from "./projectSection.js";
import { addClass, createElement } from "../helper.js";

function menubar() {
  let menubar = createElement("div"),
    linebreak = createElement("div");

  addClass(menubar, "menu-bar");
  //addClass(menubar, "open");
  addClass(linebreak, "linebreak");

  menubar.append(menuTabs(), linebreak, projectSection());

  return menubar;
}

export { menubar };
