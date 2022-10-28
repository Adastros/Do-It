import { textButton } from "../../generalButtons/textButton.js";
import { createElement, addClass } from "../../helper/helper.js";

function createTaskHeaderField() {
  let headerContainer = createElement("div"),
    headerLabel = createElement("label"),
    headerInputField = createElement("textarea");

  headerLabel.textContent = "Task Name";

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  addClass(headerInputField, "form-task-header");

  headerContainer.append(headerLabel, headerInputField);

  return headerContainer;
}

function createTaskDescriptionField() {
  let descriptionContainer = createElement("div"),
    descriptionLabel = createElement("label"),
    descriptionInputField = createElement("textarea");

  descriptionLabel.textContent = "Description";

  descriptionLabel.setAttribute("for", "form-task-description");
  descriptionInputField.setAttribute("id", "form-task-description");

  descriptionContainer.append(descriptionLabel, descriptionInputField);

  return descriptionContainer;
}

function taskForm() {
  let formContainer = createElement("div"),
    taskItemForm = createElement("form"),
    headerField = createTaskHeaderField(),
    descriptionField = createTaskDescriptionField(),
    buttonContainer = createElement("div"),
    cancelFormButton = textButton("Cancel", "form-cancel-button"),
    addTaskFormButton = textButton("Add task", "form-add-task-button");

  addClass(taskItemForm, "task-form");
  addClass(formContainer, "task-form-container");

  addTaskFormButton.setAttribute("disabled", "");
  taskItemForm.setAttribute("novalidate", "");

  buttonContainer.append(cancelFormButton, addTaskFormButton);
  taskItemForm.append(headerField, descriptionField, buttonContainer);
  formContainer.append(taskItemForm);

  return formContainer;
}

export { taskForm };
