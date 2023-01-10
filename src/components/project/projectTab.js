import { tab } from "../menubar/tab.js";
import { createTabListener } from "../controls/menuController.js";
import { createDeletePromptOverlayListener } from "../controls/taskController.js";
import { iconButtonExtraSmall } from "../generalButtons/iconButtonExtraSmall.js";
import deleteIcon from "../../icons/delete.svg";

function projectTab(projectName) {
  let projectTab = tab(projectName, "project-tab"),
    deleteButton = iconButtonExtraSmall(deleteIcon, "Delete project icon."),
    projectObj = {
      projectName: projectName,
      projectTab: projectTab,
    };

  projectTab.append(deleteButton);

  createTabListener(projectTab, projectName, "");
  createDeletePromptOverlayListener(deleteButton, projectObj);

  return projectTab;
}

export { projectTab };
