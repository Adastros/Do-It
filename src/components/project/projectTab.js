import { tab } from "../menubar/tab.js";
import {
  createTabListener,
  projectTabListeners,
} from "../controls/menuController.js";
import { createDeletePromptOverlayListener } from "../controls/taskController.js";
import { iconButtonExtraSmall } from "../generalButtons/iconButtonExtraSmall.js";
import deleteIcon from "../../icons/delete.svg";
import { addClass } from "../helper/helper.js";

function projectTab(projectName) {
  let projectTab = tab(projectName, "project-tab"),
    deleteButton = iconButtonExtraSmall(deleteIcon, "Delete project icon."),
    projectObj = {
      projectName: projectName,
      projectTab: projectTab,
    };

  addClass(deleteButton, "hide");

  projectTab.append(deleteButton);

  createTabListener(projectTab, projectName, "");
  projectTabListeners(projectTab);
  createDeletePromptOverlayListener(deleteButton, projectObj);

  return projectTab;
}

export { projectTab };
