import { checkbox } from "./checkbox.js";
import { taskInfo } from "./taskInfo.js";
import { taskItemActions } from "./taskItemActions.js";
import {
  addClass,
  createElement,
  capitalizeFirstLetter,
  displayContentOnMouseOverListener,
  hideContentOnMouseOutListener,
} from "../../generalHelper/generalHelper.js";
import "../../../stylesheets/taskItem.css";

function taskItem(taskItemId, taskItemObj) {
  let taskItem = createElement("div"),
    taskInfoContainer = createElement("div"),
    primaryTaskInfoAndActionsContainer = createElement("div"),
    secondaryTaskInfoContainer = createElement("div"),
    dueDateAndPriorityIndicatorContainer = createElement("div"),
    taskLabel = createElement("p"),
    priorityIndicator = createElement("p"),
    dueDateIndicator = createElement("p"),
    taskItemActionButtons = taskItemActions(taskItemId),
    upperCasePriorityValue = capitalizeFirstLetter(taskItemObj.priorityValue);

  priorityIndicator.textContent = "Priority: " + upperCasePriorityValue;
  dueDateIndicator.textContent = "Due Date: " + taskItemObj.dueDateValue;
  taskLabel.textContent = taskItemObj.taskType;

  addClass(
    dueDateAndPriorityIndicatorContainer,
    "date-and-priority-indicator-container"
  );
  addClass(secondaryTaskInfoContainer, "secondary-task-info-container");
  addClass(
    primaryTaskInfoAndActionsContainer,
    "primary-task-and-actions-container"
  );
  addClass(taskInfoContainer, "task-item-info-container");
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

  primaryTaskInfoAndActionsContainer.append(
    taskInfo(taskItemObj.headerValue),
    taskItemActionButtons
  );

  taskInfoContainer.append(
    primaryTaskInfoAndActionsContainer,
    secondaryTaskInfoContainer
  );

  taskItem.append(checkbox(taskItemId), taskInfoContainer);

  displayContentOnMouseOverListener(taskItem, taskItemActionButtons);
  hideContentOnMouseOutListener(taskItem, taskItemActionButtons);

  return taskItem;
}

export { taskItem };
