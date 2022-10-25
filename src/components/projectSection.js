import { newProjectButton } from "./newProjectButton.js";
import { projectList } from "./projectList.js";
import { addClass, createElement } from "../helper.js";

function projectSection() {
  let projectSection = createElement("div"),
    projectHeader = createElement("div"),
    heading = createElement("h2");

  heading.textContent = "Projects";

  addClass(projectHeader, "project-header");
  addClass(projectSection, "project-section");

  projectHeader.append(heading, newProjectButton());
  projectSection.append(projectHeader, projectList());

  return projectSection;
}

export { projectSection };
