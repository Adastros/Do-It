function createElement(element) {
  return document.createElement(element);
}

function addClass(element, ...cssClasses) {
  element.classList.add(...cssClasses);
}

function removeClass(element, ...cssClass) {
  element.classList.remove(...cssClass);
}

function toggleClass(element, cssClass) {
  element.classList.toggle(cssClass);
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
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
  createElement,
  addClass,
  removeClass,
  toggleClass,
  capitalizeFirstLetter,
  displayContentOnMouseOverListener,
  hideContentOnMouseOutListener,
};
