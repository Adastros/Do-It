/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../image/no-tasks-background.jpg */ "./src/image/no-tasks-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  overflow: hidden;\n}\n\nheader {\n  height: 80px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  background-color: #ffd8be;\n}\n\nmain {\n  position: relative;\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n}\n\ninput {\n  width: 100%;\n}\n\ninput[type=\"date\"],\nselect {\n  padding: 0.25rem;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  display: block;\n}\n\nbutton {\n  border: none;\n  border-radius: 4px;\n  background-color: white;\n}\n\nbutton:hover {\n  filter: brightness(0.85);\n}\n\n.app-logo-container {\n  position: absolute;\n  top: calc(50% - 21px);\n  left: calc(50% - 62px);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  border: none;\n  background-color: #ffd8be;\n}\n\n.icon-button-medium {\n  height: 35px;\n  width: 35px;\n}\n\n.icon-button-small {\n  height: 27px;\n  width: 27px;\n}\n\n.icon-button-extra-small {\n  height: 20px;\n  width: 20px;\n  background-color: #f8f7ff;\n}\n\n.text-button {\n  padding: 6px 8px;\n}\n\n.icon-text-button {\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n}\n\n.add-new-task-button {\n  height: 1.75rem;\n  gap: 0.25rem;\n  background-color: #ffd8be;\n}\n\n.add-new-task-button > img {\n  height: 100%;\n}\n\n.demo-button {\n  height: 1.75rem;\n  border: none;\n  background-color: #ffd8be;\n}\n\n.form-add-or-save-task-button {\n  background-color: #aad8ff;\n}\n\n.new-project-button {\n  background-color: #f8f7ff;\n}\n\n.new-project-form-cancel-button {\n  background-color: #d7d6dd;\n  margin-right: 1rem;\n}\n\n.new-project-form-add-button {\n  background-color: #aad8ff;\n}\n\n.no-task-background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.empty-date-task-board-msg {\n  display: flex;\n  align-self: flex-start;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.top-right-side-button-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.menu-bar {\n  position: sticky;\n  top: 0;\n  width: 270px;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1rem;\n  transition: transform 0.25s;\n  background-color: #f8f7ff;\n}\n\n.menu-tabs {\n  width: 100%;\n}\n\n.tab {\n  padding: 1rem;\n  border-radius: 4px;\n  background-color: #f8f7ff;\n}\n\n.tab:hover,\n.project-tab:hover {\n  filter: brightness(0.85);\n}\n\n.tab-name {\n  flex: 1;\n}\n\n.linebreak {\n  width: 100%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-list {\n  margin: 0.25rem 0;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  overflow-wrap: break-word;\n  background-color: #f8f7ff;\n}\n\n.new-project-overlay,\n.task-form-overlay,\n.delete-task-confirmation-overlay {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.new-project-form,\n.task-form-container,\n.delete-confirmation-prompt {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.task-form-container {\n  min-width: 625px;\n}\n\n.delete-confirmation-prompt {\n  align-items: center;\n  width: 500px;\n}\n\n.delete-prompt-button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  gap: 2rem;\n  margin-top: 3rem;\n}\n\n.delete-prompt-button-container > button:first-child {\n  background-color: #d7d6dd;\n}\n\n.delete-prompt-button-container > button:last-child {\n  background-color: #aad8ff;\n}\n\n.new-project-form-buttons {\n  display: flex;\n  align-self: flex-end;\n}\n\n.error {\n  border-color: red;\n  box-shadow: 0 0 2px red;\n}\n\n.error-field {\n  width: 100%;\n}\n\n.error-message {\n  color: red;\n}\n\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n  transition: transform 0.25s;\n}\n\n.main-content-header {\n  width: 100%;\n}\n\n.task-viewer {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.secondary-task-board {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.overdue-task-board {\n  padding: 2rem;\n  border: 2px solid red;\n  box-shadow: 0 0 2px red;\n  border-radius: 16px;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.task-item {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.task-item:hover {\n  filter: brightness(0.85);\n}\n\n.task-item-info-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.primary-task-and-actions-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-header {\n  font-weight: normal;\n}\n\n.checkbox-container {\n  height: 100%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  margin-top: 0.35rem;\n  border: 2px solid #7567c7fc;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.date-and-priority-indicator-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.secondary-task-info-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 75%;\n}\n\n.task-form-actions-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-form-date-and-priority-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-form-buttons-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.task-item-actions {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-form-header-container {\n  margin-bottom: 1rem;\n}\n\n.form-cancel-button {\n  margin-right: 1rem;\n  background-color: #d7d6dd;\n}\n\n.new-project-name-form-field {\n  margin-bottom: 1rem;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-270px);\n}\n\n/* Moves <div class=\"main-content>\"*/\n/* Must be half of <div class=\"menu-bar> to remain centered on the app. */\n.closed + div {\n  transform: translateX(-135px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n\n#task-due-date-input {\n  width: fit-content;\n  margin-left: 0.5rem;\n}\n\n#form-task-header,\n#new-project-name {\n  margin-top: 0.25rem;\n  padding: 0.25rem;\n}\n\n#task-priority-dropdown {\n  margin-left: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  overflow: hidden;\n}\n\nheader {\n  height: 80px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  background-color: #ffd8be;\n}\n\nmain {\n  position: relative;\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n}\n\ninput {\n  width: 100%;\n}\n\ninput[type=\"date\"],\nselect {\n  padding: 0.25rem;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  display: block;\n}\n\nbutton {\n  border: none;\n  border-radius: 4px;\n  background-color: white;\n}\n\nbutton:hover {\n  filter: brightness(0.85);\n}\n\n.app-logo-container {\n  position: absolute;\n  top: calc(50% - 21px);\n  left: calc(50% - 62px);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  border: none;\n  background-color: #ffd8be;\n}\n\n.icon-button-medium {\n  height: 35px;\n  width: 35px;\n}\n\n.icon-button-small {\n  height: 27px;\n  width: 27px;\n}\n\n.icon-button-extra-small {\n  height: 20px;\n  width: 20px;\n  background-color: #f8f7ff;\n}\n\n.text-button {\n  padding: 6px 8px;\n}\n\n.icon-text-button {\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n}\n\n.add-new-task-button {\n  height: 1.75rem;\n  gap: 0.25rem;\n  background-color: #ffd8be;\n}\n\n.add-new-task-button > img {\n  height: 100%;\n}\n\n.demo-button {\n  height: 1.75rem;\n  border: none;\n  background-color: #ffd8be;\n}\n\n.form-add-or-save-task-button {\n  background-color: #aad8ff;\n}\n\n.new-project-button {\n  background-color: #f8f7ff;\n}\n\n.new-project-form-cancel-button {\n  background-color: #d7d6dd;\n  margin-right: 1rem;\n}\n\n.new-project-form-add-button {\n  background-color: #aad8ff;\n}\n\n.no-task-background {\n  background-image: url(\"../image/no-tasks-background.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.empty-date-task-board-msg {\n  display: flex;\n  align-self: flex-start;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.top-right-side-button-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.menu-bar {\n  position: sticky;\n  top: 0;\n  width: 270px;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1rem;\n  transition: transform 0.25s;\n  background-color: #f8f7ff;\n}\n\n.menu-tabs {\n  width: 100%;\n}\n\n.tab {\n  padding: 1rem;\n  border-radius: 4px;\n  background-color: #f8f7ff;\n}\n\n.tab:hover,\n.project-tab:hover {\n  filter: brightness(0.85);\n}\n\n.tab-name {\n  flex: 1;\n}\n\n.linebreak {\n  width: 100%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-list {\n  margin: 0.25rem 0;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  overflow-wrap: break-word;\n  background-color: #f8f7ff;\n}\n\n.new-project-overlay,\n.task-form-overlay,\n.delete-task-confirmation-overlay {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.new-project-form,\n.task-form-container,\n.delete-confirmation-prompt {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.task-form-container {\n  min-width: 625px;\n}\n\n.delete-confirmation-prompt {\n  align-items: center;\n  width: 500px;\n}\n\n.delete-prompt-button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  gap: 2rem;\n  margin-top: 3rem;\n}\n\n.delete-prompt-button-container > button:first-child {\n  background-color: #d7d6dd;\n}\n\n.delete-prompt-button-container > button:last-child {\n  background-color: #aad8ff;\n}\n\n.new-project-form-buttons {\n  display: flex;\n  align-self: flex-end;\n}\n\n.error {\n  border-color: red;\n  box-shadow: 0 0 2px red;\n}\n\n.error-field {\n  width: 100%;\n}\n\n.error-message {\n  color: red;\n}\n\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n  transition: transform 0.25s;\n}\n\n.main-content-header {\n  width: 100%;\n}\n\n.task-viewer {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.secondary-task-board {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.overdue-task-board {\n  padding: 2rem;\n  border: 2px solid red;\n  box-shadow: 0 0 2px red;\n  border-radius: 16px;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.task-item {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.task-item:hover {\n  filter: brightness(0.85);\n}\n\n.task-item-info-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.primary-task-and-actions-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-header {\n  font-weight: normal;\n}\n\n.checkbox-container {\n  height: 100%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  margin-top: 0.35rem;\n  border: 2px solid #7567c7fc;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.date-and-priority-indicator-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.secondary-task-info-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 75%;\n}\n\n.task-form-actions-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-form-date-and-priority-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-form-buttons-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.task-item-actions {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-form-header-container {\n  margin-bottom: 1rem;\n}\n\n.form-cancel-button {\n  margin-right: 1rem;\n  background-color: #d7d6dd;\n}\n\n.new-project-name-form-field {\n  margin-bottom: 1rem;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-270px);\n}\n\n/* Moves <div class=\"main-content>\"*/\n/* Must be half of <div class=\"menu-bar> to remain centered on the app. */\n.closed + div {\n  transform: translateX(-135px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n\n#task-due-date-input {\n  width: fit-content;\n  margin-left: 0.5rem;\n}\n\n#form-task-header,\n#new-project-name {\n  margin-top: 0.25rem;\n  padding: 0.25rem;\n}\n\n#task-priority-dropdown {\n  margin-left: 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareDesc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/appHeader/appHeader.js":
/*!***********************************************!*\
  !*** ./src/components/appHeader/appHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHeader": () => (/* binding */ appHeader)
/* harmony export */ });
/* harmony import */ var _appLogo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogo.js */ "./src/components/appHeader/appLogo.js");
/* harmony import */ var _generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalButtons/iconButtonMedium.js */ "./src/components/generalButtons/iconButtonMedium.js");
/* harmony import */ var _generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generalButtons/textButton.js */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _generalButtons_iconAndTextButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalButtons/iconAndTextButton.js */ "./src/components/generalButtons/iconAndTextButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/menu.svg */ "./src/icons/menu.svg");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/plus.svg */ "./src/icons/plus.svg");








function appHeader() {
  let appHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("header"),
    menuButton = (0,_generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_1__.iconButtonMedium)(_icons_menu_svg__WEBPACK_IMPORTED_MODULE_5__, "Menu icon"),
    addNewTaskButton = (0,_generalButtons_iconAndTextButton_js__WEBPACK_IMPORTED_MODULE_3__.iconAndTextButton)(
      "Add task",
      _icons_plus_svg__WEBPACK_IMPORTED_MODULE_6__,
      "",
      "add-new-task-button"
    ),
    demoButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_2__.textButton)("Demo", "demo-button"),
    topRightButtonContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(menuButton, "menu-button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(topRightButtonContainer, "top-right-side-button-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(appHeader, "appHeader");

  topRightButtonContainer.append(addNewTaskButton, demoButton);
  appHeader.append(menuButton, (0,_appLogo_js__WEBPACK_IMPORTED_MODULE_0__.appLogo)(), topRightButtonContainer);

  return appHeader;
}




/***/ }),

/***/ "./src/components/appHeader/appLogo.js":
/*!*********************************************!*\
  !*** ./src/components/appHeader/appLogo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appLogo": () => (/* binding */ appLogo)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image/Todo-ist Logo.svg */ "./src/image/Todo-ist Logo.svg");



function appLogo() {
  let appLogoContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    appName = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2"),
    logoImage = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  appName.textContent = "Do It";

  logoImage.setAttribute("src", _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__);
  logoImage.setAttribute(
    "alt",
    "Todo-ist Logo. Clipboards with checkmarks on them."
  );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(appLogoContainer, "app-logo-container");

  appLogoContainer.append(logoImage, appName);

  return appLogoContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/appMainContent.js":
/*!*********************************************************!*\
  !*** ./src/components/appMainContent/appMainContent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appMainContent": () => (/* binding */ appMainContent)
/* harmony export */ });
/* harmony import */ var _mainContentHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContentHeader.js */ "./src/components/appMainContent/mainContentHeader.js");
/* harmony import */ var _taskViewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskViewer.js */ "./src/components/appMainContent/taskViewer.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");




function appMainContent() {
  let appMainContent = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    linebreak = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(linebreak, "linebreak");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(appMainContent, "main-content");

  appMainContent.append((0,_mainContentHeader_js__WEBPACK_IMPORTED_MODULE_0__.mainContentHeader)(), linebreak, (0,_taskViewer_js__WEBPACK_IMPORTED_MODULE_1__.taskViewer)());

  return appMainContent;
}




/***/ }),

/***/ "./src/components/appMainContent/mainContentHeader.js":
/*!************************************************************!*\
  !*** ./src/components/appMainContent/mainContentHeader.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContentHeader": () => (/* binding */ mainContentHeader)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function mainContentHeader() {
  let mainContentHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    headingContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    heading = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1");

  // On page load, Inbox is loaded by default.
  heading.textContent = "Inbox";

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(mainContentHeader, "main-content-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headingContainer, "main-content-heading-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(heading, "main-content-heading");

  headingContainer.append(heading);
  mainContentHeader.append(headingContainer);

  return mainContentHeader;
}




/***/ }),

/***/ "./src/components/appMainContent/secondaryTaskBoard.js":
/*!*************************************************************!*\
  !*** ./src/components/appMainContent/secondaryTaskBoard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondaryTaskBoard": () => (/* binding */ secondaryTaskBoard)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/components/helper/helper.js");


function secondaryTaskBoard(boardHeader) {
  let secondaryTaskBoard = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    boardTitle = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2"),
    linebreak = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    taskList = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul");

  boardTitle.textContent = boardHeader;

  (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskList, "task-list");
  (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(linebreak, "linebreak");
  (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(boardTitle, "secondary-task-title");
  (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(secondaryTaskBoard, "secondary-task-board");

  if (boardHeader.toLowerCase() === "today") {
    secondaryTaskBoard.append(taskList);
  } else {
    secondaryTaskBoard.append(boardTitle, linebreak, taskList);
  }

  return secondaryTaskBoard;
}




/***/ }),

/***/ "./src/components/appMainContent/task/checkbox.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/checkbox.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkbox": () => (/* binding */ checkbox)
/* harmony export */ });
/* harmony import */ var _controls_taskController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons/check.svg */ "./src/icons/check.svg");




function checkbox(taskItemId) {
  let checkboxContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkbox = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkmark = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("img");

  checkmark.setAttribute("src", _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__);
  checkmark.setAttribute("alt", "Checkmark icon");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkbox, "checkbox");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkmark, "fade-in-out");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkboxContainer, "checkbox-container");
  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskCompletion)(checkbox, taskItemId);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/task/confirmDeletePromptOverlay.js":
/*!**************************************************************************!*\
  !*** ./src/components/appMainContent/task/confirmDeletePromptOverlay.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmDeletePromptOverlay": () => (/* binding */ confirmDeletePromptOverlay)
/* harmony export */ });
/* harmony import */ var _generalButtons_textButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generalButtons/textButton */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _controls_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controls/taskController */ "./src/components/controls/taskController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");




function confirmDeletePromptOverlay(taskOrProjectText, itemObj) {
  let overlayContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    promptContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    confirmationText = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("p"),
    taskOrProjectTextBold = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("b"),
    buttonContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    confirmButton = (0,_generalButtons_textButton__WEBPACK_IMPORTED_MODULE_0__.textButton)("Yes", "text-button"),
    cancelButton = (0,_generalButtons_textButton__WEBPACK_IMPORTED_MODULE_0__.textButton)("No", "text-button");

  confirmationText.textContent = `Are you sure you want to delete `;
  taskOrProjectTextBold.textContent = `${taskOrProjectText}?`;

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(buttonContainer, "delete-prompt-button-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(promptContainer, "delete-confirmation-prompt");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(overlayContainer, "delete-task-confirmation-overlay");

  confirmationText.append(taskOrProjectTextBold);
  buttonContainer.append(cancelButton, confirmButton);
  promptContainer.append(confirmationText, buttonContainer);
  overlayContainer.append(promptContainer);

  (0,_controls_taskController__WEBPACK_IMPORTED_MODULE_1__.createCancelButtonListener)(overlayContainer, cancelButton);
  (0,_controls_taskController__WEBPACK_IMPORTED_MODULE_1__.deleteConfirmationButtonListener)(confirmButton, overlayContainer, itemObj);

  return overlayContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskDueDateField.js":
/*!****************************************************************!*\
  !*** ./src/components/appMainContent/task/taskDueDateField.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDueDateField": () => (/* binding */ taskDueDateField)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");



function taskDueDateField(dueDate) {
  let taskDueDateField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    dateInputLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    dateInput = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("input");

  dateInputLabel.textContent = "Due Date:";
  dateInputLabel.setAttribute("for", "task-due-date-input");
  dateInput.id = "task-due-date-input";
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "taskDueDate");

  // If editing a task, set the date value shown to the due date of the
  // task. Otherwise, set the due date to the current date by default.
  if (dueDate) {
    dateInput.setAttribute(
      "value",
      `${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(dueDate), "yyyy-MM-dd")}`
    );
  } else {
    dateInput.setAttribute("value", `${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), "yyyy-MM-dd")}`);
  }

  taskDueDateField.append(dateInputLabel, dateInput);

  return taskDueDateField;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskForm.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/taskForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _taskDueDateField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDueDateField.js */ "./src/components/appMainContent/task/taskDueDateField.js");
/* harmony import */ var _taskPriorityDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskPriorityDropdown.js */ "./src/components/appMainContent/task/taskPriorityDropdown.js");
/* harmony import */ var _generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generalButtons/textButton.js */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");





function createTaskHeaderField(headerValue) {
  let headerContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    headerLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("label"),
    headerInputField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("textarea");

  headerLabel.textContent = "Task Name";
  if (headerValue) {
    headerInputField.textContent = headerValue;
  }

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(headerInputField, "form-task-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(headerContainer, "task-form-header-container");

  headerContainer.append(headerLabel, headerInputField, taskFormErrorField());

  return headerContainer;
}

function taskFormErrorField() {
  let errorField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    errorMessage = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("span");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(errorField, "error-field", "hide");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(errorMessage, "error-message");

  errorField.append(errorMessage);

  return errorField;
}

// The addOrSaveTaskButtonText argument is used to determine if the
// taskForm should state "save" or "add task" for one of the buttons.
function taskForm(addOrSaveTaskButtonText, currentTaskItemObj) {
  let taskFormOverlay = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    taskForm = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    taskItemForm = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("form"),
    headerField = createTaskHeaderField(currentTaskItemObj.headerValue),
    taskFormActionsContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    taskDateAndPriorityContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    taskFormButtonsContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    cancelFormButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_2__.textButton)("Cancel", "form-cancel-button"),
    addOrSaveTaskButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_2__.textButton)(
      addOrSaveTaskButtonText,
      "form-add-or-save-task-button"
    );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(
    taskDateAndPriorityContainer,
    "task-form-date-and-priority-container"
  );
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskFormActionsContainer, "task-form-actions-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskItemForm, "task-form");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskForm, "task-form-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskFormOverlay, "task-form-overlay");

  if (addOrSaveTaskButtonText === "Add Task") {
    addOrSaveTaskButton.setAttribute("disabled", "");
  } else {
    addOrSaveTaskButton.removeAttribute("disabled", "");
  }

  taskItemForm.setAttribute("novalidate", "");

  taskDateAndPriorityContainer.append(
    (0,_taskDueDateField_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateField)(currentTaskItemObj.dueDateValue),
    (0,_taskPriorityDropdown_js__WEBPACK_IMPORTED_MODULE_1__.taskPriorityDropdown)(currentTaskItemObj.priorityValue)
  );
  taskFormButtonsContainer.append(cancelFormButton, addOrSaveTaskButton);
  taskFormActionsContainer.append(
    taskDateAndPriorityContainer,
    taskFormButtonsContainer
  );
  taskItemForm.append(headerField, taskFormActionsContainer);
  taskForm.append(taskItemForm);

  taskFormOverlay.append(taskForm);

  return taskFormOverlay;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskInfo.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/taskInfo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskInfo": () => (/* binding */ taskInfo)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");


function taskInfo(taskHeaderValue, taskDescriptionValue) {
  let taskInformationContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    taskHeaderElement = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3");

  taskHeaderElement.textContent = taskHeaderValue;

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskHeaderElement, "task-header");

  taskInformationContainer.append(taskHeaderElement);

  return taskInformationContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskItem.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/taskItem.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskItem": () => (/* binding */ taskItem)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/components/appMainContent/task/checkbox.js");
/* harmony import */ var _taskInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskInfo.js */ "./src/components/appMainContent/task/taskInfo.js");
/* harmony import */ var _taskItemActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskItemActions.js */ "./src/components/appMainContent/task/taskItemActions.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");





function taskItem(taskItemId, taskItemObj) {
  let taskItem = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    taskInfoContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    primaryTaskInfoAndActionsContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    secondaryTaskInfoContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    dueDateAndPriorityIndicatorContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    taskLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("p"),
    priorityIndicator = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("p"),
    dueDateIndicator = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("p"),
    upperCasePriorityValue = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.capitalizeFirstLetter)(taskItemObj.priorityValue);

  priorityIndicator.textContent = "Priority: " + upperCasePriorityValue;
  dueDateIndicator.textContent = "Due Date: " + taskItemObj.dueDateValue;
  taskLabel.textContent = taskItemObj.taskType;

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(
    dueDateAndPriorityIndicatorContainer,
    "date-and-priority-indicator-container"
  );
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(secondaryTaskInfoContainer, "secondary-task-info-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(
    primaryTaskInfoAndActionsContainer,
    "primary-task-and-actions-container"
  );
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskInfoContainer, "task-item-info-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskItem, "task-item");

  taskItem.dataset.taskItemId = taskItemId;

  dueDateAndPriorityIndicatorContainer.append(
    dueDateIndicator,
    priorityIndicator
  );

  secondaryTaskInfoContainer.append(
    dueDateAndPriorityIndicatorContainer,
    taskLabel
  );

  primaryTaskInfoAndActionsContainer.append(
    (0,_taskInfo_js__WEBPACK_IMPORTED_MODULE_1__.taskInfo)(taskItemObj.headerValue),
    (0,_taskItemActions_js__WEBPACK_IMPORTED_MODULE_2__.taskItemActions)(taskItemId)
  );

  taskInfoContainer.append(
    primaryTaskInfoAndActionsContainer,
    secondaryTaskInfoContainer
  );

  taskItem.append((0,_checkbox_js__WEBPACK_IMPORTED_MODULE_0__.checkbox)(taskItemId), taskInfoContainer);

  return taskItem;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskItemActions.js":
/*!***************************************************************!*\
  !*** ./src/components/appMainContent/task/taskItemActions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskItemActions": () => (/* binding */ taskItemActions)
/* harmony export */ });
/* harmony import */ var _generalButtons_iconButtonSmall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generalButtons/iconButtonSmall.js */ "./src/components/generalButtons/iconButtonSmall.js");
/* harmony import */ var _controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/edit.svg */ "./src/icons/edit.svg");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/delete.svg */ "./src/icons/delete.svg");






function taskItemActions(taskItemId) {
  let taskItemActions = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    editButton = (0,_generalButtons_iconButtonSmall_js__WEBPACK_IMPORTED_MODULE_0__.iconButtonSmall)(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__, "Task Edit Icon Button"),
    deleteButton = (0,_generalButtons_iconButtonSmall_js__WEBPACK_IMPORTED_MODULE_0__.iconButtonSmall)(_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__, "Task Delete Button");

  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__.AddEditButtonListener)(editButton, taskItemId);
  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__.createDeletePromptOverlayListener)(deleteButton, { taskItemId: taskItemId });

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(taskItemActions, "task-item-actions");

  taskItemActions.append(editButton, deleteButton);

  return taskItemActions;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskPriorityDropdown.js":
/*!********************************************************************!*\
  !*** ./src/components/appMainContent/task/taskPriorityDropdown.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskPriorityDropdown": () => (/* binding */ taskPriorityDropdown)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");


function taskPriorityDropdown(priorityValue) {
  let taskPriorityDropdown = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    label = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    dropdown = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
    priorityOptionArr = ["None", "Low", "Medium", "High"];

  label.textContent = "Priority:";
  label.setAttribute("for", "task-priority-dropdown");
  dropdown.id = "task-priority-dropdown";

  for (let i = 0; i < 4; i++) {
    let priorityOption = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("option"),
      lowerCaseOptionStr = priorityOptionArr[i].toLowerCase();

    priorityOption.textContent = priorityOptionArr[i];
    priorityOption.setAttribute("value", `${lowerCaseOptionStr}`);

    // If editing a task, select the option in the dropdown that
    // matches the current priority value
    if (priorityValue.toLowerCase() === lowerCaseOptionStr) {
      priorityOption.setAttribute("selected", "");
    }

    dropdown.append(priorityOption);
  }

  taskPriorityDropdown.append(label, dropdown);

  return taskPriorityDropdown;
}




/***/ }),

/***/ "./src/components/appMainContent/taskViewer.js":
/*!*****************************************************!*\
  !*** ./src/components/appMainContent/taskViewer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskViewer": () => (/* binding */ taskViewer)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function taskViewer() {
  let taskViewer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskViewer, "task-viewer");

  return taskViewer;
}




/***/ }),

/***/ "./src/components/controls/formValidationControls.js":
/*!***********************************************************!*\
  !*** ./src/components/controls/formValidationControls.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doesProjectNameExist": () => (/* binding */ doesProjectNameExist),
/* harmony export */   "missingValueAggressiveValidation": () => (/* binding */ missingValueAggressiveValidation)
/* harmony export */ });
/* harmony import */ var _webStorageController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webStorageController.js */ "./src/components/controls/webStorageController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



// Aggressively checks and disables the add button if if form field is empty
function missingValueAggressiveValidation(input, buttonToDisable) {
  input.addEventListener("input", (e) => {
    let errorField = document.querySelector(".error-field"),
      errorMessage = document.querySelector(".error-message");

    if (e.currentTarget.validity.valid) {
      buttonToDisable.removeAttribute("disabled", "");
      errorMessage.textContent = "";
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(input, "error");
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(errorField, "hide");
    } else {
      buttonToDisable.setAttribute("disabled", "");
      errorMessage.textContent = "Please enter a task name.";
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(input, "error");
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(errorField, "hide");
    }
  });
}

function doesProjectNameExist(projectName) {
  let projectDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_0__.getData)("projects")),
    inputField = document.querySelector("#new-project-name"),
    errorField = document.querySelector(".error-field"),
    errorMessage = document.querySelector(".error-message"),
    existsFlag = true;

  if (projectDataObj.hasOwnProperty(projectName)) {
    errorMessage.textContent = "This project name already exists!";
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(inputField, "error");
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(errorField, "hide");
    existsFlag = false;
  }

  return existsFlag;
}




/***/ }),

/***/ "./src/components/controls/menuController.js":
/*!***************************************************!*\
  !*** ./src/components/controls/menuController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTabListener": () => (/* binding */ createTabListener),
/* harmony export */   "menuController": () => (/* binding */ menuController),
/* harmony export */   "updateMainContentHeading": () => (/* binding */ updateMainContentHeading)
/* harmony export */ });
/* harmony import */ var _project_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/newProjectOverlayForm.js */ "./src/components/project/newProjectOverlayForm.js");
/* harmony import */ var _project_projectTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/projectTab.js */ "./src/components/project/projectTab.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/controls/formValidationControls.js");
/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _webStorageController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webStorageController.js */ "./src/components/controls/webStorageController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");







