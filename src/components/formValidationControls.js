import { addClass, removeClass } from "../helper.js";

// Aggressively checks and disables the add button if if form field is empty
function missingValueAggressiveValidation() {
  let formTaskHeader = document.querySelector("#form-task-header"),
    formAddTaskButton = document.querySelector(".form-add-task-button");

  formTaskHeader.addEventListener("input", (e) => {
    if (e.currentTarget.validity.valid) {
      formAddTaskButton.removeAttribute("disabled", "");
    } else {
      formAddTaskButton.setAttribute("disabled", "");
    }
  });
}

export {};
