import { addClass, createElement } from "../generalHelper/generalHelper.js";
import logoImg from "../../image/Todo-ist Logo.svg";
import "../../stylesheets/appLogo.css";

function appLogo() {
  let appLogoContainer = createElement("div"),
    appName = createElement("h2"),
    logoImage = createElement("img");

  appName.textContent = "Do It";

  logoImage.setAttribute("src", logoImg);
  logoImage.setAttribute(
    "alt",
    "Todo-ist Logo. Clipboards with checkmarks on them."
  );

  addClass(appLogoContainer, "app-logo-container");

  appLogoContainer.append(logoImage, appName);

  return appLogoContainer;
}

export { appLogo };
