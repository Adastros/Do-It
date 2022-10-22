import { addClass, createElement } from "../helper.js";
import plusIcon from "../icons/plus.svg";

function newProjectButton() {
  let newProjectButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", plusIcon);
  icon.setAttribute("alt", "Add new project icon");

  addClass(newProjectButton, "new-project-button");

  newProjectButton.append(icon);

  return newProjectButton;
}

export { newProjectButton };
