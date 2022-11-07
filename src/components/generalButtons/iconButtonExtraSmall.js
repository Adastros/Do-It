import { addClass, createElement } from "../helper/helper.js";

function iconButtonExtraSmall(imgSrc, altText) {
  let iconButtonExtraSmall = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  addClass(iconButtonExtraSmall, 'icon-button-extra-small');

  iconButtonExtraSmall.append(icon);

  return iconButtonExtraSmall;
}

export { iconButtonExtraSmall };
