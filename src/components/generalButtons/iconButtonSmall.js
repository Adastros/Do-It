import { addClass, createElement } from "../generalHelper/generalHelper.js";
import "../../stylesheets/iconButtonSmall.css";

function iconButtonSmall(imgSrc, altText) {
  let iconButtonSmall = createElement("button"),
    icon = createElement("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  addClass(iconButtonSmall, "icon-button-small");

  iconButtonSmall.append(icon);

  return iconButtonSmall;
}

export { iconButtonSmall };
