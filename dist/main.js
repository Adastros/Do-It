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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  height: 35px;\n  width: 35px;\n  /* position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translate(0, -50%); */\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-content-header {\n  height: 75px;\n  width: 100%;\n}\n\n.task-viewer {\n  flex: 1;\n  width: 100%;\n}\n\n.add-new-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 0.25rem 1rem;\n  border: 1px solid black;\n}\n\n.checkBoxTaskInfoContainer {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.task-edit-button {\n  height: 25px;\n  width: 25px;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;EACP,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX;;;kCAGgC;AAClC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE;;;kCAGgC;EAChC,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,OAAO;EACP,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  height: 35px;\n  width: 35px;\n  /* position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translate(0, -50%); */\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-content-header {\n  height: 75px;\n  width: 100%;\n}\n\n.task-viewer {\n  flex: 1;\n  width: 100%;\n}\n\n.add-new-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 0.25rem 1rem;\n  border: 1px solid black;\n}\n\n.checkBoxTaskInfoContainer {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.task-edit-button {\n  height: 25px;\n  width: 25px;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalButtons/iconButton.js */ "./src/components/generalButtons/iconButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/menu.svg */ "./src/icons/menu.svg");
/* harmony import */ var _icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/light-theme.svg */ "./src/icons/light-theme.svg");






function appHeader() {
  let appHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("header"),
    menuButton = (0,_generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_1__.iconButton)(_icons_menu_svg__WEBPACK_IMPORTED_MODULE_3__, "Menu icon", "menu-button"),
    themeButton = (0,_generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_1__.iconButton)(_icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_4__, "Light theme icon", "theme-button");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(appHeader, "appHeader");
  appHeader.append(menuButton, (0,_appLogo_js__WEBPACK_IMPORTED_MODULE_0__.appLogo)(), themeButton);

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
    heading = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1"),
    projectDescription = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(mainContentHeader, "main-content-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headingContainer, "main-content-heading-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(heading, "main-content-heading");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectDescription, "main-content-project-description");

  headingContainer.append(heading, projectDescription);
  mainContentHeader.append(headingContainer);

  return mainContentHeader;
}




/***/ }),

/***/ "./src/components/appMainContent/task/addNewTaskButton.js":
/*!****************************************************************!*\
  !*** ./src/components/appMainContent/task/addNewTaskButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTaskButton": () => (/* binding */ addNewTaskButton)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");


function addNewTaskButton() {
  let addNewTaskButton = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  addNewTaskButton.textContent = "Add task";
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(addNewTaskButton, "add-new-task-button");

  return addNewTaskButton;
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




function checkbox(taskItemNumber) {
  let checkboxContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkbox = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkmark = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("img");

  checkmark.setAttribute("src", _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__);
  checkmark.setAttribute("alt", "Checkmark icon");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkbox, "checkbox");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkmark, "fade-in-out");
  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskStatus)(checkbox, taskItemNumber);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
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
/* harmony import */ var _generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generalButtons/textButton.js */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");



function createTaskHeaderField(taskHeaderValue) {
  let headerContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    headerLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    headerInputField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea");

  headerLabel.textContent = "Task Name";
  if (taskHeaderValue) {
    headerInputField.textContent = taskHeaderValue;
  }

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(headerInputField, "form-task-header");

  headerContainer.append(headerLabel, headerInputField);

  return headerContainer;
}

function createTaskDescriptionField(taskDescriptionValue) {
  let descriptionContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    descriptionLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    descriptionInputField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea");

  descriptionLabel.textContent = "Description";
  if (taskDescriptionValue) {
    descriptionInputField.textContent = taskDescriptionValue;
  }

  descriptionLabel.setAttribute("for", "form-task-description");
  descriptionInputField.setAttribute("id", "form-task-description");

  descriptionContainer.append(descriptionLabel, descriptionInputField);

  return descriptionContainer;
}

// The addOrSaveTaskButtonText argument is used to determine if the
// taskForm should state "save" or "add task" for one of the buttons.
function taskForm(
  addOrSaveTaskButtonText = "Add Task",
  taskHeaderValue,
  taskDescriptionValue
) {
  let formContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    taskItemForm = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form"),
    headerField = createTaskHeaderField(taskHeaderValue),
    descriptionField = createTaskDescriptionField(taskDescriptionValue),
    buttonContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    cancelFormButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)("Cancel", "form-cancel-button"),
    addOrSaveTaskButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)(
      addOrSaveTaskButtonText,
      "form-add-or-save-task-button"
    );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskItemForm, "task-form");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(formContainer, "task-form-container");

  addOrSaveTaskButton.setAttribute("disabled", "");
  taskItemForm.setAttribute("novalidate", "");

  buttonContainer.append(cancelFormButton, addOrSaveTaskButton);
  taskItemForm.append(headerField, descriptionField, buttonContainer);
  formContainer.append(taskItemForm);

  return formContainer;
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
    taskHeaderElement = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3"),
    taskDescriptionElement = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskHeaderElement, "task-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskDescriptionElement, "task-description");

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);

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





function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    checkBoxTaskInfoContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(checkBoxTaskInfoContainer, "checkBoxTaskInfoContainer");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskItem, "task-item");

  taskItem.dataset.taskItem = taskItemNumber;

  checkBoxTaskInfoContainer.append(
    (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_0__.checkbox)(taskItemNumber),
    (0,_taskInfo_js__WEBPACK_IMPORTED_MODULE_1__.taskInfo)(taskHeaderValue, taskDescriptionValue)
  );
  taskItem.append(checkBoxTaskInfoContainer, (0,_taskItemActions_js__WEBPACK_IMPORTED_MODULE_2__.taskItemActions)(taskItemNumber));

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
/* harmony import */ var _generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generalButtons/iconButton.js */ "./src/components/generalButtons/iconButton.js");
/* harmony import */ var _controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/edit.svg */ "./src/icons/edit.svg");





function taskItemActions(taskItemNumber) {
  let taskItemActions = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    editButton = (0,_generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_0__.iconButton)(
      _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__,
      "Task Edit Icon Button",
      "task-edit-button"
    );

  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__.AddEditButtonListener)(editButton, taskItemNumber);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(taskItemActions, "task-item-actions");

  taskItemActions.append(editButton);

  return taskItemActions;
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
/* harmony import */ var _task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task/addNewTaskButton.js */ "./src/components/appMainContent/task/addNewTaskButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



function taskViewer() {
  let taskViewer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskViewer, "task-viewer");

  taskViewer.append((0,_task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_0__.addNewTaskButton)());

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
/* harmony export */   "missingValueAggressiveValidation": () => (/* binding */ missingValueAggressiveValidation)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


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




/***/ }),

/***/ "./src/components/controls/menuController.js":
/*!***************************************************!*\
  !*** ./src/components/controls/menuController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuController": () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var _project_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/newProjectOverlayForm.js */ "./src/components/project/newProjectOverlayForm.js");
/* harmony import */ var _menubar_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menubar/tab.js */ "./src/components/menubar/tab.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/controls/formValidationControls.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");





// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarTransitionendListener = () => {
  let menubar = document.querySelector(".menu-bar");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
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
  let menuButton = document.querySelector(".menu-button"),
    menubar = document.querySelector(".menu-bar"),
    mainContent = document.querySelector("main");

  menuButton.addEventListener("click", () => {
    if (mainContent.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      removeMenubarTransitionendListener(mainContent);

      // Make menu visible before starting transition to show menu.
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
    } else {
      // Add listener to set menubar visibility off after it has transitioned
      // outside the viewport.
      addMenubarTransitionendListener(mainContent);
    }
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(mainContent, "closed");
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
      projectTab = (0,_menubar_tab_js__WEBPACK_IMPORTED_MODULE_1__.tab)(projectName, "project-tab", projectSpecificClass),
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

function inboxTabListener() {
  let inboxTab = document.querySelector(".menu-tab-inbox");

  inboxTab.addEventListener("click", () => {
    updateMainContentHeading("Inbox");
    updateMainContentProjectDescription("");
  });
}

function todayTabListener() {
  let todayTab = document.querySelector(".menu-tab-today");

  todayTab.addEventListener("click", () => {
    updateMainContentHeading("Today");
    updateMainContentProjectDescription("");
  });
}

function upcomingTabListener() {
  let upcomingTab = document.querySelector(".menu-tab-upcoming");

  upcomingTab.addEventListener("click", () => {
    updateMainContentHeading("Upcoming");
    updateMainContentProjectDescription("");
  });
}

function completedTabListener() {
  let completedTab = document.querySelector(".menu-tab-completed");

  completedTab.addEventListener("click", () => {
    updateMainContentHeading("Completed");
    updateMainContentProjectDescription("");
  });
}

function initMenuTabListeners() {
  inboxTabListener();
  todayTabListener();
  upcomingTabListener();
  completedTabListener();
}

function menuController() {
  toggleMenubarVisibility();
  initMenuTabListeners();
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
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "toggleTaskStatus": () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var _appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appMainContent/task/taskForm.js */ "./src/components/appMainContent/task/taskForm.js");
/* harmony import */ var _appMainContent_task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appMainContent/task/addNewTaskButton.js */ "./src/components/appMainContent/task/addNewTaskButton.js");
/* harmony import */ var _appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appMainContent/task/taskItem.js */ "./src/components/appMainContent/task/taskItem.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/controls/formValidationControls.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");






