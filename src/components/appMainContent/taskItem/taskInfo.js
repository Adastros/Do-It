import { addClass, createElement } from "../../generalHelper/generalHelper.js";

function taskInfo(taskHeaderValue, taskDescriptionValue) {
  let taskInformationContainer = createElement("div"),
    taskHeaderElement = createElement("h3");

  taskHeaderElement.textContent = taskHeaderValue;

  addClass(taskHeaderElement, "task-header");

  taskInformationContainer.append(taskHeaderElement);

  return taskInformationContainer;
}

export { taskInfo };
