import { textButton } from "../../generalButtons/textButton";
import {
  createCancelButtonListener,
  deleteConfirmationButtonListener,
} from "../../controls/taskController";
import { addClass, createElement } from "../../helper/helper.js";

function confirmDeleteTaskOverlay(taskHeader, taskItemId) {
  let overlayContainer = createElement("div"),
    promptContainer = createElement("div"),
    confirmationText = createElement("p"),
    taskHeaderBold = createElement("b"),
    buttonContainer = createElement("div"),
    confirmButton = textButton("Yes", "text-button"),
    cancelButton = textButton("No", "text-button");

  confirmationText.textContent = `Are you sure you want to delete `;
  taskHeaderBold.textContent = `${taskHeader}?`;

  addClass(buttonContainer, "delete-prompt-button-container");
  addClass(promptContainer, "delete-confirmation-prompt");
  addClass(overlayContainer, "delete-task-confirmation-overlay");

  confirmationText.append(taskHeaderBold);
  buttonContainer.append(cancelButton, confirmButton);
  promptContainer.append(confirmationText, buttonContainer);
  overlayContainer.append(promptContainer);

  createCancelButtonListener(overlayContainer, cancelButton);
  deleteConfirmationButtonListener(confirmButton, overlayContainer, taskItemId);

  return overlayContainer;
}

export { confirmDeleteTaskOverlay };
