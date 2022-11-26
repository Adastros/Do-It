import { taskDueDateField } from "./taskDueDateField.js";
import { taskPriorityDropdown } from "./taskPriorityDropdown.js";
import { textButton } from "../../generalButtons/textButton.js";
import { createElement, addClass } from "../../helper/helper.js";

function createTaskHeaderField(headerValue) {
  let headerContainer = createElement("div"),
    headerLabel = createElement("label"),
    headerInputField = createElement("textarea");

  headerLabel.textContent = "Task Name";
  if (headerValue) {
    headerInputField.textContent = headerValue;
  }

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  addClass(headerInputField, "form-task-header");

  headerContainer.append(headerLabel, headerInputField);

  return headerContainer;
}

function createTaskDescriptionField(descriptionValue) {
  let descriptionContainer = createElement("div"),
    descriptionLabel = createElement("label"),
    descriptionInputField = createElement("textarea");

  descriptionLabel.textContent = "Description";
  if (descriptionValue) {
    descriptionInputField.textContent = descriptionValue;
  }

  descriptionLabel.setAttribute("for", "form-task-description");
  descriptionInputField.setAttribute("id", "form-task-description");

  descriptionContainer.append(descriptionLabel, descriptionInputField);

  return descriptionContainer;
}

// The addOrSaveTaskButtonText argument is used to determine if the
// taskForm should state "save" or "add task" for one of the buttons.
function taskForm(addOrSaveTaskButtonText, currentTaskItemObj) {
  let formContainer = createElement("div"),
    taskItemForm = createElement("form"),
    headerField = createTaskHeaderField(currentTaskItemObj.headerValue),
    descriptionField = createTaskDescriptionField(
      currentTaskItemObj.descriptionValue
    ),
    taskFormActionsContainer = createElement("div"),
    taskDateAndPriorityContainer = createElement("div"),
    taskFormButtonsContainer = createElement("div"),
    cancelFormButton = textButton("Cancel", "form-cancel-button"),
    addOrSaveTaskButton = textButton(
      addOrSaveTaskButtonText,
      "form-add-or-save-task-button"
    );

  addClass(
    taskDateAndPriorityContainer,
    "task-form-date-and-priority-container"
  );
  addClass(taskFormActionsContainer, "task-form-actions-container");
  addClass(taskItemForm, "task-form");
  addClass(formContainer, "task-form-container");

  addOrSaveTaskButton.setAttribute("disabled", "");
  taskItemForm.setAttribute("novalidate", "");

  taskDateAndPriorityContainer.append(
    taskDueDateField(currentTaskItemObj.dueDateValue),
    taskPriorityDropdown(currentTaskItemObj.priorityValue)
  );
  taskFormButtonsContainer.append(cancelFormButton, addOrSaveTaskButton);
  taskFormActionsContainer.append(
    taskDateAndPriorityContainer,
    taskFormButtonsContainer
  );
  taskItemForm.append(headerField, descriptionField, taskFormActionsContainer);
  formContainer.append(taskItemForm);

  return formContainer;
}

export { taskForm };
