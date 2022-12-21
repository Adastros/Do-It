import { newProjectOverlayForm } from "../project/newProjectOverlayForm.js";
import { tab } from "../menubar/tab.js";
import { secondaryTaskBoard } from "../appMainContent/secondaryTaskBoard.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { clearTaskViewer, getSortAllTasksMethod } from "./taskController.js";
import { saveProjectTaskData } from "./webStorageController.js";
import { toggleClass, removeClass } from "../helper/helper.js";

// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarTransitionendListener = () => {
  let menubar = document.querySelector(".menu-bar");
  toggleClass(menubar, "hide");
};

function addMenubarTransitionendListener(menubar) {
  menubar.addEventListener("transitionend", menubarTransitionendListener);
}

function removeMenubarTransitionendListener(menubar) {
  menubar.removeEventListener("transitionend", menubarTransitionendListener);
}

function toggleMenubarVisibility() {
  let menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar"),
    mainContent = document.querySelector("main");

  menuButton.addEventListener("click", () => {
    if (menubar.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      removeMenubarTransitionendListener(menubar);

      // Make menu visible before starting transition to show menu.
      removeClass(menubar, "hide");
    } else {
      // Add listener to set menubar visibility off after it has transitioned
      // outside the viewport.
      addMenubarTransitionendListener(menubar);
    }
    toggleClass(menubar, "closed");
  });
}

function displayNewProjectOverlayForm() {
  let newProjectButton = document.querySelector(".new-project-button");

  newProjectButton.addEventListener("click", () => {
    document.body.append(newProjectOverlayForm());

    let newProjectNameNode = document.querySelector("#new-project-name"),
      newProjectAddButton = document.querySelector(
        ".new-project-form-add-button"
      );

    cancelNewProjectButtonListener();
    addNewProjectButtonListener();
    missingValueAggressiveValidation(newProjectNameNode, newProjectAddButton);
  });
}

function cancelNewProjectButtonListener() {
  let cancelButton = document.querySelector(".new-project-form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let bodyTag = document.body,
      newProjectOverlay = document.querySelector(".new-project-overlay");

    bodyTag.removeChild(newProjectOverlay);
  });
}

function addProjectTabListener(projectTab, projectName, projectDescription) {
  projectTab.addEventListener("click", () => {
    updateMainContentHeading(projectName);
    updateMainContentProjectDescription(projectDescription);
    clearTaskViewer();
  });
}

function updateMainContentProjectDescription(projectDescription) {
  let projectDescriptionHeaderSection = document.querySelector(
    ".main-content-project-description"
  );

  projectDescriptionHeaderSection.textContent = projectDescription;
}

function addNewProjectButtonListener() {
  let addNewProjectButton = document.querySelector(
    ".new-project-form-add-button"
  );

  addNewProjectButton.addEventListener("click", () => {
    let newProjectOverlay = document.querySelector(".new-project-overlay"),
      projectList = document.querySelector(".project-list"),
      projectName = document.querySelector("#new-project-name").value,
      projectDescription = document.querySelector(
        "#new-project-description"
      ).value,
      projectTab = tab(projectName, "project-tab"),
      mainContentHeading = document.querySelector(".main-content-heading"),
      mainContentProjectDescription = document.querySelector(
        ".main-content-project-description"
      );

    mainContentProjectDescription.textContent = projectDescription;
    mainContentHeading.textContent = projectName;

    projectList.append(projectTab);
    addProjectTabListener(projectTab, projectName, projectDescription);

    // create localStorage key using project name
    saveProjectTaskData(projectName);

    clearTaskViewer();
    newProjectOverlay.remove();
  });
}

function updateMainContentHeading(text) {
  let mainContentHeading = document.querySelector(".main-content-heading");

  mainContentHeading.textContent = text;
}

function createMenuTabListener(menuTab) {
  menuTab.addEventListener("click", () => {
    let tabName = menuTab.textContent;

    updateMainContentHeading(tabName);
    updateMainContentProjectDescription("");

    //If the user re-clicks the current tab, do not clear and re-sort task viewer.
    if (localStorage.previousMenuTab !== tabName) {
      clearTaskViewer();
      getSortAllTasksMethod(tabName);
    }
  });
}

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}

export { menuController, createMenuTabListener, addProjectTabListener };
