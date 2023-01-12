import { projectTab } from "./projectTab.js";
import { getData } from "../../controls/webStorageController.js";
import { addClass, createElement } from "../../generalHelper/generalHelper.js";

function projectList() {
  let projectList = createElement("div"),
    projectNames = Object.keys(JSON.parse(getData("projects"))).sort();

  addClass(projectList, "project-list");

  for (let i = 0; i < projectNames.length; i++) {
    projectList.append(projectTab(projectNames[i]));
  }

  return projectList;
}

export { projectList };
