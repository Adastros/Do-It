import { addClass, createElement } from "../helper/helper.js";

function projectList() {
  let projectList = createElement("div");

  addClass(projectList, "project-list");

  return projectList;
}

export { projectList };
