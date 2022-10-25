import { addClass, createElement } from "../helper.js";

function iconButton(imgSrc, altText, ...cssClass) {
  let iconButton = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  addClass(iconButton, ...cssClass);

  iconButton.append(icon);

  return iconButton;
}

export { iconButton };
