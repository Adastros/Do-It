import { addClass, createElement } from "../../helper/helper.js";

function taskInfo(taskHeaderValue, taskDescriptionValue) {
  let taskInformationContainer = createElement("div"),
    taskHeaderElement = createElement("h3"),
    taskDescriptionElement = createElement("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  addClass(taskHeaderElement, "task-header");
  addClass(taskDescriptionElement, "task-description");

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);

  return taskInformationContainer;
}

export { taskInfo };