// Reason for arrow function:
// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarListener = () => {
  let menubar = document.querySelector(".menu-bar");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_5__.toggleClass)(menubar, "hide");
};

function toggleMenubarVisibility() {
  let menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar");

  menuButton.addEventListener("click", () => {
    if (menubar.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      menubar.removeEventListener("transitionend", menubarListener);

      // Make menu visible before starting transition to show menu.
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_5__.removeClass)(menubar, "hide");
    } else {
      // Hide menubar after it has transitioned outside the viewport.
      menubar.addEventListener("transitionend", menubarListener);
    }
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_5__.toggleClass)(menubar, "closed");
  });
}

function displayNewProjectOverlayForm() {
  let newProjectButton = document.querySelector(".new-project-button");

  newProjectButton.addEventListener("click", () => {
    document.body.append((0,_project_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__.newProjectOverlayForm)());

    let newProjectNameNode = document.querySelector("#new-project-name"),
      newProjectAddButton = document.querySelector(
        ".new-project-form-add-button"
      );

    cancelNewProjectButtonListener();
    addNewProjectButtonListener();
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__.missingValueAggressiveValidation)(newProjectNameNode, newProjectAddButton);
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

function addNewProjectButtonListener() {
  let addNewProjectButton = document.querySelector(
    ".new-project-form-add-button"
  );

  addNewProjectButton.addEventListener("click", () => {
    let projectName = document.querySelector("#new-project-name").value.trim();

    if ((0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__.doesProjectNameExist)(projectName)) {
      let newProjectOverlay = document.querySelector(".new-project-overlay"),
        projectList = document.querySelector(".project-list"),
        newProjectTab = (0,_project_projectTab_js__WEBPACK_IMPORTED_MODULE_1__.projectTab)(projectName),
        mainContentHeading = document.querySelector(".main-content-heading");

      mainContentHeading.textContent = projectName;

      projectList.append(newProjectTab);
      createTabListener(newProjectTab);

      // create localStorage key using project name
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_4__.saveTaskItem)(projectName);

      (0,_taskController_js__WEBPACK_IMPORTED_MODULE_3__.clearPrimaryTaskBoard)();
      (0,_taskController_js__WEBPACK_IMPORTED_MODULE_3__.addPrimaryTaskBoardBackground)(projectName);
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_4__.saveData)("previousTab", projectName);
      newProjectOverlay.remove();
    }
  });
}

function updateMainContentHeading(text) {
  let mainContentHeading = document.querySelector(".main-content-heading");

  mainContentHeading.textContent = text;
}

function createTabListener(tabElement) {
  tabElement.addEventListener("click", () => {
    let tabName = tabElement.textContent;

    updateMainContentHeading(tabName);

    //If the user re-clicks the current tab, do not clear and re-sort task viewer.
    if (localStorage.previousTab !== tabName) {
      (0,_taskController_js__WEBPACK_IMPORTED_MODULE_3__.getTaskSortMethod)(tabName);
    }
  });
}

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}




/***/ }),

/***/ "./src/components/controls/taskController.js":
/*!***************************************************!*\
  !*** ./src/components/controls/taskController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditButtonListener": () => (/* binding */ AddEditButtonListener),
/* harmony export */   "addPrimaryTaskBoardBackground": () => (/* binding */ addPrimaryTaskBoardBackground),
/* harmony export */   "addTaskButtonListener": () => (/* binding */ addTaskButtonListener),
/* harmony export */   "clearPrimaryTaskBoard": () => (/* binding */ clearPrimaryTaskBoard),
/* harmony export */   "createCancelButtonListener": () => (/* binding */ createCancelButtonListener),
/* harmony export */   "createDeletePromptOverlayListener": () => (/* binding */ createDeletePromptOverlayListener),
/* harmony export */   "deleteConfirmationButtonListener": () => (/* binding */ deleteConfirmationButtonListener),
/* harmony export */   "emptyTaskData": () => (/* binding */ emptyTaskData),
/* harmony export */   "getTaskSortMethod": () => (/* binding */ getTaskSortMethod),
/* harmony export */   "saveTaskButtonListener": () => (/* binding */ saveTaskButtonListener),
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "toggleTaskCompletion": () => (/* binding */ toggleTaskCompletion)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareDesc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var _appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appMainContent/task/taskForm.js */ "./src/components/appMainContent/task/taskForm.js");
/* harmony import */ var _appMainContent_task_confirmDeletePromptOverlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appMainContent/task/confirmDeletePromptOverlay.js */ "./src/components/appMainContent/task/confirmDeletePromptOverlay.js");
/* harmony import */ var _appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appMainContent/task/taskItem.js */ "./src/components/appMainContent/task/taskItem.js");
/* harmony import */ var _appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appMainContent/secondaryTaskBoard.js */ "./src/components/appMainContent/secondaryTaskBoard.js");
/* harmony import */ var _menubar_projectList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menubar/projectList.js */ "./src/components/menubar/projectList.js");
/* harmony import */ var _webStorageController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webStorageController.js */ "./src/components/controls/webStorageController.js");
/* harmony import */ var _menuController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuController.js */ "./src/components/controls/menuController.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/controls/formValidationControls.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _data_demo_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/demo.json */ "./data/demo.json");












function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let newTaskForm = (0,_appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)("Add Task", createTaskItemObj()),
      newTaskFormCancelButton = newTaskForm.querySelector(
        ".form-cancel-button"
      );

    document.body.append(newTaskForm);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    createCancelButtonListener(newTaskForm, newTaskFormCancelButton);
    addTaskButtonListener(newTaskForm);
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_7__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function createCancelButtonListener(formOrOverlay, cancelButton) {
  cancelButton.addEventListener("click", () => {
    formOrOverlay.remove();
  });
}

function addTaskButtonListener(taskForm) {
  let formAddTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddTaskButton.addEventListener("click", () => {
    let taskItemObj = createTaskItemObj(taskForm),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      taskItemId = createTaskItemIdNumber();

    if (primaryTaskBoardHeading !== "Completed") {
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveTaskItem)(primaryTaskBoardHeading, taskItemId, taskItemObj);
      insertTaskBasedOnView(primaryTaskBoardHeading, taskItemId, taskItemObj);
    } else {
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveTaskItem)("inbox", taskItemId, taskItemObj);
    }

    taskForm.remove();
  });
}

function saveTaskButtonListener(taskForm, taskItemId) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let completedDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("completed")),
      completionDates = Object.keys(completedDataObj),
      completionDateKey;

    for (let i = 0; i < completionDates.length; i++) {
      if (
        completedDataObj[completionDates[i]].hasOwnProperty(`${taskItemId}`)
      ) {
        completionDateKey = completionDates[i];
        break;
      }
    }

    let editedTaskObj = createTaskItemObj(taskForm, taskItemId),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent;

    (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.deleteTaskItem)(taskItemId);
    (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveTaskItem)(
      primaryTaskBoardHeading,
      taskItemId,
      editedTaskObj,
      completionDateKey
    );
    getTaskSortMethod(primaryTaskBoardHeading);

    taskForm.remove();
  });
}

// Adds tasks to the relevant board based on the page view
function addTaskToBoard(taskItemId, taskItemObj, taskBoard) {
  if (!taskItemObj) {
    taskItemObj = (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getTaskItem)(taskItemId);
  }

  taskBoard = taskBoard.querySelector(".task-list");

  taskBoard.append((0,_appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskItemId, taskItemObj));
}

function AddEditButtonListener(editButton, taskItemId) {
  editButton.addEventListener("click", () => {
    let currentTaskItemObj = (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getTaskItem)(taskItemId);

    // Create the task edit form and render it on the screen
    let taskEditForm = (0,_appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)("Save", currentTaskItemObj),
      newTaskFormCancelButton = taskEditForm.querySelector(
        ".form-cancel-button"
      );

    document.body.append(taskEditForm);

    // Get the task edit form header and save button to validate and
    // toggle button status, respectively.
    let formTaskHeader = taskEditForm.querySelector("#form-task-header"),
      formAddTaskButton = taskEditForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Set listeners for task edit form
    createCancelButtonListener(taskEditForm, newTaskFormCancelButton);
    saveTaskButtonListener(taskEditForm, taskItemId);
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_7__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function createDeletePromptOverlayListener(deleteButton, itemObj) {
  deleteButton.addEventListener("click", () => {
    let taskOrProjectText;

    if (itemObj.hasOwnProperty("taskItemId")) {
      taskOrProjectText = (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getTaskItem)(itemObj.taskItemId).headerValue;
    } else {
      taskOrProjectText = itemObj.projectName;
    }

    document.body.append(
      (0,_appMainContent_task_confirmDeletePromptOverlay_js__WEBPACK_IMPORTED_MODULE_1__.confirmDeletePromptOverlay)(taskOrProjectText, itemObj)
    );
  });
}

function deleteConfirmationButtonListener(
  confirmButton,
  overlayContainer,
  itemObj
) {
  confirmButton.addEventListener("click", () => {
    if (itemObj.hasOwnProperty("taskItemId")) {
      let itemToDelete = document.querySelector(
          `[data-task-item-id = '${itemObj.taskItemId}']`
        ),
        primaryTaskBoardHeading = document.querySelector(
          ".main-content-heading"
        ).textContent;

      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.deleteTaskItem)(itemObj.taskItemId);
      removeTaskOrBoardFromDOM(primaryTaskBoardHeading, itemToDelete);
      overlayContainer.remove();

      if (isPrimaryTaskListEmpty()) {
        addPrimaryTaskBoardBackground(primaryTaskBoardHeading);
      }

      if (primaryTaskBoardHeading.toLowerCase() === "upcoming") {
        emptyTaskBoardMessage();
      }
    } else {
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.deleteProject)(itemObj.projectName);
      clearProjectTabs();
      reloadProjectTabs();
      getTaskSortMethod("inbox");
      (0,_menuController_js__WEBPACK_IMPORTED_MODULE_6__.updateMainContentHeading)("Inbox");
      overlayContainer.remove();
    }
  });
}

function toggleTaskCompletion(checkbox, taskItemId) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      ),
      primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      task = (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getTaskItem)(taskItemId);

    (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.deleteTaskItem)(taskItemId);

    if (taskItem.classList.contains("completed")) {
      // Determines where to move the completed task back to.
      if (task.taskType.includes("General")) {
        // Inbox is used since general tasks can be created during the
        // inbox, today, and upcoming views. All three views save tasks
        // to taskData.
        (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveTaskItem)("inbox", taskItemId, task);
      } else {
        (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveTaskItem)(
          task.taskType.replace("Project Task: ", ""),
          taskItemId,
          task
        );
      }
    } else {
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveTaskItem)("completed", taskItemId, task);
    }

    removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskItem);

    if (isPrimaryTaskListEmpty()) {
      addPrimaryTaskBoardBackground(primaryTaskBoardHeading);
    }

    if (primaryTaskBoardHeading.toLowerCase() === "upcoming") {
      emptyTaskBoardMessage();
    }
  });
}

function removeTaskOrBoardFromDOM(primaryTaskBoardHeading, taskToDelete) {
  // remove the secondary task board if this is the last task left.
  // Otherwise, remove the task from the secondary task board
  switch (primaryTaskBoardHeading.toLowerCase()) {
    case "upcoming":
      taskToDelete.remove();
      break;
    case "completed":
      if (taskToDelete.parentElement.childElementCount === 1) {
        (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.deleteEmptyCompletionDateKeys)();
        taskToDelete.parentElement.parentElement.remove();
      } else {
        taskToDelete.remove();
      }
      break;
    default: // Project tabs, inbox, today
      if (taskToDelete.parentElement.childElementCount === 1) {
        taskToDelete.parentElement.parentElement.remove();
      } else {
        taskToDelete.remove();
      }
      break;
  }
}

// Random assigns a eight digit integer for the task ID.
function createTaskItemIdNumber() {
  let min = 0,
    max = 100000000,
    taskId;

  do {
    // The maximum is exclusive and the minimum is inclusive
    taskId = Math.floor(Math.random() * (max - min) + min);
  } while (Object.keys(localStorage).includes(`${taskId}`));

  return taskId;
}

function createTaskItemObj(taskForm, keepTaskType) {
  // When creating the first task in task viewer, assign empty values to
  // the object so that taskForm will display empty fields.
  if (!taskForm) {
    return {
      headerValue: "",
      priorityValue: "",
    };
  } else {
    return {
      headerValue: taskForm.querySelector("#form-task-header").value,
      priorityValue: taskForm.querySelector("#task-priority-dropdown").value,
      // reconverts it into a more widely recognizable date form (e.g.: November 11, 2022)
      // the '-' are replaced with '/' due to an issue where formatting the date with '-'
      // causes the date to be one day behind the desired date
      dueDateValue: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(
        new Date(
          taskForm
            .querySelector("#task-due-date-input")
            .value.replace(/-/g, "/")
        ),
        "PP"
      ),
      taskType: determineTaskType(keepTaskType),
    };
  }
}

function determineTaskType(keepTaskType) {
  let taskType,
    primaryTaskBoardHeading = document.querySelector(
      ".main-content-heading"
    ).textContent;

  switch (primaryTaskBoardHeading.toLowerCase()) {
    case "inbox":
    case "today":
    case "upcoming":
      taskType = "General Task";
      break;
    case "completed":
      taskType = keepTaskType;
      break;
    default:
      taskType = "Project Task: " + primaryTaskBoardHeading;
      break;
  }

  return taskType;
}

function clearPrimaryTaskBoard() {
  let primaryTaskBoard = document.querySelector(".task-viewer");

  while (primaryTaskBoard.firstElementChild) {
    primaryTaskBoard.firstElementChild.remove();
  }
}

function clearProjectTabs() {
  document.querySelector(".project-list").remove();
}

function reloadProjectTabs() {
  let projectSection = document.querySelector(".project-section");

  projectSection.append((0,_menubar_projectList_js__WEBPACK_IMPORTED_MODULE_4__.projectList)());
}

function getTaskSortMethod(primaryTaskBoardHeading) {
  let localStorageKey = (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.determineLocalStorageKey)(primaryTaskBoardHeading),
    overDueTasks = checkForAllOverdueTasks(
      localStorageKey,
      primaryTaskBoardHeading
    );

  clearPrimaryTaskBoard();

  switch (primaryTaskBoardHeading.toLowerCase()) {
    case "inbox":
      createPriorityBoards();
      sortTasksByInbox();
      break;
    case "today":
      sortTasksByToday(primaryTaskBoardHeading);
      break;
    case "upcoming":
      createDateTaskBoards();
      sortTasksByUpcoming();
      emptyTaskBoardMessage();
      break;
    case "completed":
      sortTasksByCompleted(primaryTaskBoardHeading);
      break;
    default: // Sort Project Tabs
      sortTasksByProject(primaryTaskBoardHeading);
      break;
  }

  if (overDueTasks.length > 0 && primaryTaskBoardHeading !== "Completed") {
    createOverDueTaskBoard(overDueTasks);
  }

  if (primaryTaskBoardHeading !== "Upcoming") {
    clearEmptyTaskBoards();
  }

  if (isPrimaryTaskListEmpty() && primaryTaskBoardHeading !== "Upcoming") {
    addPrimaryTaskBoardBackground(primaryTaskBoardHeading);
  } else {
    removePrimaryTaskBoardBackground();
  }

  localStorage.previousTab = primaryTaskBoardHeading;
}

function clearEmptyTaskBoards() {
  let taskBoards = document.querySelectorAll(".secondary-task-board");

  for (let i = 0; i < taskBoards.length; i++) {
    if (taskBoards[i].lastElementChild.childElementCount === 0) {
      taskBoards[i].remove();
    }
  }
}

function isPrimaryTaskListEmpty() {
  return !document.querySelector(".task-viewer").childElementCount;
}

function addPrimaryTaskBoardBackground(primaryTaskBoardHeading) {
  let primaryTaskBoardList = document.querySelector(".task-viewer"),
    noTasksMessage = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.createElement)("p");

  if (primaryTaskBoardHeading.toLowerCase() === "completed") {
    noTasksMessage.textContent = `You haven't completed any tasks yet! 
      Complete some tasks to see how much you've accomplished here.`;
  } else {
    noTasksMessage.textContent = `There doesn't seem to be anymore tasks! 
      Add some more if needed. Otherwise, enjoy the rest of your day!`;
  }

  primaryTaskBoardList.append(noTasksMessage);

  if (!document.body.classList.contains("no-task-background")) {
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.addClass)(document.body, "no-task-background");
  }
}

function removePrimaryTaskBoardBackground() {
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.removeClass)(document.body, "no-task-background");
}

function sortByDueDateAsc(entries) {
  return entries.sort((entryLeft, entryRight) => {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(
      new Date(entryRight[1].dueDateValue),
      new Date(entryLeft[1].dueDateValue)
    );
  });
}

function combineGeneralAndProjectTasks() {
  let taskDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("taskData")),
    projectDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("projects")),
    combinedTaskObj = {};

  [taskDataObj, projectDataObj].forEach((dataObj, i) => {
    Object.keys(dataObj).forEach((secondaryKey) => {
      if (!combinedTaskObj.hasOwnProperty(secondaryKey) && i === 0) {
        combinedTaskObj[secondaryKey] = {};
      }

      Object.entries(dataObj[secondaryKey]).forEach((entry) => {
        if (!isTaskOverdue(entry[1])) {
          if (i === 0) {
            combinedTaskObj[secondaryKey][entry[0]] = entry[1];
          } else {
            combinedTaskObj[(0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getTaskPriorityKey)(entry[1].priorityValue)][
              entry[0]
            ] = entry[1];
          }
        }
      });
    });
  });

  return combinedTaskObj;
}

function createOverDueTaskBoard(overDueTasks) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    overDueBoard = (0,_appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__.secondaryTaskBoard)("Overdue Tasks");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.addClass)(overDueBoard, "overdue-task-board");
  primaryTaskBoard.prepend(overDueBoard);

  overDueTasks.forEach((task) => {
    addTaskToBoard(task[0], task[1], overDueBoard);
  });
}

function createPriorityBoards() {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    priorityBoardHeaderArr = ["High", "Medium", "Low", "No"],
    priorityKeys = [
      "highPriorityTasks",
      "mediumPriorityTasks",
      "lowPriorityTasks",
      "noPriorityTasks",
    ];

  priorityBoardHeaderArr.forEach((header, i) => {
    let priorityBoard = (0,_appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__.secondaryTaskBoard)(header + " Priority");

    // An identifier that is used when sorting through task data
    // to append tasks based on priority.
    priorityBoard.dataset.priorityKey = priorityKeys[i];

    primaryTaskBoard.append(priorityBoard);
  });
}

function createDateTaskBoards() {
  let date = new Date(), //Today's date
    primaryTaskBoard = document.querySelector(".task-viewer");

  for (let i = 0; i < 7; i++) {
    let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date, "MMM d - EEEE");

    if (i === 0) {
      formattedDate += " - Today";
    } else if (i === 1) {
      formattedDate += " - Tomorrow";
    }

    primaryTaskBoard.append((0,_appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__.secondaryTaskBoard)(formattedDate));
    date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(date, 1);
  }
}

function emptyTaskBoardMessage() {
  let taskLists = document.querySelectorAll(".task-list");

  taskLists.forEach((list) => {
    let emptyTaskBoardMessage = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.createElement)("p");

    emptyTaskBoardMessage.textContent = "There are no tasks due on this date.";
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.addClass)(emptyTaskBoardMessage, "empty-date-task-board-msg");

    if (list.childElementCount === 0) {
      list.append(emptyTaskBoardMessage);
    }
  });
}

function checkForAllOverdueTasks(localStorageKey, primaryTaskBoardHeading) {
  let todaysDate = new Date().setHours(0, 0, 0, 0),
    taskDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("taskData")),
    projectDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("projects")),
    overDueTasks = [];

  // For project view
  if (localStorageKey === "projects") {
    Object.keys(projectDataObj[primaryTaskBoardHeading]).forEach((taskKey) => {
      let dueDate = new Date(
        projectDataObj[primaryTaskBoardHeading][taskKey].dueDateValue
      );

      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(todaysDate, dueDate) === -1) {
        overDueTasks.push([
          taskKey,
          projectDataObj[primaryTaskBoardHeading][taskKey],
        ]);
      }
    });
  }
  // For inbox, today, and upcoming view
  else {
    [taskDataObj, projectDataObj].forEach((dataObj) => {
      Object.keys(dataObj).forEach((secondaryKey) => {
        Object.keys(dataObj[secondaryKey]).forEach((taskKey) => {
          let dueDate = new Date(dataObj[secondaryKey][taskKey].dueDateValue);

          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(todaysDate, dueDate) === -1) {
            overDueTasks.push([taskKey, dataObj[secondaryKey][taskKey]]);
          }
        });
      });
    });
  }

  if (overDueTasks.length > 1) {
    overDueTasks = sortByDueDateAsc(overDueTasks);
  }

  return overDueTasks;
}

function sortTasksByInbox() {
  let combinedTaskObj = combineGeneralAndProjectTasks();

  Object.keys(combinedTaskObj).forEach((priorityKey) => {
    let taskEntries = sortByDueDateAsc(
      Object.entries(combinedTaskObj[priorityKey])
    );

    taskEntries.forEach((entry) => {
      let taskItemKey = entry[0],
        taskObj = entry[1];

      addTaskToBoard(
        taskItemKey,
        taskObj,
        document.querySelector(`[data-priority-key="${priorityKey}"]`)
      );
    });
  });
}

function sortTasksByToday(primaryTaskBoardHeading) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    taskDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("taskData")),
    projectDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("projects")),
    todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), "PP"),
    todayBoard = (0,_appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__.secondaryTaskBoard)(primaryTaskBoardHeading);

  [taskDataObj, projectDataObj].forEach((dataObj) => {
    Object.keys(dataObj).forEach((secondaryKey) => {
      Object.keys(dataObj[secondaryKey]).forEach((taskItemKey) => {
        let taskDueDate = dataObj[secondaryKey][taskItemKey].dueDateValue;

        if (taskDueDate === todaysDate) {
          if (!isTaskOverdue(dataObj[secondaryKey][taskItemKey])) {
            addTaskToBoard(
              taskItemKey,
              dataObj[secondaryKey][taskItemKey],
              todayBoard
            );
          }
        }
      });
    });
  });

  primaryTaskBoard.append(todayBoard);
}

function sortTasksByUpcoming() {
  let taskDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("taskData")),
    projectDataObj = JSON.parse((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)("projects")),
    todaysDate = new Date().setHours(0, 0, 0, 0), // Todays date with time component zero'd out
    weekFromTodaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(todaysDate, 6), // Today's date + 6 days
    dateTaskBoardsArr = document.getElementsByClassName("secondary-task-board");

  [taskDataObj, projectDataObj].forEach((dataObj) => {
    Object.keys(dataObj).forEach((secondaryKey) => {
      Object.keys(dataObj[secondaryKey]).forEach((taskItemKey) => {
        let taskDueDate = new Date(
            dataObj[secondaryKey][taskItemKey].dueDateValue
          ),
          dayDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(weekFromTodaysDate, taskDueDate);

        if (dayDifference < 7 && dayDifference >= 0) {
          if (!isTaskOverdue(dataObj[secondaryKey][taskItemKey])) {
            addTaskToBoard(
              taskItemKey,
              dataObj[secondaryKey][taskItemKey],
              dateTaskBoardsArr[6 - dayDifference]
            );
          }
        }
      });
    });
  });
}

function sortTasksByCompleted(primaryTaskBoardHeading) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    completedTaskDataObj = JSON.parse(
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.determineLocalStorageKey)(primaryTaskBoardHeading))
    ),
    completionDates = Object.keys(completedTaskDataObj);

  // Sort completion dates from most recent to oldest (descending).
  if (completionDates.length > 1) {
    completionDates = completionDates.sort((dateLeft, dateRight) =>
      (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(dateLeft), new Date(dateRight))
    );
  }

  completionDates.forEach((date) => {
    let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(date), "MMM d - EEEE"),
      dateTaskBoard = (0,_appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__.secondaryTaskBoard)(formattedDate);

    Object.keys(completedTaskDataObj[date]).forEach((taskItemId) => {
      addTaskToBoard(
        taskItemId,
        completedTaskDataObj[date][taskItemId],
        dateTaskBoard
      );

      let completedTask = dateTaskBoard.querySelector(
        `[data-task-item-id = '${taskItemId}']`
      );

      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.addClass)(completedTask, "completed");
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.removeClass)(
        completedTask.querySelector(".checkbox").firstElementChild, // checkmark img element
        "fade-in-out"
      );
    });

    primaryTaskBoard.append(dateTaskBoard);
  });
}

function sortTasksByProject(projectName) {
  let primaryTaskBoard = document.querySelector(".task-viewer"),
    projectTaskDataObj = JSON.parse(
      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getData)((0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.determineLocalStorageKey)(projectName))
    ),
    sortedProjectEntries = Object.entries(projectTaskDataObj[projectName]).sort(
      (entryLeft, entryRight) => {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(
          new Date(entryRight[1].dueDateValue),
          new Date(entryLeft[1].dueDateValue)
        );
      }
    ),
    previousEntryDueDate,
    taskBoard;

  sortedProjectEntries.forEach((entry) => {
    let taskKey = entry[0],
      taskValueObj = entry[1];

    if (!isTaskOverdue(taskValueObj)) {
      // If the previous due date is different from the current task's due date,
      // create a new task board to append all tasks with the same due date until a
      // task with a different due date is found
      if (taskValueObj.dueDateValue !== previousEntryDueDate) {
        let dueDate = new Date(taskValueObj.dueDateValue);

        previousEntryDueDate = taskValueObj.dueDateValue;

        taskBoard = (0,_appMainContent_secondaryTaskBoard_js__WEBPACK_IMPORTED_MODULE_3__.secondaryTaskBoard)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(dueDate, "MMM d - EEEE"));

        primaryTaskBoard.append(taskBoard);
      }

      addTaskToBoard(taskKey, taskValueObj, taskBoard);
    }
  });
}

function insertTaskBasedOnView(
  primaryTaskBoardHeading,
  taskItemId,
  taskItemObj
) {
  if (isTaskOverdue(taskItemObj)) {
    insertOverdueTask(taskItemId, taskItemObj);
  } else {
    switch (primaryTaskBoardHeading.toLowerCase()) {
      case "inbox":
        insertTaskForInboxView(taskItemId, taskItemObj);
        break;
      case "today":
        insertTaskForTodayView(taskItemId, taskItemObj);
        break;
      case "upcoming":
        insertTaskForUpcomingView(taskItemId, taskItemObj);
        break;
      case "completed":
        insertTaskForCompletedView(taskItemId, taskItemObj);
        break;
      default: // Project name
        insertTaskForProjectView();
        break;
    }
  }
}

function isTaskOverdue(taskItemObj) {
  let todaysDate = new Date().setHours(0, 0, 0, 0);

  return (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(taskItemObj.dueDateValue), todaysDate);
}

function insertOverdueTask(taskItemId, taskItemObj) {
  let overdueTaskBoard = document.querySelector(".overdue-task-board");

  if (overdueTaskBoard) {
    addTaskToBoard(taskItemId, taskItemObj, overdueTaskBoard);
  } else {
    createOverDueTaskBoard([taskItemId, taskItemObj]);
  }
}

function insertTaskForInboxView(taskItemId, taskItemObj) {
  let taskBoard = document.querySelector(
    `[data-priority-key="${(0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.getTaskPriorityKey)(taskItemObj.priorityValue)}"]`
  );

  if (!taskBoard) {
    getTaskSortMethod("inbox");
  } else {
    addTaskToBoard(taskItemId, taskItemObj, taskBoard);
  }
}

function insertTaskForTodayView(taskItemId, taskItemObj) {
  let todayBoard = document.getElementsByClassName("secondary-task-board")[1],
    taskDueDate = taskItemObj.dueDateValue,
    todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), "PP");

  if (!todayBoard) {
    getTaskSortMethod("today");
  } else if (taskDueDate === todaysDate) {
    addTaskToBoard(taskItemId, taskItemObj, todayBoard);
  }
}

