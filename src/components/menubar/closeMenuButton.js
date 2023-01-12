import { addClass, createElement } from "../generalHelper/generalHelper.js";
import closeMenuIcon from "../../icons/close.svg";

function closeMenuButton() {
  let closeMenuButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", closeMenuIcon);
  icon.setAttribute("alt", "Close menu icon");

  addClass(closeMenuButton, "close-menu-button");

  closeMenuButton.append(icon);

  return closeMenuButton;
}

export { closeMenuButton };
