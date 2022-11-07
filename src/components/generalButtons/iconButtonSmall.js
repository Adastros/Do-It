import { addClass, createElement } from "../helper/helper.js";

function iconButtonSmall(imgSrc, altText) {
  let iconButtonSmall = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  addClass(iconButtonSmall, 'icon-button-small');

  iconButtonSmall.append(icon);

  return iconButtonSmall;
}

export { iconButtonSmall };
