import { tab } from "./tab.js";
import { addClass, createElement } from "../helper.js";

function projectTabs() {
  let projectTabs = createElement("div"),
    tabArr = ["test1", "test1"];

  for (let i = 0; i < 4; i++) {
    projectTabs.append(tab(tabArr[i], "project-tab"));
  }

  addClass(projectTabs, "project-tabs");

  return projectTabs;
}

export { projectTabs };
