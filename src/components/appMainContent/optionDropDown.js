import { addClass, createElement } from "../helper/helper.js";

function optionDropDown() {
  let optionDropDown = createElement("div"),
    dropDown = createElement("select"),
    dropDownLabel = createElement("label"),
    defaultOption = createElement("option");

  dropDownLabel.id = "option-drop-down";

  defaultOption.id = "option-drop-down";
  defaultOption.setAttribute("value", "");
  defaultOption.setAttribute("selected", "");

  addClass(dropDown, "option-drop-down");

  dropDown.append(defaultOption);
  optionDropDown.append(dropDownLabel, dropDown);

  return optionDropDown;
}

export { optionDropDown };
