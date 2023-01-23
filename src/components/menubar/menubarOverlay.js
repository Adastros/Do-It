import { addClass, createElement } from "../generalHelper/generalHelper.js";

// Only used when the width of the overlay is less than 1050px
function menubarOverlay() {
  let menubarOverlay = createElement("div");

  addClass(menubarOverlay, "hide");

  return menubarOverlay;
}

export { menubarOverlay };