// Need to zero out time component to avoid any date calculation/ conversion issues.
function insertTaskForUpcomingView(taskItemId, taskItemObj) {
  let todaysDate = new Date().setHours(0, 0, 0, 0), // Todays date with time component zero'd out
    weekFromTodaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(todaysDate, 6), // today's date + 6 days
    dayDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(
      weekFromTodaysDate,
      new Date(taskItemObj.dueDateValue)
    ),
    dateTaskBoardsArr = document.getElementsByClassName("secondary-task-board"),
    dateBoardIdx = dateTaskBoardsArr.length - 1; // only allows the index of date task boards. Overdue task board will be ignored

  if (dayDifference < 7 && dayDifference >= 0) {
    addTaskToBoard(
      taskItemId,
      taskItemObj,
      dateTaskBoardsArr[dateBoardIdx - dayDifference]
    );
  }
}

function insertTaskForCompletedView(taskItemId, taskItemObj) {
  let taskToEdit = document.querySelector(
      `[data-task-item-id="${taskItemId}"]`
    ),
    dateBoard = taskToEdit.parentElement.parentElement;

  //Remove the task from the DOM and localStorage before replacing it
  // with an updated version of it
  taskToEdit.remove();
  addTaskToBoard(taskItemId, taskItemObj, dateBoard);

  // Reselect the updated task and style it
  let updatedTask = dateBoard.querySelector(
    `[data-task-item-id="${taskItemId}"]`
  );
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.addClass)(updatedTask, "completed");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_8__.removeClass)(
    updatedTask.querySelector(".checkbox").firstElementChild, // checkmark img element
    "fade-in-out"
  );
}

function insertTaskForProjectView() {
  let projectName = document.querySelector(".main-content-heading").textContent;

  clearPrimaryTaskBoard();
  getTaskSortMethod(projectName);
}

function demoAppButtonListener() {
  let demoButton = document.querySelector(".demo-button");

  demoButton.addEventListener("click", () => {
    let primaryTaskBoardHeading = document.querySelector(
        ".main-content-heading"
      ).textContent,
      todaysDate = new Date().setHours(0, 0, 0, 0);

    Object.keys(_data_demo_json__WEBPACK_IMPORTED_MODULE_9__).forEach((primaryKey) => {
      let primaryObj = {};

      if (primaryKey !== "completed") {
        Object.keys(_data_demo_json__WEBPACK_IMPORTED_MODULE_9__[primaryKey]).forEach((secondaryKey) => {
          primaryObj[secondaryKey] = {};

          _data_demo_json__WEBPACK_IMPORTED_MODULE_9__[primaryKey][secondaryKey].forEach((task) => {
            task.dueDateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(
              (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(todaysDate, +task.dateOffset),
              "PP"
            );

            primaryObj[secondaryKey][`${createTaskItemIdNumber()}`] = task;
          });
        });
      } else {
        let completedArr = _data_demo_json__WEBPACK_IMPORTED_MODULE_9__[primaryKey].map((completedTask) => {
          completedTask.dueDateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(
            (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(todaysDate, +completedTask.dateOffset),
            "PP"
          );

          return completedTask;
        });

        completedArr = completedArr.sort((dateLeft, dateRight) => {
          (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(
            new Date(dateRight.dueDateValue),
            new Date(dateLeft.dueDateValue)
          );
        });

        completedArr.forEach((task) => {
          if (!primaryObj.hasOwnProperty(task.dueDateValue)) {
            primaryObj[task.dueDateValue] = {};
          }

          primaryObj[task.dueDateValue][`${createTaskItemIdNumber()}`] = task;
        });
      }

      (0,_webStorageController_js__WEBPACK_IMPORTED_MODULE_5__.saveData)(primaryKey, JSON.stringify(primaryObj));
    });

    // Clear the following DOM components and reload the tasks
    clearPrimaryTaskBoard();
    clearProjectTabs();
    getTaskSortMethod(primaryTaskBoardHeading);
    reloadProjectTabs();
  });
}

function emptyTaskData() {
  return JSON.stringify({
    highPriorityTasks: {},
    mediumPriorityTasks: {},
    lowPriorityTasks: {},
    noPriorityTasks: {},
  });
}

function taskController() {
  // Sort tasks by priority for the Inbox menu tab on page load
  getTaskSortMethod("Inbox");

  addNewTaskButtonListener();
  demoAppButtonListener();
}




/***/ }),

/***/ "./src/components/controls/webStorageController.js":
/*!*********************************************************!*\
  !*** ./src/components/controls/webStorageController.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteEmptyCompletionDateKeys": () => (/* binding */ deleteEmptyCompletionDateKeys),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTaskItem": () => (/* binding */ deleteTaskItem),
/* harmony export */   "determineLocalStorageKey": () => (/* binding */ determineLocalStorageKey),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getTaskItem": () => (/* binding */ getTaskItem),
/* harmony export */   "getTaskPriorityKey": () => (/* binding */ getTaskPriorityKey),
/* harmony export */   "saveData": () => (/* binding */ saveData),
/* harmony export */   "saveTaskItem": () => (/* binding */ saveTaskItem)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");


// Save general data to the user's browser's local storage
function saveData(key, value) {
  localStorage.setItem(key, value);
}

// Get general data from the user's browser's local storage
function getData(key) {
  return localStorage.getItem(key);
}

// Save task data to the user's browser's local storage
function saveTaskItem(
  primaryTaskBoardHeading,
  taskItemKey,
  taskItemObj,
  completionDateKey
) {
  let localStorageKey = determineLocalStorageKey(primaryTaskBoardHeading),
    taskDataObj = JSON.parse(getData(localStorageKey)),
    updatedTaskDataObj;

  switch (localStorageKey) {
    case "taskData":
      updatedTaskDataObj = updateTaskData(
        taskDataObj,
        taskItemKey,
        taskItemObj
      );
      break;
    case "completed":
      updatedTaskDataObj = updateCompleted(
        taskDataObj,
        taskItemKey,
        taskItemObj,
        completionDateKey
      );
      break;
    case "projects":
      updatedTaskDataObj = updateProjects(
        taskDataObj,
        primaryTaskBoardHeading,
        taskItemKey,
        taskItemObj
      );
      break;
    default:
      console.log(`localStorage key: ${localStorageKey} does not exist.`);
      return;
  }

  saveData(localStorageKey, JSON.stringify(updatedTaskDataObj));
}

function updateTaskData(taskDataObj, taskItemKey, taskItemObj) {
  let priorityKey = getTaskPriorityKey(taskItemObj.priorityValue);

  // add the new task item to the taskData object
  taskDataObj[priorityKey][`${taskItemKey}`] = taskItemObj;

  return taskDataObj;
}

function updateCompleted(
  taskDataObj,
  taskItemKey,
  taskItemObj,
  completionDateKey
) {
  if (completionDateKey) {
    taskDataObj[completionDateKey][`${taskItemKey}`] = taskItemObj;
  } else {
    let todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), "PP");

    // If this is the first task completed for a given day, create the key based on the
    // date completed prior to moving the task data over to the completed key
    if (!taskDataObj.hasOwnProperty(todaysDate)) {
      taskDataObj[todaysDate] = {};
    }

    taskDataObj[todaysDate][`${taskItemKey}`] = taskItemObj;
  }

  return taskDataObj;
}

function updateProjects(taskDataObj, projectName, taskItemKey, taskItemObj) {
  // If taskItemKey is falsey, taskItemObj is as well. This only occurs when
  // a new project is created.
  if (!taskItemKey) {
    taskDataObj[projectName] = {};
  } else {
    taskDataObj[projectName][taskItemKey] = taskItemObj;
  }

  return taskDataObj;
}

// Get task data from the user's browser's local storage
function getTaskItem(taskItemKey) {
  let taskItem,
    localStorageKeys = Object.keys(localStorage);

  loop1: for (let i = 0; i < localStorageKeys.length; i++) {
    if (localStorageKeys[i] !== "previousTab") {
      let dataObj = JSON.parse(getData(localStorageKeys[i])),
        primaryKeys = Object.keys(dataObj);

      for (let j = 0; j < primaryKeys.length; j++) {
        let tasksObj = dataObj[primaryKeys[j]];

        if (tasksObj.hasOwnProperty(`${taskItemKey}`)) {
          taskItem = dataObj[primaryKeys[j]][`${taskItemKey}`];
          break loop1;
        }
      }
    }
  }

  return taskItem;
}

// Gets a copy of all task data, deletes a task, and rewrites
// the mutated task data back to localStorage. localStorage.removeItem()
// was not used since it only removes the first level of keys available to it.
function deleteTaskItem(taskItemKey) {
  let localStorageKeys = Object.keys(localStorage);

  loop1: for (let i = 0; i < localStorageKeys.length; i++) {
    if (localStorageKeys[i] !== "previousTab") {
      let dataObj = JSON.parse(getData(localStorageKeys[i])),
        primaryKeys = Object.keys(dataObj);

      for (let j = 0; j < primaryKeys.length; j++) {
        if (dataObj[primaryKeys[j]].hasOwnProperty(`${taskItemKey}`)) {
          delete dataObj[primaryKeys[j]][taskItemKey];
          saveData(localStorageKeys[i], JSON.stringify(dataObj));
          break;
        }
      }
    }
  }
}

function deleteProject(projectName) {
  let projectDataObj = JSON.parse(getData("projects"));

  delete projectDataObj[projectName];
  saveData("projects", JSON.stringify(projectDataObj));
}

function deleteEmptyCompletionDateKeys() {
  let completionTaskDataObj = JSON.parse(getData("completed"));

  Object.keys(completionTaskDataObj).forEach((dateKey) => {
    if (!Object.keys(completionTaskDataObj[dateKey]).length) {
      delete completionTaskDataObj[dateKey];
    }
  });

  saveData("completed", JSON.stringify(completionTaskDataObj));
}

function getTaskPriorityKey(priorityValue) {
  let priorityKey;

  switch (priorityValue.toLowerCase()) {
    case "high":
      priorityKey = "highPriorityTasks";
      break;
    case "medium":
      priorityKey = "mediumPriorityTasks";
      break;
    case "low":
      priorityKey = "lowPriorityTasks";
      break;
    case "none":
      priorityKey = "noPriorityTasks";
      break;
    default:
      console.log(`Priority Value: ${priorityValue} does not exist.`);
      return;
  }

  return priorityKey;
}

function determineLocalStorageKey(currentTaskBoardViewHeading) {
  let key;

  switch (currentTaskBoardViewHeading.toLowerCase()) {
    case "inbox":
    case "today":
    case "upcoming":
      key = "taskData";
      break;
    case "completed":
      key = "completed";
      break;
    default: // Project specific data
      key = "projects";
      break;
  }

  return key;
}




/***/ }),

/***/ "./src/components/generalButtons/iconAndTextButton.js":
/*!************************************************************!*\
  !*** ./src/components/generalButtons/iconAndTextButton.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconAndTextButton": () => (/* binding */ iconAndTextButton)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function iconAndTextButton(text, imgSrc, altText, ...cssClass) {
  let button = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  button.textContent = text;

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);
  button.setAttribute("type", "button");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(icon, "icon-text-button-img");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(button, "icon-text-button", ...cssClass);

  button.prepend(icon);

  return button;
}




/***/ }),

/***/ "./src/components/generalButtons/iconButtonExtraSmall.js":
/*!***************************************************************!*\
  !*** ./src/components/generalButtons/iconButtonExtraSmall.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconButtonExtraSmall": () => (/* binding */ iconButtonExtraSmall)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function iconButtonExtraSmall(imgSrc, altText) {
  let iconButtonExtraSmall = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(iconButtonExtraSmall, 'icon-button-extra-small');

  iconButtonExtraSmall.append(icon);

  return iconButtonExtraSmall;
}




/***/ }),

/***/ "./src/components/generalButtons/iconButtonMedium.js":
/*!***********************************************************!*\
  !*** ./src/components/generalButtons/iconButtonMedium.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconButtonMedium": () => (/* binding */ iconButtonMedium)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function iconButtonMedium(imgSrc, altText) {
  let iconButtonMedium = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(iconButtonMedium, 'icon-button-medium');

  iconButtonMedium.append(icon);

  return iconButtonMedium;
}




/***/ }),

/***/ "./src/components/generalButtons/iconButtonSmall.js":
/*!**********************************************************!*\
  !*** ./src/components/generalButtons/iconButtonSmall.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconButtonSmall": () => (/* binding */ iconButtonSmall)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function iconButtonSmall(imgSrc, altText) {
  let iconButtonSmall = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(iconButtonSmall, 'icon-button-small');

  iconButtonSmall.append(icon);

  return iconButtonSmall;
}




/***/ }),

/***/ "./src/components/generalButtons/textButton.js":
/*!*****************************************************!*\
  !*** ./src/components/generalButtons/textButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textButton": () => (/* binding */ textButton)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function textButton(text, ...cssClass) {
  let button = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  button.textContent = text;
  button.setAttribute("type", "button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(button, "text-button", ...cssClass);

  return button;
}




/***/ }),

/***/ "./src/components/helper/helper.js":
/*!*****************************************!*\
  !*** ./src/components/helper/helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
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




/***/ }),

/***/ "./src/components/menubar/menuTabs.js":
/*!********************************************!*\
  !*** ./src/components/menubar/menuTabs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTabs": () => (/* binding */ menuTabs)
/* harmony export */ });
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/components/menubar/tab.js");
/* harmony import */ var _controls_menuController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/menuController.js */ "./src/components/controls/menuController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");




function menuTabs() {
  let menuTabContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    tabArr = ["Inbox", "Today", "Upcoming", "Completed"];

  for (let i = 0; i < 4; i++) {
    let tabSpecificClass = "menu-tab-" + tabArr[i].toLowerCase(),
      menuTab = (0,_tab_js__WEBPACK_IMPORTED_MODULE_0__.tab)(tabArr[i], "tab", tabSpecificClass);

    menuTabContainer.append(menuTab);
    (0,_controls_menuController_js__WEBPACK_IMPORTED_MODULE_1__.createTabListener)(menuTab);
  }

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(menuTabContainer, "menu-tabs");

  return menuTabContainer;
}




/***/ }),

/***/ "./src/components/menubar/menubar.js":
/*!*******************************************!*\
  !*** ./src/components/menubar/menubar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menubar": () => (/* binding */ menubar)
/* harmony export */ });
/* harmony import */ var _menuTabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuTabs.js */ "./src/components/menubar/menuTabs.js");
/* harmony import */ var _projectSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSection.js */ "./src/components/menubar/projectSection.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");




function menubar() {
  let menubar = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    linebreak = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(menubar, "menu-bar");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(linebreak, "linebreak");

  menubar.append((0,_menuTabs_js__WEBPACK_IMPORTED_MODULE_0__.menuTabs)(), linebreak, (0,_projectSection_js__WEBPACK_IMPORTED_MODULE_1__.projectSection)());

  return menubar;
}




/***/ }),

/***/ "./src/components/menubar/projectList.js":
/*!***********************************************!*\
  !*** ./src/components/menubar/projectList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _project_projectTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/projectTab.js */ "./src/components/project/projectTab.js");
/* harmony import */ var _controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/webStorageController.js */ "./src/components/controls/webStorageController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");




function projectList() {
  let projectList = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    projectNames = Object.keys(JSON.parse((0,_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_1__.getData)("projects"))).sort();

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectList, "project-list");

  for (let i = 0; i < projectNames.length; i++) {
    projectList.append((0,_project_projectTab_js__WEBPACK_IMPORTED_MODULE_0__.projectTab)(projectNames[i]));
  }

  return projectList;
}




/***/ }),

/***/ "./src/components/menubar/projectSection.js":
/*!**************************************************!*\
  !*** ./src/components/menubar/projectSection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSection": () => (/* binding */ projectSection)
/* harmony export */ });
/* harmony import */ var _generalButtons_iconButtonSmall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalButtons/iconButtonSmall.js */ "./src/components/generalButtons/iconButtonSmall.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ "./src/components/menubar/projectList.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/plus.svg */ "./src/icons/plus.svg");





function projectSection() {
  let projectSection = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    projectHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    heading = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2"),
    newProjectButton = (0,_generalButtons_iconButtonSmall_js__WEBPACK_IMPORTED_MODULE_0__.iconButtonSmall)(_icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__, "Add new project icon");

  heading.textContent = "Projects";

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(newProjectButton, "new-project-button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectHeader, "project-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectSection, "project-section");

  projectHeader.append(heading, newProjectButton);
  projectSection.append(projectHeader, (0,_projectList_js__WEBPACK_IMPORTED_MODULE_1__.projectList)());

  return projectSection;
}




/***/ }),

/***/ "./src/components/menubar/tab.js":
/*!***************************************!*\
  !*** ./src/components/menubar/tab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tab": () => (/* binding */ tab)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function tab(text, ...cssClass) {
  let tab = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    tabName = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  tabName.textContent = text;
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(tabName, "tab-name");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(tab, ...cssClass);

  tab.append(tabName);

  return tab;
}




/***/ }),

/***/ "./src/components/project/newProjectOverlayForm.js":
/*!*********************************************************!*\
  !*** ./src/components/project/newProjectOverlayForm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectOverlayForm": () => (/* binding */ newProjectOverlayForm)
/* harmony export */ });
/* harmony import */ var _generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalButtons/textButton.js */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



function projectNameFormField() {
  let projectNameContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    projectNameLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    projectNameInput = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");

  projectNameLabel.textContent = "Project Name";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(
    projectNameLabel,
    projectNameInput,
    projectErrorField()
  );

  return projectNameContainer;
}

function projectErrorField() {
  let errorField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    errorMessage = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(errorField, "error-field", "hide");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(errorMessage, "error-message");

  errorField.append(errorMessage);

  return errorField;
}

function projectFormButtons() {
  let buttonsContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    cancelNewProjectButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)(
      "Cancel",
      "new-project-form-cancel-button"
    ),
    addNewProjectButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)(
      "Add New Project",
      "new-project-form-add-button"
    );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(buttonsContainer, "new-project-form-buttons");
  addNewProjectButton.setAttribute("disabled", "");
  buttonsContainer.append(cancelNewProjectButton, addNewProjectButton);

  return buttonsContainer;
}

function newProjectForm() {
  let newProjectForm = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form"),
    newProjectButtons = projectFormButtons();

  newProjectForm.setAttribute("action", "");
  newProjectForm.setAttribute("method", "post");
  newProjectForm.setAttribute("name", "newProjectForm");
  newProjectForm.setAttribute("novalidate", "");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(newProjectForm, "new-project-form");

  newProjectForm.append(
    projectNameFormField(),
    newProjectButtons
  );

  return newProjectForm;
}

function newProjectOverlayForm() {
  let newProjectOverlay = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(newProjectOverlay, "new-project-overlay");
  newProjectOverlay.append(newProjectForm());

  return newProjectOverlay;
}




/***/ }),

/***/ "./src/components/project/projectTab.js":
/*!**********************************************!*\
  !*** ./src/components/project/projectTab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectTab": () => (/* binding */ projectTab)
/* harmony export */ });
/* harmony import */ var _menubar_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menubar/tab.js */ "./src/components/menubar/tab.js");
/* harmony import */ var _controls_menuController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/menuController.js */ "./src/components/controls/menuController.js");
/* harmony import */ var _controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _generalButtons_iconButtonExtraSmall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalButtons/iconButtonExtraSmall.js */ "./src/components/generalButtons/iconButtonExtraSmall.js");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/delete.svg */ "./src/icons/delete.svg");






function projectTab(projectName) {
  let projectTab = (0,_menubar_tab_js__WEBPACK_IMPORTED_MODULE_0__.tab)(projectName, "project-tab"),
    deleteButton = (0,_generalButtons_iconButtonExtraSmall_js__WEBPACK_IMPORTED_MODULE_3__.iconButtonExtraSmall)(_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__, "Delete project icon."),
    projectObj = {
      projectName: projectName,
      projectTab: projectTab,
    };

  projectTab.append(deleteButton);

  (0,_controls_menuController_js__WEBPACK_IMPORTED_MODULE_1__.createTabListener)(projectTab, projectName, "");
  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__.createDeletePromptOverlayListener)(deleteButton, projectObj);

  return projectTab;
}




/***/ }),

/***/ "./src/icons/check.svg":
/*!*****************************!*\
  !*** ./src/icons/check.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddce2e1e5ef60024f029.svg";

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/icons/menu.svg":
/*!****************************!*\
  !*** ./src/icons/menu.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/icons/plus.svg":
/*!****************************!*\
  !*** ./src/icons/plus.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/image/Todo-ist Logo.svg":
/*!*************************************!*\
  !*** ./src/image/Todo-ist Logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb57796f7b18f3c7c87e.svg";

/***/ }),

/***/ "./src/image/no-tasks-background.jpg":
/*!*******************************************!*\
  !*** ./src/image/no-tasks-background.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24c3c99868580d6ca401.jpg";

/***/ }),

/***/ "./data/demo.json":
/*!************************!*\
  !*** ./data/demo.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"taskData":{"highPriorityTasks":[{"headerValue":"Walk the dogs","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"0"},{"headerValue":"Meal prep for next week","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"7"},{"headerValue":"Turn in homework for intro to computer science class","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"-2"}],"mediumPriorityTasks":[{"headerValue":"Do the laundry","priorityValue":"medium","dueDateValue":"","taskType":"General Task","dateOffset":"0"},{"headerValue":"Return textbook to Fred","priorityValue":"medium","dueDateValue":"","taskType":"General Task","dateOffset":"4"},{"headerValue":"Replace water filter","priorityValue":"medium","dueDateValue":"","taskType":"General Task","dateOffset":"0"},{"headerValue":"Call mom","priorityValue":"medium","dueDateValue":"","taskType":"General Task","dateOffset":"0"}],"lowPriorityTasks":[{"headerValue":"Vacuum the floor","priorityValue":"low","dueDateValue":"","taskType":"General Task","dateOffset":"3"},{"headerValue":"Take out the trash","priorityValue":"low","dueDateValue":"","taskType":"General Task","dateOffset":"3"},{"headerValue":"Make a Dentist Appointment","priorityValue":"low","dueDateValue":"","taskType":"General Task","dateOffset":"7"},{"headerValue":"Replace patio lightbulb","priorityValue":"low","dueDateValue":"","taskType":"General Task","dateOffset":"-5"}],"noPriorityTasks":[{"headerValue":"Work on setting up 3D printer","priorityValue":"none","dueDateValue":"","taskType":"General Task","dateOffset":"20"},{"headerValue":"Shop for a jacket","priorityValue":"none","dueDateValue":"","taskType":"General Task","dateOffset":"30"},{"headerValue":"Fix squeaky cabinet","priorityValue":"none","dueDateValue":"","taskType":"General Task","dateOffset":"30"}]},"projects":{"Upgrade my desktop PC":[{"headerValue":"Buy motherboard from Charles","priorityValue":"low","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"2"},{"headerValue":"Shop for a GPU","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"7"},{"headerValue":"Shop for a CPU","priorityValue":"low","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"7"},{"headerValue":"Replace my PC parts","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"14"},{"headerValue":"Shop for a new monitor","priorityValue":"low","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"7"},{"headerValue":"Ask Fred if he wants to buy my old parts","priorityValue":"low","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"-4"}],"Build a Portfolio Website":[{"headerValue":"Ask Fred for thoughts on initial website design","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"5"},{"headerValue":"Create initial design in Figma","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"3"},{"headerValue":"Ask Fred for thoughts on final website design","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"20"},{"headerValue":"Research technology stack to use","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"-3"},{"headerValue":"Create github repository","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"-1"},{"headerValue":"Look at other people\'s website portfolios for ideas","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"-1"}]},"completed":[{"headerValue":"Water the plants","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"0"},{"headerValue":"Grocery Shop","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"-3"},{"headerValue":"Turn in art project","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"-1"},{"headerValue":"Walk the dogs","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"-1"},{"headerValue":"Babysit Sarah","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"-5"},{"headerValue":"Bake cookies","priorityValue":"low","dueDateValue":"","taskType":"General Task","dateOffset":"-2"},{"headerValue":"Walk the dogs","priorityValue":"high","dueDateValue":"","taskType":"General Task","dateOffset":"-2"},{"headerValue":"Call dad","priorityValue":"medium","dueDateValue":"","taskType":"General Task","dateOffset":"0"},{"headerValue":"Shop for a birthday gift for Sarah","priorityValue":"medium","dueDateValue":"","taskType":"General Task","dateOffset":"-2"},{"headerValue":"Research computer components","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"-3"},{"headerValue":"Shop for M.2 PCIE Gen 4 SSD","priorityValue":"low","dueDateValue":"","taskType":"Project Task: Upgrade my desktop PC","dateOffset":"0"},{"headerValue":"Decide if I want to host portfolio on Github pages or Heroku","priorityValue":"high","dueDateValue":"","taskType":"Project Task: Build a Portfolio Website","dateOffset":"-5"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_appHeader_appHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/appHeader/appHeader.js */ "./src/components/appHeader/appHeader.js");
/* harmony import */ var _components_appMainContent_appMainContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/appMainContent/appMainContent.js */ "./src/components/appMainContent/appMainContent.js");
/* harmony import */ var _components_controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _components_controls_menuController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controls/menuController */ "./src/components/controls/menuController.js");
/* harmony import */ var _components_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _components_menubar_menubar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menubar/menubar.js */ "./src/components/menubar/menubar.js");
/* harmony import */ var _components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/controls/webStorageController.js */ "./src/components/controls/webStorageController.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");









function initLocalStorageGlobalVariables() {
  (0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.saveData)("previousTab", "Inbox");

  if (!(0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.getData)("taskData")) {
    (0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.saveData)("taskData", (0,_components_controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__.emptyTaskData)());
  }

  if (!(0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.getData)("completed")) {
    (0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.saveData)("completed", "{}");
  }

  if (!(0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.getData)("projects")) {
    (0,_components_controls_webStorageController_js__WEBPACK_IMPORTED_MODULE_6__.saveData)("projects", "{}");
  }
}

