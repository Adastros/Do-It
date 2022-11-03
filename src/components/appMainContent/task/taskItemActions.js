import { iconButton } from "../../generalButtons/iconButton.js";
import { AddEditButtonListener } from "../../controls/taskController.js";
import { addClass, createElement } from "../../helper/helper.js";
import editIcon from "../../../icons/edit.svg";

function taskItemActions(taskItemNumber) {
  let taskItemActions = createElement("div"),
    editButton = iconButton(
      editIcon,
      "Task Edit Icon Button",
      "task-edit-button"
    );

  AddEditButtonListener(editButton, taskItemNumber);

  addClass(taskItemActions, "task-item-actions");

  taskItemActions.append(editButton);

  return taskItemActions;
}

export { taskItemActions };
