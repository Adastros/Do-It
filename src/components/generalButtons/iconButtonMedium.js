import { addClass, createElement } from "../generalHelper/generalHelper.js";

function iconButtonMedium(imgSrc, altText) {
  let iconButtonMedium = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  addClass(iconButtonMedium, 'icon-button-medium');

  iconButtonMedium.append(icon);

  return iconButtonMedium;
}

export { iconButtonMedium };
