import { iconButtonSmall } from "../../generalButtons/iconButtonSmall.js";
import { AddEditButtonListener } from "../../controls/taskController.js";
import { createDeletePromptOverlayListener } from "../../controls/formControls.js";
import { addClass, createElement } from "../../generalHelper/generalHelper.js";
import editIcon from "../../../icons/edit.svg";
import deleteIcon from "../../../icons/delete.svg";
import "../../../stylesheets/taskItemActions.css";

function taskItemActions(taskItemId) {
  let taskItemActions = createElement("div"),
    editButton = iconButtonSmall(editIcon, "Task Edit Icon Button"),
    deleteButton = iconButtonSmall(deleteIcon, "Task Delete Button");

  AddEditButtonListener(editButton, taskItemId);
  createDeletePromptOverlayListener(deleteButton, { taskItemId: taskItemId });

  addClass(taskItemActions, "task-item-actions", "hide");

  taskItemActions.append(editButton, deleteButton);

  return taskItemActions;
}

export { taskItemActions };
