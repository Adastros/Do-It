import { tab } from "./tab.js";
import { addProjectTabListener } from "../controls/menuController.js";
import { getData } from "../controls/webStorageController.js";
import { addClass, createElement } from "../helper/helper.js";

function projectList() {
  let projectList = createElement("div"),
    projectNames = Object.keys(JSON.parse(getData("projects"))).sort();

  addClass(projectList, "project-list");

  for (let i = 0; i < projectNames.length; i++) {
    let projectTab = tab(projectNames[i], "project-tab");
    
    projectList.append(projectTab);
    addProjectTabListener(projectTab, projectNames[i], "");
  }

  return projectList;
}

export { projectList };
