import { checkbox } from "./checkbox.js";
import { addClass, createElement } from "../helper.js";

function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = createElement("li"),
    taskInformationContainer = createElement("div"),
    taskHeaderElement = createElement("h3"),
    taskDescriptionElement = createElement("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  addClass(taskItem, "task-item");
  taskItem.dataset.taskItem = taskItemNumber;

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);
  taskItem.append(checkbox(taskItemNumber), taskInformationContainer);

  return taskItem;
}

export { taskItem };
