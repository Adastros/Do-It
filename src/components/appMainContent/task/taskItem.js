import { checkbox } from "./checkbox.js";
import { taskInfo } from "./taskInfo.js";
import { taskItemActions } from "./taskItemActions.js";
import { addClass, createElement } from "../../helper/helper.js";

function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = createElement("div"),
    checkBoxTaskInfoContainer = createElement("div");

  addClass(checkBoxTaskInfoContainer, "checkBoxTaskInfoContainer");
  addClass(taskItem, "task-item");

  taskItem.dataset.taskItem = taskItemNumber;

  checkBoxTaskInfoContainer.append(
    checkbox(taskItemNumber),
    taskInfo(taskHeaderValue, taskDescriptionValue)
  );
  taskItem.append(checkBoxTaskInfoContainer, taskItemActions(taskItemNumber));

  return taskItem;
}

export { taskItem };
