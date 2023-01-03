import { addClass, createElement } from "../helper/helper.js";

function mainContentHeader() {
  let mainContentHeader = createElement("div"),
    headingContainer = createElement("div"),
    heading = createElement("h1");

  // On page load, Inbox is loaded by default.
  heading.textContent = "Inbox";

  addClass(mainContentHeader, "main-content-header");
  addClass(headingContainer, "main-content-heading-container");
  addClass(heading, "main-content-heading");

  headingContainer.append(heading);
  mainContentHeader.append(headingContainer);

  return mainContentHeader;
}

export { mainContentHeader };
