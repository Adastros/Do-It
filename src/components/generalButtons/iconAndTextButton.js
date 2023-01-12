import { addClass, createElement } from "../generalHelper/generalHelper.js";

function iconAndTextButton(text, imgSrc, altText, ...cssClass) {
  let button = createElement("button"),
    icon = createElement("img");

  button.textContent = text;

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);
  button.setAttribute("type", "button");

  addClass(icon, "icon-text-button-img");
  addClass(button, "icon-text-button", ...cssClass);

  button.prepend(icon);

  return button;
}

export { iconAndTextButton };
