import { iconButtonSmall } from "../../generalButtons/iconButtonSmall.js";
import { AddEditButtonListener } from "../../controls/taskController.js";
import { addClass, createElement } from "../../helper/helper.js";
import editIcon from "../../../icons/edit.svg";

function taskItemActions(taskItemId) {
  let taskItemActions = createElement("div"),
    editButton = iconButtonSmall(
      editIcon,
      "Task Edit Icon Button"
    );

  AddEditButtonListener(editButton, taskItemId);

  addClass(taskItemActions, "task-item-actions");

  taskItemActions.append(editButton);

  return taskItemActions;
}

export { taskItemActions };
