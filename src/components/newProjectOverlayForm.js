import { addClass, createElement } from "../helper.js";

function formHeader() {
  let headerContainer = createElement("div"),
    header = createElement("h2");

  header.textContent = "New Project";

  addClass(headerContainer, "new-project-header-container");
  headerContainer.append(header);

  return headerContainer;
}

function projectNameFormField() {
  let projectNameContainer = createElement("div"),
    projectNameLabel = createElement("label"),
    projectNameInput = createElement("input");

  projectNameLabel.textContent = "Project Name:";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  addClass(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(projectNameLabel, projectNameInput);

  return projectNameContainer;
}

function projectDescriptionFormField() {
  let projectDescriptionContainer = createElement("div"),
    projectDescriptionLabel = createElement("label"),
    projectDescriptionTextarea = createElement("textarea");

  projectDescriptionLabel.textContent = "Project Description:";
  projectDescriptionLabel.setAttribute("for", "new-project-description");
  projectDescriptionTextarea.setAttribute("id", "new-project-description");
  projectDescriptionTextarea.setAttribute("name", "newProjectDescription");
  projectDescriptionTextarea.setAttribute("rows", "3");
  projectDescriptionTextarea.setAttribute("maxlength", "300");

  addClass(projectDescriptionContainer, "new-project-description-form-field");

  projectDescriptionContainer.append(
    projectDescriptionLabel,
    projectDescriptionTextarea
  );

  return projectDescriptionContainer;
}

function createButton(text, cssClass) {
  let button = createElement("button");

  button.textContent = text;
  button.setAttribute("type", "button");
  addClass(button, cssClass);

  return button;
}

function projectFormButtons() {
  let buttonsContainer = createElement("div"),
    cancelNewProjectButton = createButton("Cancel", "new-project-form-cancel-button"),
    addNewProjectButton = createButton(
      "Add New Project",
      "new-project-form-add-button"
    );

  addClass(buttonsContainer, "new-project-form-buttons");
  addNewProjectButton.setAttribute("disabled", "");
  buttonsContainer.append(cancelNewProjectButton, addNewProjectButton);

  return buttonsContainer;
}

function newProjectForm() {
  let newProjectForm = createElement("form"),
    newProjectButtons = projectFormButtons();

  newProjectForm.setAttribute("action", "");
  newProjectForm.setAttribute("method", "post");
  newProjectForm.setAttribute("name", "newProjectForm");
  newProjectForm.setAttribute("novalidate", "");

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
