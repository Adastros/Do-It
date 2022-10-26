import { checkbox } from "./checkbox.js";
import { addClass, createElement } from "../helper/helper.js";

function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = createElement("div"),
    taskInformationContainer = createElement("div"),
    taskHeaderElement = createElement("h3"),
    taskDescriptionElement = createElement("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  addClass(taskItem, "task-item");
  addClass(taskHeaderElement, "task-header");
  addClass(taskDescriptionElement, "task-description");
  taskItem.dataset.taskItem = taskItemNumber;

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);
  taskItem.append(checkbox(taskItemNumber), taskInformationContainer);

  return taskItem;
}

export { taskItem };
