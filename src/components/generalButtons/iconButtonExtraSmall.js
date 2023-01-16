import { addClass, createElement } from "../generalHelper/generalHelper.js";
import "../../stylesheets/iconButtonExtraSmall.css";

function iconButtonExtraSmall(imgSrc, altText) {
  let iconButtonExtraSmall = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  addClass(iconButtonExtraSmall, "icon-button-extra-small");

  iconButtonExtraSmall.append(icon);

  return iconButtonExtraSmall;
}

export { iconButtonExtraSmall };
