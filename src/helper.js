function createElement(element) {
  return document.createElement(element);
}

function addClass(element, cssClass) {
  element.classList.add(cssClass);
}

function removeClass(element, cssClass) {
  element.classList.remove(cssClass);
}

function toggleClass(element, cssClass) {
  element.classList.toggle(cssClass);
}

export { createElement, addClass, removeClass, toggleClass };
