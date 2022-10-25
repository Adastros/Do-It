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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  height: 35px;\n  width: 35px;\n  /* position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translate(0, -50%); */\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.add-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid black;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;EACP,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX;;;kCAGgC;AAClC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE;;;kCAGgC;EAChC,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  height: 35px;\n  width: 35px;\n  /* position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translate(0, -50%); */\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.add-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid black;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/addTaskButton.js":
/*!*****************************************!*\
  !*** ./src/components/addTaskButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");



function addTaskButton() {
  let taskButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  taskButton.textContent = "Add task";
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskButton, "add-task-button");

  return taskButton;
}




/***/ }),

/***/ "./src/components/appHeader.js":
/*!*************************************!*\
  !*** ./src/components/appHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHeader": () => (/* binding */ appHeader)
/* harmony export */ });
/* harmony import */ var _appLogo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogo.js */ "./src/components/appLogo.js");
/* harmony import */ var _components_menuButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menuButton.js */ "./src/components/menuButton.js");
/* harmony import */ var _components_themeButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/themeButton.js */ "./src/components/themeButton.js");
/* harmony import */ var _viewOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewOptions.js */ "./src/components/viewOptions.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");






function appHeader() {
  let appHeader = (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("header");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(appHeader, "appHeader");
  appHeader.append((0,_components_menuButton_js__WEBPACK_IMPORTED_MODULE_1__.menuButton)(), (0,_appLogo_js__WEBPACK_IMPORTED_MODULE_0__.appLogo)(), (0,_components_themeButton_js__WEBPACK_IMPORTED_MODULE_2__.themeButton)());

  return appHeader;
}




/***/ }),

/***/ "./src/components/appLogo.js":
/*!***********************************!*\
  !*** ./src/components/appLogo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appLogo": () => (/* binding */ appLogo)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/Todo-ist Logo.svg */ "./src/image/Todo-ist Logo.svg");



function appLogo() {
  let appLogoContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    appName = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2"),
    logoImage = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  appName.textContent = "Do It";

  logoImage.setAttribute("src", _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__);
  logoImage.setAttribute(
    "alt",
    "Todo-ist Logo. Clipboards with checkmarks on them."
  );

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(appLogoContainer, "app-logo-container");

  appLogoContainer.append(logoImage, appName);

  return appLogoContainer;
}




/***/ }),

/***/ "./src/components/boardViewButton.js":
/*!*******************************************!*\
  !*** ./src/components/boardViewButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardViewButton": () => (/* binding */ boardViewButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_view_board_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/view-board.svg */ "./src/icons/view-board.svg");



function boardViewButton() {
  let boardViewButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  boardViewButton.textContent = "Board View";

  icon.setAttribute("src", _icons_view_board_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Board view icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(boardViewButton, "view-button");

  boardViewButton.prepend(icon);

  return boardViewButton;
}




/***/ }),

/***/ "./src/components/checkbox.js":
/*!************************************!*\
  !*** ./src/components/checkbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkbox": () => (/* binding */ checkbox)
/* harmony export */ });
/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskController.js */ "./src/components/taskController.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/check.svg */ "./src/icons/check.svg");




function checkbox(taskItemNumber) {
  let checkboxContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkbox = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkmark = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("img");

  checkmark.setAttribute("src", _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__);
  checkmark.setAttribute("alt", "Checkmark icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkbox, "checkbox");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkmark, "fade-in-out");
  (0,_taskController_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskStatus)(checkbox, taskItemNumber);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
}




/***/ }),

/***/ "./src/components/formValidationControls.js":
/*!**************************************************!*\
  !*** ./src/components/formValidationControls.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "missingValueAggressiveValidation": () => (/* binding */ missingValueAggressiveValidation)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


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

/***/ "./src/components/listViewButton.js":
/*!******************************************!*\
  !*** ./src/components/listViewButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listViewButton": () => (/* binding */ listViewButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_view_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/view-list.svg */ "./src/icons/view-list.svg");



function listViewButton() {
  let listViewButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  listViewButton.textContent = "List View";

  icon.setAttribute("src", _icons_view_list_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "List icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(listViewButton, "view-button");

  listViewButton.prepend(icon);

  return listViewButton;
}




/***/ }),

/***/ "./src/components/menuButton.js":
/*!**************************************!*\
  !*** ./src/components/menuButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuButton": () => (/* binding */ menuButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/menu.svg */ "./src/icons/menu.svg");



function menuButton() {
  let menuButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", _icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Menu icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(menuButton, "menu-button");

  menuButton.append(icon);

  return menuButton;
}




/***/ }),

/***/ "./src/components/menuController.js":
/*!******************************************!*\
  !*** ./src/components/menuController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuController": () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var _newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectOverlayForm.js */ "./src/components/newProjectOverlayForm.js");
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.js */ "./src/components/tab.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/formValidationControls.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");





// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarTransitionendListener = () => {
  let menubar = document.querySelector(".menu-bar");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
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
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
    } else {
      // Add listener to set menubar visibility off after it has transitioned
      // outside the viewport.
      addMenubarTransitionendListener(mainContent);
    }
    (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(mainContent, "closed");
  });
}

function displayNewProjectOverlayForm() {
  let newProjectButton = document.querySelector(".new-project-button");

  newProjectButton.addEventListener("click", () => {
    document.body.append((0,_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__.newProjectOverlayForm)());

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
    let bodyTag = document.body,
      newProjectOverlay = document.querySelector(".new-project-overlay"),
      projectList = document.querySelector(".project-list"),
      projectName = document.querySelector("#new-project-name").value,
      projectDescription = document.querySelector(
        "#new-project-description"
      ).value,
      projectTab = (0,_tab_js__WEBPACK_IMPORTED_MODULE_1__.tab)(projectName, "project-tab");

    projectList.append(projectTab);

    bodyTag.removeChild(newProjectOverlay);
  });
}

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}




/***/ }),

/***/ "./src/components/menuTabs.js":
/*!************************************!*\
  !*** ./src/components/menuTabs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTabs": () => (/* binding */ menuTabs)
/* harmony export */ });
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/components/tab.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");



function menuTabs() {
  let menuTabs = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    tabArr = ["Inbox", "Today", "This Week", "Completed"];

  for (let i = 0; i < 4; i++) {
    menuTabs.append((0,_tab_js__WEBPACK_IMPORTED_MODULE_0__.tab)(tabArr[i], 'tab'));
  }

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(menuTabs, "menu-tabs");

  return menuTabs;
}




/***/ }),

/***/ "./src/components/menubar.js":
/*!***********************************!*\
  !*** ./src/components/menubar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menubar": () => (/* binding */ menubar)
