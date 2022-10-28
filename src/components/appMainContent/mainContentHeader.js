import { addClass, createElement } from "../helper/helper.js";

function mainContentHeader() {
  let mainContentHeader = createElement("div");

  addClass(mainContentHeader, "main-content-header");

  return mainContentHeader;
}

export { mainContentHeader };
