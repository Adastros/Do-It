import { addClass, createElement } from "../helper.js";
import boardIcon from "../icons/view-board.svg";

function boardViewButton() {
  let boardViewButton = createElement("button"),
    icon = createElement("img");

  boardViewButton.textContent = "Board View";

  icon.setAttribute("src", boardIcon);
  icon.setAttribute("alt", "Board view icon");

  addClass(boardViewButton, "view-button");

  boardViewButton.prepend(icon);

  return boardViewButton;
}

export { boardViewButton };