/* harmony export */ });
/* harmony import */ var _menuTabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuTabs.js */ "./src/components/menuTabs.js");
/* harmony import */ var _projectSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSection.js */ "./src/components/projectSection.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");




function menubar() {
  let menubar = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    linebreak = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(menubar, "menu-bar");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(linebreak, "linebreak");

  menubar.append((0,_menuTabs_js__WEBPACK_IMPORTED_MODULE_0__.menuTabs)(), linebreak, (0,_projectSection_js__WEBPACK_IMPORTED_MODULE_1__.projectSection)());

  return menubar;
}




/***/ }),

/***/ "./src/components/newProjectButton.js":
/*!********************************************!*\
  !*** ./src/components/newProjectButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectButton": () => (/* binding */ newProjectButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/plus.svg */ "./src/icons/plus.svg");



function newProjectButton() {
  let newProjectButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", _icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Add new project icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(newProjectButton, "new-project-button");

  newProjectButton.append(icon);

  return newProjectButton;
}




/***/ }),

/***/ "./src/components/newProjectOverlayForm.js":
/*!*************************************************!*\
  !*** ./src/components/newProjectOverlayForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectOverlayForm": () => (/* binding */ newProjectOverlayForm)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


function formHeader() {
  let headerContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    header = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");

  header.textContent = "New Project";

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headerContainer, "new-project-header-container");
  headerContainer.append(header);

  return headerContainer;
}

function projectNameFormField() {
  let projectNameContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    projectNameLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    projectNameInput = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("input");

  projectNameLabel.textContent = "Project Name:";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(projectNameLabel, projectNameInput);

  return projectNameContainer;
}

function projectDescriptionFormField() {
  let projectDescriptionContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    projectDescriptionLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    projectDescriptionTextarea = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea");

  projectDescriptionLabel.textContent = "Project Description:";
  projectDescriptionLabel.setAttribute("for", "new-project-description");
  projectDescriptionTextarea.setAttribute("id", "new-project-description");
  projectDescriptionTextarea.setAttribute("name", "newProjectDescription");
  projectDescriptionTextarea.setAttribute("rows", "3");
  projectDescriptionTextarea.setAttribute("maxlength", "300");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectDescriptionContainer, "new-project-description-form-field");

  projectDescriptionContainer.append(
    projectDescriptionLabel,
    projectDescriptionTextarea
  );

  return projectDescriptionContainer;
}

function createButton(text, cssClass) {
  let button = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  button.textContent = text;
  button.setAttribute("type", "button");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(button, cssClass);

  return button;
}

function projectFormButtons() {
  let buttonsContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    cancelNewProjectButton = createButton("Cancel", "new-project-form-cancel-button"),
    addNewProjectButton = createButton(
      "Add New Project",
      "new-project-form-add-button"
    );

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(buttonsContainer, "new-project-form-buttons");
  addNewProjectButton.setAttribute("disabled", "");
  buttonsContainer.append(cancelNewProjectButton, addNewProjectButton);

  return buttonsContainer;
}

function newProjectForm() {
  let newProjectForm = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("form"),
    newProjectButtons = projectFormButtons();

  newProjectForm.setAttribute("action", "");
  newProjectForm.setAttribute("method", "post");
  newProjectForm.setAttribute("name", "newProjectForm");
  newProjectForm.setAttribute("novalidate", "");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(newProjectForm, "new-project-form");

  newProjectForm.append(
    formHeader(),
    projectNameFormField(),
    projectDescriptionFormField(),
    newProjectButtons
  );

  return newProjectForm;
}

function newProjectOverlayForm() {
  let newProjectOverlay = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(newProjectOverlay, "new-project-overlay");
  newProjectOverlay.append(newProjectForm());

  return newProjectOverlay;
}




/***/ }),

/***/ "./src/components/projectList.js":
/*!***************************************!*\
  !*** ./src/components/projectList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


function projectList() {
  let projectList = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectList, "project-list");

  return projectList;
}




/***/ }),

/***/ "./src/components/projectSection.js":
/*!******************************************!*\
  !*** ./src/components/projectSection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSection": () => (/* binding */ projectSection)
/* harmony export */ });
/* harmony import */ var _newProjectButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectButton.js */ "./src/components/newProjectButton.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ "./src/components/projectList.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");




function projectSection() {
  let projectSection = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    projectHeader = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    heading = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2");

  heading.textContent = "Projects";

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectHeader, "project-header");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectSection, "project-section");

  projectHeader.append(heading, (0,_newProjectButton_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton)());
  projectSection.append(projectHeader, (0,_projectList_js__WEBPACK_IMPORTED_MODULE_1__.projectList)());

  return projectSection;
}




/***/ }),

/***/ "./src/components/tab.js":
/*!*******************************!*\
  !*** ./src/components/tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tab": () => (/* binding */ tab)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


function tab(text, cssClass) {
  let tab = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  tab.textContent = text;
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(tab, cssClass);

  return tab;
}




/***/ }),

/***/ "./src/components/taskController.js":
/*!******************************************!*\
  !*** ./src/components/taskController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "toggleTaskStatus": () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.js */ "./src/components/taskForm.js");
/* harmony import */ var _addTaskButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskButton.js */ "./src/components/addTaskButton.js");
/* harmony import */ var _taskItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskItem.js */ "./src/components/taskItem.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");





function setTaskEditable() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (e) => {
    let taskList = document.querySelector(".task-list");

    taskList.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)());
    taskList.removeChild(addTaskButton);

    // Activate listeners for form buttons
    cancelTaskEdit();
    addTaskToTaskList();
    isFormTaskHeaderEmpty();
  });
}

function cancelTaskEdit() {
  let cancelButton = document.querySelector(".form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskFormContainer = document.querySelector(".task-form-container");

    taskList.removeChild(taskFormContainer);

    if (!taskList.contains(document.querySelector(".add-task-button"))) {
      taskList.append((0,_addTaskButton_js__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)());
      setTaskEditable();
    }
  });
}

function addTaskToTaskList() {
  let formAddTaskButton = document.querySelector(".form-add-task-button");

  formAddTaskButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskFormContainer = document.querySelector(".task-form-container"),
      taskHeaderValue = document.querySelector("#form-task-header").value,
      taskDescriptionValue = document.querySelector(
        "#form-task-description"
      ).value,
      taskItemNumber = document.getElementsByClassName("task-item").length + 1;

    taskList.removeChild(taskFormContainer);
    taskList.append(
      (0,_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskHeaderValue, taskDescriptionValue, taskItemNumber),
      (0,_addTaskButton_js__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)()
    );

    setTaskEditable();
  });
}

