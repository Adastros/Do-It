import { addClass, createElement } from "../helper.js";

function taskItem(taskHeaderValue, taskDescriptionValue) {
  let taskItem = createElement("li"),
    taskInformationContainer = createElement("div"),
    taskHeaderElement = createElement("h3"),
    taskDescriptionElement = createElement("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);
  taskItem.append(taskInformationContainer);

  return taskItem;
}

export { taskItem };
