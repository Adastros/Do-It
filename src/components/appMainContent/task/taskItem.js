import { checkbox } from "./checkbox.js";
import { taskInfo } from "./taskInfo.js";
import { taskItemActions } from "./taskItemActions.js";
import { addClass, createElement } from "../../helper/helper.js";

function taskItem(taskItemId, taskItemObj) {
  let taskItem = createElement("div"),
    primaryTaskInfoAndActionsContainer = createElement("div"),
    checkBoxAndTaskInfoContainer = createElement("div"),
    dueDateAndPriorityIndicatorContainer = createElement("div"),
    priorityIndicator = createElement("p"),
    dueDateIndicator = createElement("p"),
    upperCasePriorityValue =
      taskItemObj.priorityValue.charAt(0).toUpperCase() +
      taskItemObj.priorityValue.slice(1);

  priorityIndicator.textContent = "Priority: " + upperCasePriorityValue;
  dueDateIndicator.textContent = "Due Date: " + taskItemObj.dueDateValue;

  addClass(
    dueDateAndPriorityIndicatorContainer,
    "date-and-priority-indicator-container"
  );
  addClass(
    primaryTaskInfoAndActionsContainer,
    "primary-task-and-actions-container"
  );
  addClass(checkBoxAndTaskInfoContainer, "check-box-and-task-info-container");
  addClass(taskItem, "task-item");

  taskItem.dataset.taskItemId = taskItemId;

  dueDateAndPriorityIndicatorContainer.append(
    dueDateIndicator,
    priorityIndicator
  );
  checkBoxAndTaskInfoContainer.append(
    checkbox(taskItemId),
    taskInfo(taskItemObj.headerValue, taskItemObj.descriptionValue)
  );
  primaryTaskInfoAndActionsContainer.append(
    checkBoxAndTaskInfoContainer,
    taskItemActions(taskItemId)
  );
  taskItem.append(
    primaryTaskInfoAndActionsContainer,
    dueDateAndPriorityIndicatorContainer
  );

  return taskItem;
}

export { taskItem };
