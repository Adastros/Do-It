import { newProjectOverlayForm } from "../menubar/project/newProjectOverlayForm.js";
import { projectTab } from "../menubar/project/projectTab.js";
import { clearTaskView, addMainContentBackground } from "./taskController.js";
import { getTaskSortMethod } from "./taskSortingMethods.js";
import { saveData, saveTaskItem } from "./webStorageController.js";
import {
  missingValueAggressiveValidation,
  doesProjectNameExist,
} from "./formControls.js";
import { toggleClass, removeClass } from "../generalHelper/generalHelper.js";

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}

function toggleMenubarVisibility() {
  let menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar");

  menuButton.addEventListener("click", () => {
    if (menubar.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      menubar.removeEventListener("transitionend", menubarListener);

      // Make menu visible before starting transition to show menu.
      removeClass(menubar, "hide");
    } else {
      // Hide menubar after it has transitioned outside the viewport.
      menubar.addEventListener("transitionend", menubarListener);
    }
    toggleClass(menubar, "closed");
  });
}

// Reason for arrow function:
// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarListener = () => {
  let menubar = document.querySelector(".menu-bar");
  toggleClass(menubar, "hide");
};

function displayNewProjectOverlayForm() {
  let newProjectButton = document.querySelector(".new-project-button");

  newProjectButton.addEventListener("click", () => {
    document.body.append(newProjectOverlayForm());

    let newProjectNameNode = document.querySelector("#new-project-name"),
      newProjectAddButton = document.querySelector(
        ".new-project-form-add-button"
      );

    cancelAddingNewProject();
    addNewProject();
    missingValueAggressiveValidation(newProjectNameNode, newProjectAddButton);
  });
}

function cancelAddingNewProject() {
  let cancelButton = document.querySelector(".new-project-form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let bodyTag = document.body,
      newProjectOverlay = document.querySelector(".new-project-overlay");

    bodyTag.removeChild(newProjectOverlay);
  });
}

function addNewProject() {
  let addNewProjectButton = document.querySelector(
    ".new-project-form-add-button"
  );

  addNewProjectButton.addEventListener("click", () => {
    let projectName = document.querySelector("#new-project-name").value.trim();

    if (doesProjectNameExist(projectName)) {
      let newProjectOverlay = document.querySelector(".new-project-overlay"),
        projectList = document.querySelector(".project-list"),
        newProjectTab = projectTab(projectName),
        mainContentHeading = document.querySelector(".main-content-heading");

      mainContentHeading.textContent = projectName;

      projectList.append(newProjectTab);
      changeTaskViewListener(newProjectTab);

      // create localStorage key using project name
      saveTaskItem(projectName);

      clearTaskView();
      addMainContentBackground(projectName);
      saveData("previousTab", projectName);
      newProjectOverlay.remove();
    }
  });
}

function changeTaskViewListener(tabElement) {
  tabElement.addEventListener("click", () => {
    let tabName = tabElement.textContent;

    updateMainContentHeading(tabName);

    //If the user re-clicks the current tab, do not clear and re-sort task viewer.
    if (localStorage.previousTab !== tabName) {
      getTaskSortMethod(tabName);
    }
  });
}

function updateMainContentHeading(text) {
  let mainContentHeading = document.querySelector(".main-content-heading");

  mainContentHeading.textContent = text;
}

function displayContentOnMouseOverListener(eventNode, contentToHide) {
  eventNode.addEventListener("mouseover", () => {
    toggleClass(contentToHide, "hide");
  });
}

function hideContentOnMouseOutListener(eventNode, contentToHide) {
  eventNode.addEventListener("mouseout", () => {
    toggleClass(contentToHide, "hide");
  });
}

export {
  menuController,
  changeTaskViewListener,
  updateMainContentHeading,
  displayContentOnMouseOverListener,
  hideContentOnMouseOutListener,
};
