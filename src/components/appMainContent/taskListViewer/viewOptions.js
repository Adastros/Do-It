import { boardViewButton } from "./boardViewButton.js";
import { listViewButton } from "./listViewButton.js";
import { addClass, createElement } from "../helper/helper.js";

function viewOptions() {
  let viewOptions = createElement("div");

  addClass(viewOptions, "view-options");

  viewOptions.append(boardViewButton(), listViewButton());

  return viewOptions;
}

export { viewOptions };
