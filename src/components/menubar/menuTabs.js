import { tab } from "./tab.js";
import { changeTaskViewListener } from "../controls/menuController.js";
import { addClass, createElement } from "../generalHelper/generalHelper.js";
import "../../stylesheets/menuTabs.css";

function menuTabs() {
  let menuTabContainer = createElement("div"),
    tabArr = ["Inbox", "Today", "Upcoming", "Completed"];

  for (let i = 0; i < 4; i++) {
    let tabSpecificClass = "menu-tab-" + tabArr[i].toLowerCase(),
      menuTab = tab(tabArr[i], "tab", tabSpecificClass);

    menuTabContainer.append(menuTab);
    changeTaskViewListener(menuTab);
  }

  addClass(menuTabContainer, "menu-tabs");

  return menuTabContainer;
}

export { menuTabs };
