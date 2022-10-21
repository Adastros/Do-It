import { addClass, createElement } from "../helper.js";
import listIcon from "../icons/view-list.svg";

function listViewButton() {
  let listViewButton = createElement("button"),
    icon = createElement("img");

  listViewButton.textContent = "List View";

  icon.setAttribute("src", listIcon);
  icon.setAttribute("alt", "List icon");

  addClass(listViewButton, "view-button");

  listViewButton.prepend(icon);

  return listViewButton;
}

export { listViewButton };
