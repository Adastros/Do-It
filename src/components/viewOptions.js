import { boardViewButton } from "../components/boardViewButton.js";
import { listViewButton } from "../components/listViewButton.js";
import { addClass, createElement } from "../helper.js";

function viewOptions() {
  let viewOptions = createElement("div");

  addClass(viewOptions, "viewOptions");

  viewOptions.append(boardViewButton(), listViewButton());

  return viewOptions;
}

export { viewOptions };
