import { textButton } from "../generalButtons/textButton";
import {
  createCancelButtonListener,
  deleteConfirmationButtonListener,
} from "../controls/taskController";
import { addClass, createElement } from "../generalHelper/generalHelper.js";
import "../../stylesheets/confirmDeletePromptOverlay.css";

function confirmDeletePromptOverlay(taskOrProjectText, itemObj) {
  let overlayContainer = createElement("div"),
    promptContainer = createElement("div"),
    confirmationText = createElement("p"),
    taskOrProjectTextBold = createElement("b"),
    buttonContainer = createElement("div"),
    confirmButton = textButton("Yes"),
    cancelButton = textButton("No");

  confirmationText.textContent = `Are you sure you want to delete `;
  taskOrProjectTextBold.textContent = `${taskOrProjectText}?`;

  addClass(buttonContainer, "delete-prompt-button-container");
  addClass(promptContainer, "delete-confirmation-prompt");
  addClass(overlayContainer, "delete-task-confirmation-overlay");

  confirmationText.append(taskOrProjectTextBold);
  buttonContainer.append(cancelButton, confirmButton);
  promptContainer.append(confirmationText, buttonContainer);
  overlayContainer.append(promptContainer);

  createCancelButtonListener(overlayContainer, cancelButton);
  deleteConfirmationButtonListener(confirmButton, overlayContainer, itemObj);

  return overlayContainer;
}

export { confirmDeletePromptOverlay };