function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      newTaskForm = (0,_appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)();

    taskViewer.append(newTaskForm);
    taskViewer.removeChild(addNewTaskButton);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    cancelTaskEditListener(newTaskForm);
    addTaskToTaskViewerListener(newTaskForm);
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskEditListener(taskForm, taskItemNumber) {
  let formCancelButton = taskForm.querySelector(".form-cancel-button");

  formCancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.querySelector("#form-task-header").value,
      taskDescriptionValue = taskForm.querySelector(
        "#form-task-description"
      ).value;

    // Checks to see if user is editing a task by checking if a
    // taskItemNumber exists.
    if (taskItemNumber !== undefined) {
      taskViewer.insertBefore(
        (0,_appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskHeaderValue, taskDescriptionValue, taskItemNumber),
        taskForm.nextSibling
      );
    }

    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function addTaskToTaskViewerListener(taskForm, taskItemNumber) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.querySelector("#form-task-header").value,
      taskDescriptionValue = taskForm.querySelector(
        "#form-task-description"
      ).value;

    // Only enters if the user is creating a new task.
    // Otherwise, the user is editing and saving a task and a
    // new task item # is not needed.
    if (!taskItemNumber) {
      taskItemNumber = document.getElementsByClassName("task-item").length;
    }

    taskViewer.insertBefore(
      (0,_appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskHeaderValue, taskDescriptionValue, taskItemNumber),
      taskForm.nextSibling
    );
    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function AddEditButtonListener(editButton, taskItemNumber) {
  editButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskItemToEdit = taskViewer.querySelector(
        `[data-task-item="${taskItemNumber}"]`
      ),
      taskHeaderValue =
        taskItemToEdit.querySelector(".task-header").textContent,
      taskDescriptionValue =
        taskItemToEdit.querySelector(".task-description").textContent,
      taskFormToInsert = (0,_appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)(
        "Save",
        taskHeaderValue,
        taskDescriptionValue
      ),
      formTaskHeader = taskFormToInsert.querySelector("#form-task-header"),
      formAddTaskButton = taskFormToInsert.querySelector(
        ".form-add-or-save-task-button"
      );
    
    taskViewer.insertBefore(taskFormToInsert, taskItemToEdit.nextSibling);
    taskViewer.removeChild(taskItemToEdit);

    cancelTaskEditListener(taskFormToInsert, taskItemNumber);
    addTaskToTaskViewerListener(taskFormToInsert, taskItemNumber);
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function toggleTaskStatus(checkbox, taskItemNumber) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item = '${taskItemNumber}']`
      ),
      checkmark = checkbox.firstChild;

    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(taskItem, "completed");
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(checkmark, "fade-in-out");
  });
}

function checkNewTaskButtonExist() {
  let taskViewer = document.querySelector(".task-viewer");

  if (!taskViewer.contains(document.querySelector(".add-task-button"))) {
    taskViewer.append((0,_appMainContent_task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_1__.addNewTaskButton)());
    addNewTaskButtonListener();
  }
}

function taskController() {
  // initialize event listener on app load
  addNewTaskButtonListener();
}




/***/ }),

/***/ "./src/components/generalButtons/iconButton.js":
/*!*****************************************************!*\
  !*** ./src/components/generalButtons/iconButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconButton": () => (/* binding */ iconButton)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function iconButton(imgSrc, altText, ...cssClass) {
  let iconButton = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(iconButton, ...cssClass);

  iconButton.append(icon);

  return iconButton;
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
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(button, ...cssClass);

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
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



function menuTabs() {
  let menuTabs = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    tabArr = ["Inbox", "Today", "Upcoming", "Completed"];

  for (let i = 0; i < 4; i++) {
    let tabSpecificClass = "menu-tab-" + tabArr[i].toLowerCase();
    menuTabs.append((0,_tab_js__WEBPACK_IMPORTED_MODULE_0__.tab)(tabArr[i], "tab", tabSpecificClass));
  }

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(menuTabs, "menu-tabs");

  return menuTabs;
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
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function projectList() {
  let projectList = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectList, "project-list");

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
/* harmony import */ var _generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalButtons/iconButton.js */ "./src/components/generalButtons/iconButton.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ "./src/components/menubar/projectList.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/plus.svg */ "./src/icons/plus.svg");





function projectSection() {
  let projectSection = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    projectHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    heading = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2"),
    newProjectButton = (0,_generalButtons_iconButton_js__WEBPACK_IMPORTED_MODULE_0__.iconButton)(
      _icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__,
      "Add new project icon",
      "new-project-button"
    );

  heading.textContent = "Projects";

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
  let tab = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  tab.textContent = text;
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(tab, ...cssClass);

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



function formHeader() {
  let headerContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    header = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2");

  header.textContent = "New Project";

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(headerContainer, "new-project-header-container");
  headerContainer.append(header);

  return headerContainer;
}

function projectNameFormField() {
  let projectNameContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    projectNameLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    projectNameInput = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");

  projectNameLabel.textContent = "Project Name:";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(projectNameLabel, projectNameInput);

  return projectNameContainer;
}

function projectDescriptionFormField() {
  let projectDescriptionContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    projectDescriptionLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    projectDescriptionTextarea = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea");

  projectDescriptionLabel.textContent = "Project Description:";
  projectDescriptionLabel.setAttribute("for", "new-project-description");
  projectDescriptionTextarea.setAttribute("id", "new-project-description");
  projectDescriptionTextarea.setAttribute("name", "newProjectDescription");
  projectDescriptionTextarea.setAttribute("rows", "3");
  projectDescriptionTextarea.setAttribute("maxlength", "300");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(projectDescriptionContainer, "new-project-description-form-field");

  projectDescriptionContainer.append(
    projectDescriptionLabel,
    projectDescriptionTextarea
  );

  return projectDescriptionContainer;
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
    formHeader(),
    projectNameFormField(),
    projectDescriptionFormField(),
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

/***/ "./src/icons/check.svg":
/*!*****************************!*\
  !*** ./src/icons/check.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddce2e1e5ef60024f029.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/icons/light-theme.svg":
/*!***********************************!*\
  !*** ./src/icons/light-theme.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83fa0c9fe1ff51982b36.svg";

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
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");








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
  renderPage();
  initControllers();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcz9iZmZjIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwSGVhZGVyL2FwcEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBIZWFkZXIvYXBwTG9nby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC9hcHBNYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC9tYWluQ29udGVudEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL2FkZE5ld1Rhc2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFzay9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3Rhc2svdGFza0luZm8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tJdGVtQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrVmlld2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2Zvcm1WYWxpZGF0aW9uQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbEJ1dHRvbnMvaWNvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsQnV0dG9ucy90ZXh0QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudWJhci9tZW51VGFicy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyL21lbnViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudWJhci9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyL3Byb2plY3RTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21lbnViYXIvdGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QvbmV3UHJvamVjdE92ZXJsYXlGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBoMiB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbn1cXG5cXG4udGhlbWUtYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4udmlldy1idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi52aWV3LWJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi52aWV3LW9wdGlvbnMge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtYmFyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tZW51LXRhYnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhYjpob3ZlcixcXG4ucHJvamVjdC10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubGluZWJyZWFrIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5uZXctcHJvamVjdC1vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1idXR0b25zIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay12aWV3ZXIge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZWNrQm94VGFza0luZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWRpdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmZhZGUtaW4tb3V0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcblxcbi5mYWRlLWluLW91dDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2xvc2VkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwcHgpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1g7OztrQ0FHZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7O2tDQUdnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyID4gaDIge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgKi9cXG59XFxuXFxuLnRoZW1lLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLnZpZXctYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4udmlldy1idXR0b24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4udmlldy1vcHRpb25zIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5tZW51LWJhciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWVudS10YWJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4udGFiIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50YWI6aG92ZXIsXFxuLnByb2plY3QtdGFiOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmxpbmVicmVhayB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qtb3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWhlYWRlciB7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stdmlld2VyIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1uZXctdGFzay1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jaGVja0JveFRhc2tJbmZvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWVkaXQtYnV0dG9uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mYWRlLWluLW91dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMHB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhcHBMb2dvIH0gZnJvbSBcIi4vYXBwTG9nby5qc1wiO1xuaW1wb3J0IHsgaWNvbkJ1dHRvbiB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy9pY29uQnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5pbXBvcnQgbWVudUljb24gZnJvbSBcIi4uLy4uL2ljb25zL21lbnUuc3ZnXCI7XG5pbXBvcnQgbGlnaHRJY29uIGZyb20gXCIuLi8uLi9pY29ucy9saWdodC10aGVtZS5zdmdcIjtcblxuZnVuY3Rpb24gYXBwSGVhZGVyKCkge1xuICBsZXQgYXBwSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiKSxcbiAgICBtZW51QnV0dG9uID0gaWNvbkJ1dHRvbihtZW51SWNvbiwgXCJNZW51IGljb25cIiwgXCJtZW51LWJ1dHRvblwiKSxcbiAgICB0aGVtZUJ1dHRvbiA9IGljb25CdXR0b24obGlnaHRJY29uLCBcIkxpZ2h0IHRoZW1lIGljb25cIiwgXCJ0aGVtZS1idXR0b25cIik7XG5cbiAgYWRkQ2xhc3MoYXBwSGVhZGVyLCBcImFwcEhlYWRlclwiKTtcbiAgYXBwSGVhZGVyLmFwcGVuZChtZW51QnV0dG9uLCBhcHBMb2dvKCksIHRoZW1lQnV0dG9uKTtcblxuICByZXR1cm4gYXBwSGVhZGVyO1xufVxuXG5leHBvcnQgeyBhcHBIZWFkZXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCBsb2dvSW1nIGZyb20gXCIuLi8uLi9pbWFnZS9Ub2RvLWlzdCBMb2dvLnN2Z1wiO1xuXG5mdW5jdGlvbiBhcHBMb2dvKCkge1xuICBsZXQgYXBwTG9nb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgYXBwTmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcbiAgICBsb2dvSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGFwcE5hbWUudGV4dENvbnRlbnQgPSBcIkRvIEl0XCI7XG5cbiAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsb2dvSW1nKTtcbiAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcbiAgICBcImFsdFwiLFxuICAgIFwiVG9kby1pc3QgTG9nby4gQ2xpcGJvYXJkcyB3aXRoIGNoZWNrbWFya3Mgb24gdGhlbS5cIlxuICApO1xuXG4gIGFkZENsYXNzKGFwcExvZ29Db250YWluZXIsIFwiYXBwLWxvZ28tY29udGFpbmVyXCIpO1xuXG4gIGFwcExvZ29Db250YWluZXIuYXBwZW5kKGxvZ29JbWFnZSwgYXBwTmFtZSk7XG5cbiAgcmV0dXJuIGFwcExvZ29Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IGFwcExvZ28gfTtcbiIsImltcG9ydCB7IG1haW5Db250ZW50SGVhZGVyIH0gZnJvbSBcIi4vbWFpbkNvbnRlbnRIZWFkZXIuanNcIjtcbmltcG9ydCB7IHRhc2tWaWV3ZXIgfSBmcm9tIFwiLi90YXNrVmlld2VyLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFwcE1haW5Db250ZW50KCkge1xuICBsZXQgYXBwTWFpbkNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGxpbmVicmVhayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYWRkQ2xhc3MobGluZWJyZWFrLCBcImxpbmVicmVha1wiKTtcbiAgYWRkQ2xhc3MoYXBwTWFpbkNvbnRlbnQsIFwibWFpbi1jb250ZW50XCIpO1xuXG4gIGFwcE1haW5Db250ZW50LmFwcGVuZChtYWluQ29udGVudEhlYWRlcigpLCBsaW5lYnJlYWssIHRhc2tWaWV3ZXIoKSk7XG5cbiAgcmV0dXJuIGFwcE1haW5Db250ZW50O1xufVxuXG5leHBvcnQgeyBhcHBNYWluQ29udGVudCB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBtYWluQ29udGVudEhlYWRlcigpIHtcbiAgbGV0IG1haW5Db250ZW50SGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkaW5nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkaW5nID0gY3JlYXRlRWxlbWVudChcImgxXCIpLFxuICAgIHByb2plY3REZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGFkZENsYXNzKG1haW5Db250ZW50SGVhZGVyLCBcIm1haW4tY29udGVudC1oZWFkZXJcIik7XG4gIGFkZENsYXNzKGhlYWRpbmdDb250YWluZXIsIFwibWFpbi1jb250ZW50LWhlYWRpbmctY29udGFpbmVyXCIpO1xuICBhZGRDbGFzcyhoZWFkaW5nLCBcIm1haW4tY29udGVudC1oZWFkaW5nXCIpO1xuICBhZGRDbGFzcyhwcm9qZWN0RGVzY3JpcHRpb24sIFwibWFpbi1jb250ZW50LXByb2plY3QtZGVzY3JpcHRpb25cIik7XG5cbiAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgcHJvamVjdERlc2NyaXB0aW9uKTtcbiAgbWFpbkNvbnRlbnRIZWFkZXIuYXBwZW5kKGhlYWRpbmdDb250YWluZXIpO1xuXG4gIHJldHVybiBtYWluQ29udGVudEhlYWRlcjtcbn1cblxuZXhwb3J0IHsgbWFpbkNvbnRlbnRIZWFkZXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gYWRkTmV3VGFza0J1dHRvbigpIHtcbiAgbGV0IGFkZE5ld1Rhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGFkZE5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gIGFkZENsYXNzKGFkZE5ld1Rhc2tCdXR0b24sIFwiYWRkLW5ldy10YXNrLWJ1dHRvblwiKTtcblxuICByZXR1cm4gYWRkTmV3VGFza0J1dHRvbjtcbn1cblxuZXhwb3J0IHsgYWRkTmV3VGFza0J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgdG9nZ2xlVGFza1N0YXR1cyB9IGZyb20gXCIuLi8uLi9jb250cm9scy90YXNrQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuaW1wb3J0IGNoZWNrbWFya0ljb24gZnJvbSBcIi4uLy4uLy4uL2ljb25zL2NoZWNrLnN2Z1wiO1xuXG5mdW5jdGlvbiBjaGVja2JveCh0YXNrSXRlbU51bWJlcikge1xuICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjaGVja21hcmsgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2hlY2ttYXJrSWNvbik7XG4gIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJDaGVja21hcmsgaWNvblwiKTtcblxuICBhZGRDbGFzcyhjaGVja2JveCwgXCJjaGVja2JveFwiKTtcbiAgYWRkQ2xhc3MoY2hlY2ttYXJrLCBcImZhZGUtaW4tb3V0XCIpO1xuICB0b2dnbGVUYXNrU3RhdHVzKGNoZWNrYm94LCB0YXNrSXRlbU51bWJlcik7XG5cbiAgY2hlY2tib3guYXBwZW5kKGNoZWNrbWFyayk7XG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZChjaGVja2JveCk7XG5cbiAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjaGVja2JveCB9O1xuIiwiaW1wb3J0IHsgdGV4dEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9nZW5lcmFsQnV0dG9ucy90ZXh0QnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhZGRDbGFzcyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tIZWFkZXJGaWVsZCh0YXNrSGVhZGVyVmFsdWUpIHtcbiAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGVyTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgaGVhZGVySW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICBoZWFkZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XG4gIGlmICh0YXNrSGVhZGVyVmFsdWUpIHtcbiAgICBoZWFkZXJJbnB1dEZpZWxkLnRleHRDb250ZW50ID0gdGFza0hlYWRlclZhbHVlO1xuICB9XG5cbiAgaGVhZGVyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS10YXNrLWhlYWRlclwiKTtcbiAgaGVhZGVySW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG4gIGhlYWRlcklucHV0RmllbGQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGFkZENsYXNzKGhlYWRlcklucHV0RmllbGQsIFwiZm9ybS10YXNrLWhlYWRlclwiKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlckxhYmVsLCBoZWFkZXJJbnB1dEZpZWxkKTtcblxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGVzY3JpcHRpb25GaWVsZCh0YXNrRGVzY3JpcHRpb25WYWx1ZSkge1xuICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGRlc2NyaXB0aW9uTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgZGVzY3JpcHRpb25JbnB1dEZpZWxkID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIGlmICh0YXNrRGVzY3JpcHRpb25WYWx1ZSkge1xuICAgIGRlc2NyaXB0aW9uSW5wdXRGaWVsZC50ZXh0Q29udGVudCA9IHRhc2tEZXNjcmlwdGlvblZhbHVlO1xuICB9XG5cbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXRhc2stZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tdGFzay1kZXNjcmlwdGlvblwiKTtcblxuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dEZpZWxkKTtcblxuICByZXR1cm4gZGVzY3JpcHRpb25Db250YWluZXI7XG59XG5cbi8vIFRoZSBhZGRPclNhdmVUYXNrQnV0dG9uVGV4dCBhcmd1bWVudCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB0aGVcbi8vIHRhc2tGb3JtIHNob3VsZCBzdGF0ZSBcInNhdmVcIiBvciBcImFkZCB0YXNrXCIgZm9yIG9uZSBvZiB0aGUgYnV0dG9ucy5cbmZ1bmN0aW9uIHRhc2tGb3JtKFxuICBhZGRPclNhdmVUYXNrQnV0dG9uVGV4dCA9IFwiQWRkIFRhc2tcIixcbiAgdGFza0hlYWRlclZhbHVlLFxuICB0YXNrRGVzY3JpcHRpb25WYWx1ZVxuKSB7XG4gIGxldCBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrSXRlbUZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgICBoZWFkZXJGaWVsZCA9IGNyZWF0ZVRhc2tIZWFkZXJGaWVsZCh0YXNrSGVhZGVyVmFsdWUpLFxuICAgIGRlc2NyaXB0aW9uRmllbGQgPSBjcmVhdGVUYXNrRGVzY3JpcHRpb25GaWVsZCh0YXNrRGVzY3JpcHRpb25WYWx1ZSksXG4gICAgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjYW5jZWxGb3JtQnV0dG9uID0gdGV4dEJ1dHRvbihcIkNhbmNlbFwiLCBcImZvcm0tY2FuY2VsLWJ1dHRvblwiKSxcbiAgICBhZGRPclNhdmVUYXNrQnV0dG9uID0gdGV4dEJ1dHRvbihcbiAgICAgIGFkZE9yU2F2ZVRhc2tCdXR0b25UZXh0LFxuICAgICAgXCJmb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgICApO1xuXG4gIGFkZENsYXNzKHRhc2tJdGVtRm9ybSwgXCJ0YXNrLWZvcm1cIik7XG4gIGFkZENsYXNzKGZvcm1Db250YWluZXIsIFwidGFzay1mb3JtLWNvbnRhaW5lclwiKTtcblxuICBhZGRPclNhdmVUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB0YXNrSXRlbUZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcIlwiKTtcblxuICBidXR0b25Db250YWluZXIuYXBwZW5kKGNhbmNlbEZvcm1CdXR0b24sIGFkZE9yU2F2ZVRhc2tCdXR0b24pO1xuICB0YXNrSXRlbUZvcm0uYXBwZW5kKGhlYWRlckZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBidXR0b25Db250YWluZXIpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0YXNrSXRlbUZvcm0pO1xuXG4gIHJldHVybiBmb3JtQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyB0YXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrSW5mbyh0YXNrSGVhZGVyVmFsdWUsIHRhc2tEZXNjcmlwdGlvblZhbHVlKSB7XG4gIGxldCB0YXNrSW5mb3JtYXRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHRhc2tIZWFkZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImgzXCIpLFxuICAgIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICB0YXNrSGVhZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tIZWFkZXJWYWx1ZTtcbiAgdGFza0Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tEZXNjcmlwdGlvblZhbHVlO1xuXG4gIGFkZENsYXNzKHRhc2tIZWFkZXJFbGVtZW50LCBcInRhc2staGVhZGVyXCIpO1xuICBhZGRDbGFzcyh0YXNrRGVzY3JpcHRpb25FbGVtZW50LCBcInRhc2stZGVzY3JpcHRpb25cIik7XG5cbiAgdGFza0luZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZCh0YXNrSGVhZGVyRWxlbWVudCwgdGFza0Rlc2NyaXB0aW9uRWxlbWVudCk7XG5cbiAgcmV0dXJuIHRhc2tJbmZvcm1hdGlvbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgdGFza0luZm8gfTtcbiIsImltcG9ydCB7IGNoZWNrYm94IH0gZnJvbSBcIi4vY2hlY2tib3guanNcIjtcbmltcG9ydCB7IHRhc2tJbmZvIH0gZnJvbSBcIi4vdGFza0luZm8uanNcIjtcbmltcG9ydCB7IHRhc2tJdGVtQWN0aW9ucyB9IGZyb20gXCIuL3Rhc2tJdGVtQWN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrSXRlbSh0YXNrSGVhZGVyVmFsdWUsIHRhc2tEZXNjcmlwdGlvblZhbHVlLCB0YXNrSXRlbU51bWJlcikge1xuICBsZXQgdGFza0l0ZW0gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNoZWNrQm94VGFza0luZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKGNoZWNrQm94VGFza0luZm9Db250YWluZXIsIFwiY2hlY2tCb3hUYXNrSW5mb0NvbnRhaW5lclwiKTtcbiAgYWRkQ2xhc3ModGFza0l0ZW0sIFwidGFzay1pdGVtXCIpO1xuXG4gIHRhc2tJdGVtLmRhdGFzZXQudGFza0l0ZW0gPSB0YXNrSXRlbU51bWJlcjtcblxuICBjaGVja0JveFRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZChcbiAgICBjaGVja2JveCh0YXNrSXRlbU51bWJlciksXG4gICAgdGFza0luZm8odGFza0hlYWRlclZhbHVlLCB0YXNrRGVzY3JpcHRpb25WYWx1ZSlcbiAgKTtcbiAgdGFza0l0ZW0uYXBwZW5kKGNoZWNrQm94VGFza0luZm9Db250YWluZXIsIHRhc2tJdGVtQWN0aW9ucyh0YXNrSXRlbU51bWJlcikpO1xuXG4gIHJldHVybiB0YXNrSXRlbTtcbn1cblxuZXhwb3J0IHsgdGFza0l0ZW0gfTtcbiIsImltcG9ydCB7IGljb25CdXR0b24gfSBmcm9tIFwiLi4vLi4vZ2VuZXJhbEJ1dHRvbnMvaWNvbkJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgQWRkRWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xzL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uLy4uLy4uL2ljb25zL2VkaXQuc3ZnXCI7XG5cbmZ1bmN0aW9uIHRhc2tJdGVtQWN0aW9ucyh0YXNrSXRlbU51bWJlcikge1xuICBsZXQgdGFza0l0ZW1BY3Rpb25zID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBlZGl0QnV0dG9uID0gaWNvbkJ1dHRvbihcbiAgICAgIGVkaXRJY29uLFxuICAgICAgXCJUYXNrIEVkaXQgSWNvbiBCdXR0b25cIixcbiAgICAgIFwidGFzay1lZGl0LWJ1dHRvblwiXG4gICAgKTtcblxuICBBZGRFZGl0QnV0dG9uTGlzdGVuZXIoZWRpdEJ1dHRvbiwgdGFza0l0ZW1OdW1iZXIpO1xuXG4gIGFkZENsYXNzKHRhc2tJdGVtQWN0aW9ucywgXCJ0YXNrLWl0ZW0tYWN0aW9uc1wiKTtcblxuICB0YXNrSXRlbUFjdGlvbnMuYXBwZW5kKGVkaXRCdXR0b24pO1xuXG4gIHJldHVybiB0YXNrSXRlbUFjdGlvbnM7XG59XG5cbmV4cG9ydCB7IHRhc2tJdGVtQWN0aW9ucyB9O1xuIiwiaW1wb3J0IHsgYWRkTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuL3Rhc2svYWRkTmV3VGFza0J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrVmlld2VyKCkge1xuICBsZXQgdGFza1ZpZXdlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYWRkQ2xhc3ModGFza1ZpZXdlciwgXCJ0YXNrLXZpZXdlclwiKTtcblxuICB0YXNrVmlld2VyLmFwcGVuZChhZGROZXdUYXNrQnV0dG9uKCkpO1xuXG4gIHJldHVybiB0YXNrVmlld2VyO1xufVxuXG5leHBvcnQgeyB0YXNrVmlld2VyIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG4vLyBBZ2dyZXNzaXZlbHkgY2hlY2tzIGFuZCBkaXNhYmxlcyB0aGUgYWRkIGJ1dHRvbiBpZiBpZiBmb3JtIGZpZWxkIGlzIGVtcHR5XG5mdW5jdGlvbiBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihldmVudExpc3RlbmVyTm9kZSwgYnV0dG9uVG9EaXNhYmxlKSB7XG4gIGV2ZW50TGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGJ1dHRvblRvRGlzYWJsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVG9EaXNhYmxlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uIH07XG4iLCJpbXBvcnQgeyBuZXdQcm9qZWN0T3ZlcmxheUZvcm0gfSBmcm9tIFwiLi4vcHJvamVjdC9uZXdQcm9qZWN0T3ZlcmxheUZvcm0uanNcIjtcbmltcG9ydCB7IHRhYiB9IGZyb20gXCIuLi9tZW51YmFyL3RhYi5qc1wiO1xuaW1wb3J0IHsgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24gfSBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvbkNvbnRyb2xzLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCwgdG9nZ2xlQ2xhc3MgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG4vLyBFdmVudCBMaXN0ZW5lcnMgZXhwZWN0IGEgZnVuY3Rpb24gcmVmZXJlbmNlIGluc3RlYWQgb2YgdGhlIGZ1bmN0aW9uIGl0c2VsZi5cbi8vIFRvIGF2b2lkIGNhbGxpbmcgZnVuY3Rpb24gaW1tZWRpYXRlbHksIGVpdGhlciBiaW5kICd0aGlzJywgY3JlYXRlIGFuXG4vLyBhbm9ueW1vdXMgZnVuY3Rpb24sIG9yIGhhdmUgYSBmdW5jdGlvbiByZXR1cm4gYSBmdW5jdGlvbi5cbmxldCBtZW51YmFyVHJhbnNpdGlvbmVuZExpc3RlbmVyID0gKCkgPT4ge1xuICBsZXQgbWVudWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1iYXJcIik7XG4gIHRvZ2dsZUNsYXNzKG1lbnViYXIsIFwiaGlkZVwiKTtcbn07XG5cbmZ1bmN0aW9uIGFkZE1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpIHtcbiAgbWFpbkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgbWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpIHtcbiAgbWFpbkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICBtZW51YmFyVHJhbnNpdGlvbmVuZExpc3RlbmVyXG4gICk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnViYXJWaXNpYmlsaXR5KCkge1xuICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIiksXG4gICAgbWVudWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1iYXJcIiksXG4gICAgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG1haW5Db250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGJlZm9yZSBzdGFydGluZyB0cmFuc2l0aW9uIHRvIGF2b2lkIHRyaWdnZXJpbmcgdGhlXG4gICAgICAvLyBsaXN0ZW5lciB0byBoaWRlIHRoZSBtZW51IHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgIHJlbW92ZU1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpO1xuXG4gICAgICAvLyBNYWtlIG1lbnUgdmlzaWJsZSBiZWZvcmUgc3RhcnRpbmcgdHJhbnNpdGlvbiB0byBzaG93IG1lbnUuXG4gICAgICB0b2dnbGVDbGFzcyhtZW51YmFyLCBcImhpZGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBsaXN0ZW5lciB0byBzZXQgbWVudWJhciB2aXNpYmlsaXR5IG9mZiBhZnRlciBpdCBoYXMgdHJhbnNpdGlvbmVkXG4gICAgICAvLyBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgIGFkZE1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpO1xuICAgIH1cbiAgICB0b2dnbGVDbGFzcyhtYWluQ29udGVudCwgXCJjbG9zZWRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdE92ZXJsYXlGb3JtKCkge1xuICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uXCIpO1xuXG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChuZXdQcm9qZWN0T3ZlcmxheUZvcm0oKSk7XG5cbiAgICBsZXQgbmV3UHJvamVjdE5hbWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLFxuICAgICAgbmV3UHJvamVjdEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLm5ldy1wcm9qZWN0LWZvcm0tYWRkLWJ1dHRvblwiXG4gICAgICApO1xuXG4gICAgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24obmV3UHJvamVjdE5hbWVOb2RlLCBuZXdQcm9qZWN0QWRkQnV0dG9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbE5ld1Byb2plY3RCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtZm9ybS1jYW5jZWwtYnV0dG9uXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBib2R5VGFnID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIG5ld1Byb2plY3RPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1vdmVybGF5XCIpO1xuXG4gICAgYm9keVRhZy5yZW1vdmVDaGlsZChuZXdQcm9qZWN0T3ZlcmxheSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VGFiTGlzdGVuZXIoXG4gIHByb2plY3ROYW1lLFxuICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gIHByb2plY3RUYWJDbGFzc1xuKSB7XG4gIGxldCBwcm9qZWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHByb2plY3RUYWJDbGFzcyk7XG5cbiAgcHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyhwcm9qZWN0TmFtZSk7XG4gICAgdXBkYXRlTWFpbkNvbnRlbnRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1haW5Db250ZW50UHJvamVjdERlc2NyaXB0aW9uKHByb2plY3REZXNjcmlwdGlvbikge1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uSGVhZGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubWFpbi1jb250ZW50LXByb2plY3QtZGVzY3JpcHRpb25cIlxuICApO1xuXG4gIHByb2plY3REZXNjcmlwdGlvbkhlYWRlclNlY3Rpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0RGVzY3JpcHRpb247XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm5ldy1wcm9qZWN0LWZvcm0tYWRkLWJ1dHRvblwiXG4gICk7XG5cbiAgYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBib2R5VGFnID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIG5ld1Byb2plY3RPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1vdmVybGF5XCIpLFxuICAgICAgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKSxcbiAgICAgIHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLnZhbHVlLFxuICAgICAgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjbmV3LXByb2plY3QtZGVzY3JpcHRpb25cIlxuICAgICAgKS52YWx1ZSxcbiAgICAgIHByb2plY3RTcGVjaWZpY0NsYXNzID1cbiAgICAgICAgXCJwcm9qZWN0LVwiICsgcHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCItXCIpLFxuICAgICAgcHJvamVjdFRhYiA9IHRhYihwcm9qZWN0TmFtZSwgXCJwcm9qZWN0LXRhYlwiLCBwcm9qZWN0U3BlY2lmaWNDbGFzcyksXG4gICAgICBtYWluQ29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1oZWFkaW5nXCIpLFxuICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5tYWluLWNvbnRlbnQtcHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICApO1xuXG4gICAgbWFpbkNvbnRlbnRQcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgbWFpbkNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdFRhYik7XG4gICAgYWRkUHJvamVjdFRhYkxpc3RlbmVyKFxuICAgICAgcHJvamVjdE5hbWUsXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0U3BlY2lmaWNDbGFzc1xuICAgICk7XG5cbiAgICBib2R5VGFnLnJlbW92ZUNoaWxkKG5ld1Byb2plY3RPdmVybGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyh0ZXh0KSB7XG4gIGxldCBtYWluQ29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1oZWFkaW5nXCIpO1xuXG4gIG1haW5Db250ZW50SGVhZGluZy50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIGluYm94VGFiTGlzdGVuZXIoKSB7XG4gIGxldCBpbmJveFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10YWItaW5ib3hcIik7XG5cbiAgaW5ib3hUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcoXCJJbmJveFwiKTtcbiAgICB1cGRhdGVNYWluQ29udGVudFByb2plY3REZXNjcmlwdGlvbihcIlwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZGF5VGFiTGlzdGVuZXIoKSB7XG4gIGxldCB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10YWItdG9kYXlcIik7XG5cbiAgdG9kYXlUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcoXCJUb2RheVwiKTtcbiAgICB1cGRhdGVNYWluQ29udGVudFByb2plY3REZXNjcmlwdGlvbihcIlwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nVGFiTGlzdGVuZXIoKSB7XG4gIGxldCB1cGNvbWluZ1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10YWItdXBjb21pbmdcIik7XG5cbiAgdXBjb21pbmdUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcoXCJVcGNvbWluZ1wiKTtcbiAgICB1cGRhdGVNYWluQ29udGVudFByb2plY3REZXNjcmlwdGlvbihcIlwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZFRhYkxpc3RlbmVyKCkge1xuICBsZXQgY29tcGxldGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYi1jb21wbGV0ZWRcIik7XG5cbiAgY29tcGxldGVkVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdXBkYXRlTWFpbkNvbnRlbnRIZWFkaW5nKFwiQ29tcGxldGVkXCIpO1xuICAgIHVwZGF0ZU1haW5Db250ZW50UHJvamVjdERlc2NyaXB0aW9uKFwiXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdE1lbnVUYWJMaXN0ZW5lcnMoKSB7XG4gIGluYm94VGFiTGlzdGVuZXIoKTtcbiAgdG9kYXlUYWJMaXN0ZW5lcigpO1xuICB1cGNvbWluZ1RhYkxpc3RlbmVyKCk7XG4gIGNvbXBsZXRlZFRhYkxpc3RlbmVyKCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVDb250cm9sbGVyKCkge1xuICB0b2dnbGVNZW51YmFyVmlzaWJpbGl0eSgpO1xuICBpbml0TWVudVRhYkxpc3RlbmVycygpO1xuICBkaXNwbGF5TmV3UHJvamVjdE92ZXJsYXlGb3JtKCk7XG59XG5cbmV4cG9ydCB7IG1lbnVDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyB0YXNrRm9ybSB9IGZyb20gXCIuLi9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tGb3JtLmpzXCI7XG5pbXBvcnQgeyBhZGROZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4uL2FwcE1haW5Db250ZW50L3Rhc2svYWRkTmV3VGFza0J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgdGFza0l0ZW0gfSBmcm9tIFwiLi4vYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrSXRlbS5qc1wiO1xuaW1wb3J0IHsgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24gfSBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvbkNvbnRyb2xzLmpzXCI7XG5pbXBvcnQgeyB0b2dnbGVDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2tCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGFkZE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1uZXctdGFzay1idXR0b25cIik7XG5cbiAgYWRkTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrVmlld2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXdlclwiKSxcbiAgICAgIG5ld1Rhc2tGb3JtID0gdGFza0Zvcm0oKTtcblxuICAgIHRhc2tWaWV3ZXIuYXBwZW5kKG5ld1Rhc2tGb3JtKTtcbiAgICB0YXNrVmlld2VyLnJlbW92ZUNoaWxkKGFkZE5ld1Rhc2tCdXR0b24pO1xuXG4gICAgbGV0IGZvcm1UYXNrSGVhZGVyID0gbmV3VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLXRhc2staGVhZGVyXCIpLFxuICAgICAgZm9ybUFkZFRhc2tCdXR0b24gPSBuZXdUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgICAgICk7XG5cbiAgICAvLyBBY3RpdmF0ZSBsaXN0ZW5lcnMgZm9yIGZvcm0gYnV0dG9uc1xuICAgIGNhbmNlbFRhc2tFZGl0TGlzdGVuZXIobmV3VGFza0Zvcm0pO1xuICAgIGFkZFRhc2tUb1Rhc2tWaWV3ZXJMaXN0ZW5lcihuZXdUYXNrRm9ybSk7XG4gICAgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24oZm9ybVRhc2tIZWFkZXIsIGZvcm1BZGRUYXNrQnV0dG9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2tFZGl0TGlzdGVuZXIodGFza0Zvcm0sIHRhc2tJdGVtTnVtYmVyKSB7XG4gIGxldCBmb3JtQ2FuY2VsQnV0dG9uID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNhbmNlbC1idXR0b25cIik7XG5cbiAgZm9ybUNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrVmlld2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXdlclwiKSxcbiAgICAgIHRhc2tIZWFkZXJWYWx1ZSA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKS52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvblZhbHVlID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZm9ybS10YXNrLWRlc2NyaXB0aW9uXCJcbiAgICAgICkudmFsdWU7XG5cbiAgICAvLyBDaGVja3MgdG8gc2VlIGlmIHVzZXIgaXMgZWRpdGluZyBhIHRhc2sgYnkgY2hlY2tpbmcgaWYgYVxuICAgIC8vIHRhc2tJdGVtTnVtYmVyIGV4aXN0cy5cbiAgICBpZiAodGFza0l0ZW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFza1ZpZXdlci5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHRhc2tJdGVtKHRhc2tIZWFkZXJWYWx1ZSwgdGFza0Rlc2NyaXB0aW9uVmFsdWUsIHRhc2tJdGVtTnVtYmVyKSxcbiAgICAgICAgdGFza0Zvcm0ubmV4dFNpYmxpbmdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFza0Zvcm0ucmVtb3ZlKCk7XG4gICAgY2hlY2tOZXdUYXNrQnV0dG9uRXhpc3QoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Rhc2tWaWV3ZXJMaXN0ZW5lcih0YXNrRm9ybSwgdGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IGZvcm1BZGRPclNhdmVUYXNrQnV0dG9uID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICBcIi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgKTtcblxuICBmb3JtQWRkT3JTYXZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrVmlld2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXdlclwiKSxcbiAgICAgIHRhc2tIZWFkZXJWYWx1ZSA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKS52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvblZhbHVlID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZm9ybS10YXNrLWRlc2NyaXB0aW9uXCJcbiAgICAgICkudmFsdWU7XG5cbiAgICAvLyBPbmx5IGVudGVycyBpZiB0aGUgdXNlciBpcyBjcmVhdGluZyBhIG5ldyB0YXNrLlxuICAgIC8vIE90aGVyd2lzZSwgdGhlIHVzZXIgaXMgZWRpdGluZyBhbmQgc2F2aW5nIGEgdGFzayBhbmQgYVxuICAgIC8vIG5ldyB0YXNrIGl0ZW0gIyBpcyBub3QgbmVlZGVkLlxuICAgIGlmICghdGFza0l0ZW1OdW1iZXIpIHtcbiAgICAgIHRhc2tJdGVtTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staXRlbVwiKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGFza1ZpZXdlci5pbnNlcnRCZWZvcmUoXG4gICAgICB0YXNrSXRlbSh0YXNrSGVhZGVyVmFsdWUsIHRhc2tEZXNjcmlwdGlvblZhbHVlLCB0YXNrSXRlbU51bWJlciksXG4gICAgICB0YXNrRm9ybS5uZXh0U2libGluZ1xuICAgICk7XG4gICAgdGFza0Zvcm0ucmVtb3ZlKCk7XG4gICAgY2hlY2tOZXdUYXNrQnV0dG9uRXhpc3QoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEFkZEVkaXRCdXR0b25MaXN0ZW5lcihlZGl0QnV0dG9uLCB0YXNrSXRlbU51bWJlcikge1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tWaWV3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpLFxuICAgICAgdGFza0l0ZW1Ub0VkaXQgPSB0YXNrVmlld2VyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS10YXNrLWl0ZW09XCIke3Rhc2tJdGVtTnVtYmVyfVwiXWBcbiAgICAgICksXG4gICAgICB0YXNrSGVhZGVyVmFsdWUgPVxuICAgICAgICB0YXNrSXRlbVRvRWRpdC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpLnRleHRDb250ZW50LFxuICAgICAgdGFza0Rlc2NyaXB0aW9uVmFsdWUgPVxuICAgICAgICB0YXNrSXRlbVRvRWRpdC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQsXG4gICAgICB0YXNrRm9ybVRvSW5zZXJ0ID0gdGFza0Zvcm0oXG4gICAgICAgIFwiU2F2ZVwiLFxuICAgICAgICB0YXNrSGVhZGVyVmFsdWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvblZhbHVlXG4gICAgICApLFxuICAgICAgZm9ybVRhc2tIZWFkZXIgPSB0YXNrRm9ybVRvSW5zZXJ0LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKSxcbiAgICAgIGZvcm1BZGRUYXNrQnV0dG9uID0gdGFza0Zvcm1Ub0luc2VydC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5mb3JtLWFkZC1vci1zYXZlLXRhc2stYnV0dG9uXCJcbiAgICAgICk7XG4gICAgXG4gICAgdGFza1ZpZXdlci5pbnNlcnRCZWZvcmUodGFza0Zvcm1Ub0luc2VydCwgdGFza0l0ZW1Ub0VkaXQubmV4dFNpYmxpbmcpO1xuICAgIHRhc2tWaWV3ZXIucmVtb3ZlQ2hpbGQodGFza0l0ZW1Ub0VkaXQpO1xuXG4gICAgY2FuY2VsVGFza0VkaXRMaXN0ZW5lcih0YXNrRm9ybVRvSW5zZXJ0LCB0YXNrSXRlbU51bWJlcik7XG4gICAgYWRkVGFza1RvVGFza1ZpZXdlckxpc3RlbmVyKHRhc2tGb3JtVG9JbnNlcnQsIHRhc2tJdGVtTnVtYmVyKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihmb3JtVGFza0hlYWRlciwgZm9ybUFkZFRhc2tCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGFza1N0YXR1cyhjaGVja2JveCwgdGFza0l0ZW1OdW1iZXIpIHtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGFza0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtdGFzay1pdGVtID0gJyR7dGFza0l0ZW1OdW1iZXJ9J11gXG4gICAgICApLFxuICAgICAgY2hlY2ttYXJrID0gY2hlY2tib3guZmlyc3RDaGlsZDtcblxuICAgIHRvZ2dsZUNsYXNzKHRhc2tJdGVtLCBcImNvbXBsZXRlZFwiKTtcbiAgICB0b2dnbGVDbGFzcyhjaGVja21hcmssIFwiZmFkZS1pbi1vdXRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja05ld1Rhc2tCdXR0b25FeGlzdCgpIHtcbiAgbGV0IHRhc2tWaWV3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpO1xuXG4gIGlmICghdGFza1ZpZXdlci5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKSkpIHtcbiAgICB0YXNrVmlld2VyLmFwcGVuZChhZGROZXdUYXNrQnV0dG9uKCkpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b25MaXN0ZW5lcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhc2tDb250cm9sbGVyKCkge1xuICAvLyBpbml0aWFsaXplIGV2ZW50IGxpc3RlbmVyIG9uIGFwcCBsb2FkXG4gIGFkZE5ld1Rhc2tCdXR0b25MaXN0ZW5lcigpO1xufVxuXG5leHBvcnQgeyB0YXNrQ29udHJvbGxlciwgdG9nZ2xlVGFza1N0YXR1cywgQWRkRWRpdEJ1dHRvbkxpc3RlbmVyIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGljb25CdXR0b24oaW1nU3JjLCBhbHRUZXh0LCAuLi5jc3NDbGFzcykge1xuICBsZXQgaWNvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gICAgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nU3JjKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYWx0VGV4dCk7XG5cbiAgYWRkQ2xhc3MoaWNvbkJ1dHRvbiwgLi4uY3NzQ2xhc3MpO1xuXG4gIGljb25CdXR0b24uYXBwZW5kKGljb24pO1xuXG4gIHJldHVybiBpY29uQnV0dG9uO1xufVxuXG5leHBvcnQgeyBpY29uQnV0dG9uIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRCdXR0b24odGV4dCwgLi4uY3NzQ2xhc3MpIHtcbiAgbGV0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZENsYXNzKGJ1dHRvbiwgLi4uY3NzQ2xhc3MpO1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCB7IHRleHRCdXR0b24gfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4uY3NzQ2xhc3Nlcykge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY3NzQ2xhc3Nlcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIC4uLmNzc0NsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jc3NDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjc3NDbGFzcyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgdG9nZ2xlQ2xhc3MgfTtcbiIsImltcG9ydCB7IHRhYiB9IGZyb20gXCIuL3RhYi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBtZW51VGFicygpIHtcbiAgbGV0IG1lbnVUYWJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YWJBcnIgPSBbXCJJbmJveFwiLCBcIlRvZGF5XCIsIFwiVXBjb21pbmdcIiwgXCJDb21wbGV0ZWRcIl07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBsZXQgdGFiU3BlY2lmaWNDbGFzcyA9IFwibWVudS10YWItXCIgKyB0YWJBcnJbaV0udG9Mb3dlckNhc2UoKTtcbiAgICBtZW51VGFicy5hcHBlbmQodGFiKHRhYkFycltpXSwgXCJ0YWJcIiwgdGFiU3BlY2lmaWNDbGFzcykpO1xuICB9XG5cbiAgYWRkQ2xhc3MobWVudVRhYnMsIFwibWVudS10YWJzXCIpO1xuXG4gIHJldHVybiBtZW51VGFicztcbn1cblxuZXhwb3J0IHsgbWVudVRhYnMgfTtcbiIsImltcG9ydCB7IG1lbnVUYWJzIH0gZnJvbSBcIi4vbWVudVRhYnMuanNcIjtcbmltcG9ydCB7IHByb2plY3RTZWN0aW9uIH0gZnJvbSBcIi4vcHJvamVjdFNlY3Rpb24uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gbWVudWJhcigpIHtcbiAgbGV0IG1lbnViYXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGxpbmVicmVhayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYWRkQ2xhc3MobWVudWJhciwgXCJtZW51LWJhclwiKTtcbiAgYWRkQ2xhc3MobGluZWJyZWFrLCBcImxpbmVicmVha1wiKTtcblxuICBtZW51YmFyLmFwcGVuZChtZW51VGFicygpLCBsaW5lYnJlYWssIHByb2plY3RTZWN0aW9uKCkpO1xuXG4gIHJldHVybiBtZW51YmFyO1xufVxuXG5leHBvcnQgeyBtZW51YmFyIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0KCkge1xuICBsZXQgcHJvamVjdExpc3QgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKHByb2plY3RMaXN0LCBcInByb2plY3QtbGlzdFwiKTtcblxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmV4cG9ydCB7IHByb2plY3RMaXN0IH07XG4iLCJpbXBvcnQgeyBpY29uQnV0dG9uIH0gZnJvbSBcIi4uL2dlbmVyYWxCdXR0b25zL2ljb25CdXR0b24uanNcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdExpc3QuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCBwbHVzSWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvcGx1cy5zdmdcIjtcblxuZnVuY3Rpb24gcHJvamVjdFNlY3Rpb24oKSB7XG4gIGxldCBwcm9qZWN0U2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgcHJvamVjdEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiKSxcbiAgICBuZXdQcm9qZWN0QnV0dG9uID0gaWNvbkJ1dHRvbihcbiAgICAgIHBsdXNJY29uLFxuICAgICAgXCJBZGQgbmV3IHByb2plY3QgaWNvblwiLFxuICAgICAgXCJuZXctcHJvamVjdC1idXR0b25cIlxuICAgICk7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICBhZGRDbGFzcyhwcm9qZWN0SGVhZGVyLCBcInByb2plY3QtaGVhZGVyXCIpO1xuICBhZGRDbGFzcyhwcm9qZWN0U2VjdGlvbiwgXCJwcm9qZWN0LXNlY3Rpb25cIik7XG5cbiAgcHJvamVjdEhlYWRlci5hcHBlbmQoaGVhZGluZywgbmV3UHJvamVjdEJ1dHRvbik7XG4gIHByb2plY3RTZWN0aW9uLmFwcGVuZChwcm9qZWN0SGVhZGVyLCBwcm9qZWN0TGlzdCgpKTtcblxuICByZXR1cm4gcHJvamVjdFNlY3Rpb247XG59XG5cbmV4cG9ydCB7IHByb2plY3RTZWN0aW9uIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRhYih0ZXh0LCAuLi5jc3NDbGFzcykge1xuICBsZXQgdGFiID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB0YWIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBhZGRDbGFzcyh0YWIsIC4uLmNzc0NsYXNzKTtcblxuICByZXR1cm4gdGFiO1xufVxuXG5leHBvcnQgeyB0YWIgfTtcbiIsImltcG9ydCB7IHRleHRCdXR0b24gfSBmcm9tIFwiLi4vZ2VuZXJhbEJ1dHRvbnMvdGV4dEJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBmb3JtSGVhZGVyKCkge1xuICBsZXQgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuXG4gIGFkZENsYXNzKGhlYWRlckNvbnRhaW5lciwgXCJuZXctcHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGb3JtRmllbGQoKSB7XG4gIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgcHJvamVjdE5hbWVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBwcm9qZWN0TmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgcHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctcHJvamVjdC1uYW1lXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdE5hbWVcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTUwXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGFkZENsYXNzKHByb2plY3ROYW1lQ29udGFpbmVyLCBcIm5ldy1wcm9qZWN0LW5hbWUtZm9ybS1maWVsZFwiKTtcblxuICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVMYWJlbCwgcHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgcmV0dXJuIHByb2plY3ROYW1lQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RGVzY3JpcHRpb25Gb3JtRmllbGQoKSB7XG4gIGxldCBwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICAgIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IERlc2NyaXB0aW9uOlwiO1xuICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ld1Byb2plY3REZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjNcIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwMFwiKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIsIFwibmV3LXByb2plY3QtZGVzY3JpcHRpb24tZm9ybS1maWVsZFwiKTtcblxuICBwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKFxuICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLFxuICAgIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhXG4gICk7XG5cbiAgcmV0dXJuIHByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm1CdXR0b25zKCkge1xuICBsZXQgYnV0dG9uc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbiA9IHRleHRCdXR0b24oXG4gICAgICBcIkNhbmNlbFwiLFxuICAgICAgXCJuZXctcHJvamVjdC1mb3JtLWNhbmNlbC1idXR0b25cIlxuICAgICksXG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IHRleHRCdXR0b24oXG4gICAgICBcIkFkZCBOZXcgUHJvamVjdFwiLFxuICAgICAgXCJuZXctcHJvamVjdC1mb3JtLWFkZC1idXR0b25cIlxuICAgICk7XG5cbiAgYWRkQ2xhc3MoYnV0dG9uc0NvbnRhaW5lciwgXCJuZXctcHJvamVjdC1mb3JtLWJ1dHRvbnNcIik7XG4gIGFkZE5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNhbmNlbE5ld1Byb2plY3RCdXR0b24sIGFkZE5ld1Byb2plY3RCdXR0b24pO1xuXG4gIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gICAgbmV3UHJvamVjdEJ1dHRvbnMgPSBwcm9qZWN0Rm9ybUJ1dHRvbnMoKTtcblxuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcIlwiKTtcblxuICBhZGRDbGFzcyhuZXdQcm9qZWN0Rm9ybSwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZChcbiAgICBmb3JtSGVhZGVyKCksXG4gICAgcHJvamVjdE5hbWVGb3JtRmllbGQoKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25Gb3JtRmllbGQoKSxcbiAgICBuZXdQcm9qZWN0QnV0dG9uc1xuICApO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdE92ZXJsYXlGb3JtKCkge1xuICBsZXQgbmV3UHJvamVjdE92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKG5ld1Byb2plY3RPdmVybGF5LCBcIm5ldy1wcm9qZWN0LW92ZXJsYXlcIik7XG4gIG5ld1Byb2plY3RPdmVybGF5LmFwcGVuZChuZXdQcm9qZWN0Rm9ybSgpKTtcblxuICByZXR1cm4gbmV3UHJvamVjdE92ZXJsYXk7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RPdmVybGF5Rm9ybSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGFwcEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwSGVhZGVyL2FwcEhlYWRlci5qc1wiO1xuaW1wb3J0IHsgYXBwTWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L2FwcE1haW5Db250ZW50LmpzXCI7XG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbHMvdGFza0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IG1lbnVDb250cm9sbGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250cm9scy9tZW51Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCB7IG1lbnViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnViYXIvbWVudWJhci5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gaW5pdENvbnRyb2xsZXJzKCkge1xuICB0YXNrQ29udHJvbGxlcigpO1xuICBtZW51Q29udHJvbGxlcigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBsZXQgYm9keVRhZyA9IGRvY3VtZW50LmJvZHksXG4gICAgbWFpblRhZyA9IGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gIG1haW5UYWcuYXBwZW5kKG1lbnViYXIoKSwgYXBwTWFpbkNvbnRlbnQoKSk7XG4gIGJvZHlUYWcuYXBwZW5kKGFwcEhlYWRlcigpLCBtYWluVGFnKTtcbn1cblxuKGZ1bmN0aW9uIGluaXRBcHAoKSB7XG4gIHJlbmRlclBhZ2UoKTtcbiAgaW5pdENvbnRyb2xsZXJzKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9