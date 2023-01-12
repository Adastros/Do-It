import { addClass, createElement } from "../generalHelper/generalHelper.js";

function tab(text, ...cssClass) {
  let tab = createElement("div"),
    tabName = createElement("div");

  tabName.textContent = text;
  addClass(tabName, "tab-name");
  addClass(tab, ...cssClass);

  tab.append(tabName);

  return tab;
}

export { tab };