// Aggressively checks if task header field is empty and disables "Add task button" if empty
function isFormTaskHeaderEmpty() {
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

function toggleTaskStatus(checkbox, taskItemNumber) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item = '${taskItemNumber}']`
      ),
      checkmark = checkbox.firstChild;

    if (taskItem.classList.contains("completed")) {
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.removeClass)(taskItem, "completed");
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(checkmark, "fade-in-out");
    } else {
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskItem, "completed");
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.removeClass)(checkmark, "fade-in-out");
    }
  });
}

function taskController() {
  // initialize event listener on app load
  setTaskEditable();
}




/***/ }),

/***/ "./src/components/taskForm.js":
/*!************************************!*\
  !*** ./src/components/taskForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");



function createTaskFormButton(text) {
  let button = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  button.textContent = text;
  button.setAttribute("type", "button");

  return button;
}

function createTaskHeaderField() {
  let headerContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    headerLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    headerInputField = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea");

  headerLabel.textContent = "Task Name";

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headerInputField, "form-task-header");

  headerContainer.append(headerLabel, headerInputField);

  return headerContainer;
}

function createTaskDescriptionField() {
  let descriptionContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    descriptionLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    descriptionInputField = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea");

  descriptionLabel.textContent = "Description";

  descriptionLabel.setAttribute("for", "form-task-description");
  descriptionInputField.setAttribute("id", "form-task-description");

  descriptionContainer.append(descriptionLabel, descriptionInputField);

  return descriptionContainer;
}

function taskForm() {
  let formContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    taskItemForm = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("form"),
    headerField = createTaskHeaderField(),
    descriptionField = createTaskDescriptionField(),
    buttonContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    cancelFormButton = createTaskFormButton("Cancel"),
    addTaskFormButton = createTaskFormButton("Add task");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(cancelFormButton, "form-cancel-button");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(addTaskFormButton, "form-add-task-button");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskItemForm, "task-form");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(formContainer, "task-form-container");

  addTaskFormButton.setAttribute("disabled", "");
  taskItemForm.setAttribute("novalidate", "");

  buttonContainer.append(cancelFormButton, addTaskFormButton);
  taskItemForm.append(headerField, descriptionField, buttonContainer);
  formContainer.append(taskItemForm);

  return formContainer;
}




/***/ }),

/***/ "./src/components/taskItem.js":
/*!************************************!*\
  !*** ./src/components/taskItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskItem": () => (/* binding */ taskItem)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/components/checkbox.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");



function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    taskInformationContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    taskHeaderElement = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3"),
    taskDescriptionElement = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskItem, "task-item");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskHeaderElement, "task-header");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskDescriptionElement, "task-description");
  taskItem.dataset.taskItem = taskItemNumber;

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);
  taskItem.append((0,_checkbox_js__WEBPACK_IMPORTED_MODULE_0__.checkbox)(taskItemNumber), taskInformationContainer);

  return taskItem;
}




/***/ }),

/***/ "./src/components/themeButton.js":
/*!***************************************!*\
  !*** ./src/components/themeButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeButton": () => (/* binding */ themeButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/light-theme.svg */ "./src/icons/light-theme.svg");



function themeButton() {
  let themeButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", _icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Light theme icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(themeButton, "theme-button");

  themeButton.append(icon);

  return themeButton;
}




/***/ }),

/***/ "./src/components/viewOptions.js":
/*!***************************************!*\
  !*** ./src/components/viewOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewOptions": () => (/* binding */ viewOptions)
/* harmony export */ });
/* harmony import */ var _components_boardViewButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/boardViewButton.js */ "./src/components/boardViewButton.js");
/* harmony import */ var _components_listViewButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/listViewButton.js */ "./src/components/listViewButton.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");




function viewOptions() {
  let viewOptions = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(viewOptions, "view-options");

  viewOptions.append((0,_components_boardViewButton_js__WEBPACK_IMPORTED_MODULE_0__.boardViewButton)(), (0,_components_listViewButton_js__WEBPACK_IMPORTED_MODULE_1__.listViewButton)());

  return viewOptions;
}




/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
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

function addClass(element, cssClass) {
  element.classList.add(cssClass);
}

function removeClass(element, cssClass) {
  element.classList.remove(cssClass);
}

function toggleClass(element, cssClass) {
  element.classList.toggle(cssClass);
}




/***/ }),

/***/ "./src/icons/check.svg":
/*!*****************************!*\
  !*** ./src/icons/check.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddce2e1e5ef60024f029.svg";

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

/***/ "./src/icons/view-board.svg":
/*!**********************************!*\
  !*** ./src/icons/view-board.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d6f85604211320659ca.svg";

/***/ }),

/***/ "./src/icons/view-list.svg":
/*!*********************************!*\
  !*** ./src/icons/view-list.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "176525d5635b224dfd88.svg";

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
/* harmony import */ var _components_appHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/appHeader.js */ "./src/components/appHeader.js");
/* harmony import */ var _components_taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/taskController.js */ "./src/components/taskController.js");
/* harmony import */ var _components_menuController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menuController */ "./src/components/menuController.js");
/* harmony import */ var _components_addTaskButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/addTaskButton.js */ "./src/components/addTaskButton.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");
/* harmony import */ var _components_menubar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menubar.js */ "./src/components/menubar.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");








function initControllers() {
  (0,_components_taskController_js__WEBPACK_IMPORTED_MODULE_1__.taskController)();
  (0,_components_menuController__WEBPACK_IMPORTED_MODULE_2__.menuController)();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("main"),
    taskList = (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("div"),
    addTaskButtonOnLoad = (0,_components_addTaskButton_js__WEBPACK_IMPORTED_MODULE_3__.addTaskButton)();

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(taskList, "task-list");

  taskList.append(addTaskButtonOnLoad);
  mainTag.append((0,_components_menubar_js__WEBPACK_IMPORTED_MODULE_5__.menubar)(), taskList);
  bodyTag.append((0,_components_appHeader_js__WEBPACK_IMPORTED_MODULE_0__.appHeader)(), mainTag);
}

(function initApp() {
  renderPage();
  initControllers();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDVTtBQUNIO0FBQ0M7QUFDUjtBQUNKO0FBQ2pCOztBQUVqQztBQUNBLEVBQUUsNkVBQWM7QUFDaEIsRUFBRSwwRUFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYyx5REFBYTtBQUMzQixlQUFlLHlEQUFhO0FBQzVCLDBCQUEwQiwyRUFBYTs7QUFFdkMsRUFBRSxvREFBUTs7QUFFVjtBQUNBLGlCQUFpQiwrREFBTztBQUN4QixpQkFBaUIsbUVBQVM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzP2JmZmMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGRUYXNrQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBMb2dvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2JvYXJkVmlld0J1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9mb3JtVmFsaWRhdGlvbkNvbnRyb2xzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xpc3RWaWV3QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21lbnVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudVRhYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uZXdQcm9qZWN0QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25ld1Byb2plY3RPdmVybGF5Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGhlbWVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdmlld09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyID4gaDIge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgKi9cXG59XFxuXFxuLnRoZW1lLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLnZpZXctYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4udmlldy1idXR0b24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4udmlldy1vcHRpb25zIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5tZW51LWJhciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWVudS10YWJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4udGFiIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50YWI6aG92ZXIsXFxuLnByb2plY3QtdGFiOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmxpbmVicmVhayB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qtb3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mYWRlLWluLW91dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMHB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYOzs7a0NBR2dDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7OztrQ0FHZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBoMiB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbn1cXG5cXG4udGhlbWUtYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4udmlldy1idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi52aWV3LWJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi52aWV3LW9wdGlvbnMge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtYmFyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tZW51LXRhYnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhYjpob3ZlcixcXG4ucHJvamVjdC10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubGluZWJyZWFrIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5uZXctcHJvamVjdC1vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1idXR0b25zIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmZhZGUtaW4tb3V0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcblxcbi5mYWRlLWluLW91dDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2xvc2VkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwcHgpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGFkZFRhc2tCdXR0b24oKSB7XG4gIGxldCB0YXNrQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICBhZGRDbGFzcyh0YXNrQnV0dG9uLCBcImFkZC10YXNrLWJ1dHRvblwiKTtcblxuICByZXR1cm4gdGFza0J1dHRvbjtcbn1cblxuZXhwb3J0IHsgYWRkVGFza0J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgYXBwTG9nbyB9IGZyb20gXCIuL2FwcExvZ28uanNcIjtcbmltcG9ydCB7IG1lbnVCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZW51QnV0dG9uLmpzXCI7XG5pbXBvcnQgeyB0aGVtZUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RoZW1lQnV0dG9uLmpzXCI7XG5pbXBvcnQgeyB2aWV3T3B0aW9ucyB9IGZyb20gXCIuL3ZpZXdPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gYXBwSGVhZGVyKCkge1xuICBsZXQgYXBwSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBhZGRDbGFzcyhhcHBIZWFkZXIsIFwiYXBwSGVhZGVyXCIpO1xuICBhcHBIZWFkZXIuYXBwZW5kKG1lbnVCdXR0b24oKSwgYXBwTG9nbygpLCB0aGVtZUJ1dHRvbigpKTtcblxuICByZXR1cm4gYXBwSGVhZGVyO1xufVxuXG5leHBvcnQgeyBhcHBIZWFkZXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSBcIi4uL2ltYWdlL1RvZG8taXN0IExvZ28uc3ZnXCI7XG5cbmZ1bmN0aW9uIGFwcExvZ28oKSB7XG4gIGxldCBhcHBMb2dvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBhcHBOYW1lID0gY3JlYXRlRWxlbWVudChcImgyXCIpLFxuICAgIGxvZ29JbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgYXBwTmFtZS50ZXh0Q29udGVudCA9IFwiRG8gSXRcIjtcblxuICBsb2dvSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxvZ29JbWcpO1xuICBsb2dvSW1hZ2Uuc2V0QXR0cmlidXRlKFxuICAgIFwiYWx0XCIsXG4gICAgXCJUb2RvLWlzdCBMb2dvLiBDbGlwYm9hcmRzIHdpdGggY2hlY2ttYXJrcyBvbiB0aGVtLlwiXG4gICk7XG5cbiAgYWRkQ2xhc3MoYXBwTG9nb0NvbnRhaW5lciwgXCJhcHAtbG9nby1jb250YWluZXJcIik7XG5cbiAgYXBwTG9nb0NvbnRhaW5lci5hcHBlbmQobG9nb0ltYWdlLCBhcHBOYW1lKTtcblxuICByZXR1cm4gYXBwTG9nb0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgYXBwTG9nbyB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgYm9hcmRJY29uIGZyb20gXCIuLi9pY29ucy92aWV3LWJvYXJkLnN2Z1wiO1xuXG5mdW5jdGlvbiBib2FyZFZpZXdCdXR0b24oKSB7XG4gIGxldCBib2FyZFZpZXdCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICAgIGljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGJvYXJkVmlld0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQm9hcmQgVmlld1wiO1xuXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGJvYXJkSWNvbik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQm9hcmQgdmlldyBpY29uXCIpO1xuXG4gIGFkZENsYXNzKGJvYXJkVmlld0J1dHRvbiwgXCJ2aWV3LWJ1dHRvblwiKTtcblxuICBib2FyZFZpZXdCdXR0b24ucHJlcGVuZChpY29uKTtcblxuICByZXR1cm4gYm9hcmRWaWV3QnV0dG9uO1xufVxuXG5leHBvcnQgeyBib2FyZFZpZXdCdXR0b24gfTtcbiIsImltcG9ydCB7IHRvZ2dsZVRhc2tTdGF0dXMgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgY2hlY2ttYXJrSWNvbiBmcm9tIFwiLi4vaWNvbnMvY2hlY2suc3ZnXCI7XG5cbmZ1bmN0aW9uIGNoZWNrYm94KHRhc2tJdGVtTnVtYmVyKSB7XG4gIGxldCBjaGVja2JveENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNoZWNrbWFyayA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjaGVja21hcmtJY29uKTtcbiAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNoZWNrbWFyayBpY29uXCIpO1xuXG4gIGFkZENsYXNzKGNoZWNrYm94LCBcImNoZWNrYm94XCIpO1xuICBhZGRDbGFzcyhjaGVja21hcmssIFwiZmFkZS1pbi1vdXRcIik7XG4gIHRvZ2dsZVRhc2tTdGF0dXMoY2hlY2tib3gsIHRhc2tJdGVtTnVtYmVyKTtcblxuICBjaGVja2JveC5hcHBlbmQoY2hlY2ttYXJrKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGNoZWNrYm94KTtcblxuICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNoZWNrYm94IH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbi8vIEFnZ3Jlc3NpdmVseSBjaGVja3MgYW5kIGRpc2FibGVzIHRoZSBhZGQgYnV0dG9uIGlmIGlmIGZvcm0gZmllbGQgaXMgZW1wdHlcbmZ1bmN0aW9uIG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uKGV2ZW50TGlzdGVuZXJOb2RlLCBidXR0b25Ub0Rpc2FibGUpIHtcbiAgZXZlbnRMaXN0ZW5lck5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgYnV0dG9uVG9EaXNhYmxlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25Ub0Rpc2FibGUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuaW1wb3J0IGxpc3RJY29uIGZyb20gXCIuLi9pY29ucy92aWV3LWxpc3Quc3ZnXCI7XG5cbmZ1bmN0aW9uIGxpc3RWaWV3QnV0dG9uKCkge1xuICBsZXQgbGlzdFZpZXdCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICAgIGljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGxpc3RWaWV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJMaXN0IFZpZXdcIjtcblxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsaXN0SWNvbik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTGlzdCBpY29uXCIpO1xuXG4gIGFkZENsYXNzKGxpc3RWaWV3QnV0dG9uLCBcInZpZXctYnV0dG9uXCIpO1xuXG4gIGxpc3RWaWV3QnV0dG9uLnByZXBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIGxpc3RWaWV3QnV0dG9uO1xufVxuXG5leHBvcnQgeyBsaXN0Vmlld0J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgbWVudUljb24gZnJvbSBcIi4uL2ljb25zL21lbnUuc3ZnXCI7XG5cbmZ1bmN0aW9uIG1lbnVCdXR0b24oKSB7XG4gIGxldCBtZW51QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgICBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtZW51SWNvbik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTWVudSBpY29uXCIpO1xuXG4gIGFkZENsYXNzKG1lbnVCdXR0b24sIFwibWVudS1idXR0b25cIik7XG5cbiAgbWVudUJ1dHRvbi5hcHBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIG1lbnVCdXR0b247XG59XG5cbmV4cG9ydCB7IG1lbnVCdXR0b24gfTtcbiIsImltcG9ydCB7IG5ld1Byb2plY3RPdmVybGF5Rm9ybSB9IGZyb20gXCIuL25ld1Byb2plY3RPdmVybGF5Rm9ybS5qc1wiO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSBcIi4vdGFiLmpzXCI7XG5pbXBvcnQgeyBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbiB9IGZyb20gXCIuL2Zvcm1WYWxpZGF0aW9uQ29udHJvbHMuanNcIjtcbmltcG9ydCB7IHRvZ2dsZUNsYXNzIH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG4vLyBFdmVudCBMaXN0ZW5lcnMgZXhwZWN0IGEgZnVuY3Rpb24gcmVmZXJlbmNlIGluc3RlYWQgb2YgdGhlIGZ1bmN0aW9uIGl0c2VsZi5cbi8vIFRvIGF2b2lkIGNhbGxpbmcgZnVuY3Rpb24gaW1tZWRpYXRlbHksIGVpdGhlciBiaW5kICd0aGlzJywgY3JlYXRlIGFuXG4vLyBhbm9ueW1vdXMgZnVuY3Rpb24sIG9yIGhhdmUgYSBmdW5jdGlvbiByZXR1cm4gYSBmdW5jdGlvbi5cbmxldCBtZW51YmFyVHJhbnNpdGlvbmVuZExpc3RlbmVyID0gKCkgPT4ge1xuICBsZXQgbWVudWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1iYXJcIik7XG4gIHRvZ2dsZUNsYXNzKG1lbnViYXIsIFwiaGlkZVwiKTtcbn07XG5cbmZ1bmN0aW9uIGFkZE1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpIHtcbiAgbWFpbkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgbWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpIHtcbiAgbWFpbkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBcInRyYW5zaXRpb25lbmRcIixcbiAgICBtZW51YmFyVHJhbnNpdGlvbmVuZExpc3RlbmVyXG4gICk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnViYXJWaXNpYmlsaXR5KCkge1xuICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIiksXG4gICAgbWVudWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1iYXJcIiksXG4gICAgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG1haW5Db250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGJlZm9yZSBzdGFydGluZyB0cmFuc2l0aW9uIHRvIGF2b2lkIHRyaWdnZXJpbmcgdGhlXG4gICAgICAvLyBsaXN0ZW5lciB0byBoaWRlIHRoZSBtZW51IHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgIHJlbW92ZU1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpO1xuXG4gICAgICAvLyBNYWtlIG1lbnUgdmlzaWJsZSBiZWZvcmUgc3RhcnRpbmcgdHJhbnNpdGlvbiB0byBzaG93IG1lbnUuXG4gICAgICB0b2dnbGVDbGFzcyhtZW51YmFyLCBcImhpZGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBsaXN0ZW5lciB0byBzZXQgbWVudWJhciB2aXNpYmlsaXR5IG9mZiBhZnRlciBpdCBoYXMgdHJhbnNpdGlvbmVkXG4gICAgICAvLyBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgIGFkZE1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIobWFpbkNvbnRlbnQpO1xuICAgIH1cbiAgICB0b2dnbGVDbGFzcyhtYWluQ29udGVudCwgXCJjbG9zZWRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdE92ZXJsYXlGb3JtKCkge1xuICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uXCIpO1xuXG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChuZXdQcm9qZWN0T3ZlcmxheUZvcm0oKSk7XG5cbiAgICBsZXQgbmV3UHJvamVjdE5hbWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLFxuICAgICAgbmV3UHJvamVjdEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLm5ldy1wcm9qZWN0LWZvcm0tYWRkLWJ1dHRvblwiXG4gICAgICApO1xuXG4gICAgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24obmV3UHJvamVjdE5hbWVOb2RlLCBuZXdQcm9qZWN0QWRkQnV0dG9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbE5ld1Byb2plY3RCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtZm9ybS1jYW5jZWwtYnV0dG9uXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBib2R5VGFnID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIG5ld1Byb2plY3RPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1vdmVybGF5XCIpO1xuXG4gICAgYm9keVRhZy5yZW1vdmVDaGlsZChuZXdQcm9qZWN0T3ZlcmxheSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKSB7XG4gIGxldCBhZGROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5uZXctcHJvamVjdC1mb3JtLWFkZC1idXR0b25cIlxuICApO1xuXG4gIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgYm9keVRhZyA9IGRvY3VtZW50LmJvZHksXG4gICAgICBuZXdQcm9qZWN0T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3Qtb3ZlcmxheVwiKSxcbiAgICAgIHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIiksXG4gICAgICBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtbmFtZVwiKS52YWx1ZSxcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICkudmFsdWUsXG4gICAgICBwcm9qZWN0VGFiID0gdGFiKHByb2plY3ROYW1lLCBcInByb2plY3QtdGFiXCIpO1xuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RUYWIpO1xuXG4gICAgYm9keVRhZy5yZW1vdmVDaGlsZChuZXdQcm9qZWN0T3ZlcmxheSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigpIHtcbiAgdG9nZ2xlTWVudWJhclZpc2liaWxpdHkoKTtcbiAgZGlzcGxheU5ld1Byb2plY3RPdmVybGF5Rm9ybSgpO1xufVxuXG5leHBvcnQgeyBtZW51Q29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgdGFiIH0gZnJvbSBcIi4vdGFiLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gbWVudVRhYnMoKSB7XG4gIGxldCBtZW51VGFicyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFiQXJyID0gW1wiSW5ib3hcIiwgXCJUb2RheVwiLCBcIlRoaXMgV2Vla1wiLCBcIkNvbXBsZXRlZFwiXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIG1lbnVUYWJzLmFwcGVuZCh0YWIodGFiQXJyW2ldLCAndGFiJykpO1xuICB9XG5cbiAgYWRkQ2xhc3MobWVudVRhYnMsIFwibWVudS10YWJzXCIpO1xuXG4gIHJldHVybiBtZW51VGFicztcbn1cblxuZXhwb3J0IHsgbWVudVRhYnMgfTtcbiIsImltcG9ydCB7IG1lbnVUYWJzIH0gZnJvbSBcIi4vbWVudVRhYnMuanNcIjtcbmltcG9ydCB7IHByb2plY3RTZWN0aW9uIH0gZnJvbSBcIi4vcHJvamVjdFNlY3Rpb24uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBtZW51YmFyKCkge1xuICBsZXQgbWVudWJhciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgbGluZWJyZWFrID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhtZW51YmFyLCBcIm1lbnUtYmFyXCIpO1xuICBhZGRDbGFzcyhsaW5lYnJlYWssIFwibGluZWJyZWFrXCIpO1xuXG4gIG1lbnViYXIuYXBwZW5kKG1lbnVUYWJzKCksIGxpbmVicmVhaywgcHJvamVjdFNlY3Rpb24oKSk7XG5cbiAgcmV0dXJuIG1lbnViYXI7XG59XG5cbmV4cG9ydCB7IG1lbnViYXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuaW1wb3J0IHBsdXNJY29uIGZyb20gXCIuLi9pY29ucy9wbHVzLnN2Z1wiO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnV0dG9uKCkge1xuICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gICAgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGx1c0ljb24pO1xuICBpY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkFkZCBuZXcgcHJvamVjdCBpY29uXCIpO1xuXG4gIGFkZENsYXNzKG5ld1Byb2plY3RCdXR0b24sIFwibmV3LXByb2plY3QtYnV0dG9uXCIpO1xuXG4gIG5ld1Byb2plY3RCdXR0b24uYXBwZW5kKGljb24pO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0QnV0dG9uO1xufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0QnV0dG9uIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gZm9ybUhlYWRlcigpIHtcbiAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcblxuICBhZGRDbGFzcyhoZWFkZXJDb250YWluZXIsIFwibmV3LXByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xuXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRm9ybUZpZWxkKCkge1xuICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3ROYW1lTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgcHJvamVjdE5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG4gIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0LW5hbWVcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ld1Byb2plY3ROYW1lXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE1MFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0TmFtZUNvbnRhaW5lciwgXCJuZXctcHJvamVjdC1uYW1lLWZvcm0tZmllbGRcIik7XG5cbiAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTGFiZWwsIHByb2plY3ROYW1lSW5wdXQpO1xuXG4gIHJldHVybiBwcm9qZWN0TmFtZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdERlc2NyaXB0aW9uRm9ybUZpZWxkKCkge1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBEZXNjcmlwdGlvbjpcIjtcbiAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LXByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXdQcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIzXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMDBcIik7XG5cbiAgYWRkQ2xhc3MocHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyLCBcIm5ldy1wcm9qZWN0LWRlc2NyaXB0aW9uLWZvcm0tZmllbGRcIik7XG5cbiAgcHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0YXJlYVxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0LCBjc3NDbGFzcykge1xuICBsZXQgYnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkQ2xhc3MoYnV0dG9uLCBjc3NDbGFzcyk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm1CdXR0b25zKCkge1xuICBsZXQgYnV0dG9uc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2FuY2VsTmV3UHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIkNhbmNlbFwiLCBcIm5ldy1wcm9qZWN0LWZvcm0tY2FuY2VsLWJ1dHRvblwiKSxcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKFxuICAgICAgXCJBZGQgTmV3IFByb2plY3RcIixcbiAgICAgIFwibmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgICApO1xuXG4gIGFkZENsYXNzKGJ1dHRvbnNDb250YWluZXIsIFwibmV3LXByb2plY3QtZm9ybS1idXR0b25zXCIpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChjYW5jZWxOZXdQcm9qZWN0QnV0dG9uLCBhZGROZXdQcm9qZWN0QnV0dG9uKTtcblxuICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICAgIG5ld1Byb2plY3RCdXR0b25zID0gcHJvamVjdEZvcm1CdXR0b25zKCk7XG5cbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdEZvcm1cIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XG5cbiAgYWRkQ2xhc3MobmV3UHJvamVjdEZvcm0sIFwibmV3LXByb2plY3QtZm9ybVwiKTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmQoXG4gICAgZm9ybUhlYWRlcigpLFxuICAgIHByb2plY3ROYW1lRm9ybUZpZWxkKCksXG4gICAgcHJvamVjdERlc2NyaXB0aW9uRm9ybUZpZWxkKCksXG4gICAgbmV3UHJvamVjdEJ1dHRvbnNcbiAgKTtcblxuICByZXR1cm4gbmV3UHJvamVjdEZvcm07XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RPdmVybGF5Rm9ybSgpIHtcbiAgbGV0IG5ld1Byb2plY3RPdmVybGF5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhuZXdQcm9qZWN0T3ZlcmxheSwgXCJuZXctcHJvamVjdC1vdmVybGF5XCIpO1xuICBuZXdQcm9qZWN0T3ZlcmxheS5hcHBlbmQobmV3UHJvamVjdEZvcm0oKSk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RPdmVybGF5O1xufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0T3ZlcmxheUZvcm0gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdCgpIHtcbiAgbGV0IHByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0TGlzdCwgXCJwcm9qZWN0LWxpc3RcIik7XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCB9O1xuIiwiaW1wb3J0IHsgbmV3UHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuL25ld1Byb2plY3RCdXR0b24uanNcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdExpc3QuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0U2VjdGlvbigpIHtcbiAgbGV0IHByb2plY3RTZWN0aW9uID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBwcm9qZWN0SGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkaW5nID0gY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgYWRkQ2xhc3MocHJvamVjdEhlYWRlciwgXCJwcm9qZWN0LWhlYWRlclwiKTtcbiAgYWRkQ2xhc3MocHJvamVjdFNlY3Rpb24sIFwicHJvamVjdC1zZWN0aW9uXCIpO1xuXG4gIHByb2plY3RIZWFkZXIuYXBwZW5kKGhlYWRpbmcsIG5ld1Byb2plY3RCdXR0b24oKSk7XG4gIHByb2plY3RTZWN0aW9uLmFwcGVuZChwcm9qZWN0SGVhZGVyLCBwcm9qZWN0TGlzdCgpKTtcblxuICByZXR1cm4gcHJvamVjdFNlY3Rpb247XG59XG5cbmV4cG9ydCB7IHByb2plY3RTZWN0aW9uIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFiKHRleHQsIGNzc0NsYXNzKSB7XG4gIGxldCB0YWIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHRhYi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGFkZENsYXNzKHRhYiwgY3NzQ2xhc3MpO1xuXG4gIHJldHVybiB0YWI7XG59XG5cbmV4cG9ydCB7IHRhYiB9O1xuIiwiaW1wb3J0IHsgdGFza0Zvcm0gfSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xuaW1wb3J0IHsgYWRkVGFza0J1dHRvbiB9IGZyb20gXCIuL2FkZFRhc2tCdXR0b24uanNcIjtcbmltcG9ydCB7IHRhc2tJdGVtIH0gZnJvbSBcIi4vdGFza0l0ZW0uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gc2V0VGFza0VkaXRhYmxlKCkge1xuICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG5cbiAgICB0YXNrTGlzdC5hcHBlbmQodGFza0Zvcm0oKSk7XG4gICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICAvLyBBY3RpdmF0ZSBsaXN0ZW5lcnMgZm9yIGZvcm0gYnV0dG9uc1xuICAgIGNhbmNlbFRhc2tFZGl0KCk7XG4gICAgYWRkVGFza1RvVGFza0xpc3QoKTtcbiAgICBpc0Zvcm1UYXNrSGVhZGVyRW1wdHkoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2tFZGl0KCkge1xuICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNhbmNlbC1idXR0b25cIik7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIiksXG4gICAgICB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcblxuICAgIGlmICghdGFza0xpc3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIikpKSB7XG4gICAgICB0YXNrTGlzdC5hcHBlbmQoYWRkVGFza0J1dHRvbigpKTtcbiAgICAgIHNldFRhc2tFZGl0YWJsZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Rhc2tMaXN0KCkge1xuICBsZXQgZm9ybUFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tYWRkLXRhc2stYnV0dG9uXCIpO1xuXG4gIGZvcm1BZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIiksXG4gICAgICB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtLWNvbnRhaW5lclwiKSxcbiAgICAgIHRhc2tIZWFkZXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKS52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZm9ybS10YXNrLWRlc2NyaXB0aW9uXCJcbiAgICAgICkudmFsdWUsXG4gICAgICB0YXNrSXRlbU51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWl0ZW1cIikubGVuZ3RoICsgMTtcblxuICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICB0YXNrTGlzdC5hcHBlbmQoXG4gICAgICB0YXNrSXRlbSh0YXNrSGVhZGVyVmFsdWUsIHRhc2tEZXNjcmlwdGlvblZhbHVlLCB0YXNrSXRlbU51bWJlciksXG4gICAgICBhZGRUYXNrQnV0dG9uKClcbiAgICApO1xuXG4gICAgc2V0VGFza0VkaXRhYmxlKCk7XG4gIH0pO1xufVxuXG4vLyBBZ2dyZXNzaXZlbHkgY2hlY2tzIGlmIHRhc2sgaGVhZGVyIGZpZWxkIGlzIGVtcHR5IGFuZCBkaXNhYmxlcyBcIkFkZCB0YXNrIGJ1dHRvblwiIGlmIGVtcHR5XG5mdW5jdGlvbiBpc0Zvcm1UYXNrSGVhZGVyRW1wdHkoKSB7XG4gIGxldCBmb3JtVGFza0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKSxcbiAgICBmb3JtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1hZGQtdGFzay1idXR0b25cIik7XG5cbiAgZm9ybVRhc2tIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZm9ybUFkZFRhc2tCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1BZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tTdGF0dXMoY2hlY2tib3gsIHRhc2tJdGVtTnVtYmVyKSB7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXRhc2staXRlbSA9ICcke3Rhc2tJdGVtTnVtYmVyfSddYFxuICAgICAgKSxcbiAgICAgIGNoZWNrbWFyayA9IGNoZWNrYm94LmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKSB7XG4gICAgICByZW1vdmVDbGFzcyh0YXNrSXRlbSwgXCJjb21wbGV0ZWRcIik7XG4gICAgICBhZGRDbGFzcyhjaGVja21hcmssIFwiZmFkZS1pbi1vdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRhc2tJdGVtLCBcImNvbXBsZXRlZFwiKTtcbiAgICAgIHJlbW92ZUNsYXNzKGNoZWNrbWFyaywgXCJmYWRlLWluLW91dFwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0YXNrQ29udHJvbGxlcigpIHtcbiAgLy8gaW5pdGlhbGl6ZSBldmVudCBsaXN0ZW5lciBvbiBhcHAgbG9hZFxuICBzZXRUYXNrRWRpdGFibGUoKTtcbn1cblxuZXhwb3J0IHsgdGFza0NvbnRyb2xsZXIsIHRvZ2dsZVRhc2tTdGF0dXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZENsYXNzIH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtQnV0dG9uKHRleHQpIHtcbiAgbGV0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0hlYWRlckZpZWxkKCkge1xuICBsZXQgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkZXJMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBoZWFkZXJJbnB1dEZpZWxkID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIGhlYWRlckxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWVcIjtcblxuICBoZWFkZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXRhc2staGVhZGVyXCIpO1xuICBoZWFkZXJJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS10YXNrLWhlYWRlclwiKTtcbiAgaGVhZGVySW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgYWRkQ2xhc3MoaGVhZGVySW5wdXRGaWVsZCwgXCJmb3JtLXRhc2staGVhZGVyXCIpO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTGFiZWwsIGhlYWRlcklucHV0RmllbGQpO1xuXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZXNjcmlwdGlvbkZpZWxkKCkge1xuICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGRlc2NyaXB0aW9uTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgZGVzY3JpcHRpb25JbnB1dEZpZWxkID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXRhc2stZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tdGFzay1kZXNjcmlwdGlvblwiKTtcblxuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dEZpZWxkKTtcblxuICByZXR1cm4gZGVzY3JpcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICBsZXQgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0l0ZW1Gb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gICAgaGVhZGVyRmllbGQgPSBjcmVhdGVUYXNrSGVhZGVyRmllbGQoKSxcbiAgICBkZXNjcmlwdGlvbkZpZWxkID0gY3JlYXRlVGFza0Rlc2NyaXB0aW9uRmllbGQoKSxcbiAgICBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNhbmNlbEZvcm1CdXR0b24gPSBjcmVhdGVUYXNrRm9ybUJ1dHRvbihcIkNhbmNlbFwiKSxcbiAgICBhZGRUYXNrRm9ybUJ1dHRvbiA9IGNyZWF0ZVRhc2tGb3JtQnV0dG9uKFwiQWRkIHRhc2tcIik7XG5cbiAgYWRkQ2xhc3MoY2FuY2VsRm9ybUJ1dHRvbiwgXCJmb3JtLWNhbmNlbC1idXR0b25cIik7XG4gIGFkZENsYXNzKGFkZFRhc2tGb3JtQnV0dG9uLCBcImZvcm0tYWRkLXRhc2stYnV0dG9uXCIpO1xuICBhZGRDbGFzcyh0YXNrSXRlbUZvcm0sIFwidGFzay1mb3JtXCIpO1xuICBhZGRDbGFzcyhmb3JtQ29udGFpbmVyLCBcInRhc2stZm9ybS1jb250YWluZXJcIik7XG5cbiAgYWRkVGFza0Zvcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIHRhc2tJdGVtRm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsIFwiXCIpO1xuXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsRm9ybUJ1dHRvbiwgYWRkVGFza0Zvcm1CdXR0b24pO1xuICB0YXNrSXRlbUZvcm0uYXBwZW5kKGhlYWRlckZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBidXR0b25Db250YWluZXIpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0YXNrSXRlbUZvcm0pO1xuXG4gIHJldHVybiBmb3JtQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyB0YXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgY2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tJdGVtKHRhc2tIZWFkZXJWYWx1ZSwgdGFza0Rlc2NyaXB0aW9uVmFsdWUsIHRhc2tJdGVtTnVtYmVyKSB7XG4gIGxldCB0YXNrSXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0luZm9ybWF0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrSGVhZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiKSxcbiAgICB0YXNrRGVzY3JpcHRpb25FbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgdGFza0hlYWRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrSGVhZGVyVmFsdWU7XG4gIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25WYWx1ZTtcblxuICBhZGRDbGFzcyh0YXNrSXRlbSwgXCJ0YXNrLWl0ZW1cIik7XG4gIGFkZENsYXNzKHRhc2tIZWFkZXJFbGVtZW50LCBcInRhc2staGVhZGVyXCIpO1xuICBhZGRDbGFzcyh0YXNrRGVzY3JpcHRpb25FbGVtZW50LCBcInRhc2stZGVzY3JpcHRpb25cIik7XG4gIHRhc2tJdGVtLmRhdGFzZXQudGFza0l0ZW0gPSB0YXNrSXRlbU51bWJlcjtcblxuICB0YXNrSW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKHRhc2tIZWFkZXJFbGVtZW50LCB0YXNrRGVzY3JpcHRpb25FbGVtZW50KTtcbiAgdGFza0l0ZW0uYXBwZW5kKGNoZWNrYm94KHRhc2tJdGVtTnVtYmVyKSwgdGFza0luZm9ybWF0aW9uQ29udGFpbmVyKTtcblxuICByZXR1cm4gdGFza0l0ZW07XG59XG5cbmV4cG9ydCB7IHRhc2tJdGVtIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcbmltcG9ydCBsaWdodEljb24gZnJvbSBcIi4uL2ljb25zL2xpZ2h0LXRoZW1lLnN2Z1wiO1xuXG5mdW5jdGlvbiB0aGVtZUJ1dHRvbigpIHtcbiAgbGV0IHRoZW1lQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgICBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsaWdodEljb24pO1xuICBpY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkxpZ2h0IHRoZW1lIGljb25cIik7XG5cbiAgYWRkQ2xhc3ModGhlbWVCdXR0b24sIFwidGhlbWUtYnV0dG9uXCIpO1xuXG4gIHRoZW1lQnV0dG9uLmFwcGVuZChpY29uKTtcblxuICByZXR1cm4gdGhlbWVCdXR0b247XG59XG5cbmV4cG9ydCB7IHRoZW1lQnV0dG9uIH07XG4iLCJpbXBvcnQgeyBib2FyZFZpZXdCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ib2FyZFZpZXdCdXR0b24uanNcIjtcbmltcG9ydCB7IGxpc3RWaWV3QnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGlzdFZpZXdCdXR0b24uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB2aWV3T3B0aW9ucygpIHtcbiAgbGV0IHZpZXdPcHRpb25zID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyh2aWV3T3B0aW9ucywgXCJ2aWV3LW9wdGlvbnNcIik7XG5cbiAgdmlld09wdGlvbnMuYXBwZW5kKGJvYXJkVmlld0J1dHRvbigpLCBsaXN0Vmlld0J1dHRvbigpKTtcblxuICByZXR1cm4gdmlld09wdGlvbnM7XG59XG5cbmV4cG9ydCB7IHZpZXdPcHRpb25zIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjc3NDbGFzcyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgdG9nZ2xlQ2xhc3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhcHBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcEhlYWRlci5qc1wiO1xuaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBtZW51Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGFkZFRhc2tCdXR0b24gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZFRhc2tCdXR0b24uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgeyBtZW51YmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51YmFyLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBpbml0Q29udHJvbGxlcnMoKSB7XG4gIHRhc2tDb250cm9sbGVyKCk7XG4gIG1lbnVDb250cm9sbGVyKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gIGxldCBib2R5VGFnID0gZG9jdW1lbnQuYm9keSxcbiAgICBtYWluVGFnID0gY3JlYXRlRWxlbWVudChcIm1haW5cIiksXG4gICAgdGFza0xpc3QgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFkZFRhc2tCdXR0b25PbkxvYWQgPSBhZGRUYXNrQnV0dG9uKCk7XG5cbiAgYWRkQ2xhc3ModGFza0xpc3QsIFwidGFzay1saXN0XCIpO1xuXG4gIHRhc2tMaXN0LmFwcGVuZChhZGRUYXNrQnV0dG9uT25Mb2FkKTtcbiAgbWFpblRhZy5hcHBlbmQobWVudWJhcigpLCB0YXNrTGlzdCk7XG4gIGJvZHlUYWcuYXBwZW5kKGFwcEhlYWRlcigpLCBtYWluVGFnKTtcbn1cblxuKGZ1bmN0aW9uIGluaXRBcHAoKSB7XG4gIHJlbmRlclBhZ2UoKTtcbiAgaW5pdENvbnRyb2xsZXJzKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9