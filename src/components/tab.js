import { addClass, createElement } from "../helper.js";

function tab(text, cssClass) {
  let tab = createElement("div");

  tab.textContent = text;
  addClass(tab, cssClass);

  return tab;
}

export { tab };
