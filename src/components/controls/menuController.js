import { newProjectOverlayForm } from "../project/newProjectOverlayForm.js";
import { tab } from "../menubar/tab.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { clearPrimaryTaskBoard, getTaskSortMethod } from "./taskController.js";
import { saveTaskItem } from "./webStorageController.js";
import { toggleClass, removeClass, addClass } from "../helper/helper.js";

// Reason for arrow function:
// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarListener = () => {
  let menubar = document.querySelector(".menu-bar");
  toggleClass(menubar, "hide");
};

let mainContentListener = () => {
  let mainContent = document.querySelector(".main-content");
  toggleClass(mainContent, "scrollable-y");
};

function openMenuTransitions(menubar, mainContent) {
  // Remove listener before starting transition to avoid triggering the
  // listener to hide the menu when the transition ends.
  menubar.removeEventListener("transitionend", menubarListener);

  // Switch scrollbar to <div.main-content> at end of opening transition
  mainContent.addEventListener("transitionend", mainContentListener);

  // Make menu visible before starting transition to show menu.
  removeClass(menubar, "hide");
}

function closeMenuTransitions(menubar, mainContent) {
  // Avoids switching scrollbar to <main> when opening menubar transition completes
  // Does nothing when closing menubar
  mainContent.removeEventListener("transitionend", mainContentListener);

  // Hide menubar after it has transitioned outside the viewport.
  menubar.addEventListener("transitionend", menubarListener);

  // Switches scroll bar y from <div.main-content> to <main> before transitioning
  removeClass(mainContent, "scrollable-y");
}

function toggleMenubarVisibility() {
  let menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar"),
    mainContent = document.querySelector(".main-content");

  menuButton.addEventListener("click", () => {
    if (menubar.classList.contains("closed")) {
      openMenuTransitions(menubar, mainContent);
    } else {
      closeMenuTransitions(menubar, mainContent);
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
    createTabListener(projectTab, projectDescription);

    // create localStorage key using project name
    saveTaskItem(projectName);

    clearPrimaryTaskBoard();
    newProjectOverlay.remove();
  });
}

function updateMainContentHeading(text) {
  let mainContentHeading = document.querySelector(".main-content-heading");

  mainContentHeading.textContent = text;
}

function createTabListener(tabElement, description) {
  tabElement.addEventListener("click", () => {
    let tabName = tabElement.textContent;

    updateMainContentHeading(tabName);

    if (!description) {
      updateMainContentProjectDescription("");
    } else {
      updateMainContentProjectDescription(description);
    }

    //If the user re-clicks the current tab, do not clear and re-sort task viewer.
    if (localStorage.previousTab !== tabName) {
      getTaskSortMethod(tabName);
    }
  });
}

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}

export { menuController, createTabListener };
