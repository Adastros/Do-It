import { checkbox } from "./checkbox.js";
import { taskInfo } from "./taskInfo.js";
import { taskItemActions } from "./taskItemActions.js";
import {
  addClass,
  createElement,
  capitalizeFirstLetter,
} from "../../helper/helper.js";

function taskItem(taskItemId, taskItemObj) {
  let taskItem = createElement("div"),
    primaryTaskInfoAndActionsContainer = createElement("div"),
    checkBoxAndTaskInfoContainer = createElement("div"),
    secondaryTaskInfoContainer = createElement("div"),
    dueDateAndPriorityIndicatorContainer = createElement("div"),
    taskLabel = createElement("p"),
    priorityIndicator = createElement("p"),
    dueDateIndicator = createElement("p"),
    upperCasePriorityValue = capitalizeFirstLetter(taskItemObj.priorityValue);

  priorityIndicator.textContent = "Priority: " + upperCasePriorityValue;
  dueDateIndicator.textContent = "Due Date: " + taskItemObj.dueDateValue;
  taskLabel = taskItemObj.taskType;

  addClass(
    dueDateAndPriorityIndicatorContainer,
    "date-and-priority-indicator-container"
  );
  addClass(secondaryTaskInfoContainer, "secondary-task-info-container");
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

  secondaryTaskInfoContainer.append(
    dueDateAndPriorityIndicatorContainer,
    taskLabel
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
    secondaryTaskInfoContainer
  );

  return taskItem;
}

export { taskItem };
