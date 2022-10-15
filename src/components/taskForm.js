import { createElement, addClass } from "../helper.js";
import "../stylesheets/style.css";

function createTaskFormButton(text) {
  let button = createElement("button");

  button.textContent = text;
  button.setAttribute("type", "button");

  return button;
}

function createTaskHeaderField() {
  let headerContainer = createElement("div"),
    headerLabel = createElement("label"),
    headerInputField = createElement("textarea");

  headerLabel.textContent = "Task Name";

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");

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
    cancelFormButton = createTaskFormButton("Cancel"),
    addTaskFormButton = createTaskFormButton("Add task");

  addClass(cancelFormButton, "form-cancel-button");
  addClass(addTaskFormButton, "form-add-task-button");
  addClass(taskItemForm, "task-form");
  addClass(formContainer, "task-form-container");

  taskItemForm.setAttribute("novalidate", "");

  buttonContainer.append(cancelFormButton, addTaskFormButton);
  taskItemForm.append(headerField, descriptionField, buttonContainer);
  formContainer.append(taskItemForm);

  return formContainer;
}

export { taskForm };
