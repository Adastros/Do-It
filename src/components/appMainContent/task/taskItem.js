import { checkbox } from "./checkbox.js";
import { taskInfo } from "./taskInfo.js";
import { taskItemActions } from "./taskItemActions.js";
import { addClass, createElement } from "../../helper/helper.js";

function taskItem(
  taskHeaderValue,
  taskDescriptionValue,
  taskItemNumber,
  priorityValue,
  dueDateValue
) {
  let taskItem = createElement("div"),
    primaryTaskInfoAndActionsContainer = createElement("div"),
    checkBoxAndTaskInfoContainer = createElement("div"),
    dueDateAndPriorityIndicatorContainer = createElement("div"),
    priorityIndicator = createElement("p"),
    dueDateIndicator = createElement("p");

  priorityIndicator.textContent = "Priority: " + priorityValue;
  dueDateIndicator.textContent = "Due Date: " + dueDateValue;

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

  taskItem.dataset.taskItem = taskItemNumber;

  dueDateAndPriorityIndicatorContainer.append(
    dueDateIndicator,
    priorityIndicator
  );
  checkBoxAndTaskInfoContainer.append(
    checkbox(taskItemNumber),
    taskInfo(taskHeaderValue, taskDescriptionValue)
  );
  primaryTaskInfoAndActionsContainer.append(
    checkBoxAndTaskInfoContainer,
    taskItemActions(taskItemNumber)
  );
  taskItem.append(
    primaryTaskInfoAndActionsContainer,
    dueDateAndPriorityIndicatorContainer
  );

  return taskItem;
}

export { taskItem };
