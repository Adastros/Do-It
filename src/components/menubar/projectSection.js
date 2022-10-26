import { iconButton } from "../generalButtons/iconButton.js";
import { projectList } from "./projectList.js";
import { addClass, createElement } from "../helper/helper.js";
import plusIcon from "../../icons/plus.svg";

function projectSection() {
  let projectSection = createElement("div"),
    projectHeader = createElement("div"),
    heading = createElement("h2"),
    newProjectButton = iconButton(
      plusIcon,
      "Add new project icon",
      "new-project-button"
    );

  heading.textContent = "Projects";

  addClass(projectHeader, "project-header");
  addClass(projectSection, "project-section");

  projectHeader.append(heading, newProjectButton);
  projectSection.append(projectHeader, projectList());

  return projectSection;
}

export { projectSection };
