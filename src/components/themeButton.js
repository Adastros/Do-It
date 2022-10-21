import { addClass, createElement } from "../helper.js";
import lightIcon from "../icons/light-theme.svg";

function themeButton() {
  let themeButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", lightIcon);
  icon.setAttribute("alt", "Light theme icon");

  addClass(themeButton, "theme-button");

  themeButton.append(icon);

  return themeButton;
}

export { themeButton };
