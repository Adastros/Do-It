import { newProjectOverlayForm } from "../menubar/project/newProjectOverlayForm.js";
import { projectTab } from "../menubar/project/projectTab.js";
import { clearTaskView, addMainContentBackground } from "./taskController.js";
import { getTaskSortMethod } from "./taskSortingMethods.js";
import { saveData, saveTaskItem } from "./webStorageController.js";
import {
  missingValueAggressiveValidation,
  doesProjectNameExist,
} from "./formControls.js";
import {
  toggleClass,
  removeClass,
  addClass,
} from "../generalHelper/generalHelper.js";

function menuController() {
  menubarTransitionStartListener();
  menubarTransitionEndListener();
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
  positionMenubarOnWidthChange();
}

function positionMenubarOnWidthChange() {
  let menubarOverlay = document.querySelector("main").firstElementChild,
    menubar = document.querySelector(".menu-bar"),
    // To prevent menu from re-opening or re-closing when the viewport size
    // changes. The initial value is set based on the width of the viewport
    // on page load. This is to mainly to prevent the menu bar from opening
    // on viewports smaller than or equal to 750px.
    menuFlag751pxUp = window.innerWidth > 750 ? true : false;

  const resizeObserver = new ResizeObserver((entry) => {
    if (entry[0].contentBoxSize[0].inlineSize > 750) {
      if (menuFlag751pxUp) {
        menuFlag751pxUp = !menuFlag751pxUp;
        removeClass(menubar, "hide");
        removeClass(menubar, "closed");
        removeClass(menubarOverlay, "dark-background-overlay");
        addClass(menubarOverlay, "hide");
      }
    } else {
      if (!menuFlag751pxUp) {
        menuFlag751pxUp = !menuFlag751pxUp;
        addClass(menubar, "closed");
        addClass(menubar, "hide");
      }
    }
  });

  resizeObserver.observe(document.body);
}

function menubarTransitionEndListener() {
  let menubar = document.querySelector(".menu-bar");

  menubar.addEventListener("transitionend", () => {
    if (menubar.classList.contains("closed")) {
      // Hide menubar after it has transitioned outside the viewport.
      addClass(menubar, "hide");
    }
  });
}

function menubarTransitionStartListener() {
  let menubar = document.querySelector(".menu-bar");

  menubar.addEventListener("transitionstart", () => {
    if (!menubar.classList.contains("closed")) {
      // Make menu visible before starting transition to show menu.
      removeClass(menubar, "hide");
    }
  });
}

function toggleMenubarVisibility() {
  let menubarOverlay = document.querySelector("main").firstElementChild,
    menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar");

  menuButton.addEventListener("click", () => {
    // body and window have same viewport dimensions for this app
    let windowWidth = window.innerWidth;

    if (windowWidth <= 750) {
      if (menubarOverlay.classList.contains("dark-background-overlay")) {
        removeClass(menubarOverlay, "dark-background-overlay");
        addClass(menubarOverlay, "hide");
      } else {
        removeClass(menubarOverlay, "hide");
        addClass(menubarOverlay, "dark-background-overlay");
      }
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

export { menuController, changeTaskViewListener, updateMainContentHeading };
