import { addClass, createElement } from "../helper.js";

function formHeader() {
  let headerContainer = createElement("div"),
    header = createElement("h2");

  header.textContent = "Add Project";

  addClass(headerContainer, "add-project-header-container");
  headerContainer.append(header);

  return headerContainer;
}

function projectNameFormField() {
  let projectNameContainer = createElement("div"),
    projectNameLabel = createElement("label"),
    projectNameInput = createElement("input");

  projectNameLabel.textContent = "Project Name:";
  projectNameLabel.setAttribute("for", "project-name");
  projectNameInput.setAttribute("id", "project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "projectName");
  projectNameInput.setAttribute("placeholder", "Project Name");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  addClass(projectNameContainer, "project-name-form-field");
  addClass(projectNameContainer, "project-name-form-field");

  projectNameContainer.append(projectNameLabel, projectNameInput);

  return projectNameContainer;
}

function projectDescriptionFormField() {
  let projectDescriptionContainer = createElement("div"),
    projectDescriptionLabel = createElement("label"),
    projectDescriptionTextarea = createElement("textarea");

  projectDescriptionLabel.textContent = "Project Description:";
  projectDescriptionLabel.setAttribute("for", "project-description");
  projectDescriptionTextarea.setAttribute("id", "project-description");
  projectDescriptionTextarea.setAttribute("name", "projectDescription");
  projectDescriptionTextarea.setAttribute("rows", "3");
  projectDescriptionTextarea.setAttribute("maxlength", "300");

  addClass(projectDescriptionContainer, "project-description-form-field");

  projectDescriptionContainer.append(
    projectDescriptionLabel,
    projectDescriptionTextarea
  );

  return projectDescriptionContainer;
}

function createButton(text) {
  let button = createElement("button");

  button.textContent = text;
  button.setAttribute("type", "button");

  return button;
}

function projectFormButtons() {
  let buttonsContainer = createElement("div"),
    cancelFormButton = createButton("Cancel"),
    addTaskFormButton = createButton("Add task");

  addClass(buttonsContainer, "project-form-buttons");
  buttonsContainer.append(cancelFormButton, addTaskFormButton);

  return buttonsContainer;
}

function newProjectForm() {
  let newProjectForm = createElement("form"),
    newProjectButtons = projectFormButtons();

  newProjectForm.setAttribute("action", "");
  newProjectForm.setAttribute("method", "post");
  newProjectForm.setAttribute("name", "newProjectForm");

  addClass(newProjectForm, "new-project-form");

  newProjectForm.append(
    formHeader(),
    projectNameFormField(),
    projectDescriptionFormField(),
    newProjectButtons
  );

  return newProjectForm;
}

function newProjectOverlayForm() {
  let newProjectOverlay = createElement("div");

  addClass(newProjectOverlay, "new-project-overlay");
  newProjectOverlay.append(newProjectForm());

  return newProjectOverlay;
}

export { newProjectOverlayForm };
