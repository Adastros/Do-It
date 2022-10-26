import { tab } from "./tab.js";
import { addClass, createElement } from "../helper/helper.js";

function menuTabs() {
  let menuTabs = createElement("div"),
    tabArr = ["Inbox", "Today", "This Week", "Completed"];

  for (let i = 0; i < 4; i++) {
    menuTabs.append(tab(tabArr[i], 'tab'));
  }

  addClass(menuTabs, "menu-tabs");

  return menuTabs;
}

export { menuTabs };
