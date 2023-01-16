import { tab } from "../tab.js";
import { iconButtonExtraSmall } from "../../generalButtons/iconButtonExtraSmall.js";
import {
  changeTaskViewListener,
  displayContentOnMouseOverListener,
  hideContentOnMouseOutListener,
} from "../../controls/menuController.js";
import { createDeletePromptOverlayListener } from "../../controls/formControls.js";
import { addClass } from "../../generalHelper/generalHelper.js";
import deleteIcon from "../../../icons/delete.svg";
import "../../../stylesheets/projectTab.css";

function projectTab(projectName) {
  let projectTab = tab(projectName, "project-tab"),
    deleteButton = iconButtonExtraSmall(deleteIcon, "Delete project icon."),
    projectObj = {
      projectName: projectName,
      projectTab: projectTab,
    };

  addClass(deleteButton, "hide");

  projectTab.append(deleteButton);

  changeTaskViewListener(projectTab, projectName, "");
  displayContentOnMouseOverListener(projectTab, projectTab.lastElementChild);
  hideContentOnMouseOutListener(projectTab, projectTab.lastElementChild);
  createDeletePromptOverlayListener(deleteButton, projectObj);

  return projectTab;
}

export { projectTab };
