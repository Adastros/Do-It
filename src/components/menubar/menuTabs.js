import { tab } from "./tab.js";
import { createTabListener } from "../controls/menuController.js";
import { addClass, createElement } from "../helper/helper.js";

function menuTabs() {
  let menuTabContainer = createElement("div"),
    tabArr = ["Inbox", "Today", "Upcoming", "Completed"];

  for (let i = 0; i < 4; i++) {
    let tabSpecificClass = "menu-tab-" + tabArr[i].toLowerCase(),
      menuTab = tab(tabArr[i], "tab", tabSpecificClass);

    menuTabContainer.append(menuTab);
    createTabListener(menuTab);
  }

  addClass(menuTabContainer, "menu-tabs");

  return menuTabContainer;
}

export { menuTabs };
