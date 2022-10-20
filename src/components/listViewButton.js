import { addClass, createElement } from "../helper.js";
import listIcon from "../icons/view-list.svg";

function listViewButton() {
  let listViewButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", listIcon);
  icon.setAttribute("alt", "List icon");

  addClass(listViewButton, "view-button");

  listViewButton.append(icon);

  return listViewButton;
}

export { listViewButton };
