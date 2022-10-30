import { tab } from "./tab.js";
import { addClass, createElement } from "../helper/helper.js";

function menuTabs() {
  let menuTabs = createElement("div"),
    tabArr = ["Inbox", "Today", "Upcoming", "Completed"];

  for (let i = 0; i < 4; i++) {
    let tabSpecificClass = "menu-tab-" + tabArr[i].toLowerCase();
    menuTabs.append(tab(tabArr[i], "tab", tabSpecificClass));
  }

  addClass(menuTabs, "menu-tabs");

  return menuTabs;
}

export { menuTabs };
