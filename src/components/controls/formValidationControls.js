import { getData } from "./webStorageController.js";
import { removeClass, addClass } from "../helper/helper.js";

// Aggressively checks and disables the add button if if form field is empty
function missingValueAggressiveValidation(eventListenerNode, buttonToDisable) {
  eventListenerNode.addEventListener("input", (e) => {
    if (e.currentTarget.validity.valid) {
      buttonToDisable.removeAttribute("disabled", "");
    } else {
      buttonToDisable.setAttribute("disabled", "");
    }
  });
}

function doesProjectNameExist(projectName) {
  let projectDataObj = JSON.parse(getData("projects")),
    inputField = document.querySelector("#new-project-name"),
    errorField = document.querySelector(".error-field"),
    errorMessage = document.querySelector(".error-message"),
    existsFlag = true;

  if (projectDataObj.hasOwnProperty(projectName)) {
    errorMessage.textContent = "This project name already exists!";
    addClass(inputField, "error");
    removeClass(errorField, "hide");
    existsFlag = false;
  }

  return existsFlag;
}

export { missingValueAggressiveValidation, doesProjectNameExist };
