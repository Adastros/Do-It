import { addClass, createElement } from "../helper.js";
import menuIcon from "../icons/menu.svg";

function menuButton() {
  let menuButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", menuIcon);
  icon.setAttribute("alt", "Menu icon");

  addClass(menuButton, "menu-button");

  menuButton.append(icon);

  return menuButton;
}

export { menuButton };
