import { addClass, createElement } from "../helper.js";

function projectList() {
  let projectList = createElement("div");

  addClass(projectList, "project-list");

  return projectList;
}

export { projectList };
