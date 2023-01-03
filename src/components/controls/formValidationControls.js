import { getData } from "./webStorageController.js";
import { removeClass, addClass } from "../helper/helper.js";

// Aggressively checks and disables the add button if if form field is empty
function missingValueAggressiveValidation(input, buttonToDisable) {
  input.addEventListener("input", (e) => {
    let errorField = document.querySelector(".error-field"),
      errorMessage = document.querySelector(".error-message");

    if (e.currentTarget.validity.valid) {
      buttonToDisable.removeAttribute("disabled", "");
      errorMessage.textContent = "";
      removeClass(input, "error");
      addClass(errorField, "hide");
    } else {
      buttonToDisable.setAttribute("disabled", "");
      errorMessage.textContent = "Please enter a task name.";
      addClass(input, "error");
      removeClass(errorField, "hide");
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
