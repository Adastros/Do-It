import { iconButtonSmall } from "../../generalButtons/iconButtonSmall.js";
import {
  AddEditButtonListener,
  createDeletePromptOverlayListener,
} from "../../controls/taskController.js";
import { addClass, createElement } from "../../helper/helper.js";
import editIcon from "../../../icons/edit.svg";
import deleteIcon from "../../../icons/delete.svg";

function taskItemActions(taskItemId) {
  let taskItemActions = createElement("div"),
    editButton = iconButtonSmall(editIcon, "Task Edit Icon Button"),
    deleteButton = iconButtonSmall(deleteIcon, "Task Delete Button");

  AddEditButtonListener(editButton, taskItemId);
  createDeletePromptOverlayListener(deleteButton, { taskItemId: taskItemId });

  addClass(taskItemActions, "task-item-actions");

  taskItemActions.append(editButton, deleteButton);

  return taskItemActions;
}

export { taskItemActions };