function initControllers() {
  (0,_components_controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__.taskController)();
  (0,_components_controls_menuController__WEBPACK_IMPORTED_MODULE_3__.menuController)();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = (0,_components_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("main");

  mainTag.append((0,_components_menubar_menubar_js__WEBPACK_IMPORTED_MODULE_5__.menubar)(), (0,_components_appMainContent_appMainContent_js__WEBPACK_IMPORTED_MODULE_1__.appMainContent)());
  bodyTag.append((0,_components_appHeader_appHeader_js__WEBPACK_IMPORTED_MODULE_0__.appHeader)(), mainTag);
}

(function initApp() {
  initLocalStorageGlobalVariables();
  renderPage();
  initControllers();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVCQUF1QixxQkFBcUIsR0FBRywwQkFBMEIsdUJBQXVCLHdCQUF3QixHQUFHLDJDQUEyQyx3QkFBd0IscUJBQXFCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLFNBQVMsNEZBQTRGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUVBQWU7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFFQUFlO0FBQzdCLGdCQUFnQixxRUFBZTtBQUMvQjtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2oyQm9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxRUFBZTtBQUM5RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ25GekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxtQ0FBbUMsTUFBTSwwREFBMEQsTUFBTTtBQUN6Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDL0Y3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjJDO0FBQ21CO0FBQ1E7QUFDbEI7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUIsa0JBQWtCO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkM7QUFDUztBQUNVO0FBQy9DO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7O0FBRXpDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjJDO0FBQ2E7QUFDUTtBQUNaO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixhQUFhLG9FQUFjLDRCQUE0Qix3RUFBa0IsMkJBQTJCO0FBQ3BHO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQztBQUNTO0FBQ0k7QUFDVjtBQUNpQjtBQUNoRDtBQUNmOztBQUVBLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0EsdUJBQXVCLDJFQUFpQjtBQUN4Qyw4QkFBOEIsK0RBQVMsKzRCQUErNEI7O0FBRXQ3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYzs7QUFFdEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5SUFBeUk7QUFDekksSUFBSTtBQUNKLHFJQUFxSTtBQUNySSxJQUFJO0FBQ0osK0lBQStJO0FBQy9JLElBQUk7QUFDSixpSkFBaUo7QUFDako7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0oyQztBQUNTO0FBQ3JDO0FBQ2YsRUFBRSxrRUFBWTtBQUNkO0FBQ0EsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDhEO0FBQ0E7QUFDVjtBQUNyQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7QUFDUztBQUNOO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLHVCQUF1QiwyRUFBaUI7QUFDeEMscUJBQXFCLCtEQUFTLDIyQkFBMjJCOztBQUV6NEI7QUFDQTtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ3RDtBQUNKO0FBQ0k7QUFDVjtBQUNpQjtBQUNoRDtBQUNmOztBQUVBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUztBQUN2QyxhQUFhLG9FQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixlQUFlLG1FQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDbUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxrQkFBa0IsNERBQU07QUFDeEIsZUFBZSxtRUFBUztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0J3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsaUJBQWlCLDREQUFNO0FBQ3ZCLGtCQUFrQiw0REFBTTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGNBQWMsMEJBQTBCO0FBQ3hDLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQrRjtBQUMvQztBQUNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsdUJBQXVCLGdFQUFVO0FBQ2pDLHdCQUF3QixnRUFBVTtBQUNsQyxpREFBaUQseUZBQStCO0FBQ2hGLG1EQUFtRCx5RkFBK0IsbUJBQW1CO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3dDO0FBQ29DO0FBQ25CLENBQUM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixjQUFjLDBCQUEwQjtBQUN4QyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsaUJBQWlCLDREQUFNO0FBQ3ZCLGtCQUFrQiw0REFBTTtBQUN4QjtBQUNBLDRCQUE0Qiw4RUFBd0I7QUFDcEQsNERBQTREO0FBQzVEOztBQUVBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEYwQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRTtBQUNlO0FBSTlCO0FBQ3FCO0FBQ1I7QUFDSjtBQUlIO0FBQ3RCOztBQUVqQztBQUNBLEVBQUUsc0ZBQVE7O0FBRVYsT0FBTyxxRkFBTztBQUNkLElBQUksc0ZBQVEsYUFBYSxxRkFBYTtBQUN0Qzs7QUFFQSxPQUFPLHFGQUFPO0FBQ2QsSUFBSSxzRkFBUSxpQkFBaUI7QUFDN0I7O0FBRUEsT0FBTyxxRkFBTztBQUNkLElBQUksc0ZBQVEsZ0JBQWdCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHNGQUFjO0FBQ2hCLEVBQUUsbUZBQWM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLGNBQWMsMkVBQWE7O0FBRTNCLGlCQUFpQix1RUFBTyxJQUFJLDRGQUFjO0FBQzFDLGlCQUFpQiw2RUFBUztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZURlc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5EYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzP2JmZmMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBIZWFkZXIvYXBwSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcEhlYWRlci9hcHBMb2dvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L2FwcE1haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L21haW5Db250ZW50SGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3NlY29uZGFyeVRhc2tCb2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3Rhc2svY29uZmlybURlbGV0ZVByb21wdE92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrRHVlRGF0ZUZpZWxkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3Rhc2svdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrSW5mby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tJdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3Rhc2svdGFza0l0ZW1BY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3Rhc2svdGFza1ByaW9yaXR5RHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFza1ZpZXdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9mb3JtVmFsaWRhdGlvbkNvbnRyb2xzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL21lbnVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL3dlYlN0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWxCdXR0b25zL2ljb25BbmRUZXh0QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWxCdXR0b25zL2ljb25CdXR0b25FeHRyYVNtYWxsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWxCdXR0b25zL2ljb25CdXR0b25NZWRpdW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbEJ1dHRvbnMvaWNvbkJ1dHRvblNtYWxsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWxCdXR0b25zL3RleHRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyL21lbnVUYWJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21lbnViYXIvbWVudWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21lbnViYXIvcHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudWJhci90YWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC9uZXdQcm9qZWN0T3ZlcmxheUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0VGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZS9uby10YXNrcy1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4YmU7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbnNlbGVjdCB7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjg1KTtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoNTAlIC0gMjFweCk7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDYycHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBoMiB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOGJlO1xcbn1cXG5cXG4uaWNvbi1idXR0b24tbWVkaXVtIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4uaWNvbi1idXR0b24tc21hbGwge1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgd2lkdGg6IDI3cHg7XFxufVxcblxcbi5pY29uLWJ1dHRvbi1leHRyYS1zbWFsbCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY3ZmY7XFxufVxcblxcbi50ZXh0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbn1cXG5cXG4uaWNvbi10ZXh0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5hZGQtbmV3LXRhc2stYnV0dG9uIHtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4YmU7XFxufVxcblxcbi5hZGQtbmV3LXRhc2stYnV0dG9uID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRlbW8tYnV0dG9uIHtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4YmU7XFxufVxcblxcbi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWQ4ZmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjdmZjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tY2FuY2VsLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNmRkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWQ4ZmY7XFxufVxcblxcbi5uby10YXNrLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktZGF0ZS10YXNrLWJvYXJkLW1zZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnZpZXctYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4udmlldy1idXR0b24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4udmlldy1vcHRpb25zIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b3AtcmlnaHQtc2lkZS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1iYXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2ZmO1xcbn1cXG5cXG4ubWVudS10YWJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFiIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2ZmO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxufVxcblxcbi50YWItbmFtZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubGluZWJyZWFrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY3ZmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1vdmVybGF5LFxcbi50YXNrLWZvcm0tb3ZlcmxheSxcXG4uZGVsZXRlLXRhc2stY29uZmlybWF0aW9uLW92ZXJsYXkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSxcXG4udGFzay1mb3JtLWNvbnRhaW5lcixcXG4uZGVsZXRlLWNvbmZpcm1hdGlvbi1wcm9tcHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNjI1cHg7XFxufVxcblxcbi5kZWxldGUtY29uZmlybWF0aW9uLXByb21wdCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb21wdC1idXR0b24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9tcHQtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNmRkO1xcbn1cXG5cXG4uZGVsZXRlLXByb21wdC1idXR0b24tY29udGFpbmVyID4gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDhmZjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5lcnJvciB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggcmVkO1xcbn1cXG5cXG4uZXJyb3ItZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay12aWV3ZXIge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zZWNvbmRhcnktdGFzay1ib2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm92ZXJkdWUtdGFzay1ib2FyZCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xcbn1cXG5cXG4udGFzay1pdGVtLWluZm8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcmltYXJ5LXRhc2stYW5kLWFjdGlvbnMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMC4zNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3NTY3YzdmYztcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUtYW5kLXByaW9yaXR5LWluZGljYXRvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LXRhc2staW5mby1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbn1cXG5cXG4udGFzay1mb3JtLWFjdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1mb3JtLWRhdGUtYW5kLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZm9ybS1idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWl0ZW0tYWN0aW9ucyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZm9ybS1oZWFkZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5mb3JtLWNhbmNlbC1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDZkZDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUtZm9ybS1maWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mYWRlLWluLW91dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI3MHB4KTtcXG59XFxuXFxuLyogTW92ZXMgPGRpdiBjbGFzcz1cXFwibWFpbi1jb250ZW50PlxcXCIqL1xcbi8qIE11c3QgYmUgaGFsZiBvZiA8ZGl2IGNsYXNzPVxcXCJtZW51LWJhcj4gdG8gcmVtYWluIGNlbnRlcmVkIG9uIHRoZSBhcHAuICovXFxuLmNsb3NlZCArIGRpdiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzNXB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3Rhc2stZHVlLWRhdGUtaW5wdXQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuI2Zvcm0tdGFzay1oZWFkZXIsXFxuI25ldy1wcm9qZWN0LW5hbWUge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWRyb3Bkb3duIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VB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O0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSxvQ0FBb0M7QUFDcEMseUVBQXlFO0FBQ3pFO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOGJlO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDIxcHgpO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA2MnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyID4gaDIge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDhiZTtcXG59XFxuXFxuLmljb24tYnV0dG9uLW1lZGl1bSB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmljb24tYnV0dG9uLXNtYWxsIHtcXG4gIGhlaWdodDogMjdweDtcXG4gIHdpZHRoOiAyN3B4O1xcbn1cXG5cXG4uaWNvbi1idXR0b24tZXh0cmEtc21hbGwge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2ZmO1xcbn1cXG5cXG4udGV4dC1idXR0b24ge1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG59XFxuXFxuLmljb24tdGV4dC1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBnYXA6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOGJlO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrLWJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kZW1vLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOGJlO1xcbn1cXG5cXG4uZm9ybS1hZGQtb3Itc2F2ZS10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkOGZmO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY3ZmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtLWNhbmNlbC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDZkZDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkOGZmO1xcbn1cXG5cXG4ubm8tdGFzay1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2Uvbm8tdGFza3MtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktZGF0ZS10YXNrLWJvYXJkLW1zZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnZpZXctYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4udmlldy1idXR0b24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4udmlldy1vcHRpb25zIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b3AtcmlnaHQtc2lkZS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1iYXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2ZmO1xcbn1cXG5cXG4ubWVudS10YWJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFiIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2ZmO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxufVxcblxcbi50YWItbmFtZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubGluZWJyZWFrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY3ZmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1vdmVybGF5LFxcbi50YXNrLWZvcm0tb3ZlcmxheSxcXG4uZGVsZXRlLXRhc2stY29uZmlybWF0aW9uLW92ZXJsYXkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSxcXG4udGFzay1mb3JtLWNvbnRhaW5lcixcXG4uZGVsZXRlLWNvbmZpcm1hdGlvbi1wcm9tcHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNjI1cHg7XFxufVxcblxcbi5kZWxldGUtY29uZmlybWF0aW9uLXByb21wdCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb21wdC1idXR0b24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9tcHQtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNmRkO1xcbn1cXG5cXG4uZGVsZXRlLXByb21wdC1idXR0b24tY29udGFpbmVyID4gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDhmZjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5lcnJvciB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggcmVkO1xcbn1cXG5cXG4uZXJyb3ItZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay12aWV3ZXIge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zZWNvbmRhcnktdGFzay1ib2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm92ZXJkdWUtdGFzay1ib2FyZCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xcbn1cXG5cXG4udGFzay1pdGVtLWluZm8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcmltYXJ5LXRhc2stYW5kLWFjdGlvbnMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMC4zNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3NTY3YzdmYztcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUtYW5kLXByaW9yaXR5LWluZGljYXRvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LXRhc2staW5mby1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbn1cXG5cXG4udGFzay1mb3JtLWFjdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1mb3JtLWRhdGUtYW5kLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZm9ybS1idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWl0ZW0tYWN0aW9ucyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2stZm9ybS1oZWFkZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5mb3JtLWNhbmNlbC1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDZkZDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUtZm9ybS1maWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mYWRlLWluLW91dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI3MHB4KTtcXG59XFxuXFxuLyogTW92ZXMgPGRpdiBjbGFzcz1cXFwibWFpbi1jb250ZW50PlxcXCIqL1xcbi8qIE11c3QgYmUgaGFsZiBvZiA8ZGl2IGNsYXNzPVxcXCJtZW51LWJhcj4gdG8gcmVtYWluIGNlbnRlcmVkIG9uIHRoZSBhcHAuICovXFxuLmNsb3NlZCArIGRpdiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzNXB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3Rhc2stZHVlLWRhdGUtaW5wdXQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuI2Zvcm0tdGFzay1oZWFkZXIsXFxuI25ldy1wcm9qZWN0LW5hbWUge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWRyb3Bkb3duIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlRGVzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgcmV2ZXJzZSBjaHJvbm9sb2dpY2FsbHkgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OSByZXZlcnNlIGNocm9ub2xvZ2ljYWxseTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVEZXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAxXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlcjpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZURlc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVEZXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5cbmZ1bmN0aW9uIGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpIHx8IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKSB8fCBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8IGRhdGVMZWZ0LmdldEhvdXJzKCkgLSBkYXRlUmlnaHQuZ2V0SG91cnMoKSB8fCBkYXRlTGVmdC5nZXRNaW51dGVzKCkgLSBkYXRlUmlnaHQuZ2V0TWludXRlcygpIHx8IGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHwgZGF0ZUxlZnQuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGguZmxvb3IoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4vLz0+IDkyXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICBkYXRlTGVmdC5zZXREYXRlKGRhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gIHZhciBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ24pO1xuICB2YXIgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBwTG9nbyB9IGZyb20gXCIuL2FwcExvZ28uanNcIjtcbmltcG9ydCB7IGljb25CdXR0b25NZWRpdW0gfSBmcm9tIFwiLi4vZ2VuZXJhbEJ1dHRvbnMvaWNvbkJ1dHRvbk1lZGl1bS5qc1wiO1xuaW1wb3J0IHsgdGV4dEJ1dHRvbiB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy90ZXh0QnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBpY29uQW5kVGV4dEJ1dHRvbiB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy9pY29uQW5kVGV4dEJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuLi8uLi9pY29ucy9tZW51LnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4uLy4uL2ljb25zL3BsdXMuc3ZnXCI7XG5cbmZ1bmN0aW9uIGFwcEhlYWRlcigpIHtcbiAgbGV0IGFwcEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiksXG4gICAgbWVudUJ1dHRvbiA9IGljb25CdXR0b25NZWRpdW0obWVudUljb24sIFwiTWVudSBpY29uXCIpLFxuICAgIGFkZE5ld1Rhc2tCdXR0b24gPSBpY29uQW5kVGV4dEJ1dHRvbihcbiAgICAgIFwiQWRkIHRhc2tcIixcbiAgICAgIGFkZEljb24sXG4gICAgICBcIlwiLFxuICAgICAgXCJhZGQtbmV3LXRhc2stYnV0dG9uXCJcbiAgICApLFxuICAgIGRlbW9CdXR0b24gPSB0ZXh0QnV0dG9uKFwiRGVtb1wiLCBcImRlbW8tYnV0dG9uXCIpLFxuICAgIHRvcFJpZ2h0QnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhtZW51QnV0dG9uLCBcIm1lbnUtYnV0dG9uXCIpO1xuICBhZGRDbGFzcyh0b3BSaWdodEJ1dHRvbkNvbnRhaW5lciwgXCJ0b3AtcmlnaHQtc2lkZS1idXR0b24tY29udGFpbmVyXCIpO1xuICBhZGRDbGFzcyhhcHBIZWFkZXIsIFwiYXBwSGVhZGVyXCIpO1xuXG4gIHRvcFJpZ2h0QnV0dG9uQ29udGFpbmVyLmFwcGVuZChhZGROZXdUYXNrQnV0dG9uLCBkZW1vQnV0dG9uKTtcbiAgYXBwSGVhZGVyLmFwcGVuZChtZW51QnV0dG9uLCBhcHBMb2dvKCksIHRvcFJpZ2h0QnV0dG9uQ29udGFpbmVyKTtcblxuICByZXR1cm4gYXBwSGVhZGVyO1xufVxuXG5leHBvcnQgeyBhcHBIZWFkZXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCBsb2dvSW1nIGZyb20gXCIuLi8uLi9pbWFnZS9Ub2RvLWlzdCBMb2dvLnN2Z1wiO1xuXG5mdW5jdGlvbiBhcHBMb2dvKCkge1xuICBsZXQgYXBwTG9nb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgYXBwTmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcbiAgICBsb2dvSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGFwcE5hbWUudGV4dENvbnRlbnQgPSBcIkRvIEl0XCI7XG5cbiAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsb2dvSW1nKTtcbiAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiVG9kby1pc3QgTG9nby4gQ2xpcGJvYXJkcyB3aXRoIGNoZWNrbWFya3Mgb24gdGhlbS5cIlxuICApO1xuXG4gIGFkZENsYXNzKGFwcExvZ29Db250YWluZXIsIFwiYXBwLWxvZ28tY29udGFpbmVyXCIpO1xuXG4gIGFwcExvZ29Db250YWluZXIuYXBwZW5kKGxvZ29JbWFnZSwgYXBwTmFtZSk7XG5cbiAgcmV0dXJuIGFwcExvZ29Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IGFwcExvZ28gfTtcbiIsImltcG9ydCB7IG1haW5Db250ZW50SGVhZGVyIH0gZnJvbSBcIi4vbWFpbkNvbnRlbnRIZWFkZXIuanNcIjtcbmltcG9ydCB7IHRhc2tWaWV3ZXIgfSBmcm9tIFwiLi90YXNrVmlld2VyLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFwcE1haW5Db250ZW50KCkge1xuICBsZXQgYXBwTWFpbkNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGxpbmVicmVhayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYWRkQ2xhc3MobGluZWJyZWFrLCBcImxpbmVicmVha1wiKTtcbiAgYWRkQ2xhc3MoYXBwTWFpbkNvbnRlbnQsIFwibWFpbi1jb250ZW50XCIpO1xuXG4gIGFwcE1haW5Db250ZW50LmFwcGVuZChtYWluQ29udGVudEhlYWRlcigpLCBsaW5lYnJlYWssIHRhc2tWaWV3ZXIoKSk7XG5cbiAgcmV0dXJuIGFwcE1haW5Db250ZW50O1xufVxuXG5leHBvcnQgeyBhcHBNYWluQ29udGVudCB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBtYWluQ29udGVudEhlYWRlcigpIHtcbiAgbGV0IG1haW5Db250ZW50SGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkaW5nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkaW5nID0gY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIC8vIE9uIHBhZ2UgbG9hZCwgSW5ib3ggaXMgbG9hZGVkIGJ5IGRlZmF1bHQuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgYWRkQ2xhc3MobWFpbkNvbnRlbnRIZWFkZXIsIFwibWFpbi1jb250ZW50LWhlYWRlclwiKTtcbiAgYWRkQ2xhc3MoaGVhZGluZ0NvbnRhaW5lciwgXCJtYWluLWNvbnRlbnQtaGVhZGluZy1jb250YWluZXJcIik7XG4gIGFkZENsYXNzKGhlYWRpbmcsIFwibWFpbi1jb250ZW50LWhlYWRpbmdcIik7XG5cbiAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG4gIG1haW5Db250ZW50SGVhZGVyLmFwcGVuZChoZWFkaW5nQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkNvbnRlbnRIZWFkZXI7XG59XG5cbmV4cG9ydCB7IG1haW5Db250ZW50SGVhZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhZGRDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5cbmZ1bmN0aW9uIHNlY29uZGFyeVRhc2tCb2FyZChib2FyZEhlYWRlcikge1xuICBsZXQgc2Vjb25kYXJ5VGFza0JvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBib2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgyXCIpLFxuICAgIGxpbmVicmVhayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0xpc3QgPSBjcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IGJvYXJkSGVhZGVyO1xuXG4gIGFkZENsYXNzKHRhc2tMaXN0LCBcInRhc2stbGlzdFwiKTtcbiAgYWRkQ2xhc3MobGluZWJyZWFrLCBcImxpbmVicmVha1wiKTtcbiAgYWRkQ2xhc3MoYm9hcmRUaXRsZSwgXCJzZWNvbmRhcnktdGFzay10aXRsZVwiKTtcbiAgYWRkQ2xhc3Moc2Vjb25kYXJ5VGFza0JvYXJkLCBcInNlY29uZGFyeS10YXNrLWJvYXJkXCIpO1xuXG4gIGlmIChib2FyZEhlYWRlci50b0xvd2VyQ2FzZSgpID09PSBcInRvZGF5XCIpIHtcbiAgICBzZWNvbmRhcnlUYXNrQm9hcmQuYXBwZW5kKHRhc2tMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICBzZWNvbmRhcnlUYXNrQm9hcmQuYXBwZW5kKGJvYXJkVGl0bGUsIGxpbmVicmVhaywgdGFza0xpc3QpO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZGFyeVRhc2tCb2FyZDtcbn1cblxuZXhwb3J0IHsgc2Vjb25kYXJ5VGFza0JvYXJkIH07XG4iLCJpbXBvcnQgeyB0b2dnbGVUYXNrQ29tcGxldGlvbiB9IGZyb20gXCIuLi8uLi9jb250cm9scy90YXNrQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuaW1wb3J0IGNoZWNrbWFya0ljb24gZnJvbSBcIi4uLy4uLy4uL2ljb25zL2NoZWNrLnN2Z1wiO1xuXG5mdW5jdGlvbiBjaGVja2JveCh0YXNrSXRlbUlkKSB7XG4gIGxldCBjaGVja2JveENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNoZWNrbWFyayA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjaGVja21hcmtJY29uKTtcbiAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNoZWNrbWFyayBpY29uXCIpO1xuXG4gIGFkZENsYXNzKGNoZWNrYm94LCBcImNoZWNrYm94XCIpO1xuICBhZGRDbGFzcyhjaGVja21hcmssIFwiZmFkZS1pbi1vdXRcIik7XG4gIGFkZENsYXNzKGNoZWNrYm94Q29udGFpbmVyLCBcImNoZWNrYm94LWNvbnRhaW5lclwiKTtcbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24oY2hlY2tib3gsIHRhc2tJdGVtSWQpO1xuXG4gIGNoZWNrYm94LmFwcGVuZChjaGVja21hcmspO1xuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gpO1xuXG4gIHJldHVybiBjaGVja2JveENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY2hlY2tib3ggfTtcbiIsImltcG9ydCB7IHRleHRCdXR0b24gfSBmcm9tIFwiLi4vLi4vZ2VuZXJhbEJ1dHRvbnMvdGV4dEJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ2FuY2VsQnV0dG9uTGlzdGVuZXIsXG4gIGRlbGV0ZUNvbmZpcm1hdGlvbkJ1dHRvbkxpc3RlbmVyLFxufSBmcm9tIFwiLi4vLi4vY29udHJvbHMvdGFza0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gY29uZmlybURlbGV0ZVByb21wdE92ZXJsYXkodGFza09yUHJvamVjdFRleHQsIGl0ZW1PYmopIHtcbiAgbGV0IG92ZXJsYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb21wdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY29uZmlybWF0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpLFxuICAgIHRhc2tPclByb2plY3RUZXh0Qm9sZCA9IGNyZWF0ZUVsZW1lbnQoXCJiXCIpLFxuICAgIGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY29uZmlybUJ1dHRvbiA9IHRleHRCdXR0b24oXCJZZXNcIiwgXCJ0ZXh0LWJ1dHRvblwiKSxcbiAgICBjYW5jZWxCdXR0b24gPSB0ZXh0QnV0dG9uKFwiTm9cIiwgXCJ0ZXh0LWJ1dHRvblwiKTtcblxuICBjb25maXJtYXRpb25UZXh0LnRleHRDb250ZW50ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYDtcbiAgdGFza09yUHJvamVjdFRleHRCb2xkLnRleHRDb250ZW50ID0gYCR7dGFza09yUHJvamVjdFRleHR9P2A7XG5cbiAgYWRkQ2xhc3MoYnV0dG9uQ29udGFpbmVyLCBcImRlbGV0ZS1wcm9tcHQtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgYWRkQ2xhc3MocHJvbXB0Q29udGFpbmVyLCBcImRlbGV0ZS1jb25maXJtYXRpb24tcHJvbXB0XCIpO1xuICBhZGRDbGFzcyhvdmVybGF5Q29udGFpbmVyLCBcImRlbGV0ZS10YXNrLWNvbmZpcm1hdGlvbi1vdmVybGF5XCIpO1xuXG4gIGNvbmZpcm1hdGlvblRleHQuYXBwZW5kKHRhc2tPclByb2plY3RUZXh0Qm9sZCk7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgcHJvbXB0Q29udGFpbmVyLmFwcGVuZChjb25maXJtYXRpb25UZXh0LCBidXR0b25Db250YWluZXIpO1xuICBvdmVybGF5Q29udGFpbmVyLmFwcGVuZChwcm9tcHRDb250YWluZXIpO1xuXG4gIGNyZWF0ZUNhbmNlbEJ1dHRvbkxpc3RlbmVyKG92ZXJsYXlDb250YWluZXIsIGNhbmNlbEJ1dHRvbik7XG4gIGRlbGV0ZUNvbmZpcm1hdGlvbkJ1dHRvbkxpc3RlbmVyKGNvbmZpcm1CdXR0b24sIG92ZXJsYXlDb250YWluZXIsIGl0ZW1PYmopO1xuXG4gIHJldHVybiBvdmVybGF5Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjb25maXJtRGVsZXRlUHJvbXB0T3ZlcmxheSB9O1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tEdWVEYXRlRmllbGQoZHVlRGF0ZSkge1xuICBsZXQgdGFza0R1ZURhdGVGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZGF0ZUlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGRhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgZGF0ZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kdWUtZGF0ZS1pbnB1dFwiKTtcbiAgZGF0ZUlucHV0LmlkID0gXCJ0YXNrLWR1ZS1kYXRlLWlucHV0XCI7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrRHVlRGF0ZVwiKTtcblxuICAvLyBJZiBlZGl0aW5nIGEgdGFzaywgc2V0IHRoZSBkYXRlIHZhbHVlIHNob3duIHRvIHRoZSBkdWUgZGF0ZSBvZiB0aGVcbiAgLy8gdGFzay4gT3RoZXJ3aXNlLCBzZXQgdGhlIGR1ZSBkYXRlIHRvIHRoZSBjdXJyZW50IGRhdGUgYnkgZGVmYXVsdC5cbiAgaWYgKGR1ZURhdGUpIHtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgYCR7Zm9ybWF0KG5ldyBEYXRlKGR1ZURhdGUpLCBcInl5eXktTU0tZGRcIil9YFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2Zvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIil9YCk7XG4gIH1cblxuICB0YXNrRHVlRGF0ZUZpZWxkLmFwcGVuZChkYXRlSW5wdXRMYWJlbCwgZGF0ZUlucHV0KTtcblxuICByZXR1cm4gdGFza0R1ZURhdGVGaWVsZDtcbn1cblxuZXhwb3J0IHsgdGFza0R1ZURhdGVGaWVsZCB9O1xuIiwiaW1wb3J0IHsgdGFza0R1ZURhdGVGaWVsZCB9IGZyb20gXCIuL3Rhc2tEdWVEYXRlRmllbGQuanNcIjtcbmltcG9ydCB7IHRhc2tQcmlvcml0eURyb3Bkb3duIH0gZnJvbSBcIi4vdGFza1ByaW9yaXR5RHJvcGRvd24uanNcIjtcbmltcG9ydCB7IHRleHRCdXR0b24gfSBmcm9tIFwiLi4vLi4vZ2VuZXJhbEJ1dHRvbnMvdGV4dEJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYWRkQ2xhc3MgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSGVhZGVyRmllbGQoaGVhZGVyVmFsdWUpIHtcbiAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGVyTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgaGVhZGVySW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICBoZWFkZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XG4gIGlmIChoZWFkZXJWYWx1ZSkge1xuICAgIGhlYWRlcklucHV0RmllbGQudGV4dENvbnRlbnQgPSBoZWFkZXJWYWx1ZTtcbiAgfVxuXG4gIGhlYWRlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG4gIGhlYWRlcklucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLXRhc2staGVhZGVyXCIpO1xuICBoZWFkZXJJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBhZGRDbGFzcyhoZWFkZXJJbnB1dEZpZWxkLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG4gIGFkZENsYXNzKGhlYWRlckNvbnRhaW5lciwgXCJ0YXNrLWZvcm0taGVhZGVyLWNvbnRhaW5lclwiKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckxhYmVsLCBoZWFkZXJJbnB1dEZpZWxkLCB0YXNrRm9ybUVycm9yRmllbGQoKSk7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gdGFza0Zvcm1FcnJvckZpZWxkKCkge1xuICBsZXQgZXJyb3JGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZXJyb3JNZXNzYWdlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgYWRkQ2xhc3MoZXJyb3JGaWVsZCwgXCJlcnJvci1maWVsZFwiLCBcImhpZGVcIik7XG4gIGFkZENsYXNzKGVycm9yTWVzc2FnZSwgXCJlcnJvci1tZXNzYWdlXCIpO1xuXG4gIGVycm9yRmllbGQuYXBwZW5kKGVycm9yTWVzc2FnZSk7XG5cbiAgcmV0dXJuIGVycm9yRmllbGQ7XG59XG5cbi8vIFRoZSBhZGRPclNhdmVUYXNrQnV0dG9uVGV4dCBhcmd1bWVudCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB0aGVcbi8vIHRhc2tGb3JtIHNob3VsZCBzdGF0ZSBcInNhdmVcIiBvciBcImFkZCB0YXNrXCIgZm9yIG9uZSBvZiB0aGUgYnV0dG9ucy5cbmZ1bmN0aW9uIHRhc2tGb3JtKGFkZE9yU2F2ZVRhc2tCdXR0b25UZXh0LCBjdXJyZW50VGFza0l0ZW1PYmopIHtcbiAgbGV0IHRhc2tGb3JtT3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHRhc2tJdGVtRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICAgIGhlYWRlckZpZWxkID0gY3JlYXRlVGFza0hlYWRlckZpZWxkKGN1cnJlbnRUYXNrSXRlbU9iai5oZWFkZXJWYWx1ZSksXG4gICAgdGFza0Zvcm1BY3Rpb25zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrRGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrRm9ybUJ1dHRvbnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNhbmNlbEZvcm1CdXR0b24gPSB0ZXh0QnV0dG9uKFwiQ2FuY2VsXCIsIFwiZm9ybS1jYW5jZWwtYnV0dG9uXCIpLFxuICAgIGFkZE9yU2F2ZVRhc2tCdXR0b24gPSB0ZXh0QnV0dG9uKFxuICAgICAgYWRkT3JTYXZlVGFza0J1dHRvblRleHQsXG4gICAgICBcImZvcm0tYWRkLW9yLXNhdmUtdGFzay1idXR0b25cIlxuICAgICk7XG5cbiAgYWRkQ2xhc3MoXG4gICAgdGFza0RhdGVBbmRQcmlvcml0eUNvbnRhaW5lcixcbiAgICBcInRhc2stZm9ybS1kYXRlLWFuZC1wcmlvcml0eS1jb250YWluZXJcIlxuICApO1xuICBhZGRDbGFzcyh0YXNrRm9ybUFjdGlvbnNDb250YWluZXIsIFwidGFzay1mb3JtLWFjdGlvbnMtY29udGFpbmVyXCIpO1xuICBhZGRDbGFzcyh0YXNrSXRlbUZvcm0sIFwidGFzay1mb3JtXCIpO1xuICBhZGRDbGFzcyh0YXNrRm9ybSwgXCJ0YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuICBhZGRDbGFzcyh0YXNrRm9ybU92ZXJsYXksIFwidGFzay1mb3JtLW92ZXJsYXlcIik7XG5cbiAgaWYgKGFkZE9yU2F2ZVRhc2tCdXR0b25UZXh0ID09PSBcIkFkZCBUYXNrXCIpIHtcbiAgICBhZGRPclNhdmVUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB9IGVsc2Uge1xuICAgIGFkZE9yU2F2ZVRhc2tCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIH1cblxuICB0YXNrSXRlbUZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcIlwiKTtcblxuICB0YXNrRGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChcbiAgICB0YXNrRHVlRGF0ZUZpZWxkKGN1cnJlbnRUYXNrSXRlbU9iai5kdWVEYXRlVmFsdWUpLFxuICAgIHRhc2tQcmlvcml0eURyb3Bkb3duKGN1cnJlbnRUYXNrSXRlbU9iai5wcmlvcml0eVZhbHVlKVxuICApO1xuICB0YXNrRm9ybUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNhbmNlbEZvcm1CdXR0b24sIGFkZE9yU2F2ZVRhc2tCdXR0b24pO1xuICB0YXNrRm9ybUFjdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgIHRhc2tEYXRlQW5kUHJpb3JpdHlDb250YWluZXIsXG4gICAgdGFza0Zvcm1CdXR0b25zQ29udGFpbmVyXG4gICk7XG4gIHRhc2tJdGVtRm9ybS5hcHBlbmQoaGVhZGVyRmllbGQsIHRhc2tGb3JtQWN0aW9uc0NvbnRhaW5lcik7XG4gIHRhc2tGb3JtLmFwcGVuZCh0YXNrSXRlbUZvcm0pO1xuXG4gIHRhc2tGb3JtT3ZlcmxheS5hcHBlbmQodGFza0Zvcm0pO1xuXG4gIHJldHVybiB0YXNrRm9ybU92ZXJsYXk7XG59XG5cbmV4cG9ydCB7IHRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tJbmZvKHRhc2tIZWFkZXJWYWx1ZSwgdGFza0Rlc2NyaXB0aW9uVmFsdWUpIHtcbiAgbGV0IHRhc2tJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0hlYWRlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cbiAgdGFza0hlYWRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrSGVhZGVyVmFsdWU7XG5cbiAgYWRkQ2xhc3ModGFza0hlYWRlckVsZW1lbnQsIFwidGFzay1oZWFkZXJcIik7XG5cbiAgdGFza0luZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZCh0YXNrSGVhZGVyRWxlbWVudCk7XG5cbiAgcmV0dXJuIHRhc2tJbmZvcm1hdGlvbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgdGFza0luZm8gfTtcbiIsImltcG9ydCB7IGNoZWNrYm94IH0gZnJvbSBcIi4vY2hlY2tib3guanNcIjtcbmltcG9ydCB7IHRhc2tJbmZvIH0gZnJvbSBcIi4vdGFza0luZm8uanNcIjtcbmltcG9ydCB7IHRhc2tJdGVtQWN0aW9ucyB9IGZyb20gXCIuL3Rhc2tJdGVtQWN0aW9ucy5qc1wiO1xuaW1wb3J0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNhcGl0YWxpemVGaXJzdExldHRlcixcbn0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFza0l0ZW0odGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopIHtcbiAgbGV0IHRhc2tJdGVtID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrSW5mb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgcHJpbWFyeVRhc2tJbmZvQW5kQWN0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgc2Vjb25kYXJ5VGFza0luZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGR1ZURhdGVBbmRQcmlvcml0eUluZGljYXRvckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0xhYmVsID0gY3JlYXRlRWxlbWVudChcInBcIiksXG4gICAgcHJpb3JpdHlJbmRpY2F0b3IgPSBjcmVhdGVFbGVtZW50KFwicFwiKSxcbiAgICBkdWVEYXRlSW5kaWNhdG9yID0gY3JlYXRlRWxlbWVudChcInBcIiksXG4gICAgdXBwZXJDYXNlUHJpb3JpdHlWYWx1ZSA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0YXNrSXRlbU9iai5wcmlvcml0eVZhbHVlKTtcblxuICBwcmlvcml0eUluZGljYXRvci50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgdXBwZXJDYXNlUHJpb3JpdHlWYWx1ZTtcbiAgZHVlRGF0ZUluZGljYXRvci50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiICsgdGFza0l0ZW1PYmouZHVlRGF0ZVZhbHVlO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSB0YXNrSXRlbU9iai50YXNrVHlwZTtcblxuICBhZGRDbGFzcyhcbiAgICBkdWVEYXRlQW5kUHJpb3JpdHlJbmRpY2F0b3JDb250YWluZXIsXG4gICAgXCJkYXRlLWFuZC1wcmlvcml0eS1pbmRpY2F0b3ItY29udGFpbmVyXCJcbiAgKTtcbiAgYWRkQ2xhc3Moc2Vjb25kYXJ5VGFza0luZm9Db250YWluZXIsIFwic2Vjb25kYXJ5LXRhc2staW5mby1jb250YWluZXJcIik7XG4gIGFkZENsYXNzKFxuICAgIHByaW1hcnlUYXNrSW5mb0FuZEFjdGlvbnNDb250YWluZXIsXG4gICAgXCJwcmltYXJ5LXRhc2stYW5kLWFjdGlvbnMtY29udGFpbmVyXCJcbiAgKTtcbiAgYWRkQ2xhc3ModGFza0luZm9Db250YWluZXIsIFwidGFzay1pdGVtLWluZm8tY29udGFpbmVyXCIpO1xuICBhZGRDbGFzcyh0YXNrSXRlbSwgXCJ0YXNrLWl0ZW1cIik7XG5cbiAgdGFza0l0ZW0uZGF0YXNldC50YXNrSXRlbUlkID0gdGFza0l0ZW1JZDtcblxuICBkdWVEYXRlQW5kUHJpb3JpdHlJbmRpY2F0b3JDb250YWluZXIuYXBwZW5kKFxuICAgIGR1ZURhdGVJbmRpY2F0b3IsXG4gICAgcHJpb3JpdHlJbmRpY2F0b3JcbiAgKTtcblxuICBzZWNvbmRhcnlUYXNrSW5mb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgZHVlRGF0ZUFuZFByaW9yaXR5SW5kaWNhdG9yQ29udGFpbmVyLFxuICAgIHRhc2tMYWJlbFxuICApO1xuXG4gIHByaW1hcnlUYXNrSW5mb0FuZEFjdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICAgIHRhc2tJbmZvKHRhc2tJdGVtT2JqLmhlYWRlclZhbHVlKSxcbiAgICB0YXNrSXRlbUFjdGlvbnModGFza0l0ZW1JZClcbiAgKTtcblxuICB0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgcHJpbWFyeVRhc2tJbmZvQW5kQWN0aW9uc0NvbnRhaW5lcixcbiAgICBzZWNvbmRhcnlUYXNrSW5mb0NvbnRhaW5lclxuICApO1xuXG4gIHRhc2tJdGVtLmFwcGVuZChjaGVja2JveCh0YXNrSXRlbUlkKSwgdGFza0luZm9Db250YWluZXIpO1xuXG4gIHJldHVybiB0YXNrSXRlbTtcbn1cblxuZXhwb3J0IHsgdGFza0l0ZW0gfTtcbiIsImltcG9ydCB7IGljb25CdXR0b25TbWFsbCB9IGZyb20gXCIuLi8uLi9nZW5lcmFsQnV0dG9ucy9pY29uQnV0dG9uU21hbGwuanNcIjtcbmltcG9ydCB7XG4gIEFkZEVkaXRCdXR0b25MaXN0ZW5lcixcbiAgY3JlYXRlRGVsZXRlUHJvbXB0T3ZlcmxheUxpc3RlbmVyLFxufSBmcm9tIFwiLi4vLi4vY29udHJvbHMvdGFza0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vLi4vLi4vaWNvbnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi8uLi9pY29ucy9kZWxldGUuc3ZnXCI7XG5cbmZ1bmN0aW9uIHRhc2tJdGVtQWN0aW9ucyh0YXNrSXRlbUlkKSB7XG4gIGxldCB0YXNrSXRlbUFjdGlvbnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGVkaXRCdXR0b24gPSBpY29uQnV0dG9uU21hbGwoZWRpdEljb24sIFwiVGFzayBFZGl0IEljb24gQnV0dG9uXCIpLFxuICAgIGRlbGV0ZUJ1dHRvbiA9IGljb25CdXR0b25TbWFsbChkZWxldGVJY29uLCBcIlRhc2sgRGVsZXRlIEJ1dHRvblwiKTtcblxuICBBZGRFZGl0QnV0dG9uTGlzdGVuZXIoZWRpdEJ1dHRvbiwgdGFza0l0ZW1JZCk7XG4gIGNyZWF0ZURlbGV0ZVByb21wdE92ZXJsYXlMaXN0ZW5lcihkZWxldGVCdXR0b24sIHsgdGFza0l0ZW1JZDogdGFza0l0ZW1JZCB9KTtcblxuICBhZGRDbGFzcyh0YXNrSXRlbUFjdGlvbnMsIFwidGFzay1pdGVtLWFjdGlvbnNcIik7XG5cbiAgdGFza0l0ZW1BY3Rpb25zLmFwcGVuZChlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuXG4gIHJldHVybiB0YXNrSXRlbUFjdGlvbnM7XG59XG5cbmV4cG9ydCB7IHRhc2tJdGVtQWN0aW9ucyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tQcmlvcml0eURyb3Bkb3duKHByaW9yaXR5VmFsdWUpIHtcbiAgbGV0IHRhc2tQcmlvcml0eURyb3Bkb3duID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBkcm9wZG93biA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG4gICAgcHJpb3JpdHlPcHRpb25BcnIgPSBbXCJOb25lXCIsIFwiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcblxuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktZHJvcGRvd25cIik7XG4gIGRyb3Bkb3duLmlkID0gXCJ0YXNrLXByaW9yaXR5LWRyb3Bkb3duXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBsZXQgcHJpb3JpdHlPcHRpb24gPSBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLFxuICAgICAgbG93ZXJDYXNlT3B0aW9uU3RyID0gcHJpb3JpdHlPcHRpb25BcnJbaV0udG9Mb3dlckNhc2UoKTtcblxuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlPcHRpb25BcnJbaV07XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7bG93ZXJDYXNlT3B0aW9uU3RyfWApO1xuXG4gICAgLy8gSWYgZWRpdGluZyBhIHRhc2ssIHNlbGVjdCB0aGUgb3B0aW9uIGluIHRoZSBkcm9wZG93biB0aGF0XG4gICAgLy8gbWF0Y2hlcyB0aGUgY3VycmVudCBwcmlvcml0eSB2YWx1ZVxuICAgIGlmIChwcmlvcml0eVZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyQ2FzZU9wdGlvblN0cikge1xuICAgICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfVxuXG4gICAgZHJvcGRvd24uYXBwZW5kKHByaW9yaXR5T3B0aW9uKTtcbiAgfVxuXG4gIHRhc2tQcmlvcml0eURyb3Bkb3duLmFwcGVuZChsYWJlbCwgZHJvcGRvd24pO1xuXG4gIHJldHVybiB0YXNrUHJpb3JpdHlEcm9wZG93bjtcbn1cblxuZXhwb3J0IHsgdGFza1ByaW9yaXR5RHJvcGRvd24gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFza1ZpZXdlcigpIHtcbiAgbGV0IHRhc2tWaWV3ZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKHRhc2tWaWV3ZXIsIFwidGFzay12aWV3ZXJcIik7XG5cbiAgcmV0dXJuIHRhc2tWaWV3ZXI7XG59XG5cbmV4cG9ydCB7IHRhc2tWaWV3ZXIgfTtcbiIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi93ZWJTdG9yYWdlQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2xhc3MsIGFkZENsYXNzIH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuLy8gQWdncmVzc2l2ZWx5IGNoZWNrcyBhbmQgZGlzYWJsZXMgdGhlIGFkZCBidXR0b24gaWYgaWYgZm9ybSBmaWVsZCBpcyBlbXB0eVxuZnVuY3Rpb24gbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24oaW5wdXQsIGJ1dHRvblRvRGlzYWJsZSkge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBsZXQgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItZmllbGRcIiksXG4gICAgICBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLW1lc3NhZ2VcIik7XG5cbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBidXR0b25Ub0Rpc2FibGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIFwiZXJyb3JcIik7XG4gICAgICBhZGRDbGFzcyhlcnJvckZpZWxkLCBcImhpZGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRvRGlzYWJsZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIGEgdGFzayBuYW1lLlwiO1xuICAgICAgYWRkQ2xhc3MoaW5wdXQsIFwiZXJyb3JcIik7XG4gICAgICByZW1vdmVDbGFzcyhlcnJvckZpZWxkLCBcImhpZGVcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZG9lc1Byb2plY3ROYW1lRXhpc3QocHJvamVjdE5hbWUpIHtcbiAgbGV0IHByb2plY3REYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwicHJvamVjdHNcIikpLFxuICAgIGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LW5hbWVcIiksXG4gICAgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItZmllbGRcIiksXG4gICAgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tZXNzYWdlXCIpLFxuICAgIGV4aXN0c0ZsYWcgPSB0cnVlO1xuXG4gIGlmIChwcm9qZWN0RGF0YU9iai5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0TmFtZSkpIHtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlRoaXMgcHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzIVwiO1xuICAgIGFkZENsYXNzKGlucHV0RmllbGQsIFwiZXJyb3JcIik7XG4gICAgcmVtb3ZlQ2xhc3MoZXJyb3JGaWVsZCwgXCJoaWRlXCIpO1xuICAgIGV4aXN0c0ZsYWcgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBleGlzdHNGbGFnO1xufVxuXG5leHBvcnQgeyBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbiwgZG9lc1Byb2plY3ROYW1lRXhpc3QgfTtcbiIsImltcG9ydCB7IG5ld1Byb2plY3RPdmVybGF5Rm9ybSB9IGZyb20gXCIuLi9wcm9qZWN0L25ld1Byb2plY3RPdmVybGF5Rm9ybS5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdFRhYiB9IGZyb20gXCIuLi9wcm9qZWN0L3Byb2plY3RUYWIuanNcIjtcbmltcG9ydCB7XG4gIG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uLFxuICBkb2VzUHJvamVjdE5hbWVFeGlzdCxcbn0gZnJvbSBcIi4vZm9ybVZhbGlkYXRpb25Db250cm9scy5qc1wiO1xuaW1wb3J0IHtcbiAgY2xlYXJQcmltYXJ5VGFza0JvYXJkLFxuICBnZXRUYXNrU29ydE1ldGhvZCxcbiAgYWRkUHJpbWFyeVRhc2tCb2FyZEJhY2tncm91bmQsXG59IGZyb20gXCIuL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSwgc2F2ZVRhc2tJdGVtIH0gZnJvbSBcIi4vd2ViU3RvcmFnZUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IHRvZ2dsZUNsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbi8vIFJlYXNvbiBmb3IgYXJyb3cgZnVuY3Rpb246XG4vLyBFdmVudCBMaXN0ZW5lcnMgZXhwZWN0IGEgZnVuY3Rpb24gcmVmZXJlbmNlIGluc3RlYWQgb2YgdGhlIGZ1bmN0aW9uIGl0c2VsZi5cbi8vIFRvIGF2b2lkIGNhbGxpbmcgZnVuY3Rpb24gaW1tZWRpYXRlbHksIGVpdGhlciBiaW5kICd0aGlzJywgY3JlYXRlIGFuXG4vLyBhbm9ueW1vdXMgZnVuY3Rpb24sIG9yIGhhdmUgYSBmdW5jdGlvbiByZXR1cm4gYSBmdW5jdGlvbi5cbmxldCBtZW51YmFyTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGxldCBtZW51YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKTtcbiAgdG9nZ2xlQ2xhc3MobWVudWJhciwgXCJoaWRlXCIpO1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudWJhclZpc2liaWxpdHkoKSB7XG4gIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5maXJzdEVsZW1lbnRDaGlsZCxcbiAgICBtZW51YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG1lbnViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAvLyBSZW1vdmUgbGlzdGVuZXIgYmVmb3JlIHN0YXJ0aW5nIHRyYW5zaXRpb24gdG8gYXZvaWQgdHJpZ2dlcmluZyB0aGVcbiAgICAgIC8vIGxpc3RlbmVyIHRvIGhpZGUgdGhlIG1lbnUgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAgbWVudWJhci5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBtZW51YmFyTGlzdGVuZXIpO1xuXG4gICAgICAvLyBNYWtlIG1lbnUgdmlzaWJsZSBiZWZvcmUgc3RhcnRpbmcgdHJhbnNpdGlvbiB0byBzaG93IG1lbnUuXG4gICAgICByZW1vdmVDbGFzcyhtZW51YmFyLCBcImhpZGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhpZGUgbWVudWJhciBhZnRlciBpdCBoYXMgdHJhbnNpdGlvbmVkIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAgbWVudWJhci5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBtZW51YmFyTGlzdGVuZXIpO1xuICAgIH1cbiAgICB0b2dnbGVDbGFzcyhtZW51YmFyLCBcImNsb3NlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0T3ZlcmxheUZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5ld1Byb2plY3RPdmVybGF5Rm9ybSgpKTtcblxuICAgIGxldCBuZXdQcm9qZWN0TmFtZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LW5hbWVcIiksXG4gICAgICBuZXdQcm9qZWN0QWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIubmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgICAgICk7XG5cbiAgICBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihuZXdQcm9qZWN0TmFtZU5vZGUsIG5ld1Byb2plY3RBZGRCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCkge1xuICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1mb3JtLWNhbmNlbC1idXR0b25cIik7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGJvZHlUYWcgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgbmV3UHJvamVjdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW92ZXJsYXlcIik7XG5cbiAgICBib2R5VGFnLnJlbW92ZUNoaWxkKG5ld1Byb2plY3RPdmVybGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm5ldy1wcm9qZWN0LWZvcm0tYWRkLWJ1dHRvblwiXG4gICk7XG5cbiAgYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtbmFtZVwiKS52YWx1ZS50cmltKCk7XG5cbiAgICBpZiAoZG9lc1Byb2plY3ROYW1lRXhpc3QocHJvamVjdE5hbWUpKSB7XG4gICAgICBsZXQgbmV3UHJvamVjdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW92ZXJsYXlcIiksXG4gICAgICAgIHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIiksXG4gICAgICAgIG5ld1Byb2plY3RUYWIgPSBwcm9qZWN0VGFiKHByb2plY3ROYW1lKSxcbiAgICAgICAgbWFpbkNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnQtaGVhZGluZ1wiKTtcblxuICAgICAgbWFpbkNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZChuZXdQcm9qZWN0VGFiKTtcbiAgICAgIGNyZWF0ZVRhYkxpc3RlbmVyKG5ld1Byb2plY3RUYWIpO1xuXG4gICAgICAvLyBjcmVhdGUgbG9jYWxTdG9yYWdlIGtleSB1c2luZyBwcm9qZWN0IG5hbWVcbiAgICAgIHNhdmVUYXNrSXRlbShwcm9qZWN0TmFtZSk7XG5cbiAgICAgIGNsZWFyUHJpbWFyeVRhc2tCb2FyZCgpO1xuICAgICAgYWRkUHJpbWFyeVRhc2tCb2FyZEJhY2tncm91bmQocHJvamVjdE5hbWUpO1xuICAgICAgc2F2ZURhdGEoXCJwcmV2aW91c1RhYlwiLCBwcm9qZWN0TmFtZSk7XG4gICAgICBuZXdQcm9qZWN0T3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcodGV4dCkge1xuICBsZXQgbWFpbkNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnQtaGVhZGluZ1wiKTtcblxuICBtYWluQ29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJMaXN0ZW5lcih0YWJFbGVtZW50KSB7XG4gIHRhYkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGFiTmFtZSA9IHRhYkVsZW1lbnQudGV4dENvbnRlbnQ7XG5cbiAgICB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcodGFiTmFtZSk7XG5cbiAgICAvL0lmIHRoZSB1c2VyIHJlLWNsaWNrcyB0aGUgY3VycmVudCB0YWIsIGRvIG5vdCBjbGVhciBhbmQgcmUtc29ydCB0YXNrIHZpZXdlci5cbiAgICBpZiAobG9jYWxTdG9yYWdlLnByZXZpb3VzVGFiICE9PSB0YWJOYW1lKSB7XG4gICAgICBnZXRUYXNrU29ydE1ldGhvZCh0YWJOYW1lKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigpIHtcbiAgdG9nZ2xlTWVudWJhclZpc2liaWxpdHkoKTtcbiAgZGlzcGxheU5ld1Byb2plY3RPdmVybGF5Rm9ybSgpO1xufVxuXG5leHBvcnQgeyBtZW51Q29udHJvbGxlciwgY3JlYXRlVGFiTGlzdGVuZXIsIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyB9O1xuIiwiaW1wb3J0IHtcbiAgZm9ybWF0LFxuICBhZGREYXlzLFxuICBkaWZmZXJlbmNlSW5EYXlzLFxuICBjb21wYXJlRGVzYyxcbiAgaXNCZWZvcmUsXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdGFza0Zvcm0gfSBmcm9tIFwiLi4vYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrRm9ybS5qc1wiO1xuaW1wb3J0IHsgY29uZmlybURlbGV0ZVByb21wdE92ZXJsYXkgfSBmcm9tIFwiLi4vYXBwTWFpbkNvbnRlbnQvdGFzay9jb25maXJtRGVsZXRlUHJvbXB0T3ZlcmxheS5qc1wiO1xuaW1wb3J0IHsgdGFza0l0ZW0gfSBmcm9tIFwiLi4vYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrSXRlbS5qc1wiO1xuaW1wb3J0IHsgc2Vjb25kYXJ5VGFza0JvYXJkIH0gZnJvbSBcIi4uL2FwcE1haW5Db250ZW50L3NlY29uZGFyeVRhc2tCb2FyZC5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi4vbWVudWJhci9wcm9qZWN0TGlzdC5qc1wiO1xuaW1wb3J0IHtcbiAgc2F2ZVRhc2tJdGVtLFxuICBnZXRUYXNrSXRlbSxcbiAgZ2V0RGF0YSxcbiAgZGVsZXRlVGFza0l0ZW0sXG4gIGRlbGV0ZVByb2plY3QsXG4gIGRlbGV0ZUVtcHR5Q29tcGxldGlvbkRhdGVLZXlzLFxuICBnZXRUYXNrUHJpb3JpdHlLZXksXG4gIGRldGVybWluZUxvY2FsU3RvcmFnZUtleSxcbiAgc2F2ZURhdGEsXG59IGZyb20gXCIuL3dlYlN0b3JhZ2VDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcgfSBmcm9tIFwiLi9tZW51Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24gfSBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvbkNvbnRyb2xzLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCwgcmVtb3ZlQ2xhc3MgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuaW1wb3J0IGRlbW9Kc29uIGZyb20gXCIuLi8uLi8uLi9kYXRhL2RlbW8uanNvblwiIGFzc2VydCB7IHR5cGU6IFwianNvblwiIH07XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2tCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGFkZE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1uZXctdGFzay1idXR0b25cIik7XG5cbiAgYWRkTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBuZXdUYXNrRm9ybSA9IHRhc2tGb3JtKFwiQWRkIFRhc2tcIiwgY3JlYXRlVGFza0l0ZW1PYmooKSksXG4gICAgICBuZXdUYXNrRm9ybUNhbmNlbEJ1dHRvbiA9IG5ld1Rhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmZvcm0tY2FuY2VsLWJ1dHRvblwiXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobmV3VGFza0Zvcm0pO1xuXG4gICAgbGV0IGZvcm1UYXNrSGVhZGVyID0gbmV3VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLXRhc2staGVhZGVyXCIpLFxuICAgICAgZm9ybUFkZFRhc2tCdXR0b24gPSBuZXdUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgICAgICk7XG5cbiAgICAvLyBBY3RpdmF0ZSBsaXN0ZW5lcnMgZm9yIGZvcm0gYnV0dG9uc1xuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbkxpc3RlbmVyKG5ld1Rhc2tGb3JtLCBuZXdUYXNrRm9ybUNhbmNlbEJ1dHRvbik7XG4gICAgYWRkVGFza0J1dHRvbkxpc3RlbmVyKG5ld1Rhc2tGb3JtKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihmb3JtVGFza0hlYWRlciwgZm9ybUFkZFRhc2tCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FuY2VsQnV0dG9uTGlzdGVuZXIoZm9ybU9yT3ZlcmxheSwgY2FuY2VsQnV0dG9uKSB7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1Pck92ZXJsYXkucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrQnV0dG9uTGlzdGVuZXIodGFza0Zvcm0pIHtcbiAgbGV0IGZvcm1BZGRUYXNrQnV0dG9uID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICBcIi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgKTtcblxuICBmb3JtQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrSXRlbU9iaiA9IGNyZWF0ZVRhc2tJdGVtT2JqKHRhc2tGb3JtKSxcbiAgICAgIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIubWFpbi1jb250ZW50LWhlYWRpbmdcIlxuICAgICAgKS50ZXh0Q29udGVudCxcbiAgICAgIHRhc2tJdGVtSWQgPSBjcmVhdGVUYXNrSXRlbUlkTnVtYmVyKCk7XG5cbiAgICBpZiAocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcgIT09IFwiQ29tcGxldGVkXCIpIHtcbiAgICAgIHNhdmVUYXNrSXRlbShwcmltYXJ5VGFza0JvYXJkSGVhZGluZywgdGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopO1xuICAgICAgaW5zZXJ0VGFza0Jhc2VkT25WaWV3KHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLCB0YXNrSXRlbUlkLCB0YXNrSXRlbU9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhdmVUYXNrSXRlbShcImluYm94XCIsIHRhc2tJdGVtSWQsIHRhc2tJdGVtT2JqKTtcbiAgICB9XG5cbiAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXNrQnV0dG9uTGlzdGVuZXIodGFza0Zvcm0sIHRhc2tJdGVtSWQpIHtcbiAgbGV0IGZvcm1BZGRPclNhdmVUYXNrQnV0dG9uID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICBcIi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgKTtcblxuICBmb3JtQWRkT3JTYXZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjb21wbGV0ZWREYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwiY29tcGxldGVkXCIpKSxcbiAgICAgIGNvbXBsZXRpb25EYXRlcyA9IE9iamVjdC5rZXlzKGNvbXBsZXRlZERhdGFPYmopLFxuICAgICAgY29tcGxldGlvbkRhdGVLZXk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBsZXRpb25EYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBjb21wbGV0ZWREYXRhT2JqW2NvbXBsZXRpb25EYXRlc1tpXV0uaGFzT3duUHJvcGVydHkoYCR7dGFza0l0ZW1JZH1gKVxuICAgICAgKSB7XG4gICAgICAgIGNvbXBsZXRpb25EYXRlS2V5ID0gY29tcGxldGlvbkRhdGVzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZWRpdGVkVGFza09iaiA9IGNyZWF0ZVRhc2tJdGVtT2JqKHRhc2tGb3JtLCB0YXNrSXRlbUlkKSxcbiAgICAgIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIubWFpbi1jb250ZW50LWhlYWRpbmdcIlxuICAgICAgKS50ZXh0Q29udGVudDtcblxuICAgIGRlbGV0ZVRhc2tJdGVtKHRhc2tJdGVtSWQpO1xuICAgIHNhdmVUYXNrSXRlbShcbiAgICAgIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLFxuICAgICAgdGFza0l0ZW1JZCxcbiAgICAgIGVkaXRlZFRhc2tPYmosXG4gICAgICBjb21wbGV0aW9uRGF0ZUtleVxuICAgICk7XG4gICAgZ2V0VGFza1NvcnRNZXRob2QocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpO1xuXG4gICAgdGFza0Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG4vLyBBZGRzIHRhc2tzIHRvIHRoZSByZWxldmFudCBib2FyZCBiYXNlZCBvbiB0aGUgcGFnZSB2aWV3XG5mdW5jdGlvbiBhZGRUYXNrVG9Cb2FyZCh0YXNrSXRlbUlkLCB0YXNrSXRlbU9iaiwgdGFza0JvYXJkKSB7XG4gIGlmICghdGFza0l0ZW1PYmopIHtcbiAgICB0YXNrSXRlbU9iaiA9IGdldFRhc2tJdGVtKHRhc2tJdGVtSWQpO1xuICB9XG5cbiAgdGFza0JvYXJkID0gdGFza0JvYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuXG4gIHRhc2tCb2FyZC5hcHBlbmQodGFza0l0ZW0odGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopKTtcbn1cblxuZnVuY3Rpb24gQWRkRWRpdEJ1dHRvbkxpc3RlbmVyKGVkaXRCdXR0b24sIHRhc2tJdGVtSWQpIHtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjdXJyZW50VGFza0l0ZW1PYmogPSBnZXRUYXNrSXRlbSh0YXNrSXRlbUlkKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGFzayBlZGl0IGZvcm0gYW5kIHJlbmRlciBpdCBvbiB0aGUgc2NyZWVuXG4gICAgbGV0IHRhc2tFZGl0Rm9ybSA9IHRhc2tGb3JtKFwiU2F2ZVwiLCBjdXJyZW50VGFza0l0ZW1PYmopLFxuICAgICAgbmV3VGFza0Zvcm1DYW5jZWxCdXR0b24gPSB0YXNrRWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZm9ybS1jYW5jZWwtYnV0dG9uXCJcbiAgICAgICk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0YXNrRWRpdEZvcm0pO1xuXG4gICAgLy8gR2V0IHRoZSB0YXNrIGVkaXQgZm9ybSBoZWFkZXIgYW5kIHNhdmUgYnV0dG9uIHRvIHZhbGlkYXRlIGFuZFxuICAgIC8vIHRvZ2dsZSBidXR0b24gc3RhdHVzLCByZXNwZWN0aXZlbHkuXG4gICAgbGV0IGZvcm1UYXNrSGVhZGVyID0gdGFza0VkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKSxcbiAgICAgIGZvcm1BZGRUYXNrQnV0dG9uID0gdGFza0VkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmZvcm0tYWRkLW9yLXNhdmUtdGFzay1idXR0b25cIlxuICAgICAgKTtcblxuICAgIC8vIFNldCBsaXN0ZW5lcnMgZm9yIHRhc2sgZWRpdCBmb3JtXG4gICAgY3JlYXRlQ2FuY2VsQnV0dG9uTGlzdGVuZXIodGFza0VkaXRGb3JtLCBuZXdUYXNrRm9ybUNhbmNlbEJ1dHRvbik7XG4gICAgc2F2ZVRhc2tCdXR0b25MaXN0ZW5lcih0YXNrRWRpdEZvcm0sIHRhc2tJdGVtSWQpO1xuICAgIG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uKGZvcm1UYXNrSGVhZGVyLCBmb3JtQWRkVGFza0J1dHRvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVQcm9tcHRPdmVybGF5TGlzdGVuZXIoZGVsZXRlQnV0dG9uLCBpdGVtT2JqKSB7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrT3JQcm9qZWN0VGV4dDtcblxuICAgIGlmIChpdGVtT2JqLmhhc093blByb3BlcnR5KFwidGFza0l0ZW1JZFwiKSkge1xuICAgICAgdGFza09yUHJvamVjdFRleHQgPSBnZXRUYXNrSXRlbShpdGVtT2JqLnRhc2tJdGVtSWQpLmhlYWRlclZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrT3JQcm9qZWN0VGV4dCA9IGl0ZW1PYmoucHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXG4gICAgICBjb25maXJtRGVsZXRlUHJvbXB0T3ZlcmxheSh0YXNrT3JQcm9qZWN0VGV4dCwgaXRlbU9iailcbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQ29uZmlybWF0aW9uQnV0dG9uTGlzdGVuZXIoXG4gIGNvbmZpcm1CdXR0b24sXG4gIG92ZXJsYXlDb250YWluZXIsXG4gIGl0ZW1PYmpcbikge1xuICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGl0ZW1PYmouaGFzT3duUHJvcGVydHkoXCJ0YXNrSXRlbUlkXCIpKSB7XG4gICAgICBsZXQgaXRlbVRvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtdGFzay1pdGVtLWlkID0gJyR7aXRlbU9iai50YXNrSXRlbUlkfSddYFxuICAgICAgICApLFxuICAgICAgICBwcmltYXJ5VGFza0JvYXJkSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIubWFpbi1jb250ZW50LWhlYWRpbmdcIlxuICAgICAgICApLnRleHRDb250ZW50O1xuXG4gICAgICBkZWxldGVUYXNrSXRlbShpdGVtT2JqLnRhc2tJdGVtSWQpO1xuICAgICAgcmVtb3ZlVGFza09yQm9hcmRGcm9tRE9NKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLCBpdGVtVG9EZWxldGUpO1xuICAgICAgb3ZlcmxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgaWYgKGlzUHJpbWFyeVRhc2tMaXN0RW1wdHkoKSkge1xuICAgICAgICBhZGRQcmltYXJ5VGFza0JvYXJkQmFja2dyb3VuZChwcmltYXJ5VGFza0JvYXJkSGVhZGluZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmltYXJ5VGFza0JvYXJkSGVhZGluZy50b0xvd2VyQ2FzZSgpID09PSBcInVwY29taW5nXCIpIHtcbiAgICAgICAgZW1wdHlUYXNrQm9hcmRNZXNzYWdlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZVByb2plY3QoaXRlbU9iai5wcm9qZWN0TmFtZSk7XG4gICAgICBjbGVhclByb2plY3RUYWJzKCk7XG4gICAgICByZWxvYWRQcm9qZWN0VGFicygpO1xuICAgICAgZ2V0VGFza1NvcnRNZXRob2QoXCJpbmJveFwiKTtcbiAgICAgIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyhcIkluYm94XCIpO1xuICAgICAgb3ZlcmxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGlvbihjaGVja2JveCwgdGFza0l0ZW1JZCkge1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS10YXNrLWl0ZW0taWQgPSAnJHt0YXNrSXRlbUlkfSddYFxuICAgICAgKSxcbiAgICAgIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIubWFpbi1jb250ZW50LWhlYWRpbmdcIlxuICAgICAgKS50ZXh0Q29udGVudCxcbiAgICAgIHRhc2sgPSBnZXRUYXNrSXRlbSh0YXNrSXRlbUlkKTtcblxuICAgIGRlbGV0ZVRhc2tJdGVtKHRhc2tJdGVtSWQpO1xuXG4gICAgaWYgKHRhc2tJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRlZFwiKSkge1xuICAgICAgLy8gRGV0ZXJtaW5lcyB3aGVyZSB0byBtb3ZlIHRoZSBjb21wbGV0ZWQgdGFzayBiYWNrIHRvLlxuICAgICAgaWYgKHRhc2sudGFza1R5cGUuaW5jbHVkZXMoXCJHZW5lcmFsXCIpKSB7XG4gICAgICAgIC8vIEluYm94IGlzIHVzZWQgc2luY2UgZ2VuZXJhbCB0YXNrcyBjYW4gYmUgY3JlYXRlZCBkdXJpbmcgdGhlXG4gICAgICAgIC8vIGluYm94LCB0b2RheSwgYW5kIHVwY29taW5nIHZpZXdzLiBBbGwgdGhyZWUgdmlld3Mgc2F2ZSB0YXNrc1xuICAgICAgICAvLyB0byB0YXNrRGF0YS5cbiAgICAgICAgc2F2ZVRhc2tJdGVtKFwiaW5ib3hcIiwgdGFza0l0ZW1JZCwgdGFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYXZlVGFza0l0ZW0oXG4gICAgICAgICAgdGFzay50YXNrVHlwZS5yZXBsYWNlKFwiUHJvamVjdCBUYXNrOiBcIiwgXCJcIiksXG4gICAgICAgICAgdGFza0l0ZW1JZCxcbiAgICAgICAgICB0YXNrXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhdmVUYXNrSXRlbShcImNvbXBsZXRlZFwiLCB0YXNrSXRlbUlkLCB0YXNrKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrT3JCb2FyZEZyb21ET00ocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcsIHRhc2tJdGVtKTtcblxuICAgIGlmIChpc1ByaW1hcnlUYXNrTGlzdEVtcHR5KCkpIHtcbiAgICAgIGFkZFByaW1hcnlUYXNrQm9hcmRCYWNrZ3JvdW5kKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nKTtcbiAgICB9XG5cbiAgICBpZiAocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcudG9Mb3dlckNhc2UoKSA9PT0gXCJ1cGNvbWluZ1wiKSB7XG4gICAgICBlbXB0eVRhc2tCb2FyZE1lc3NhZ2UoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrT3JCb2FyZEZyb21ET00ocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcsIHRhc2tUb0RlbGV0ZSkge1xuICAvLyByZW1vdmUgdGhlIHNlY29uZGFyeSB0YXNrIGJvYXJkIGlmIHRoaXMgaXMgdGhlIGxhc3QgdGFzayBsZWZ0LlxuICAvLyBPdGhlcndpc2UsIHJlbW92ZSB0aGUgdGFzayBmcm9tIHRoZSBzZWNvbmRhcnkgdGFzayBib2FyZFxuICBzd2l0Y2ggKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwidXBjb21pbmdcIjpcbiAgICAgIHRhc2tUb0RlbGV0ZS5yZW1vdmUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICAgIGlmICh0YXNrVG9EZWxldGUucGFyZW50RWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgICBkZWxldGVFbXB0eUNvbXBsZXRpb25EYXRlS2V5cygpO1xuICAgICAgICB0YXNrVG9EZWxldGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1RvRGVsZXRlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDogLy8gUHJvamVjdCB0YWJzLCBpbmJveCwgdG9kYXlcbiAgICAgIGlmICh0YXNrVG9EZWxldGUucGFyZW50RWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgICB0YXNrVG9EZWxldGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1RvRGVsZXRlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gUmFuZG9tIGFzc2lnbnMgYSBlaWdodCBkaWdpdCBpbnRlZ2VyIGZvciB0aGUgdGFzayBJRC5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtSWROdW1iZXIoKSB7XG4gIGxldCBtaW4gPSAwLFxuICAgIG1heCA9IDEwMDAwMDAwMCxcbiAgICB0YXNrSWQ7XG5cbiAgZG8ge1xuICAgIC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG4gICAgdGFza0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICB9IHdoaWxlIChPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmluY2x1ZGVzKGAke3Rhc2tJZH1gKSk7XG5cbiAgcmV0dXJuIHRhc2tJZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW1PYmoodGFza0Zvcm0sIGtlZXBUYXNrVHlwZSkge1xuICAvLyBXaGVuIGNyZWF0aW5nIHRoZSBmaXJzdCB0YXNrIGluIHRhc2sgdmlld2VyLCBhc3NpZ24gZW1wdHkgdmFsdWVzIHRvXG4gIC8vIHRoZSBvYmplY3Qgc28gdGhhdCB0YXNrRm9ybSB3aWxsIGRpc3BsYXkgZW1wdHkgZmllbGRzLlxuICBpZiAoIXRhc2tGb3JtKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlclZhbHVlOiBcIlwiLFxuICAgICAgcHJpb3JpdHlWYWx1ZTogXCJcIixcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJWYWx1ZTogdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLXRhc2staGVhZGVyXCIpLnZhbHVlLFxuICAgICAgcHJpb3JpdHlWYWx1ZTogdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5LWRyb3Bkb3duXCIpLnZhbHVlLFxuICAgICAgLy8gcmVjb252ZXJ0cyBpdCBpbnRvIGEgbW9yZSB3aWRlbHkgcmVjb2duaXphYmxlIGRhdGUgZm9ybSAoZS5nLjogTm92ZW1iZXIgMTEsIDIwMjIpXG4gICAgICAvLyB0aGUgJy0nIGFyZSByZXBsYWNlZCB3aXRoICcvJyBkdWUgdG8gYW4gaXNzdWUgd2hlcmUgZm9ybWF0dGluZyB0aGUgZGF0ZSB3aXRoICctJ1xuICAgICAgLy8gY2F1c2VzIHRoZSBkYXRlIHRvIGJlIG9uZSBkYXkgYmVoaW5kIHRoZSBkZXNpcmVkIGRhdGVcbiAgICAgIGR1ZURhdGVWYWx1ZTogZm9ybWF0KFxuICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICB0YXNrRm9ybVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWUtZGF0ZS1pbnB1dFwiKVxuICAgICAgICAgICAgLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpXG4gICAgICAgICksXG4gICAgICAgIFwiUFBcIlxuICAgICAgKSxcbiAgICAgIHRhc2tUeXBlOiBkZXRlcm1pbmVUYXNrVHlwZShrZWVwVGFza1R5cGUpLFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lVGFza1R5cGUoa2VlcFRhc2tUeXBlKSB7XG4gIGxldCB0YXNrVHlwZSxcbiAgICBwcmltYXJ5VGFza0JvYXJkSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5tYWluLWNvbnRlbnQtaGVhZGluZ1wiXG4gICAgKS50ZXh0Q29udGVudDtcblxuICBzd2l0Y2ggKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiaW5ib3hcIjpcbiAgICBjYXNlIFwidG9kYXlcIjpcbiAgICBjYXNlIFwidXBjb21pbmdcIjpcbiAgICAgIHRhc2tUeXBlID0gXCJHZW5lcmFsIFRhc2tcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICAgIHRhc2tUeXBlID0ga2VlcFRhc2tUeXBlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRhc2tUeXBlID0gXCJQcm9qZWN0IFRhc2s6IFwiICsgcHJpbWFyeVRhc2tCb2FyZEhlYWRpbmc7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB0YXNrVHlwZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcmltYXJ5VGFza0JvYXJkKCkge1xuICBsZXQgcHJpbWFyeVRhc2tCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIik7XG5cbiAgd2hpbGUgKHByaW1hcnlUYXNrQm9hcmQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBwcmltYXJ5VGFza0JvYXJkLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdFRhYnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZWxvYWRQcm9qZWN0VGFicygpIHtcbiAgbGV0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIik7XG5cbiAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHByb2plY3RMaXN0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrU29ydE1ldGhvZChwcmltYXJ5VGFza0JvYXJkSGVhZGluZykge1xuICBsZXQgbG9jYWxTdG9yYWdlS2V5ID0gZGV0ZXJtaW5lTG9jYWxTdG9yYWdlS2V5KHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nKSxcbiAgICBvdmVyRHVlVGFza3MgPSBjaGVja0ZvckFsbE92ZXJkdWVUYXNrcyhcbiAgICAgIGxvY2FsU3RvcmFnZUtleSxcbiAgICAgIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nXG4gICAgKTtcblxuICBjbGVhclByaW1hcnlUYXNrQm9hcmQoKTtcblxuICBzd2l0Y2ggKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiaW5ib3hcIjpcbiAgICAgIGNyZWF0ZVByaW9yaXR5Qm9hcmRzKCk7XG4gICAgICBzb3J0VGFza3NCeUluYm94KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgIHNvcnRUYXNrc0J5VG9kYXkocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInVwY29taW5nXCI6XG4gICAgICBjcmVhdGVEYXRlVGFza0JvYXJkcygpO1xuICAgICAgc29ydFRhc2tzQnlVcGNvbWluZygpO1xuICAgICAgZW1wdHlUYXNrQm9hcmRNZXNzYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29tcGxldGVkXCI6XG4gICAgICBzb3J0VGFza3NCeUNvbXBsZXRlZChwcmltYXJ5VGFza0JvYXJkSGVhZGluZyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OiAvLyBTb3J0IFByb2plY3QgVGFic1xuICAgICAgc29ydFRhc2tzQnlQcm9qZWN0KHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKG92ZXJEdWVUYXNrcy5sZW5ndGggPiAwICYmIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nICE9PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgY3JlYXRlT3ZlckR1ZVRhc2tCb2FyZChvdmVyRHVlVGFza3MpO1xuICB9XG5cbiAgaWYgKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nICE9PSBcIlVwY29taW5nXCIpIHtcbiAgICBjbGVhckVtcHR5VGFza0JvYXJkcygpO1xuICB9XG5cbiAgaWYgKGlzUHJpbWFyeVRhc2tMaXN0RW1wdHkoKSAmJiBwcmltYXJ5VGFza0JvYXJkSGVhZGluZyAhPT0gXCJVcGNvbWluZ1wiKSB7XG4gICAgYWRkUHJpbWFyeVRhc2tCb2FyZEJhY2tncm91bmQocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZVByaW1hcnlUYXNrQm9hcmRCYWNrZ3JvdW5kKCk7XG4gIH1cblxuICBsb2NhbFN0b3JhZ2UucHJldmlvdXNUYWIgPSBwcmltYXJ5VGFza0JvYXJkSGVhZGluZztcbn1cblxuZnVuY3Rpb24gY2xlYXJFbXB0eVRhc2tCb2FyZHMoKSB7XG4gIGxldCB0YXNrQm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWNvbmRhcnktdGFzay1ib2FyZFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tCb2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza0JvYXJkc1tpXS5sYXN0RWxlbWVudENoaWxkLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICB0YXNrQm9hcmRzW2ldLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ByaW1hcnlUYXNrTGlzdEVtcHR5KCkge1xuICByZXR1cm4gIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIikuY2hpbGRFbGVtZW50Q291bnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFByaW1hcnlUYXNrQm9hcmRCYWNrZ3JvdW5kKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nKSB7XG4gIGxldCBwcmltYXJ5VGFza0JvYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIiksXG4gICAgbm9UYXNrc01lc3NhZ2UgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBpZiAocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgIG5vVGFza3NNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSBoYXZlbid0IGNvbXBsZXRlZCBhbnkgdGFza3MgeWV0ISBcbiAgICAgIENvbXBsZXRlIHNvbWUgdGFza3MgdG8gc2VlIGhvdyBtdWNoIHlvdSd2ZSBhY2NvbXBsaXNoZWQgaGVyZS5gO1xuICB9IGVsc2Uge1xuICAgIG5vVGFza3NNZXNzYWdlLnRleHRDb250ZW50ID0gYFRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnltb3JlIHRhc2tzISBcbiAgICAgIEFkZCBzb21lIG1vcmUgaWYgbmVlZGVkLiBPdGhlcndpc2UsIGVuam95IHRoZSByZXN0IG9mIHlvdXIgZGF5IWA7XG4gIH1cblxuICBwcmltYXJ5VGFza0JvYXJkTGlzdC5hcHBlbmQobm9UYXNrc01lc3NhZ2UpO1xuXG4gIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby10YXNrLWJhY2tncm91bmRcIikpIHtcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBcIm5vLXRhc2stYmFja2dyb3VuZFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcmltYXJ5VGFza0JvYXJkQmFja2dyb3VuZCgpIHtcbiAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgXCJuby10YXNrLWJhY2tncm91bmRcIik7XG59XG5cbmZ1bmN0aW9uIHNvcnRCeUR1ZURhdGVBc2MoZW50cmllcykge1xuICByZXR1cm4gZW50cmllcy5zb3J0KChlbnRyeUxlZnQsIGVudHJ5UmlnaHQpID0+IHtcbiAgICByZXR1cm4gY29tcGFyZURlc2MoXG4gICAgICBuZXcgRGF0ZShlbnRyeVJpZ2h0WzFdLmR1ZURhdGVWYWx1ZSksXG4gICAgICBuZXcgRGF0ZShlbnRyeUxlZnRbMV0uZHVlRGF0ZVZhbHVlKVxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lR2VuZXJhbEFuZFByb2plY3RUYXNrcygpIHtcbiAgbGV0IHRhc2tEYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwidGFza0RhdGFcIikpLFxuICAgIHByb2plY3REYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwicHJvamVjdHNcIikpLFxuICAgIGNvbWJpbmVkVGFza09iaiA9IHt9O1xuXG4gIFt0YXNrRGF0YU9iaiwgcHJvamVjdERhdGFPYmpdLmZvckVhY2goKGRhdGFPYmosIGkpID0+IHtcbiAgICBPYmplY3Qua2V5cyhkYXRhT2JqKS5mb3JFYWNoKChzZWNvbmRhcnlLZXkpID0+IHtcbiAgICAgIGlmICghY29tYmluZWRUYXNrT2JqLmhhc093blByb3BlcnR5KHNlY29uZGFyeUtleSkgJiYgaSA9PT0gMCkge1xuICAgICAgICBjb21iaW5lZFRhc2tPYmpbc2Vjb25kYXJ5S2V5XSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZW50cmllcyhkYXRhT2JqW3NlY29uZGFyeUtleV0pLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghaXNUYXNrT3ZlcmR1ZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgY29tYmluZWRUYXNrT2JqW3NlY29uZGFyeUtleV1bZW50cnlbMF1dID0gZW50cnlbMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbWJpbmVkVGFza09ialtnZXRUYXNrUHJpb3JpdHlLZXkoZW50cnlbMV0ucHJpb3JpdHlWYWx1ZSldW1xuICAgICAgICAgICAgICBlbnRyeVswXVxuICAgICAgICAgICAgXSA9IGVudHJ5WzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5lZFRhc2tPYmo7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJEdWVUYXNrQm9hcmQob3ZlckR1ZVRhc2tzKSB7XG4gIGxldCBwcmltYXJ5VGFza0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXdlclwiKSxcbiAgICBvdmVyRHVlQm9hcmQgPSBzZWNvbmRhcnlUYXNrQm9hcmQoXCJPdmVyZHVlIFRhc2tzXCIpO1xuXG4gIGFkZENsYXNzKG92ZXJEdWVCb2FyZCwgXCJvdmVyZHVlLXRhc2stYm9hcmRcIik7XG4gIHByaW1hcnlUYXNrQm9hcmQucHJlcGVuZChvdmVyRHVlQm9hcmQpO1xuXG4gIG92ZXJEdWVUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgYWRkVGFza1RvQm9hcmQodGFza1swXSwgdGFza1sxXSwgb3ZlckR1ZUJvYXJkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5Qm9hcmRzKCkge1xuICBsZXQgcHJpbWFyeVRhc2tCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIiksXG4gICAgcHJpb3JpdHlCb2FyZEhlYWRlckFyciA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIiwgXCJOb1wiXSxcbiAgICBwcmlvcml0eUtleXMgPSBbXG4gICAgICBcImhpZ2hQcmlvcml0eVRhc2tzXCIsXG4gICAgICBcIm1lZGl1bVByaW9yaXR5VGFza3NcIixcbiAgICAgIFwibG93UHJpb3JpdHlUYXNrc1wiLFxuICAgICAgXCJub1ByaW9yaXR5VGFza3NcIixcbiAgICBdO1xuXG4gIHByaW9yaXR5Qm9hcmRIZWFkZXJBcnIuZm9yRWFjaCgoaGVhZGVyLCBpKSA9PiB7XG4gICAgbGV0IHByaW9yaXR5Qm9hcmQgPSBzZWNvbmRhcnlUYXNrQm9hcmQoaGVhZGVyICsgXCIgUHJpb3JpdHlcIik7XG5cbiAgICAvLyBBbiBpZGVudGlmaWVyIHRoYXQgaXMgdXNlZCB3aGVuIHNvcnRpbmcgdGhyb3VnaCB0YXNrIGRhdGFcbiAgICAvLyB0byBhcHBlbmQgdGFza3MgYmFzZWQgb24gcHJpb3JpdHkuXG4gICAgcHJpb3JpdHlCb2FyZC5kYXRhc2V0LnByaW9yaXR5S2V5ID0gcHJpb3JpdHlLZXlzW2ldO1xuXG4gICAgcHJpbWFyeVRhc2tCb2FyZC5hcHBlbmQocHJpb3JpdHlCb2FyZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGFza0JvYXJkcygpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLCAvL1RvZGF5J3MgZGF0ZVxuICAgIHByaW1hcnlUYXNrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoZGF0ZSwgXCJNTU0gZCAtIEVFRUVcIik7XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgZm9ybWF0dGVkRGF0ZSArPSBcIiAtIFRvZGF5XCI7XG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICBmb3JtYXR0ZWREYXRlICs9IFwiIC0gVG9tb3Jyb3dcIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5VGFza0JvYXJkLmFwcGVuZChzZWNvbmRhcnlUYXNrQm9hcmQoZm9ybWF0dGVkRGF0ZSkpO1xuICAgIGRhdGUgPSBhZGREYXlzKGRhdGUsIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFza0JvYXJkTWVzc2FnZSgpIHtcbiAgbGV0IHRhc2tMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpO1xuXG4gIHRhc2tMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGV0IGVtcHR5VGFza0JvYXJkTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZW1wdHlUYXNrQm9hcmRNZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGVyZSBhcmUgbm8gdGFza3MgZHVlIG9uIHRoaXMgZGF0ZS5cIjtcbiAgICBhZGRDbGFzcyhlbXB0eVRhc2tCb2FyZE1lc3NhZ2UsIFwiZW1wdHktZGF0ZS10YXNrLWJvYXJkLW1zZ1wiKTtcblxuICAgIGlmIChsaXN0LmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICBsaXN0LmFwcGVuZChlbXB0eVRhc2tCb2FyZE1lc3NhZ2UpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQWxsT3ZlcmR1ZVRhc2tzKGxvY2FsU3RvcmFnZUtleSwgcHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpIHtcbiAgbGV0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApLFxuICAgIHRhc2tEYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwidGFza0RhdGFcIikpLFxuICAgIHByb2plY3REYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwicHJvamVjdHNcIikpLFxuICAgIG92ZXJEdWVUYXNrcyA9IFtdO1xuXG4gIC8vIEZvciBwcm9qZWN0IHZpZXdcbiAgaWYgKGxvY2FsU3RvcmFnZUtleSA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgT2JqZWN0LmtleXMocHJvamVjdERhdGFPYmpbcHJpbWFyeVRhc2tCb2FyZEhlYWRpbmddKS5mb3JFYWNoKCh0YXNrS2V5KSA9PiB7XG4gICAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBwcm9qZWN0RGF0YU9ialtwcmltYXJ5VGFza0JvYXJkSGVhZGluZ11bdGFza0tleV0uZHVlRGF0ZVZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAoY29tcGFyZURlc2ModG9kYXlzRGF0ZSwgZHVlRGF0ZSkgPT09IC0xKSB7XG4gICAgICAgIG92ZXJEdWVUYXNrcy5wdXNoKFtcbiAgICAgICAgICB0YXNrS2V5LFxuICAgICAgICAgIHByb2plY3REYXRhT2JqW3ByaW1hcnlUYXNrQm9hcmRIZWFkaW5nXVt0YXNrS2V5XSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gRm9yIGluYm94LCB0b2RheSwgYW5kIHVwY29taW5nIHZpZXdcbiAgZWxzZSB7XG4gICAgW3Rhc2tEYXRhT2JqLCBwcm9qZWN0RGF0YU9ial0uZm9yRWFjaCgoZGF0YU9iaikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YU9iaikuZm9yRWFjaCgoc2Vjb25kYXJ5S2V5KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFPYmpbc2Vjb25kYXJ5S2V5XSkuZm9yRWFjaCgodGFza0tleSkgPT4ge1xuICAgICAgICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUoZGF0YU9ialtzZWNvbmRhcnlLZXldW3Rhc2tLZXldLmR1ZURhdGVWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoY29tcGFyZURlc2ModG9kYXlzRGF0ZSwgZHVlRGF0ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyRHVlVGFza3MucHVzaChbdGFza0tleSwgZGF0YU9ialtzZWNvbmRhcnlLZXldW3Rhc2tLZXldXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKG92ZXJEdWVUYXNrcy5sZW5ndGggPiAxKSB7XG4gICAgb3ZlckR1ZVRhc2tzID0gc29ydEJ5RHVlRGF0ZUFzYyhvdmVyRHVlVGFza3MpO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJEdWVUYXNrcztcbn1cblxuZnVuY3Rpb24gc29ydFRhc2tzQnlJbmJveCgpIHtcbiAgbGV0IGNvbWJpbmVkVGFza09iaiA9IGNvbWJpbmVHZW5lcmFsQW5kUHJvamVjdFRhc2tzKCk7XG5cbiAgT2JqZWN0LmtleXMoY29tYmluZWRUYXNrT2JqKS5mb3JFYWNoKChwcmlvcml0eUtleSkgPT4ge1xuICAgIGxldCB0YXNrRW50cmllcyA9IHNvcnRCeUR1ZURhdGVBc2MoXG4gICAgICBPYmplY3QuZW50cmllcyhjb21iaW5lZFRhc2tPYmpbcHJpb3JpdHlLZXldKVxuICAgICk7XG5cbiAgICB0YXNrRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgbGV0IHRhc2tJdGVtS2V5ID0gZW50cnlbMF0sXG4gICAgICAgIHRhc2tPYmogPSBlbnRyeVsxXTtcblxuICAgICAgYWRkVGFza1RvQm9hcmQoXG4gICAgICAgIHRhc2tJdGVtS2V5LFxuICAgICAgICB0YXNrT2JqLFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcmlvcml0eS1rZXk9XCIke3ByaW9yaXR5S2V5fVwiXWApXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc29ydFRhc2tzQnlUb2RheShwcmltYXJ5VGFza0JvYXJkSGVhZGluZykge1xuICBsZXQgcHJpbWFyeVRhc2tCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIiksXG4gICAgdGFza0RhdGFPYmogPSBKU09OLnBhcnNlKGdldERhdGEoXCJ0YXNrRGF0YVwiKSksXG4gICAgcHJvamVjdERhdGFPYmogPSBKU09OLnBhcnNlKGdldERhdGEoXCJwcm9qZWN0c1wiKSksXG4gICAgdG9kYXlzRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcIlBQXCIpLFxuICAgIHRvZGF5Qm9hcmQgPSBzZWNvbmRhcnlUYXNrQm9hcmQocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpO1xuXG4gIFt0YXNrRGF0YU9iaiwgcHJvamVjdERhdGFPYmpdLmZvckVhY2goKGRhdGFPYmopID0+IHtcbiAgICBPYmplY3Qua2V5cyhkYXRhT2JqKS5mb3JFYWNoKChzZWNvbmRhcnlLZXkpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGFPYmpbc2Vjb25kYXJ5S2V5XSkuZm9yRWFjaCgodGFza0l0ZW1LZXkpID0+IHtcbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZGF0YU9ialtzZWNvbmRhcnlLZXldW3Rhc2tJdGVtS2V5XS5kdWVEYXRlVmFsdWU7XG5cbiAgICAgICAgaWYgKHRhc2tEdWVEYXRlID09PSB0b2RheXNEYXRlKSB7XG4gICAgICAgICAgaWYgKCFpc1Rhc2tPdmVyZHVlKGRhdGFPYmpbc2Vjb25kYXJ5S2V5XVt0YXNrSXRlbUtleV0pKSB7XG4gICAgICAgICAgICBhZGRUYXNrVG9Cb2FyZChcbiAgICAgICAgICAgICAgdGFza0l0ZW1LZXksXG4gICAgICAgICAgICAgIGRhdGFPYmpbc2Vjb25kYXJ5S2V5XVt0YXNrSXRlbUtleV0sXG4gICAgICAgICAgICAgIHRvZGF5Qm9hcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcHJpbWFyeVRhc2tCb2FyZC5hcHBlbmQodG9kYXlCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUYXNrc0J5VXBjb21pbmcoKSB7XG4gIGxldCB0YXNrRGF0YU9iaiA9IEpTT04ucGFyc2UoZ2V0RGF0YShcInRhc2tEYXRhXCIpKSxcbiAgICBwcm9qZWN0RGF0YU9iaiA9IEpTT04ucGFyc2UoZ2V0RGF0YShcInByb2plY3RzXCIpKSxcbiAgICB0b2RheXNEYXRlID0gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSwgLy8gVG9kYXlzIGRhdGUgd2l0aCB0aW1lIGNvbXBvbmVudCB6ZXJvJ2Qgb3V0XG4gICAgd2Vla0Zyb21Ub2RheXNEYXRlID0gYWRkRGF5cyh0b2RheXNEYXRlLCA2KSwgLy8gVG9kYXkncyBkYXRlICsgNiBkYXlzXG4gICAgZGF0ZVRhc2tCb2FyZHNBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2Vjb25kYXJ5LXRhc2stYm9hcmRcIik7XG5cbiAgW3Rhc2tEYXRhT2JqLCBwcm9qZWN0RGF0YU9ial0uZm9yRWFjaCgoZGF0YU9iaikgPT4ge1xuICAgIE9iamVjdC5rZXlzKGRhdGFPYmopLmZvckVhY2goKHNlY29uZGFyeUtleSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YU9ialtzZWNvbmRhcnlLZXldKS5mb3JFYWNoKCh0YXNrSXRlbUtleSkgPT4ge1xuICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIGRhdGFPYmpbc2Vjb25kYXJ5S2V5XVt0YXNrSXRlbUtleV0uZHVlRGF0ZVZhbHVlXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkYXlEaWZmZXJlbmNlID0gZGlmZmVyZW5jZUluRGF5cyh3ZWVrRnJvbVRvZGF5c0RhdGUsIHRhc2tEdWVEYXRlKTtcblxuICAgICAgICBpZiAoZGF5RGlmZmVyZW5jZSA8IDcgJiYgZGF5RGlmZmVyZW5jZSA+PSAwKSB7XG4gICAgICAgICAgaWYgKCFpc1Rhc2tPdmVyZHVlKGRhdGFPYmpbc2Vjb25kYXJ5S2V5XVt0YXNrSXRlbUtleV0pKSB7XG4gICAgICAgICAgICBhZGRUYXNrVG9Cb2FyZChcbiAgICAgICAgICAgICAgdGFza0l0ZW1LZXksXG4gICAgICAgICAgICAgIGRhdGFPYmpbc2Vjb25kYXJ5S2V5XVt0YXNrSXRlbUtleV0sXG4gICAgICAgICAgICAgIGRhdGVUYXNrQm9hcmRzQXJyWzYgLSBkYXlEaWZmZXJlbmNlXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc29ydFRhc2tzQnlDb21wbGV0ZWQocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpIHtcbiAgbGV0IHByaW1hcnlUYXNrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpLFxuICAgIGNvbXBsZXRlZFRhc2tEYXRhT2JqID0gSlNPTi5wYXJzZShcbiAgICAgIGdldERhdGEoZGV0ZXJtaW5lTG9jYWxTdG9yYWdlS2V5KHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nKSlcbiAgICApLFxuICAgIGNvbXBsZXRpb25EYXRlcyA9IE9iamVjdC5rZXlzKGNvbXBsZXRlZFRhc2tEYXRhT2JqKTtcblxuICAvLyBTb3J0IGNvbXBsZXRpb24gZGF0ZXMgZnJvbSBtb3N0IHJlY2VudCB0byBvbGRlc3QgKGRlc2NlbmRpbmcpLlxuICBpZiAoY29tcGxldGlvbkRhdGVzLmxlbmd0aCA+IDEpIHtcbiAgICBjb21wbGV0aW9uRGF0ZXMgPSBjb21wbGV0aW9uRGF0ZXMuc29ydCgoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT5cbiAgICAgIGNvbXBhcmVEZXNjKG5ldyBEYXRlKGRhdGVMZWZ0KSwgbmV3IERhdGUoZGF0ZVJpZ2h0KSlcbiAgICApO1xuICB9XG5cbiAgY29tcGxldGlvbkRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJNTU0gZCAtIEVFRUVcIiksXG4gICAgICBkYXRlVGFza0JvYXJkID0gc2Vjb25kYXJ5VGFza0JvYXJkKGZvcm1hdHRlZERhdGUpO1xuXG4gICAgT2JqZWN0LmtleXMoY29tcGxldGVkVGFza0RhdGFPYmpbZGF0ZV0pLmZvckVhY2goKHRhc2tJdGVtSWQpID0+IHtcbiAgICAgIGFkZFRhc2tUb0JvYXJkKFxuICAgICAgICB0YXNrSXRlbUlkLFxuICAgICAgICBjb21wbGV0ZWRUYXNrRGF0YU9ialtkYXRlXVt0YXNrSXRlbUlkXSxcbiAgICAgICAgZGF0ZVRhc2tCb2FyZFxuICAgICAgKTtcblxuICAgICAgbGV0IGNvbXBsZXRlZFRhc2sgPSBkYXRlVGFza0JvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS10YXNrLWl0ZW0taWQgPSAnJHt0YXNrSXRlbUlkfSddYFxuICAgICAgKTtcblxuICAgICAgYWRkQ2xhc3MoY29tcGxldGVkVGFzaywgXCJjb21wbGV0ZWRcIik7XG4gICAgICByZW1vdmVDbGFzcyhcbiAgICAgICAgY29tcGxldGVkVGFzay5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrYm94XCIpLmZpcnN0RWxlbWVudENoaWxkLCAvLyBjaGVja21hcmsgaW1nIGVsZW1lbnRcbiAgICAgICAgXCJmYWRlLWluLW91dFwiXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcHJpbWFyeVRhc2tCb2FyZC5hcHBlbmQoZGF0ZVRhc2tCb2FyZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0VGFza3NCeVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgbGV0IHByaW1hcnlUYXNrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpLFxuICAgIHByb2plY3RUYXNrRGF0YU9iaiA9IEpTT04ucGFyc2UoXG4gICAgICBnZXREYXRhKGRldGVybWluZUxvY2FsU3RvcmFnZUtleShwcm9qZWN0TmFtZSkpXG4gICAgKSxcbiAgICBzb3J0ZWRQcm9qZWN0RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHByb2plY3RUYXNrRGF0YU9ialtwcm9qZWN0TmFtZV0pLnNvcnQoXG4gICAgICAoZW50cnlMZWZ0LCBlbnRyeVJpZ2h0KSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wYXJlRGVzYyhcbiAgICAgICAgICBuZXcgRGF0ZShlbnRyeVJpZ2h0WzFdLmR1ZURhdGVWYWx1ZSksXG4gICAgICAgICAgbmV3IERhdGUoZW50cnlMZWZ0WzFdLmR1ZURhdGVWYWx1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApLFxuICAgIHByZXZpb3VzRW50cnlEdWVEYXRlLFxuICAgIHRhc2tCb2FyZDtcblxuICBzb3J0ZWRQcm9qZWN0RW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGxldCB0YXNrS2V5ID0gZW50cnlbMF0sXG4gICAgICB0YXNrVmFsdWVPYmogPSBlbnRyeVsxXTtcblxuICAgIGlmICghaXNUYXNrT3ZlcmR1ZSh0YXNrVmFsdWVPYmopKSB7XG4gICAgICAvLyBJZiB0aGUgcHJldmlvdXMgZHVlIGRhdGUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgdGFzaydzIGR1ZSBkYXRlLFxuICAgICAgLy8gY3JlYXRlIGEgbmV3IHRhc2sgYm9hcmQgdG8gYXBwZW5kIGFsbCB0YXNrcyB3aXRoIHRoZSBzYW1lIGR1ZSBkYXRlIHVudGlsIGFcbiAgICAgIC8vIHRhc2sgd2l0aCBhIGRpZmZlcmVudCBkdWUgZGF0ZSBpcyBmb3VuZFxuICAgICAgaWYgKHRhc2tWYWx1ZU9iai5kdWVEYXRlVmFsdWUgIT09IHByZXZpb3VzRW50cnlEdWVEYXRlKSB7XG4gICAgICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUodGFza1ZhbHVlT2JqLmR1ZURhdGVWYWx1ZSk7XG5cbiAgICAgICAgcHJldmlvdXNFbnRyeUR1ZURhdGUgPSB0YXNrVmFsdWVPYmouZHVlRGF0ZVZhbHVlO1xuXG4gICAgICAgIHRhc2tCb2FyZCA9IHNlY29uZGFyeVRhc2tCb2FyZChmb3JtYXQoZHVlRGF0ZSwgXCJNTU0gZCAtIEVFRUVcIikpO1xuXG4gICAgICAgIHByaW1hcnlUYXNrQm9hcmQuYXBwZW5kKHRhc2tCb2FyZCk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRhc2tUb0JvYXJkKHRhc2tLZXksIHRhc2tWYWx1ZU9iaiwgdGFza0JvYXJkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRUYXNrQmFzZWRPblZpZXcoXG4gIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLFxuICB0YXNrSXRlbUlkLFxuICB0YXNrSXRlbU9ialxuKSB7XG4gIGlmIChpc1Rhc2tPdmVyZHVlKHRhc2tJdGVtT2JqKSkge1xuICAgIGluc2VydE92ZXJkdWVUYXNrKHRhc2tJdGVtSWQsIHRhc2tJdGVtT2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgXCJpbmJveFwiOlxuICAgICAgICBpbnNlcnRUYXNrRm9ySW5ib3hWaWV3KHRhc2tJdGVtSWQsIHRhc2tJdGVtT2JqKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgICAgaW5zZXJ0VGFza0ZvclRvZGF5Vmlldyh0YXNrSXRlbUlkLCB0YXNrSXRlbU9iaik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInVwY29taW5nXCI6XG4gICAgICAgIGluc2VydFRhc2tGb3JVcGNvbWluZ1ZpZXcodGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICAgICAgaW5zZXJ0VGFza0ZvckNvbXBsZXRlZFZpZXcodGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IC8vIFByb2plY3QgbmFtZVxuICAgICAgICBpbnNlcnRUYXNrRm9yUHJvamVjdFZpZXcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGFza092ZXJkdWUodGFza0l0ZW1PYmopIHtcbiAgbGV0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gIHJldHVybiBpc0JlZm9yZShuZXcgRGF0ZSh0YXNrSXRlbU9iai5kdWVEYXRlVmFsdWUpLCB0b2RheXNEYXRlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0T3ZlcmR1ZVRhc2sodGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopIHtcbiAgbGV0IG92ZXJkdWVUYXNrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJkdWUtdGFzay1ib2FyZFwiKTtcblxuICBpZiAob3ZlcmR1ZVRhc2tCb2FyZCkge1xuICAgIGFkZFRhc2tUb0JvYXJkKHRhc2tJdGVtSWQsIHRhc2tJdGVtT2JqLCBvdmVyZHVlVGFza0JvYXJkKTtcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVPdmVyRHVlVGFza0JvYXJkKFt0YXNrSXRlbUlkLCB0YXNrSXRlbU9ial0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFRhc2tGb3JJbmJveFZpZXcodGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopIHtcbiAgbGV0IHRhc2tCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXByaW9yaXR5LWtleT1cIiR7Z2V0VGFza1ByaW9yaXR5S2V5KHRhc2tJdGVtT2JqLnByaW9yaXR5VmFsdWUpfVwiXWBcbiAgKTtcblxuICBpZiAoIXRhc2tCb2FyZCkge1xuICAgIGdldFRhc2tTb3J0TWV0aG9kKFwiaW5ib3hcIik7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGFza1RvQm9hcmQodGFza0l0ZW1JZCwgdGFza0l0ZW1PYmosIHRhc2tCb2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0VGFza0ZvclRvZGF5Vmlldyh0YXNrSXRlbUlkLCB0YXNrSXRlbU9iaikge1xuICBsZXQgdG9kYXlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWNvbmRhcnktdGFzay1ib2FyZFwiKVsxXSxcbiAgICB0YXNrRHVlRGF0ZSA9IHRhc2tJdGVtT2JqLmR1ZURhdGVWYWx1ZSxcbiAgICB0b2RheXNEYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwiUFBcIik7XG5cbiAgaWYgKCF0b2RheUJvYXJkKSB7XG4gICAgZ2V0VGFza1NvcnRNZXRob2QoXCJ0b2RheVwiKTtcbiAgfSBlbHNlIGlmICh0YXNrRHVlRGF0ZSA9PT0gdG9kYXlzRGF0ZSkge1xuICAgIGFkZFRhc2tUb0JvYXJkKHRhc2tJdGVtSWQsIHRhc2tJdGVtT2JqLCB0b2RheUJvYXJkKTtcbiAgfVxufVxuXG4vLyBOZWVkIHRvIHplcm8gb3V0IHRpbWUgY29tcG9uZW50IHRvIGF2b2lkIGFueSBkYXRlIGNhbGN1bGF0aW9uLyBjb252ZXJzaW9uIGlzc3Vlcy5cbmZ1bmN0aW9uIGluc2VydFRhc2tGb3JVcGNvbWluZ1ZpZXcodGFza0l0ZW1JZCwgdGFza0l0ZW1PYmopIHtcbiAgbGV0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApLCAvLyBUb2RheXMgZGF0ZSB3aXRoIHRpbWUgY29tcG9uZW50IHplcm8nZCBvdXRcbiAgICB3ZWVrRnJvbVRvZGF5c0RhdGUgPSBhZGREYXlzKHRvZGF5c0RhdGUsIDYpLCAvLyB0b2RheSdzIGRhdGUgKyA2IGRheXNcbiAgICBkYXlEaWZmZXJlbmNlID0gZGlmZmVyZW5jZUluRGF5cyhcbiAgICAgIHdlZWtGcm9tVG9kYXlzRGF0ZSxcbiAgICAgIG5ldyBEYXRlKHRhc2tJdGVtT2JqLmR1ZURhdGVWYWx1ZSlcbiAgICApLFxuICAgIGRhdGVUYXNrQm9hcmRzQXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlY29uZGFyeS10YXNrLWJvYXJkXCIpLFxuICAgIGRhdGVCb2FyZElkeCA9IGRhdGVUYXNrQm9hcmRzQXJyLmxlbmd0aCAtIDE7IC8vIG9ubHkgYWxsb3dzIHRoZSBpbmRleCBvZiBkYXRlIHRhc2sgYm9hcmRzLiBPdmVyZHVlIHRhc2sgYm9hcmQgd2lsbCBiZSBpZ25vcmVkXG5cbiAgaWYgKGRheURpZmZlcmVuY2UgPCA3ICYmIGRheURpZmZlcmVuY2UgPj0gMCkge1xuICAgIGFkZFRhc2tUb0JvYXJkKFxuICAgICAgdGFza0l0ZW1JZCxcbiAgICAgIHRhc2tJdGVtT2JqLFxuICAgICAgZGF0ZVRhc2tCb2FyZHNBcnJbZGF0ZUJvYXJkSWR4IC0gZGF5RGlmZmVyZW5jZV1cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFRhc2tGb3JDb21wbGV0ZWRWaWV3KHRhc2tJdGVtSWQsIHRhc2tJdGVtT2JqKSB7XG4gIGxldCB0YXNrVG9FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS10YXNrLWl0ZW0taWQ9XCIke3Rhc2tJdGVtSWR9XCJdYFxuICAgICksXG4gICAgZGF0ZUJvYXJkID0gdGFza1RvRWRpdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgLy9SZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgRE9NIGFuZCBsb2NhbFN0b3JhZ2UgYmVmb3JlIHJlcGxhY2luZyBpdFxuICAvLyB3aXRoIGFuIHVwZGF0ZWQgdmVyc2lvbiBvZiBpdFxuICB0YXNrVG9FZGl0LnJlbW92ZSgpO1xuICBhZGRUYXNrVG9Cb2FyZCh0YXNrSXRlbUlkLCB0YXNrSXRlbU9iaiwgZGF0ZUJvYXJkKTtcblxuICAvLyBSZXNlbGVjdCB0aGUgdXBkYXRlZCB0YXNrIGFuZCBzdHlsZSBpdFxuICBsZXQgdXBkYXRlZFRhc2sgPSBkYXRlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEtdGFzay1pdGVtLWlkPVwiJHt0YXNrSXRlbUlkfVwiXWBcbiAgKTtcbiAgYWRkQ2xhc3ModXBkYXRlZFRhc2ssIFwiY29tcGxldGVkXCIpO1xuICByZW1vdmVDbGFzcyhcbiAgICB1cGRhdGVkVGFzay5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrYm94XCIpLmZpcnN0RWxlbWVudENoaWxkLCAvLyBjaGVja21hcmsgaW1nIGVsZW1lbnRcbiAgICBcImZhZGUtaW4tb3V0XCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0VGFza0ZvclByb2plY3RWaWV3KCkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1oZWFkaW5nXCIpLnRleHRDb250ZW50O1xuXG4gIGNsZWFyUHJpbWFyeVRhc2tCb2FyZCgpO1xuICBnZXRUYXNrU29ydE1ldGhvZChwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRlbW9BcHBCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGRlbW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbW8tYnV0dG9uXCIpO1xuXG4gIGRlbW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgcHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5tYWluLWNvbnRlbnQtaGVhZGluZ1wiXG4gICAgICApLnRleHRDb250ZW50LFxuICAgICAgdG9kYXlzRGF0ZSA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBPYmplY3Qua2V5cyhkZW1vSnNvbikuZm9yRWFjaCgocHJpbWFyeUtleSkgPT4ge1xuICAgICAgbGV0IHByaW1hcnlPYmogPSB7fTtcblxuICAgICAgaWYgKHByaW1hcnlLZXkgIT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGVtb0pzb25bcHJpbWFyeUtleV0pLmZvckVhY2goKHNlY29uZGFyeUtleSkgPT4ge1xuICAgICAgICAgIHByaW1hcnlPYmpbc2Vjb25kYXJ5S2V5XSA9IHt9O1xuXG4gICAgICAgICAgZGVtb0pzb25bcHJpbWFyeUtleV1bc2Vjb25kYXJ5S2V5XS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmR1ZURhdGVWYWx1ZSA9IGZvcm1hdChcbiAgICAgICAgICAgICAgYWRkRGF5cyh0b2RheXNEYXRlLCArdGFzay5kYXRlT2Zmc2V0KSxcbiAgICAgICAgICAgICAgXCJQUFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBwcmltYXJ5T2JqW3NlY29uZGFyeUtleV1bYCR7Y3JlYXRlVGFza0l0ZW1JZE51bWJlcigpfWBdID0gdGFzaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY29tcGxldGVkQXJyID0gZGVtb0pzb25bcHJpbWFyeUtleV0ubWFwKChjb21wbGV0ZWRUYXNrKSA9PiB7XG4gICAgICAgICAgY29tcGxldGVkVGFzay5kdWVEYXRlVmFsdWUgPSBmb3JtYXQoXG4gICAgICAgICAgICBhZGREYXlzKHRvZGF5c0RhdGUsICtjb21wbGV0ZWRUYXNrLmRhdGVPZmZzZXQpLFxuICAgICAgICAgICAgXCJQUFwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWRUYXNrO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wbGV0ZWRBcnIgPSBjb21wbGV0ZWRBcnIuc29ydCgoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT4ge1xuICAgICAgICAgIGNvbXBhcmVEZXNjKFxuICAgICAgICAgICAgbmV3IERhdGUoZGF0ZVJpZ2h0LmR1ZURhdGVWYWx1ZSksXG4gICAgICAgICAgICBuZXcgRGF0ZShkYXRlTGVmdC5kdWVEYXRlVmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcGxldGVkQXJyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICBpZiAoIXByaW1hcnlPYmouaGFzT3duUHJvcGVydHkodGFzay5kdWVEYXRlVmFsdWUpKSB7XG4gICAgICAgICAgICBwcmltYXJ5T2JqW3Rhc2suZHVlRGF0ZVZhbHVlXSA9IHt9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByaW1hcnlPYmpbdGFzay5kdWVEYXRlVmFsdWVdW2Ake2NyZWF0ZVRhc2tJdGVtSWROdW1iZXIoKX1gXSA9IHRhc2s7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzYXZlRGF0YShwcmltYXJ5S2V5LCBKU09OLnN0cmluZ2lmeShwcmltYXJ5T2JqKSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGVhciB0aGUgZm9sbG93aW5nIERPTSBjb21wb25lbnRzIGFuZCByZWxvYWQgdGhlIHRhc2tzXG4gICAgY2xlYXJQcmltYXJ5VGFza0JvYXJkKCk7XG4gICAgY2xlYXJQcm9qZWN0VGFicygpO1xuICAgIGdldFRhc2tTb3J0TWV0aG9kKHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nKTtcbiAgICByZWxvYWRQcm9qZWN0VGFicygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXNrRGF0YSgpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICBoaWdoUHJpb3JpdHlUYXNrczoge30sXG4gICAgbWVkaXVtUHJpb3JpdHlUYXNrczoge30sXG4gICAgbG93UHJpb3JpdHlUYXNrczoge30sXG4gICAgbm9Qcmlvcml0eVRhc2tzOiB7fSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tDb250cm9sbGVyKCkge1xuICAvLyBTb3J0IHRhc2tzIGJ5IHByaW9yaXR5IGZvciB0aGUgSW5ib3ggbWVudSB0YWIgb24gcGFnZSBsb2FkXG4gIGdldFRhc2tTb3J0TWV0aG9kKFwiSW5ib3hcIik7XG5cbiAgYWRkTmV3VGFza0J1dHRvbkxpc3RlbmVyKCk7XG4gIGRlbW9BcHBCdXR0b25MaXN0ZW5lcigpO1xufVxuXG5leHBvcnQge1xuICB0YXNrQ29udHJvbGxlcixcbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24sXG4gIGNyZWF0ZUNhbmNlbEJ1dHRvbkxpc3RlbmVyLFxuICBBZGRFZGl0QnV0dG9uTGlzdGVuZXIsXG4gIGNyZWF0ZURlbGV0ZVByb21wdE92ZXJsYXlMaXN0ZW5lcixcbiAgZGVsZXRlQ29uZmlybWF0aW9uQnV0dG9uTGlzdGVuZXIsXG4gIGFkZFRhc2tCdXR0b25MaXN0ZW5lcixcbiAgc2F2ZVRhc2tCdXR0b25MaXN0ZW5lcixcbiAgY2xlYXJQcmltYXJ5VGFza0JvYXJkLFxuICBnZXRUYXNrU29ydE1ldGhvZCxcbiAgZW1wdHlUYXNrRGF0YSxcbiAgYWRkUHJpbWFyeVRhc2tCb2FyZEJhY2tncm91bmQsXG59O1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vIFNhdmUgZ2VuZXJhbCBkYXRhIHRvIHRoZSB1c2VyJ3MgYnJvd3NlcidzIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHNhdmVEYXRhKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbi8vIEdldCBnZW5lcmFsIGRhdGEgZnJvbSB0aGUgdXNlcidzIGJyb3dzZXIncyBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBnZXREYXRhKGtleSkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuLy8gU2F2ZSB0YXNrIGRhdGEgdG8gdGhlIHVzZXIncyBicm93c2VyJ3MgbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc2F2ZVRhc2tJdGVtKFxuICBwcmltYXJ5VGFza0JvYXJkSGVhZGluZyxcbiAgdGFza0l0ZW1LZXksXG4gIHRhc2tJdGVtT2JqLFxuICBjb21wbGV0aW9uRGF0ZUtleVxuKSB7XG4gIGxldCBsb2NhbFN0b3JhZ2VLZXkgPSBkZXRlcm1pbmVMb2NhbFN0b3JhZ2VLZXkocHJpbWFyeVRhc2tCb2FyZEhlYWRpbmcpLFxuICAgIHRhc2tEYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKGxvY2FsU3RvcmFnZUtleSkpLFxuICAgIHVwZGF0ZWRUYXNrRGF0YU9iajtcblxuICBzd2l0Y2ggKGxvY2FsU3RvcmFnZUtleSkge1xuICAgIGNhc2UgXCJ0YXNrRGF0YVwiOlxuICAgICAgdXBkYXRlZFRhc2tEYXRhT2JqID0gdXBkYXRlVGFza0RhdGEoXG4gICAgICAgIHRhc2tEYXRhT2JqLFxuICAgICAgICB0YXNrSXRlbUtleSxcbiAgICAgICAgdGFza0l0ZW1PYmpcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29tcGxldGVkXCI6XG4gICAgICB1cGRhdGVkVGFza0RhdGFPYmogPSB1cGRhdGVDb21wbGV0ZWQoXG4gICAgICAgIHRhc2tEYXRhT2JqLFxuICAgICAgICB0YXNrSXRlbUtleSxcbiAgICAgICAgdGFza0l0ZW1PYmosXG4gICAgICAgIGNvbXBsZXRpb25EYXRlS2V5XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByb2plY3RzXCI6XG4gICAgICB1cGRhdGVkVGFza0RhdGFPYmogPSB1cGRhdGVQcm9qZWN0cyhcbiAgICAgICAgdGFza0RhdGFPYmosXG4gICAgICAgIHByaW1hcnlUYXNrQm9hcmRIZWFkaW5nLFxuICAgICAgICB0YXNrSXRlbUtleSxcbiAgICAgICAgdGFza0l0ZW1PYmpcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coYGxvY2FsU3RvcmFnZSBrZXk6ICR7bG9jYWxTdG9yYWdlS2V5fSBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIHNhdmVEYXRhKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRhc2tEYXRhT2JqKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEYXRhKHRhc2tEYXRhT2JqLCB0YXNrSXRlbUtleSwgdGFza0l0ZW1PYmopIHtcbiAgbGV0IHByaW9yaXR5S2V5ID0gZ2V0VGFza1ByaW9yaXR5S2V5KHRhc2tJdGVtT2JqLnByaW9yaXR5VmFsdWUpO1xuXG4gIC8vIGFkZCB0aGUgbmV3IHRhc2sgaXRlbSB0byB0aGUgdGFza0RhdGEgb2JqZWN0XG4gIHRhc2tEYXRhT2JqW3ByaW9yaXR5S2V5XVtgJHt0YXNrSXRlbUtleX1gXSA9IHRhc2tJdGVtT2JqO1xuXG4gIHJldHVybiB0YXNrRGF0YU9iajtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkKFxuICB0YXNrRGF0YU9iaixcbiAgdGFza0l0ZW1LZXksXG4gIHRhc2tJdGVtT2JqLFxuICBjb21wbGV0aW9uRGF0ZUtleVxuKSB7XG4gIGlmIChjb21wbGV0aW9uRGF0ZUtleSkge1xuICAgIHRhc2tEYXRhT2JqW2NvbXBsZXRpb25EYXRlS2V5XVtgJHt0YXNrSXRlbUtleX1gXSA9IHRhc2tJdGVtT2JqO1xuICB9IGVsc2Uge1xuICAgIGxldCB0b2RheXNEYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwiUFBcIik7XG5cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0YXNrIGNvbXBsZXRlZCBmb3IgYSBnaXZlbiBkYXksIGNyZWF0ZSB0aGUga2V5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGRhdGUgY29tcGxldGVkIHByaW9yIHRvIG1vdmluZyB0aGUgdGFzayBkYXRhIG92ZXIgdG8gdGhlIGNvbXBsZXRlZCBrZXlcbiAgICBpZiAoIXRhc2tEYXRhT2JqLmhhc093blByb3BlcnR5KHRvZGF5c0RhdGUpKSB7XG4gICAgICB0YXNrRGF0YU9ialt0b2RheXNEYXRlXSA9IHt9O1xuICAgIH1cblxuICAgIHRhc2tEYXRhT2JqW3RvZGF5c0RhdGVdW2Ake3Rhc2tJdGVtS2V5fWBdID0gdGFza0l0ZW1PYmo7XG4gIH1cblxuICByZXR1cm4gdGFza0RhdGFPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKHRhc2tEYXRhT2JqLCBwcm9qZWN0TmFtZSwgdGFza0l0ZW1LZXksIHRhc2tJdGVtT2JqKSB7XG4gIC8vIElmIHRhc2tJdGVtS2V5IGlzIGZhbHNleSwgdGFza0l0ZW1PYmogaXMgYXMgd2VsbC4gVGhpcyBvbmx5IG9jY3VycyB3aGVuXG4gIC8vIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZC5cbiAgaWYgKCF0YXNrSXRlbUtleSkge1xuICAgIHRhc2tEYXRhT2JqW3Byb2plY3ROYW1lXSA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHRhc2tEYXRhT2JqW3Byb2plY3ROYW1lXVt0YXNrSXRlbUtleV0gPSB0YXNrSXRlbU9iajtcbiAgfVxuXG4gIHJldHVybiB0YXNrRGF0YU9iajtcbn1cblxuLy8gR2V0IHRhc2sgZGF0YSBmcm9tIHRoZSB1c2VyJ3MgYnJvd3NlcidzIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIGdldFRhc2tJdGVtKHRhc2tJdGVtS2V5KSB7XG4gIGxldCB0YXNrSXRlbSxcbiAgICBsb2NhbFN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcblxuICBsb29wMTogZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUtleXNbaV0gIT09IFwicHJldmlvdXNUYWJcIikge1xuICAgICAgbGV0IGRhdGFPYmogPSBKU09OLnBhcnNlKGdldERhdGEobG9jYWxTdG9yYWdlS2V5c1tpXSkpLFxuICAgICAgICBwcmltYXJ5S2V5cyA9IE9iamVjdC5rZXlzKGRhdGFPYmopO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByaW1hcnlLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCB0YXNrc09iaiA9IGRhdGFPYmpbcHJpbWFyeUtleXNbal1dO1xuXG4gICAgICAgIGlmICh0YXNrc09iai5oYXNPd25Qcm9wZXJ0eShgJHt0YXNrSXRlbUtleX1gKSkge1xuICAgICAgICAgIHRhc2tJdGVtID0gZGF0YU9ialtwcmltYXJ5S2V5c1tqXV1bYCR7dGFza0l0ZW1LZXl9YF07XG4gICAgICAgICAgYnJlYWsgbG9vcDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFza0l0ZW07XG59XG5cbi8vIEdldHMgYSBjb3B5IG9mIGFsbCB0YXNrIGRhdGEsIGRlbGV0ZXMgYSB0YXNrLCBhbmQgcmV3cml0ZXNcbi8vIHRoZSBtdXRhdGVkIHRhc2sgZGF0YSBiYWNrIHRvIGxvY2FsU3RvcmFnZS4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oKVxuLy8gd2FzIG5vdCB1c2VkIHNpbmNlIGl0IG9ubHkgcmVtb3ZlcyB0aGUgZmlyc3QgbGV2ZWwgb2Yga2V5cyBhdmFpbGFibGUgdG8gaXQuXG5mdW5jdGlvbiBkZWxldGVUYXNrSXRlbSh0YXNrSXRlbUtleSkge1xuICBsZXQgbG9jYWxTdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG5cbiAgbG9vcDE6IGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VLZXlzW2ldICE9PSBcInByZXZpb3VzVGFiXCIpIHtcbiAgICAgIGxldCBkYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKGxvY2FsU3RvcmFnZUtleXNbaV0pKSxcbiAgICAgICAgcHJpbWFyeUtleXMgPSBPYmplY3Qua2V5cyhkYXRhT2JqKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcmltYXJ5S2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoZGF0YU9ialtwcmltYXJ5S2V5c1tqXV0uaGFzT3duUHJvcGVydHkoYCR7dGFza0l0ZW1LZXl9YCkpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YU9ialtwcmltYXJ5S2V5c1tqXV1bdGFza0l0ZW1LZXldO1xuICAgICAgICAgIHNhdmVEYXRhKGxvY2FsU3RvcmFnZUtleXNbaV0sIEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0RGF0YU9iaiA9IEpTT04ucGFyc2UoZ2V0RGF0YShcInByb2plY3RzXCIpKTtcblxuICBkZWxldGUgcHJvamVjdERhdGFPYmpbcHJvamVjdE5hbWVdO1xuICBzYXZlRGF0YShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhT2JqKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUVtcHR5Q29tcGxldGlvbkRhdGVLZXlzKCkge1xuICBsZXQgY29tcGxldGlvblRhc2tEYXRhT2JqID0gSlNPTi5wYXJzZShnZXREYXRhKFwiY29tcGxldGVkXCIpKTtcblxuICBPYmplY3Qua2V5cyhjb21wbGV0aW9uVGFza0RhdGFPYmopLmZvckVhY2goKGRhdGVLZXkpID0+IHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKGNvbXBsZXRpb25UYXNrRGF0YU9ialtkYXRlS2V5XSkubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgY29tcGxldGlvblRhc2tEYXRhT2JqW2RhdGVLZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgc2F2ZURhdGEoXCJjb21wbGV0ZWRcIiwgSlNPTi5zdHJpbmdpZnkoY29tcGxldGlvblRhc2tEYXRhT2JqKSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tQcmlvcml0eUtleShwcmlvcml0eVZhbHVlKSB7XG4gIGxldCBwcmlvcml0eUtleTtcblxuICBzd2l0Y2ggKHByaW9yaXR5VmFsdWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICBwcmlvcml0eUtleSA9IFwiaGlnaFByaW9yaXR5VGFza3NcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIHByaW9yaXR5S2V5ID0gXCJtZWRpdW1Qcmlvcml0eVRhc2tzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICBwcmlvcml0eUtleSA9IFwibG93UHJpb3JpdHlUYXNrc1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgIHByaW9yaXR5S2V5ID0gXCJub1ByaW9yaXR5VGFza3NcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhgUHJpb3JpdHkgVmFsdWU6ICR7cHJpb3JpdHlWYWx1ZX0gZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gcHJpb3JpdHlLZXk7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZUxvY2FsU3RvcmFnZUtleShjdXJyZW50VGFza0JvYXJkVmlld0hlYWRpbmcpIHtcbiAgbGV0IGtleTtcblxuICBzd2l0Y2ggKGN1cnJlbnRUYXNrQm9hcmRWaWV3SGVhZGluZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSBcImluYm94XCI6XG4gICAgY2FzZSBcInRvZGF5XCI6XG4gICAgY2FzZSBcInVwY29taW5nXCI6XG4gICAgICBrZXkgPSBcInRhc2tEYXRhXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29tcGxldGVkXCI6XG4gICAgICBrZXkgPSBcImNvbXBsZXRlZFwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDogLy8gUHJvamVjdCBzcGVjaWZpYyBkYXRhXG4gICAgICBrZXkgPSBcInByb2plY3RzXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBrZXk7XG59XG5cbmV4cG9ydCB7XG4gIHNhdmVEYXRhLFxuICBnZXREYXRhLFxuICBzYXZlVGFza0l0ZW0sXG4gIGdldFRhc2tJdGVtLFxuICBkZWxldGVUYXNrSXRlbSxcbiAgZGVsZXRlUHJvamVjdCxcbiAgZGVsZXRlRW1wdHlDb21wbGV0aW9uRGF0ZUtleXMsXG4gIGdldFRhc2tQcmlvcml0eUtleSxcbiAgZGV0ZXJtaW5lTG9jYWxTdG9yYWdlS2V5LFxufTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gaWNvbkFuZFRleHRCdXR0b24odGV4dCwgaW1nU3JjLCBhbHRUZXh0LCAuLi5jc3NDbGFzcykge1xuICBsZXQgYnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgICBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1NyYyk7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIGFsdFRleHQpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICBhZGRDbGFzcyhpY29uLCBcImljb24tdGV4dC1idXR0b24taW1nXCIpO1xuICBhZGRDbGFzcyhidXR0b24sIFwiaWNvbi10ZXh0LWJ1dHRvblwiLCAuLi5jc3NDbGFzcyk7XG5cbiAgYnV0dG9uLnByZXBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IHsgaWNvbkFuZFRleHRCdXR0b24gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gaWNvbkJ1dHRvbkV4dHJhU21hbGwoaW1nU3JjLCBhbHRUZXh0KSB7XG4gIGxldCBpY29uQnV0dG9uRXh0cmFTbWFsbCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gICAgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nU3JjKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYWx0VGV4dCk7XG5cbiAgYWRkQ2xhc3MoaWNvbkJ1dHRvbkV4dHJhU21hbGwsICdpY29uLWJ1dHRvbi1leHRyYS1zbWFsbCcpO1xuXG4gIGljb25CdXR0b25FeHRyYVNtYWxsLmFwcGVuZChpY29uKTtcblxuICByZXR1cm4gaWNvbkJ1dHRvbkV4dHJhU21hbGw7XG59XG5cbmV4cG9ydCB7IGljb25CdXR0b25FeHRyYVNtYWxsIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGljb25CdXR0b25NZWRpdW0oaW1nU3JjLCBhbHRUZXh0KSB7XG4gIGxldCBpY29uQnV0dG9uTWVkaXVtID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgICBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWdTcmMpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBhbHRUZXh0KTtcblxuICBhZGRDbGFzcyhpY29uQnV0dG9uTWVkaXVtLCAnaWNvbi1idXR0b24tbWVkaXVtJyk7XG5cbiAgaWNvbkJ1dHRvbk1lZGl1bS5hcHBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIGljb25CdXR0b25NZWRpdW07XG59XG5cbmV4cG9ydCB7IGljb25CdXR0b25NZWRpdW0gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gaWNvbkJ1dHRvblNtYWxsKGltZ1NyYywgYWx0VGV4dCkge1xuICBsZXQgaWNvbkJ1dHRvblNtYWxsID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgICBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWdTcmMpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBhbHRUZXh0KTtcblxuICBhZGRDbGFzcyhpY29uQnV0dG9uU21hbGwsICdpY29uLWJ1dHRvbi1zbWFsbCcpO1xuXG4gIGljb25CdXR0b25TbWFsbC5hcHBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIGljb25CdXR0b25TbWFsbDtcbn1cblxuZXhwb3J0IHsgaWNvbkJ1dHRvblNtYWxsIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRCdXR0b24odGV4dCwgLi4uY3NzQ2xhc3MpIHtcbiAgbGV0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZENsYXNzKGJ1dHRvbiwgXCJ0ZXh0LWJ1dHRvblwiLCAuLi5jc3NDbGFzcyk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IHsgdGV4dEJ1dHRvbiB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5jc3NDbGFzc2VzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jc3NDbGFzc2VzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgLi4uY3NzQ2xhc3MpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNzc0NsYXNzKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNzc0NsYXNzKTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHdvcmQpIHtcbiAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG59O1xuIiwiaW1wb3J0IHsgdGFiIH0gZnJvbSBcIi4vdGFiLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJMaXN0ZW5lciB9IGZyb20gXCIuLi9jb250cm9scy9tZW51Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBtZW51VGFicygpIHtcbiAgbGV0IG1lbnVUYWJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHRhYkFyciA9IFtcIkluYm94XCIsIFwiVG9kYXlcIiwgXCJVcGNvbWluZ1wiLCBcIkNvbXBsZXRlZFwiXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGxldCB0YWJTcGVjaWZpY0NsYXNzID0gXCJtZW51LXRhYi1cIiArIHRhYkFycltpXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgbWVudVRhYiA9IHRhYih0YWJBcnJbaV0sIFwidGFiXCIsIHRhYlNwZWNpZmljQ2xhc3MpO1xuXG4gICAgbWVudVRhYkNvbnRhaW5lci5hcHBlbmQobWVudVRhYik7XG4gICAgY3JlYXRlVGFiTGlzdGVuZXIobWVudVRhYik7XG4gIH1cblxuICBhZGRDbGFzcyhtZW51VGFiQ29udGFpbmVyLCBcIm1lbnUtdGFic1wiKTtcblxuICByZXR1cm4gbWVudVRhYkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgbWVudVRhYnMgfTtcbiIsImltcG9ydCB7IG1lbnVUYWJzIH0gZnJvbSBcIi4vbWVudVRhYnMuanNcIjtcbmltcG9ydCB7IHByb2plY3RTZWN0aW9uIH0gZnJvbSBcIi4vcHJvamVjdFNlY3Rpb24uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gbWVudWJhcigpIHtcbiAgbGV0IG1lbnViYXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGxpbmVicmVhayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYWRkQ2xhc3MobWVudWJhciwgXCJtZW51LWJhclwiKTtcbiAgYWRkQ2xhc3MobGluZWJyZWFrLCBcImxpbmVicmVha1wiKTtcblxuICBtZW51YmFyLmFwcGVuZChtZW51VGFicygpLCBsaW5lYnJlYWssIHByb2plY3RTZWN0aW9uKCkpO1xuXG4gIHJldHVybiBtZW51YmFyO1xufVxuXG5leHBvcnQgeyBtZW51YmFyIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0VGFiIH0gZnJvbSBcIi4uL3Byb2plY3QvcHJvamVjdFRhYi5qc1wiO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuLi9jb250cm9scy93ZWJTdG9yYWdlQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdCgpIHtcbiAgbGV0IHByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBwcm9qZWN0TmFtZXMgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGdldERhdGEoXCJwcm9qZWN0c1wiKSkpLnNvcnQoKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0TGlzdCwgXCJwcm9qZWN0LWxpc3RcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdFRhYihwcm9qZWN0TmFtZXNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuZXhwb3J0IHsgcHJvamVjdExpc3QgfTtcbiIsImltcG9ydCB7IGljb25CdXR0b25TbWFsbCB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy9pY29uQnV0dG9uU21hbGwuanNcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdExpc3QuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCBwbHVzSWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvcGx1cy5zdmdcIjtcblxuZnVuY3Rpb24gcHJvamVjdFNlY3Rpb24oKSB7XG4gIGxldCBwcm9qZWN0U2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgcHJvamVjdEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcbiAgICBuZXdQcm9qZWN0QnV0dG9uID0gaWNvbkJ1dHRvblNtYWxsKHBsdXNJY29uLCBcIkFkZCBuZXcgcHJvamVjdCBpY29uXCIpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgYWRkQ2xhc3MobmV3UHJvamVjdEJ1dHRvbiwgXCJuZXctcHJvamVjdC1idXR0b25cIik7XG4gIGFkZENsYXNzKHByb2plY3RIZWFkZXIsIFwicHJvamVjdC1oZWFkZXJcIik7XG4gIGFkZENsYXNzKHByb2plY3RTZWN0aW9uLCBcInByb2plY3Qtc2VjdGlvblwiKTtcblxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZChoZWFkaW5nLCBuZXdQcm9qZWN0QnV0dG9uKTtcbiAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHByb2plY3RIZWFkZXIsIHByb2plY3RMaXN0KCkpO1xuXG4gIHJldHVybiBwcm9qZWN0U2VjdGlvbjtcbn1cblxuZXhwb3J0IHsgcHJvamVjdFNlY3Rpb24gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFiKHRleHQsIC4uLmNzc0NsYXNzKSB7XG4gIGxldCB0YWIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHRhYk5hbWUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHRhYk5hbWUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBhZGRDbGFzcyh0YWJOYW1lLCBcInRhYi1uYW1lXCIpO1xuICBhZGRDbGFzcyh0YWIsIC4uLmNzc0NsYXNzKTtcblxuICB0YWIuYXBwZW5kKHRhYk5hbWUpO1xuXG4gIHJldHVybiB0YWI7XG59XG5cbmV4cG9ydCB7IHRhYiB9O1xuIiwiaW1wb3J0IHsgdGV4dEJ1dHRvbiB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy90ZXh0QnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRm9ybUZpZWxkKCkge1xuICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3ROYW1lTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgcHJvamVjdE5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctcHJvamVjdC1uYW1lXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdE5hbWVcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTUwXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGFkZENsYXNzKHByb2plY3ROYW1lQ29udGFpbmVyLCBcIm5ldy1wcm9qZWN0LW5hbWUtZm9ybS1maWVsZFwiKTtcblxuICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQoXG4gICAgcHJvamVjdE5hbWVMYWJlbCxcbiAgICBwcm9qZWN0TmFtZUlucHV0LFxuICAgIHByb2plY3RFcnJvckZpZWxkKClcbiAgKTtcblxuICByZXR1cm4gcHJvamVjdE5hbWVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RFcnJvckZpZWxkKCkge1xuICBsZXQgZXJyb3JGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZXJyb3JNZXNzYWdlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgYWRkQ2xhc3MoZXJyb3JGaWVsZCwgXCJlcnJvci1maWVsZFwiLCBcImhpZGVcIik7XG4gIGFkZENsYXNzKGVycm9yTWVzc2FnZSwgXCJlcnJvci1tZXNzYWdlXCIpO1xuXG4gIGVycm9yRmllbGQuYXBwZW5kKGVycm9yTWVzc2FnZSk7XG5cbiAgcmV0dXJuIGVycm9yRmllbGQ7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtQnV0dG9ucygpIHtcbiAgbGV0IGJ1dHRvbnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNhbmNlbE5ld1Byb2plY3RCdXR0b24gPSB0ZXh0QnV0dG9uKFxuICAgICAgXCJDYW5jZWxcIixcbiAgICAgIFwibmV3LXByb2plY3QtZm9ybS1jYW5jZWwtYnV0dG9uXCJcbiAgICApLFxuICAgIGFkZE5ld1Byb2plY3RCdXR0b24gPSB0ZXh0QnV0dG9uKFxuICAgICAgXCJBZGQgTmV3IFByb2plY3RcIixcbiAgICAgIFwibmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgICApO1xuXG4gIGFkZENsYXNzKGJ1dHRvbnNDb250YWluZXIsIFwibmV3LXByb2plY3QtZm9ybS1idXR0b25zXCIpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChjYW5jZWxOZXdQcm9qZWN0QnV0dG9uLCBhZGROZXdQcm9qZWN0QnV0dG9uKTtcblxuICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICAgIG5ld1Byb2plY3RCdXR0b25zID0gcHJvamVjdEZvcm1CdXR0b25zKCk7XG5cbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdEZvcm1cIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XG5cbiAgYWRkQ2xhc3MobmV3UHJvamVjdEZvcm0sIFwibmV3LXByb2plY3QtZm9ybVwiKTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmQoXG4gICAgcHJvamVjdE5hbWVGb3JtRmllbGQoKSxcbiAgICBuZXdQcm9qZWN0QnV0dG9uc1xuICApO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdE92ZXJsYXlGb3JtKCkge1xuICBsZXQgbmV3UHJvamVjdE92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKG5ld1Byb2plY3RPdmVybGF5LCBcIm5ldy1wcm9qZWN0LW92ZXJsYXlcIik7XG4gIG5ld1Byb2plY3RPdmVybGF5LmFwcGVuZChuZXdQcm9qZWN0Rm9ybSgpKTtcblxuICByZXR1cm4gbmV3UHJvamVjdE92ZXJsYXk7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RPdmVybGF5Rm9ybSB9O1xuIiwiaW1wb3J0IHsgdGFiIH0gZnJvbSBcIi4uL21lbnViYXIvdGFiLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJMaXN0ZW5lciB9IGZyb20gXCIuLi9jb250cm9scy9tZW51Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRGVsZXRlUHJvbXB0T3ZlcmxheUxpc3RlbmVyIH0gZnJvbSBcIi4uL2NvbnRyb2xzL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBpY29uQnV0dG9uRXh0cmFTbWFsbCB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy9pY29uQnV0dG9uRXh0cmFTbWFsbC5qc1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uL2ljb25zL2RlbGV0ZS5zdmdcIjtcblxuZnVuY3Rpb24gcHJvamVjdFRhYihwcm9qZWN0TmFtZSkge1xuICBsZXQgcHJvamVjdFRhYiA9IHRhYihwcm9qZWN0TmFtZSwgXCJwcm9qZWN0LXRhYlwiKSxcbiAgICBkZWxldGVCdXR0b24gPSBpY29uQnV0dG9uRXh0cmFTbWFsbChkZWxldGVJY29uLCBcIkRlbGV0ZSBwcm9qZWN0IGljb24uXCIpLFxuICAgIHByb2plY3RPYmogPSB7XG4gICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXG4gICAgICBwcm9qZWN0VGFiOiBwcm9qZWN0VGFiLFxuICAgIH07XG5cbiAgcHJvamVjdFRhYi5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcblxuICBjcmVhdGVUYWJMaXN0ZW5lcihwcm9qZWN0VGFiLCBwcm9qZWN0TmFtZSwgXCJcIik7XG4gIGNyZWF0ZURlbGV0ZVByb21wdE92ZXJsYXlMaXN0ZW5lcihkZWxldGVCdXR0b24sIHByb2plY3RPYmopO1xuXG4gIHJldHVybiBwcm9qZWN0VGFiO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0VGFiIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYXBwSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBIZWFkZXIvYXBwSGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBhcHBNYWluQ29udGVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvYXBwTWFpbkNvbnRlbnQuanNcIjtcbmltcG9ydCB7XG4gIHRhc2tDb250cm9sbGVyLFxuICBlbXB0eVRhc2tEYXRhLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRyb2xzL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBtZW51Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbHMvbWVudUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCB7IG1lbnViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnViYXIvbWVudWJhci5qc1wiO1xuaW1wb3J0IHtcbiAgZ2V0RGF0YSxcbiAgc2F2ZURhdGEsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbHMvd2ViU3RvcmFnZUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGluaXRMb2NhbFN0b3JhZ2VHbG9iYWxWYXJpYWJsZXMoKSB7XG4gIHNhdmVEYXRhKFwicHJldmlvdXNUYWJcIiwgXCJJbmJveFwiKTtcblxuICBpZiAoIWdldERhdGEoXCJ0YXNrRGF0YVwiKSkge1xuICAgIHNhdmVEYXRhKFwidGFza0RhdGFcIiwgZW1wdHlUYXNrRGF0YSgpKTtcbiAgfVxuXG4gIGlmICghZ2V0RGF0YShcImNvbXBsZXRlZFwiKSkge1xuICAgIHNhdmVEYXRhKFwiY29tcGxldGVkXCIsIFwie31cIik7XG4gIH1cblxuICBpZiAoIWdldERhdGEoXCJwcm9qZWN0c1wiKSkge1xuICAgIHNhdmVEYXRhKFwicHJvamVjdHNcIiwgXCJ7fVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29udHJvbGxlcnMoKSB7XG4gIHRhc2tDb250cm9sbGVyKCk7XG4gIG1lbnVDb250cm9sbGVyKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gIGxldCBib2R5VGFnID0gZG9jdW1lbnQuYm9keSxcbiAgICBtYWluVGFnID0gY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgbWFpblRhZy5hcHBlbmQobWVudWJhcigpLCBhcHBNYWluQ29udGVudCgpKTtcbiAgYm9keVRhZy5hcHBlbmQoYXBwSGVhZGVyKCksIG1haW5UYWcpO1xufVxuXG4oZnVuY3Rpb24gaW5pdEFwcCgpIHtcbiAgaW5pdExvY2FsU3RvcmFnZUdsb2JhbFZhcmlhYmxlcygpO1xuICByZW5kZXJQYWdlKCk7XG4gIGluaXRDb250cm9sbGVycygpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==