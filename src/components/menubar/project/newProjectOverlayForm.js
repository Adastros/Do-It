import { textButton } from "../../generalButtons/textButton.js";
import { addClass, createElement } from "../../generalHelper/generalHelper.js";
import "../../../stylesheets/newProjectOverlayForm.css";

function projectNameFormField() {
  let projectNameContainer = createElement("div"),
    projectNameLabel = createElement("label"),
    projectNameInput = createElement("input");

  projectNameLabel.textContent = "Project Name";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  addClass(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(
    projectNameLabel,
    projectNameInput,
    projectErrorField()
  );

  return projectNameContainer;
}

function projectErrorField() {
  let errorField = createElement("div"),
    errorMessage = createElement("span");

  addClass(errorField, "error-field", "hide");
  addClass(errorMessage, "error-message");

  errorField.append(errorMessage);

  return errorField;
}

function projectFormButtons() {
  let buttonsContainer = createElement("div"),
    cancelNewProjectButton = textButton(
      "Cancel",
      "new-project-form-cancel-button"
    ),
    addNewProjectButton = textButton(
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

  newProjectForm.append(projectNameFormField(), newProjectButtons);

  return newProjectForm;
}

function newProjectOverlayForm() {
  let newProjectOverlay = createElement("div");

  addClass(newProjectOverlay, "new-project-overlay");
  newProjectOverlay.append(newProjectForm());

  return newProjectOverlay;
}

export { newProjectOverlayForm };
