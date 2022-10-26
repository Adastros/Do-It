import { addClass, createElement } from "../helper/helper.js";

function textButton(text, ...cssClass) {
  let button = createElement("button");

  button.textContent = text;
  button.setAttribute("type", "button");
  addClass(button, ...cssClass);

  return button;
}

export { textButton };
