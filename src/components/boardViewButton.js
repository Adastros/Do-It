import { addClass, createElement } from "../helper.js";
import boardIcon from "../icons/view-board.svg";

function boardViewButton() {
  let boardViewButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", boardIcon);
  icon.setAttribute("alt", "Board view icon");

  addClass(boardViewButton, "view-button");

  boardViewButton.append(icon);

  return boardViewButton;
}

export { boardViewButton };
