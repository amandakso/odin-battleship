/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n}\n\n.boards, .setup {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.gameBtns {\n    display: none;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.shade {\n    background-color: grey;\n}\n\n.color {\n    background-color: grey;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n}\n\n.boards, .setup {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.gameBtns {\n    display: none;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.shade {\n    background-color: grey;\n}\n\n.color {\n    background-color: grey;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBoards": () => (/* binding */ deleteBoards),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderButtons": () => (/* binding */ renderButtons),
/* harmony export */   "setUpBoard": () => (/* binding */ setUpBoard)
/* harmony export */ });
const playerFactory = __webpack_require__(/*! ./player */ "./src/player.js");

const numberOfSquares = 10; // number of squares in one row

const setUpBoard = (player) => {
  const setup = document.querySelector('.setup');
  const btn = document.createElement('button');
  btn.classList.add('axis');
  btn.innerText = 'X-AXIS';
  btn.value = 'x';
  btn.addEventListener('click', () => {
    const axis = btn.value === 'x' ? 'y' : 'x';
    if (axis === 'x') {
      btn.innerText = 'X-AXIS';
      btn.value = axis;
    } else {
      btn.innerText = 'Y-AXIS';
      btn.value = axis;
    }
  });
  setup.appendChild(btn);
  const board = document.createElement('div');
  board.classList.add('board');
  let counter = 0;
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.dataset.x = i;
      square.dataset.y = j;
      square.classList.add(`s${i}${j}`);
      square.addEventListener('mouseover', () => {
        let x = (square.dataset.x);
        let y = (square.dataset.y);
        let length;
        switch (counter) {
          case 0:
            length = 5;
            break;
          case 1:
            length = 4;
            break;
          case 2:
            length = 3;
            break;
          case 3:
            length = 3;
            break;
          case 4:
            length = 2;
            break;
          default:
            length = 5;
            return;
        };
        if (btn.value === 'x') { // horizontal
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${x}${parseInt(y) + i}`);
            if ((parseInt(y) + i) >= 0 && parseInt(y) + i <= 9) {
              coordinates.classList.add('shade');
            }
          }
        } else {
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${parseInt(x)+ i}${y}`);
            if ((parseInt(x) + i) >= 0 && parseInt(x) + i <= 9) {
              coordinates.classList.add('shade');
            }
          }
        }
      });
      square.addEventListener('mouseleave', () => {
        let x = (square.dataset.x);
        let y = (square.dataset.y);
        let length;
        switch (counter) {
          case 0:
            length = 5;
            break;
          case 1:
            length = 4;
            break;
          case 2:
            length = 3;
            break;
          case 3:
            length = 3;
            break;
          case 4:
            length = 2;
            break;
          default:
            length = 0;
            return;
        };
        if (btn.value === 'x') { // horizontal
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${x}${parseInt(y) + i}`);
            if ((parseInt(y) + i) >= 0 && parseInt(y) + i <= 9) {
              coordinates.classList.remove('shade');
            }
          }
        } else {
          for (let i = 0; i < length; i++) {
            let coordinates = document.querySelector(`.s${parseInt(x)+ i}${y}`);
            if ((parseInt(x) + i) >= 0 && parseInt(x) + i <= 9) {
              coordinates.classList.remove('shade');
            }
          }
        }
      });
      square.addEventListener('click', () => {
        let x = (square.dataset.x);
        let y = (square.dataset.y);
        let length;
        switch (counter) {
          case 0:
            length = 5;
            break;
          case 1:
            length = 4;
            break;
          case 2:
            length = 3;
            break;
          case 3:
            length = 3;
            break;
          case 4:
            length = 2;
            break;
          default:
            length = 0;
            return;
        }
        let gameboard = player.getGameboard();
        let orientation;
        if (btn.value === 'x') {
          orientation = 'horizontal';
        } else {
          orientation = 'vertical';
        }
        let check = gameboard.placeShip(parseInt(x), parseInt(y), length, orientation);
        if (check === false) {
          return;
        }
        if (btn.value === 'x') { // horizontal
          for (let k = 0; k < length; k++) {
            let coordinates = document.querySelector(`.s${x}${parseInt(y) + k}`);
            if ((parseInt(y) + k) >= 0 && parseInt(y) + k <= 9) {
              coordinates.classList.add('color');
            }
          }
        } else {
          for (let k = 0; k < length; k++) {
            let coordinates = document.querySelector(`.s${parseInt(x)+ k}${y}`);
            if ((parseInt(x) + k) >= 0 && parseInt(x) + k <= 9) {
              coordinates.classList.add('color');
            }
          }
        }
        counter++;
        if (counter >= 5) {
          let setup = document.querySelector('.setup');
          let ships = document.querySelector('.board');
          let btns = document.querySelector('.gameBtns');
          let axis = document.querySelector('.axis');
          setup.removeChild(axis);
          btns.style.display = 'block';
          while (ships.firstChild) {
            ships.removeChild(ships.firstChild)
          }
        }
      });
      board.appendChild(square);
    }
  }
  setup.appendChild(board);
};

const renderBoards = (board1, board2) => {
  const boards = document.querySelector('.boards');
  let div1 = document.createElement('div');
  div1.classList.add('board');
  let div2 = document.createElement('div');
  div2.classList.add('board');
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.classList.add('one');
      square.dataset.x = i;
      square.dataset.y = j;
      div1.appendChild(square);
    }
  }

  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.classList.add('two');
      square.dataset.x = i;
      square.dataset.y = j;
      div2.appendChild(square);
    }
  }

  boards.appendChild(div1);
  boards.appendChild(div2);

  let player1Board = board1;
  let p1Board = []
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      p1Board.push(player1Board[i][j]);
    }
  }

  let onesquares = document.querySelectorAll('.one');
  onesquares.forEach((one) => {
    one.classList.add(p1Board[0]);
    p1Board.shift();
  });

  let player2Board = board2;
  let p2Board = [];
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      p2Board.push(player2Board[i][j]);
    }
  }
  let twosquares = document.querySelectorAll('.two');
  twosquares.forEach((two) => {
    two.classList.add(p2Board[0]);
    p2Board.shift();
  });
};

const deleteBoards = () => {
  const boards = document.querySelector('.boards');
  while (boards.firstChild) {
    boards.removeChild(boards.firstChild);
  }
};

const displayWinner = (player) => {
  const name = player.getName();
  const message = document.querySelector('.message');
  message.innerText = name + ' Wins!';
}

const renderButtons = (player1, player2) => {
  let oneSquares = document.querySelectorAll('.one');
  let player1Gameboard = player1.getGameboard();
  oneSquares.forEach((onesquare) => {
    onesquare.addEventListener('click', () => {
      player1Gameboard.receiveAttack(onesquare.dataset.x, onesquare.dataset.y);
    });
  });
  let twoSquares = document.querySelectorAll('.two');
  let player2Gameboard = player2.getGameboard();
  twoSquares.forEach((twosquare) => {
    twosquare.addEventListener('click', () => {
      const attack2 = player2Gameboard.receiveAttack(twosquare.dataset.x, twosquare.dataset.y);
      // check that attack is valid
      if (attack2 === 'invalid') {
        return;
      }
      // check game status
      if (player2Gameboard.allSunk()) {
        // gameover player 1 wins
        deleteBoards();
        renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
        displayWinner(player1);
        console.log('player 1 wins');
        return;
      }
      // changeTurns
      player2.changeTurn();
      player1.changeTurn();
      deleteBoards();
      let x = player2.getRandomCoord();
      let y = player2.getRandomCoord();
      let attack1 = player2.launchAttack(player1Gameboard, x, y);
      // check if attack is valid
      while (attack1 === 'invalid') {
        x = player2.getRandomCoord();
        y = player2.getRandomCoord();
        attack1 = player2.launchAttack(player1Gameboard, x, y);
      }
      //check game status
      if (player1Gameboard.allSunk()) {
        // gameover player 2 wins
        deleteBoards();
        renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
        displayWinner(player2);
        console.log('player 2 wins');
        return;
      }
      player2.changeTurn();
      player1.changeTurn();
      deleteBoards();
      renderBoards(player1Gameboard.getBoard(), player2Gameboard.getBoard());
      renderButtons(player1, player2);
    });
  });
};




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUpGame": () => (/* binding */ setUpGame),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


const playerFactory = __webpack_require__(/*! ./player */ "./src/player.js");

const startGame = (player1, player2) => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(player1.getGameboard().getBoard(), player2.getGameboard().getBoard());
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderButtons)(player1, player2);
};

const resetGame = () => {
  console.log('reset TBD');
};

const setUpGame = () => {
  const player1 = playerFactory('Player 1');
  const player2 = playerFactory('Computer'); // cpu
  player2.changeTurn();
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;
  const name = document.getElementById('name');
  name.addEventListener('click', () => {
    const info = document.querySelector('.player1Info');
    info.style.display = 'none';
    player1.changeName(document.getElementById('player1').value);
    document.getElementById('player1').value = '';
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setUpBoard)(player1);
  });
  const start = document.getElementById('start');
  start.addEventListener('click', () => {
    startGame(player1, player2);
  });
  const reset = document.getElementById('reset');
  reset.addEventListener('click', () => {
    resetGame();
  });
  return {
    getPlayer1,
    getPlayer2,
  };
};




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipFactory = __webpack_require__(/*! ./ship */ "./src/ship.js");

const gameboardFactory = () => {
  const board = new Array(10).fill('none').map(() => new Array(10).fill('none'));
  const getBoard = () => board;
  const ships = [];
  const getShips = () => ships;
  // check ships don't overlap
  const checkOverlap = (xCoord, yCoord, length, orientation) => {
    let check = [];
    if (orientation === 'vertical') {
      for (let i = 0; i < length; i++) {
        check.push(board[xCoord + i][yCoord]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        check.push(board[xCoord][yCoord + i]);
      }
    }
    for (let i = 0; i < check.length; i++) {
      if (check[i] !== 'none') {
        check = [];
        return false;
      }
    }
    check = [];
    return true;
  };
  // check ships are inbound
  const checkBounds = (xCoord, yCoord, length, orientation) => {
    let check = [];
    if (orientation === 'vertical') {
      for (let i = 0; i < length; i++) {
        check.push(xCoord + i);
      }
      check.push(yCoord);
    } else {
      for (let i = 0; i < length; i++) {
        check.push(yCoord + i);
      }
      check.push(xCoord);
    }
    for (let i = 0; i < check.length; i++) {
      if (check[i] > 9 || check[i] < 0) {
        check = [];
        return false;
      }
    }
    check = [];
    return true;
  };
  const placeShip = (xCoord, yCoord, length, orientation) => {
    const markBoard = (ship) => {
      const x = ship.getXCoord();
      const y = ship.getYCoord();
      const id = ship.getId();
      const shipLength = ship.getLength();
      const direction = ship.getOrientation();
      if (direction === 'vertical') {
        for (let i = 0; i < shipLength; i++) {
          board[x + i][y] = id;
        }
      } else {
        for (let i = 0; i < shipLength; i++) {
          board[x][y + i] = id;
        }
      }
    };
    let check = checkBounds(xCoord, yCoord, length, orientation);
    if (check === false) {
      return false;
    }
    check = checkOverlap(xCoord, yCoord, length, orientation);
    if (check === false) {
      return false;
    }
    const id = ships.length;
    const battleship = shipFactory(length, id);
    battleship.changeCoordinates(xCoord, yCoord);
    battleship.changeOrientation(orientation);
    markBoard(battleship);
    ships.push(battleship);
    return true;
  };

  // generate random fleet for cpu
  const generateRandomFleet = () => {
    const getRandomCoord = () => {
      const num = Math.floor(Math.random() * 10);
      return num;
    };
    const pickDirection = () => {
      const num = Math.floor(Math.random() + 0.5);
      const direction = num > 0 ? 'vertical' : 'horizontal';
      return direction;
    }
    // place Carrier (5)
    let carrier = false;
    while (carrier === false) {
      const x = getRandomCoord();
      const y = getRandomCoord();
      const direction = pickDirection();
      const placedShip = placeShip(x, y, 5, direction);
      if (placedShip === true) {
        carrier = true;
      }
    }
    let battleship = false;
    while (battleship === false) {
      const x = getRandomCoord();
      const y = getRandomCoord();
      const direction = pickDirection();
      const placedShip = placeShip(x, y, 4, direction);
      if (placedShip === true) {
        battleship = true;
      }
    }
    let cruiser = false;
    while (cruiser === false) {
      const x = getRandomCoord();
      const y = getRandomCoord();
      const direction = pickDirection();
      const placedShip = placeShip(x, y, 3, direction);
      if (placedShip === true) {
        cruiser = true;
      }
    }
    let submarine = false;
    while (submarine === false) {
      const x = getRandomCoord();
      const y = getRandomCoord();
      const direction = pickDirection();
      const placedShip = placeShip(x, y, 3, direction);
      if (placedShip === true) {
        submarine = true;
      }
    }
    let destroyer = false;
    while (destroyer === false) {
      const x = getRandomCoord();
      const y = getRandomCoord();
      const direction = pickDirection();
      const placedShip = placeShip(x, y, 2, direction);
      if (placedShip === true) {
        destroyer = true;
      }
    }
  };
  const receiveAttack = (xCoord, yCoord) => {
    const location = board[xCoord][yCoord];
    if (location === 'miss' || location === 'hit') {
      return ('invalid');
    }
    if (location === 'none') {
      board[xCoord][yCoord] = 'miss';
      return ('valid');
    }
    const direction = ships[location].getOrientation();
    if (direction === 'vertical') {
      board[xCoord][yCoord] = 'hit';
      const x = ships[location].getXCoord();
      const index = xCoord - x;
      ships[location].hit(index);
      return ('valid');
    }
    if (direction === 'horizontal') {
      board[xCoord][yCoord] = 'hit';
      const y = ships[location].getYCoord();
      const index = yCoord - y;
      ships[location].hit(index);
      return ('valid');
    }
    return ('invalid');
  };
  const allSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      const answer = ships[i].isSunk();
      if (answer === false) {
        return false;
      }
    }
    return true;
  };
  return {
    getBoard,
    getShips,
    placeShip,
    generateRandomFleet,
    receiveAttack,
    allSunk,
  };
};

module.exports = gameboardFactory;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboardFactory = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const playerFactory = (name) => {
  const getName = () => name;
  const changeName = (newName) => {
    name = newName;
  };
  const playerGameboard = gameboardFactory();
  const getGameboard = () => playerGameboard;
  let turn = true;
  const isTurn = () => turn;
  const changeTurn = () => {
    turn = !turn;
  };
  const launchAttack = (enemy, xCoord, yCoord) => {
    enemy.receiveAttack(xCoord, yCoord);
  };
  // for computer attacks
  const getRandomCoord = () => {
    const num = Math.floor(Math.random() * 10);
    return num;
  };
  return {
    getName,
    changeName,
    isTurn,
    changeTurn,
    launchAttack,
    getRandomCoord,
    getGameboard,
  };
};

module.exports = playerFactory;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const shipFactory = (length, id) => {
  const marks = [];
  let x = 0;
  let y = 0;
  let orientation = 'vertical';

  const getId = () => id;
  const getLength = () => length;

  const changeCoordinates = (newX, newY) => {
    x = newX;
    y = newY;
  };

  const getXCoord = () => x;
  const getYCoord = () => y;

  const getOrientation = () => orientation;
  const changeOrientation = (newOrientation) => {
    orientation = newOrientation;
  };

  const getMarks = () => marks;
  let hitCounter = 0;
  const setUp = () => {
    for (let i = 0; i < length; i++) {
      marks.push('O');
    }
  };
  const hit = (location) => {
    marks[location] = 'X';
    hitCounter += 1;
  };
  const isSunk = () => {
    if (hitCounter === length) {
      return true;
    }
    return false;
  };
  return {
    getId,
    getLength,
    changeCoordinates,
    getXCoord,
    getYCoord,
    getOrientation,
    changeOrientation,
    hit,
    setUp,
    getMarks,
    isSunk,
  };
};

module.exports = shipFactory;



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const gameboardFactory = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const setup = (0,_game__WEBPACK_IMPORTED_MODULE_1__.setUpGame)();

const p1 = setup.getPlayer1();
const p2 = setup.getPlayer2();

const p1Gameboard = p1.getGameboard();
const p2Gameboard = p2.getGameboard();

p2Gameboard.generateRandomFleet();

// startGame(p1, p2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2pNQSx5QkFBeUIsbUJBQU8sQ0FBQyx1Q0FBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O1VDdERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7QUFDSTs7QUFFbEQseUJBQXlCLG1CQUFPLENBQUMsdUNBQWE7O0FBRTlDLGNBQWMsZ0RBQVM7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4uc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZHMsIC5zZXR1cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVCdG5zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNTUwcHg7XFxufVxcblxcbi5zaGFkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5jb2xvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4uc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZHMsIC5zZXR1cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVCdG5zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNTUwcHg7XFxufVxcblxcbi5zaGFkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5jb2xvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcGxheWVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNvbnN0IG51bWJlck9mU3F1YXJlcyA9IDEwOyAvLyBudW1iZXIgb2Ygc3F1YXJlcyBpbiBvbmUgcm93XG5cbmNvbnN0IHNldFVwQm9hcmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHNldHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwJyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYXhpcycpO1xuICBidG4uaW5uZXJUZXh0ID0gJ1gtQVhJUyc7XG4gIGJ0bi52YWx1ZSA9ICd4JztcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGF4aXMgPSBidG4udmFsdWUgPT09ICd4JyA/ICd5JyA6ICd4JztcbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gJ1gtQVhJUyc7XG4gICAgICBidG4udmFsdWUgPSBheGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gJ1ktQVhJUyc7XG4gICAgICBidG4udmFsdWUgPSBheGlzO1xuICAgIH1cbiAgfSk7XG4gIHNldHVwLmFwcGVuZENoaWxkKGJ0bik7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXM7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgcyR7aX0ke2p9YCk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IChzcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgbGV0IHkgPSAoc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIHN3aXRjaCAoY291bnRlcikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBsZW5ndGggPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBsZW5ndGggPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGlmIChidG4udmFsdWUgPT09ICd4JykgeyAvLyBob3Jpem9udGFsXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnMke3h9JHtwYXJzZUludCh5KSArIGl9YCk7XG4gICAgICAgICAgICBpZiAoKHBhcnNlSW50KHkpICsgaSkgPj0gMCAmJiBwYXJzZUludCh5KSArIGkgPD0gOSkge1xuICAgICAgICAgICAgICBjb29yZGluYXRlcy5jbGFzc0xpc3QuYWRkKCdzaGFkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucyR7cGFyc2VJbnQoeCkrIGl9JHt5fWApO1xuICAgICAgICAgICAgaWYgKChwYXJzZUludCh4KSArIGkpID49IDAgJiYgcGFyc2VJbnQoeCkgKyBpIDw9IDkpIHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY2xhc3NMaXN0LmFkZCgnc2hhZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gKHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICBsZXQgeSA9IChzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChjb3VudGVyKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGVuZ3RoID0gNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGJ0bi52YWx1ZSA9PT0gJ3gnKSB7IC8vIGhvcml6b250YWxcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucyR7eH0ke3BhcnNlSW50KHkpICsgaX1gKTtcbiAgICAgICAgICAgIGlmICgocGFyc2VJbnQoeSkgKyBpKSA+PSAwICYmIHBhcnNlSW50KHkpICsgaSA8PSA5KSB7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zJHtwYXJzZUludCh4KSsgaX0ke3l9YCk7XG4gICAgICAgICAgICBpZiAoKHBhcnNlSW50KHgpICsgaSkgPj0gMCAmJiBwYXJzZUludCh4KSArIGkgPD0gOSkge1xuICAgICAgICAgICAgICBjb29yZGluYXRlcy5jbGFzc0xpc3QucmVtb3ZlKCdzaGFkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gKHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICBsZXQgeSA9IChzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChjb3VudGVyKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGVuZ3RoID0gNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyLmdldEdhbWVib2FyZCgpO1xuICAgICAgICBsZXQgb3JpZW50YXRpb247XG4gICAgICAgIGlmIChidG4udmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hlY2sgPSBnYW1lYm9hcmQucGxhY2VTaGlwKHBhcnNlSW50KHgpLCBwYXJzZUludCh5KSwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bi52YWx1ZSA9PT0gJ3gnKSB7IC8vIGhvcml6b250YWxcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucyR7eH0ke3BhcnNlSW50KHkpICsga31gKTtcbiAgICAgICAgICAgIGlmICgocGFyc2VJbnQoeSkgKyBrKSA+PSAwICYmIHBhcnNlSW50KHkpICsgayA8PSA5KSB7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zJHtwYXJzZUludCh4KSsga30ke3l9YCk7XG4gICAgICAgICAgICBpZiAoKHBhcnNlSW50KHgpICsgaykgPj0gMCAmJiBwYXJzZUludCh4KSArIGsgPD0gOSkge1xuICAgICAgICAgICAgICBjb29yZGluYXRlcy5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIGlmIChjb3VudGVyID49IDUpIHtcbiAgICAgICAgICBsZXQgc2V0dXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAnKTtcbiAgICAgICAgICBsZXQgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICAgICAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lQnRucycpO1xuICAgICAgICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF4aXMnKTtcbiAgICAgICAgICBzZXR1cC5yZW1vdmVDaGlsZChheGlzKTtcbiAgICAgICAgICBidG5zLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIHdoaWxlIChzaGlwcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBzaGlwcy5yZW1vdmVDaGlsZChzaGlwcy5maXJzdENoaWxkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuICBzZXR1cC5hcHBlbmRDaGlsZChib2FyZCk7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAoYm9hcmQxLCBib2FyZDIpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICBsZXQgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGxldCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXM7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICBkaXYxLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXM7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd0d28nKTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICBkaXYyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgYm9hcmRzLmFwcGVuZENoaWxkKGRpdjEpO1xuICBib2FyZHMuYXBwZW5kQ2hpbGQoZGl2Mik7XG5cbiAgbGV0IHBsYXllcjFCb2FyZCA9IGJvYXJkMTtcbiAgbGV0IHAxQm9hcmQgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgcDFCb2FyZC5wdXNoKHBsYXllcjFCb2FyZFtpXVtqXSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG9uZXNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJyk7XG4gIG9uZXNxdWFyZXMuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgb25lLmNsYXNzTGlzdC5hZGQocDFCb2FyZFswXSk7XG4gICAgcDFCb2FyZC5zaGlmdCgpO1xuICB9KTtcblxuICBsZXQgcGxheWVyMkJvYXJkID0gYm9hcmQyO1xuICBsZXQgcDJCb2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgcDJCb2FyZC5wdXNoKHBsYXllcjJCb2FyZFtpXVtqXSk7XG4gICAgfVxuICB9XG4gIGxldCB0d29zcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR3bycpO1xuICB0d29zcXVhcmVzLmZvckVhY2goKHR3bykgPT4ge1xuICAgIHR3by5jbGFzc0xpc3QuYWRkKHAyQm9hcmRbMF0pO1xuICAgIHAyQm9hcmQuc2hpZnQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgd2hpbGUgKGJvYXJkcy5maXJzdENoaWxkKSB7XG4gICAgYm9hcmRzLnJlbW92ZUNoaWxkKGJvYXJkcy5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVdpbm5lciA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgbmFtZSA9IHBsYXllci5nZXROYW1lKCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVyVGV4dCA9IG5hbWUgKyAnIFdpbnMhJztcbn1cblxuY29uc3QgcmVuZGVyQnV0dG9ucyA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGxldCBvbmVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9uZScpO1xuICBsZXQgcGxheWVyMUdhbWVib2FyZCA9IHBsYXllcjEuZ2V0R2FtZWJvYXJkKCk7XG4gIG9uZVNxdWFyZXMuZm9yRWFjaCgob25lc3F1YXJlKSA9PiB7XG4gICAgb25lc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheWVyMUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG9uZXNxdWFyZS5kYXRhc2V0LngsIG9uZXNxdWFyZS5kYXRhc2V0LnkpO1xuICAgIH0pO1xuICB9KTtcbiAgbGV0IHR3b1NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gIGxldCBwbGF5ZXIyR2FtZWJvYXJkID0gcGxheWVyMi5nZXRHYW1lYm9hcmQoKTtcbiAgdHdvU3F1YXJlcy5mb3JFYWNoKCh0d29zcXVhcmUpID0+IHtcbiAgICB0d29zcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdHRhY2syID0gcGxheWVyMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHR3b3NxdWFyZS5kYXRhc2V0LngsIHR3b3NxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgLy8gY2hlY2sgdGhhdCBhdHRhY2sgaXMgdmFsaWRcbiAgICAgIGlmIChhdHRhY2syID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgZ2FtZSBzdGF0dXNcbiAgICAgIGlmIChwbGF5ZXIyR2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAvLyBnYW1lb3ZlciBwbGF5ZXIgMSB3aW5zXG4gICAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgICByZW5kZXJCb2FyZHMocGxheWVyMUdhbWVib2FyZC5nZXRCb2FyZCgpLCBwbGF5ZXIyR2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHBsYXllcjEpO1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDEgd2lucycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGFuZ2VUdXJuc1xuICAgICAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gICAgICBwbGF5ZXIxLmNoYW5nZVR1cm4oKTtcbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgbGV0IHggPSBwbGF5ZXIyLmdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBsZXQgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGxldCBhdHRhY2sxID0gcGxheWVyMi5sYXVuY2hBdHRhY2socGxheWVyMUdhbWVib2FyZCwgeCwgeSk7XG4gICAgICAvLyBjaGVjayBpZiBhdHRhY2sgaXMgdmFsaWRcbiAgICAgIHdoaWxlIChhdHRhY2sxID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgeCA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgICAgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgICAgYXR0YWNrMSA9IHBsYXllcjIubGF1bmNoQXR0YWNrKHBsYXllcjFHYW1lYm9hcmQsIHgsIHkpO1xuICAgICAgfVxuICAgICAgLy9jaGVjayBnYW1lIHN0YXR1c1xuICAgICAgaWYgKHBsYXllcjFHYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIC8vIGdhbWVvdmVyIHBsYXllciAyIHdpbnNcbiAgICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMiB3aW5zJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBsYXllcjIuY2hhbmdlVHVybigpO1xuICAgICAgcGxheWVyMS5jaGFuZ2VUdXJuKCk7XG4gICAgICBkZWxldGVCb2FyZHMoKTtcbiAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICByZW5kZXJCdXR0b25zKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHNldFVwQm9hcmQsIHJlbmRlckJvYXJkcywgZGVsZXRlQm9hcmRzLCByZW5kZXJCdXR0b25zIH07XG4iLCJpbXBvcnQgeyBzZXRVcEJvYXJkLCByZW5kZXJCb2FyZHMsIGRlbGV0ZUJvYXJkcywgcmVuZGVyQnV0dG9ucyB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIHJlbmRlckJvYXJkcyhwbGF5ZXIxLmdldEdhbWVib2FyZCgpLmdldEJvYXJkKCksIHBsYXllcjIuZ2V0R2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSk7XG4gIHJlbmRlckJ1dHRvbnMocGxheWVyMSwgcGxheWVyMik7XG59O1xuXG5jb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZXNldCBUQkQnKTtcbn07XG5cbmNvbnN0IHNldFVwR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ1BsYXllciAxJyk7XG4gIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXJGYWN0b3J5KCdDb21wdXRlcicpOyAvLyBjcHVcbiAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gIGNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBwbGF5ZXIxO1xuICBjb25zdCBnZXRQbGF5ZXIyID0gKCkgPT4gcGxheWVyMjtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxSW5mbycpO1xuICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwbGF5ZXIxLmNoYW5nZU5hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKS52YWx1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKS52YWx1ZSA9ICcnO1xuICAgIHNldFVwQm9hcmQocGxheWVyMSk7XG4gIH0pO1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gIH0pO1xuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xuICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXNldEdhbWUoKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgZ2V0UGxheWVyMSxcbiAgICBnZXRQbGF5ZXIyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgc2V0VXBHYW1lLCBzdGFydEdhbWUgfTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKCdub25lJykubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCgnbm9uZScpKTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcbiAgLy8gY2hlY2sgc2hpcHMgZG9uJ3Qgb3ZlcmxhcFxuICBjb25zdCBjaGVja092ZXJsYXAgPSAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY2hlY2sgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaChib2FyZFt4Q29vcmQgKyBpXVt5Q29vcmRdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKGJvYXJkW3hDb29yZF1beUNvb3JkICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hlY2tbaV0gIT09ICdub25lJykge1xuICAgICAgICBjaGVjayA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrID0gW107XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIC8vIGNoZWNrIHNoaXBzIGFyZSBpbmJvdW5kXG4gIGNvbnN0IGNoZWNrQm91bmRzID0gKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNoZWNrID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoZWNrLnB1c2goeENvb3JkICsgaSk7XG4gICAgICB9XG4gICAgICBjaGVjay5wdXNoKHlDb29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaCh5Q29vcmQgKyBpKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrLnB1c2goeENvb3JkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVjay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoZWNrW2ldID4gOSB8fCBjaGVja1tpXSA8IDApIHtcbiAgICAgICAgY2hlY2sgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGVjayA9IFtdO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXAgPSAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBtYXJrQm9hcmQgPSAoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgeCA9IHNoaXAuZ2V0WENvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gc2hpcC5nZXRZQ29vcmQoKTtcbiAgICAgIGNvbnN0IGlkID0gc2hpcC5nZXRJZCgpO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBzaGlwLmdldE9yaWVudGF0aW9uKCk7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeCArIGldW3ldID0gaWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjaGVjayA9IGNoZWNrQm91bmRzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrID0gY2hlY2tPdmVybGFwKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gc2hpcHMubGVuZ3RoO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgsIGlkKTtcbiAgICBiYXR0bGVzaGlwLmNoYW5nZUNvb3JkaW5hdGVzKHhDb29yZCwgeUNvb3JkKTtcbiAgICBiYXR0bGVzaGlwLmNoYW5nZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcbiAgICBtYXJrQm9hcmQoYmF0dGxlc2hpcCk7XG4gICAgc2hpcHMucHVzaChiYXR0bGVzaGlwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBnZW5lcmF0ZSByYW5kb20gZmxlZXQgZm9yIGNwdVxuICBjb25zdCBnZW5lcmF0ZVJhbmRvbUZsZWV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldFJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmV0dXJuIG51bTtcbiAgICB9O1xuICAgIGNvbnN0IHBpY2tEaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKyAwLjUpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gbnVtID4gMCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgIH1cbiAgICAvLyBwbGFjZSBDYXJyaWVyICg1KVxuICAgIGxldCBjYXJyaWVyID0gZmFsc2U7XG4gICAgd2hpbGUgKGNhcnJpZXIgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCA1LCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgY2FycmllciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBiYXR0bGVzaGlwID0gZmFsc2U7XG4gICAgd2hpbGUgKGJhdHRsZXNoaXAgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCA0LCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgYmF0dGxlc2hpcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBjcnVpc2VyID0gZmFsc2U7XG4gICAgd2hpbGUgKGNydWlzZXIgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCAzLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgY3J1aXNlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdWJtYXJpbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoc3VibWFyaW5lID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgMywgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIHN1Ym1hcmluZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZXN0cm95ZXIgPSBmYWxzZTtcbiAgICB3aGlsZSAoZGVzdHJveWVyID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgMiwgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIGRlc3Ryb3llciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBib2FyZFt4Q29vcmRdW3lDb29yZF07XG4gICAgaWYgKGxvY2F0aW9uID09PSAnbWlzcycgfHwgbG9jYXRpb24gPT09ICdoaXQnKSB7XG4gICAgICByZXR1cm4gKCdpbnZhbGlkJyk7XG4gICAgfVxuICAgIGlmIChsb2NhdGlvbiA9PT0gJ25vbmUnKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSAnbWlzcyc7XG4gICAgICByZXR1cm4gKCd2YWxpZCcpO1xuICAgIH1cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBzaGlwc1tsb2NhdGlvbl0uZ2V0T3JpZW50YXRpb24oKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSAnaGl0JztcbiAgICAgIGNvbnN0IHggPSBzaGlwc1tsb2NhdGlvbl0uZ2V0WENvb3JkKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHhDb29yZCAtIHg7XG4gICAgICBzaGlwc1tsb2NhdGlvbl0uaGl0KGluZGV4KTtcbiAgICAgIHJldHVybiAoJ3ZhbGlkJyk7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gJ2hpdCc7XG4gICAgICBjb25zdCB5ID0gc2hpcHNbbG9jYXRpb25dLmdldFlDb29yZCgpO1xuICAgICAgY29uc3QgaW5kZXggPSB5Q29vcmQgLSB5O1xuICAgICAgc2hpcHNbbG9jYXRpb25dLmhpdChpbmRleCk7XG4gICAgICByZXR1cm4gKCd2YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gKCdpbnZhbGlkJyk7XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYW5zd2VyID0gc2hpcHNbaV0uaXNTdW5rKCk7XG4gICAgICBpZiAoYW5zd2VyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICBnZW5lcmF0ZVJhbmRvbUZsZWV0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkRmFjdG9yeTtcbiIsImNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuZXdOYW1lO1xuICB9O1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHBsYXllckdhbWVib2FyZDtcbiAgbGV0IHR1cm4gPSB0cnVlO1xuICBjb25zdCBpc1R1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4gPSAhdHVybjtcbiAgfTtcbiAgY29uc3QgbGF1bmNoQXR0YWNrID0gKGVuZW15LCB4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGVuZW15LnJlY2VpdmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICB9O1xuICAvLyBmb3IgY29tcHV0ZXIgYXR0YWNrc1xuICBjb25zdCBnZXRSYW5kb21Db29yZCA9ICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIG51bTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGNoYW5nZU5hbWUsXG4gICAgaXNUdXJuLFxuICAgIGNoYW5nZVR1cm4sXG4gICAgbGF1bmNoQXR0YWNrLFxuICAgIGdldFJhbmRvbUNvb3JkLFxuICAgIGdldEdhbWVib2FyZCxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyRmFjdG9yeTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgaWQpID0+IHtcbiAgY29uc3QgbWFya3MgPSBbXTtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGxldCBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGNoYW5nZUNvb3JkaW5hdGVzID0gKG5ld1gsIG5ld1kpID0+IHtcbiAgICB4ID0gbmV3WDtcbiAgICB5ID0gbmV3WTtcbiAgfTtcblxuICBjb25zdCBnZXRYQ29vcmQgPSAoKSA9PiB4O1xuICBjb25zdCBnZXRZQ29vcmQgPSAoKSA9PiB5O1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4gb3JpZW50YXRpb247XG4gIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKG5ld09yaWVudGF0aW9uKSA9PiB7XG4gICAgb3JpZW50YXRpb24gPSBuZXdPcmllbnRhdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRNYXJrcyA9ICgpID0+IG1hcmtzO1xuICBsZXQgaGl0Q291bnRlciA9IDA7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG1hcmtzLnB1c2goJ08nKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhpdCA9IChsb2NhdGlvbikgPT4ge1xuICAgIG1hcmtzW2xvY2F0aW9uXSA9ICdYJztcbiAgICBoaXRDb3VudGVyICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaGl0Q291bnRlciA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldElkLFxuICAgIGdldExlbmd0aCxcbiAgICBjaGFuZ2VDb29yZGluYXRlcyxcbiAgICBnZXRYQ29vcmQsXG4gICAgZ2V0WUNvb3JkLFxuICAgIGdldE9yaWVudGF0aW9uLFxuICAgIGNoYW5nZU9yaWVudGF0aW9uLFxuICAgIGhpdCxcbiAgICBzZXRVcCxcbiAgICBnZXRNYXJrcyxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXBGYWN0b3J5O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldFVwR2FtZSwgc3RhcnRHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IG1ha2VEcmFnZ2FibGUsIHNldFVwQm9hcmQgfSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5jb25zdCBzZXR1cCA9IHNldFVwR2FtZSgpO1xuXG5jb25zdCBwMSA9IHNldHVwLmdldFBsYXllcjEoKTtcbmNvbnN0IHAyID0gc2V0dXAuZ2V0UGxheWVyMigpO1xuXG5jb25zdCBwMUdhbWVib2FyZCA9IHAxLmdldEdhbWVib2FyZCgpO1xuY29uc3QgcDJHYW1lYm9hcmQgPSBwMi5nZXRHYW1lYm9hcmQoKTtcblxucDJHYW1lYm9hcmQuZ2VuZXJhdGVSYW5kb21GbGVldCgpO1xuXG4vLyBzdGFydEdhbWUocDEsIHAyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==