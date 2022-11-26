import { newProjectOverlayForm } from "../project/newProjectOverlayForm.js";
import { tab } from "../menubar/tab.js";
import { missingValueAggressiveValidation } from "./formValidationControls.js";
import { addTaskToTaskViewer, removeAllTasks } from "./taskController.js";
import { getTaskItem } from "./webStorageController.js";
import { format, addDays, differenceInCalendarDays } from "date-fns";
import { toggleClass } from "../helper/helper.js";

// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarTransitionendListener = () => {
  let menubar = document.querySelector(".menu-bar");
  toggleClass(menubar, "hide");
};

function addMenubarTransitionendListener(mainContent) {
  mainContent.addEventListener("transitionend", menubarTransitionendListener);
}

function removeMenubarTransitionendListener(mainContent) {
  mainContent.removeEventListener(
    "transitionend",
    menubarTransitionendListener
  );
}

function toggleMenubarVisibility() {
  let menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar"),
    mainContent = document.querySelector("main");

  menuButton.addEventListener("click", () => {
    if (mainContent.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      removeMenubarTransitionendListener(mainContent);

      // Make menu visible before starting transition to show menu.
      toggleClass(menubar, "hide");
    } else {
      // Add listener to set menubar visibility off after it has transitioned
      // outside the viewport.
      addMenubarTransitionendListener(mainContent);
    }
    toggleClass(mainContent, "closed");
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

function addProjectTabListener(
  projectName,
  projectDescription,
  projectTabClass
) {
  let projectTab = document.querySelector("." + projectTabClass);

  projectTab.addEventListener("click", () => {
    updateMainContentHeading(projectName);
    updateMainContentProjectDescription(projectDescription);
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
    let bodyTag = document.body,
      newProjectOverlay = document.querySelector(".new-project-overlay"),
      projectList = document.querySelector(".project-list"),
      projectName = document.querySelector("#new-project-name").value,
      projectDescription = document.querySelector(
        "#new-project-description"
      ).value,
      projectSpecificClass =
        "project-" + projectName.toLowerCase().replace(/\s/g, "-"),
      projectTab = tab(projectName, "project-tab", projectSpecificClass),
      mainContentHeading = document.querySelector(".main-content-heading"),
      mainContentProjectDescription = document.querySelector(
        ".main-content-project-description"
      );

    mainContentProjectDescription.textContent = projectDescription;
    mainContentHeading.textContent = projectName;

    projectList.append(projectTab);
    addProjectTabListener(
      projectName,
      projectDescription,
      projectSpecificClass
    );

    bodyTag.removeChild(newProjectOverlay);
  });
}

function updateMainContentHeading(text) {
  let mainContentHeading = document.querySelector(".main-content-heading");

  mainContentHeading.textContent = text;
}

function sortByInboxTasks(filteredLocalStorageData) {
  filteredLocalStorageData.forEach((key) => {
    addTaskToTaskViewer(key);
  });
}

function sortByTodaysTasks(filteredLocalStorageData) {
  let todaysDate = format(new Date(), "PP");

  filteredLocalStorageData.forEach((key) => {
    if (key === "previousMenuTab") {
    }
    let taskItemObj = getTaskItem(key);

    if (taskItemObj.dueDateValue === todaysDate) {
      addTaskToTaskViewer(key);
    }
  });
}

function sortByUpcomingTasks(filteredLocalStorageData) {
  let todaysDate = new Date(),
    weekFromTodaysDate = addDays(todaysDate, 6);

  filteredLocalStorageData.forEach((key) => {
    let taskItemObj = getTaskItem(key),
      taskDueDate = new Date(taskItemObj.dueDateValue);

    if (differenceInCalendarDays(taskDueDate, weekFromTodaysDate) < 7) {
      addTaskToTaskViewer(key);
    }
  });
}

function sortTasksByMenuTab(tabName) {
  let filteredLocalStorageData = Object.keys(localStorage).filter((key) => {
    return /\d{8}/.test(key);
  });

  switch (tabName) {
    case "Inbox":
      sortByInboxTasks(filteredLocalStorageData);
      break;
    case "Today":
      sortByTodaysTasks(filteredLocalStorageData);
      break;
    case "Upcoming":
      sortByUpcomingTasks(filteredLocalStorageData);
      break;
    default:
      return;
  }

  localStorage.previousMenuTab = tabName;
}

function createMenuTabListener(menuTab) {
  menuTab.addEventListener("click", () => {
    let tabName = menuTab.textContent;

    updateMainContentHeading(tabName);
    updateMainContentProjectDescription("");

    //If the user re-clicks the current tab, do not clear and re-sort task viewer.
    if (localStorage.previousMenuTab !== tabName) {
      removeAllTasks();
      sortTasksByMenuTab(tabName);
    }
  });
}

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}

export { menuController, createMenuTabListener };
