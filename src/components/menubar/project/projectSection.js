import { iconButtonSmall } from "../../generalButtons/iconButtonSmall.js";
import { projectList } from "./projectList.js";
import { addClass, createElement } from "../../generalHelper/generalHelper.js";
import plusIcon from "../../../icons/plus.svg";

function projectSection() {
  let projectSection = createElement("div"),
    projectHeader = createElement("div"),
    heading = createElement("h2"),
    newProjectButton = iconButtonSmall(plusIcon, "Add new project icon");

  heading.textContent = "Projects";

  addClass(newProjectButton, "new-project-button");
  addClass(projectHeader, "project-header");
  addClass(projectSection, "project-section");

  projectHeader.append(heading, newProjectButton);
  projectSection.append(projectHeader, projectList());

  return projectSection;
}

export { projectSection };
