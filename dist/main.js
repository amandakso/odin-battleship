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
  let p1Board = [];
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      p1Board.push(player1Board[i][j]);
    }
  }

  let onesquares = document.querySelectorAll('.one');
  onesquares.forEach((one) => {
    if (p1Board[0] !== 'none' && p1Board[0] !== 'hit' && p1Board[0] !== 'miss') {
      one.classList.add('color');
    };
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

const setUpGame = () => {
  const player1 = playerFactory('Player 1');
  const player2 = playerFactory('Computer'); // cpu
  player2.changeTurn();
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;
  // name event listener doesn't reset with reset button
  const info = document.querySelector('.player1Info');
  const para = document.createElement('p');
  para.innerText = "Player Name: ";
  info.appendChild(para);
  const name = document.createElement('input');
  name.type = 'text';
  name.classList.add('name');
  info.appendChild(name);
  const nameBtn = document.createElement('button');
  nameBtn.innerText = 'Submit';
  info.appendChild(nameBtn);

  nameBtn.addEventListener('click', () => {
    info.style.display = 'none';
    console.log(document.querySelector('.name').value);
    player1.changeName(document.querySelector('.name').value);
    while (info.firstChild) {
      info.removeChild(info.firstChild);
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setUpBoard)(player1);
  });
  const startBtn = document.querySelector('.startBtn');
  const start = document.createElement('button');
  start.innerText = 'Start Game';
  startBtn.appendChild(start);
  start.addEventListener('click', () => {
    startGame(player1, player2);
  });
  const resetBtn = document.querySelector('.resetBtn');
  const reset = document.createElement('button');
  reset.innerText = 'Reset Game';
  resetBtn.appendChild(reset);
  reset.addEventListener('click', () => {
    const resetGame = () => {
      while (startBtn.firstChild) {
        startBtn.removeChild(startBtn.firstChild);
      }
      while (resetBtn.firstChild) {
        resetBtn.removeChild(resetBtn.firstChild);
      }
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.deleteBoards)();
      const setup = setUpGame();
      const p1 = setup.getPlayer1();
      const p2 = setup.getPlayer2();
      const p1Gameboard = p1.getGameboard();
      const p2Gameboard = p2.getGameboard();
      p2Gameboard.generateRandomFleet();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDak1BLHlCQUF5QixtQkFBTyxDQUFDLHVDQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUNJOztBQUVsRCx5QkFBeUIsbUJBQU8sQ0FBQyx1Q0FBYTs7QUFFOUMsY0FBYyxnREFBUzs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkcywgLnNldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZUJ0bnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnNoYWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNvbG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkcywgLnNldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZUJ0bnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnNoYWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNvbG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwbGF5ZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcblxuY29uc3QgbnVtYmVyT2ZTcXVhcmVzID0gMTA7IC8vIG51bWJlciBvZiBzcXVhcmVzIGluIG9uZSByb3dcblxuY29uc3Qgc2V0VXBCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3Qgc2V0dXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAnKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdheGlzJyk7XG4gIGJ0bi5pbm5lclRleHQgPSAnWC1BWElTJztcbiAgYnRuLnZhbHVlID0gJ3gnO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgYXhpcyA9IGJ0bi52YWx1ZSA9PT0gJ3gnID8gJ3knIDogJ3gnO1xuICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgIGJ0bi5pbm5lclRleHQgPSAnWC1BWElTJztcbiAgICAgIGJ0bi52YWx1ZSA9IGF4aXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0bi5pbm5lclRleHQgPSAnWS1BWElTJztcbiAgICAgIGJ0bi52YWx1ZSA9IGF4aXM7XG4gICAgfVxuICB9KTtcbiAgc2V0dXAuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGBzJHtpfSR7an1gKTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gKHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICBsZXQgeSA9IChzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChjb3VudGVyKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGVuZ3RoID0gNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGVuZ3RoID0gNTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGJ0bi52YWx1ZSA9PT0gJ3gnKSB7IC8vIGhvcml6b250YWxcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucyR7eH0ke3BhcnNlSW50KHkpICsgaX1gKTtcbiAgICAgICAgICAgIGlmICgocGFyc2VJbnQoeSkgKyBpKSA+PSAwICYmIHBhcnNlSW50KHkpICsgaSA8PSA5KSB7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNsYXNzTGlzdC5hZGQoJ3NoYWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zJHtwYXJzZUludCh4KSsgaX0ke3l9YCk7XG4gICAgICAgICAgICBpZiAoKHBhcnNlSW50KHgpICsgaSkgPj0gMCAmJiBwYXJzZUludCh4KSArIGkgPD0gOSkge1xuICAgICAgICAgICAgICBjb29yZGluYXRlcy5jbGFzc0xpc3QuYWRkKCdzaGFkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgbGV0IHggPSAoc3F1YXJlLmRhdGFzZXQueCk7XG4gICAgICAgIGxldCB5ID0gKHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICBsZXQgbGVuZ3RoO1xuICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsZW5ndGggPSA1O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGVuZ3RoID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYnRuLnZhbHVlID09PSAneCcpIHsgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zJHt4fSR7cGFyc2VJbnQoeSkgKyBpfWApO1xuICAgICAgICAgICAgaWYgKChwYXJzZUludCh5KSArIGkpID49IDAgJiYgcGFyc2VJbnQoeSkgKyBpIDw9IDkpIHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnMke3BhcnNlSW50KHgpKyBpfSR7eX1gKTtcbiAgICAgICAgICAgIGlmICgocGFyc2VJbnQoeCkgKyBpKSA+PSAwICYmIHBhcnNlSW50KHgpICsgaSA8PSA5KSB7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHggPSAoc3F1YXJlLmRhdGFzZXQueCk7XG4gICAgICAgIGxldCB5ID0gKHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICBsZXQgbGVuZ3RoO1xuICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsZW5ndGggPSA1O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGVuZ3RoID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgaWYgKGJ0bi52YWx1ZSA9PT0gJ3gnKSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVjayA9IGdhbWVib2FyZC5wbGFjZVNoaXAocGFyc2VJbnQoeCksIHBhcnNlSW50KHkpLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnRuLnZhbHVlID09PSAneCcpIHsgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zJHt4fSR7cGFyc2VJbnQoeSkgKyBrfWApO1xuICAgICAgICAgICAgaWYgKChwYXJzZUludCh5KSArIGspID49IDAgJiYgcGFyc2VJbnQoeSkgKyBrIDw9IDkpIHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY2xhc3NMaXN0LmFkZCgnY29sb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnMke3BhcnNlSW50KHgpKyBrfSR7eX1gKTtcbiAgICAgICAgICAgIGlmICgocGFyc2VJbnQoeCkgKyBrKSA+PSAwICYmIHBhcnNlSW50KHgpICsgayA8PSA5KSB7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgaWYgKGNvdW50ZXIgPj0gNSkge1xuICAgICAgICAgIGxldCBzZXR1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cCcpO1xuICAgICAgICAgIGxldCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVCdG5zJyk7XG4gICAgICAgICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXhpcycpO1xuICAgICAgICAgIHNldHVwLnJlbW92ZUNoaWxkKGF4aXMpO1xuICAgICAgICAgIGJ0bnMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgd2hpbGUgKHNoaXBzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNoaXBzLnJlbW92ZUNoaWxkKHNoaXBzLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG4gIHNldHVwLmFwcGVuZENoaWxkKGJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9IChib2FyZDEsIGJvYXJkMikgPT4ge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gIGxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ29uZScpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICBib2FyZHMuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gIGJvYXJkcy5hcHBlbmRDaGlsZChkaXYyKTtcblxuICBsZXQgcGxheWVyMUJvYXJkID0gYm9hcmQxO1xuICBsZXQgcDFCb2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgcDFCb2FyZC5wdXNoKHBsYXllcjFCb2FyZFtpXVtqXSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG9uZXNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJyk7XG4gIG9uZXNxdWFyZXMuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgaWYgKHAxQm9hcmRbMF0gIT09ICdub25lJyAmJiBwMUJvYXJkWzBdICE9PSAnaGl0JyAmJiBwMUJvYXJkWzBdICE9PSAnbWlzcycpIHtcbiAgICAgIG9uZS5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuICAgIH07XG4gICAgb25lLmNsYXNzTGlzdC5hZGQocDFCb2FyZFswXSk7XG4gICAgcDFCb2FyZC5zaGlmdCgpO1xuICB9KTtcblxuICBsZXQgcGxheWVyMkJvYXJkID0gYm9hcmQyO1xuICBsZXQgcDJCb2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgcDJCb2FyZC5wdXNoKHBsYXllcjJCb2FyZFtpXVtqXSk7XG4gICAgfVxuICB9XG4gIGxldCB0d29zcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR3bycpO1xuICB0d29zcXVhcmVzLmZvckVhY2goKHR3bykgPT4ge1xuICAgIHR3by5jbGFzc0xpc3QuYWRkKHAyQm9hcmRbMF0pO1xuICAgIHAyQm9hcmQuc2hpZnQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgd2hpbGUgKGJvYXJkcy5maXJzdENoaWxkKSB7XG4gICAgYm9hcmRzLnJlbW92ZUNoaWxkKGJvYXJkcy5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVdpbm5lciA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgbmFtZSA9IHBsYXllci5nZXROYW1lKCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVyVGV4dCA9IG5hbWUgKyAnIFdpbnMhJztcbn1cblxuY29uc3QgcmVuZGVyQnV0dG9ucyA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGxldCBvbmVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9uZScpO1xuICBsZXQgcGxheWVyMUdhbWVib2FyZCA9IHBsYXllcjEuZ2V0R2FtZWJvYXJkKCk7XG4gIG9uZVNxdWFyZXMuZm9yRWFjaCgob25lc3F1YXJlKSA9PiB7XG4gICAgb25lc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheWVyMUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG9uZXNxdWFyZS5kYXRhc2V0LngsIG9uZXNxdWFyZS5kYXRhc2V0LnkpO1xuICAgIH0pO1xuICB9KTtcbiAgbGV0IHR3b1NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gIGxldCBwbGF5ZXIyR2FtZWJvYXJkID0gcGxheWVyMi5nZXRHYW1lYm9hcmQoKTtcbiAgdHdvU3F1YXJlcy5mb3JFYWNoKCh0d29zcXVhcmUpID0+IHtcbiAgICB0d29zcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdHRhY2syID0gcGxheWVyMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHR3b3NxdWFyZS5kYXRhc2V0LngsIHR3b3NxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgLy8gY2hlY2sgdGhhdCBhdHRhY2sgaXMgdmFsaWRcbiAgICAgIGlmIChhdHRhY2syID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgZ2FtZSBzdGF0dXNcbiAgICAgIGlmIChwbGF5ZXIyR2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAvLyBnYW1lb3ZlciBwbGF5ZXIgMSB3aW5zXG4gICAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgICByZW5kZXJCb2FyZHMocGxheWVyMUdhbWVib2FyZC5nZXRCb2FyZCgpLCBwbGF5ZXIyR2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHBsYXllcjEpO1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDEgd2lucycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGFuZ2VUdXJuc1xuICAgICAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gICAgICBwbGF5ZXIxLmNoYW5nZVR1cm4oKTtcbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgbGV0IHggPSBwbGF5ZXIyLmdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBsZXQgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGxldCBhdHRhY2sxID0gcGxheWVyMi5sYXVuY2hBdHRhY2socGxheWVyMUdhbWVib2FyZCwgeCwgeSk7XG4gICAgICAvLyBjaGVjayBpZiBhdHRhY2sgaXMgdmFsaWRcbiAgICAgIHdoaWxlIChhdHRhY2sxID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgeCA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgICAgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgICAgYXR0YWNrMSA9IHBsYXllcjIubGF1bmNoQXR0YWNrKHBsYXllcjFHYW1lYm9hcmQsIHgsIHkpO1xuICAgICAgfVxuICAgICAgLy9jaGVjayBnYW1lIHN0YXR1c1xuICAgICAgaWYgKHBsYXllcjFHYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIC8vIGdhbWVvdmVyIHBsYXllciAyIHdpbnNcbiAgICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMiB3aW5zJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBsYXllcjIuY2hhbmdlVHVybigpO1xuICAgICAgcGxheWVyMS5jaGFuZ2VUdXJuKCk7XG4gICAgICBkZWxldGVCb2FyZHMoKTtcbiAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICByZW5kZXJCdXR0b25zKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHNldFVwQm9hcmQsIHJlbmRlckJvYXJkcywgZGVsZXRlQm9hcmRzLCByZW5kZXJCdXR0b25zIH07XG4iLCJpbXBvcnQgeyBzZXRVcEJvYXJkLCByZW5kZXJCb2FyZHMsIGRlbGV0ZUJvYXJkcywgcmVuZGVyQnV0dG9ucyB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIHJlbmRlckJvYXJkcyhwbGF5ZXIxLmdldEdhbWVib2FyZCgpLmdldEJvYXJkKCksIHBsYXllcjIuZ2V0R2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSk7XG4gIHJlbmRlckJ1dHRvbnMocGxheWVyMSwgcGxheWVyMik7XG59O1xuXG5jb25zdCBzZXRVcEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXJGYWN0b3J5KCdQbGF5ZXIgMScpO1xuICBjb25zdCBwbGF5ZXIyID0gcGxheWVyRmFjdG9yeSgnQ29tcHV0ZXInKTsgLy8gY3B1XG4gIHBsYXllcjIuY2hhbmdlVHVybigpO1xuICBjb25zdCBnZXRQbGF5ZXIxID0gKCkgPT4gcGxheWVyMTtcbiAgY29uc3QgZ2V0UGxheWVyMiA9ICgpID0+IHBsYXllcjI7XG4gIC8vIG5hbWUgZXZlbnQgbGlzdGVuZXIgZG9lc24ndCByZXNldCB3aXRoIHJlc2V0IGJ1dHRvblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjFJbmZvJyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgTmFtZTogXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lLnR5cGUgPSAndGV4dCc7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICBpbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb25zdCBuYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hbWVCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gIGluZm8uYXBwZW5kQ2hpbGQobmFtZUJ0bik7XG5cbiAgbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKS52YWx1ZSk7XG4gICAgcGxheWVyMS5jaGFuZ2VOYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudmFsdWUpO1xuICAgIHdoaWxlIChpbmZvLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm8ucmVtb3ZlQ2hpbGQoaW5mby5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc2V0VXBCb2FyZChwbGF5ZXIxKTtcbiAgfSk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0YXJ0LmlubmVyVGV4dCA9ICdTdGFydCBHYW1lJztcbiAgc3RhcnRCdG4uYXBwZW5kQ2hpbGQoc3RhcnQpO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gIH0pO1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldEJ0bicpO1xuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldC5pbm5lclRleHQgPSAnUmVzZXQgR2FtZSc7XG4gIHJlc2V0QnRuLmFwcGVuZENoaWxkKHJlc2V0KTtcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgd2hpbGUgKHN0YXJ0QnRuLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3RhcnRCdG4ucmVtb3ZlQ2hpbGQoc3RhcnRCdG4uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB3aGlsZSAocmVzZXRCdG4uZmlyc3RDaGlsZCkge1xuICAgICAgICByZXNldEJ0bi5yZW1vdmVDaGlsZChyZXNldEJ0bi5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgY29uc3Qgc2V0dXAgPSBzZXRVcEdhbWUoKTtcbiAgICAgIGNvbnN0IHAxID0gc2V0dXAuZ2V0UGxheWVyMSgpO1xuICAgICAgY29uc3QgcDIgPSBzZXR1cC5nZXRQbGF5ZXIyKCk7XG4gICAgICBjb25zdCBwMUdhbWVib2FyZCA9IHAxLmdldEdhbWVib2FyZCgpO1xuICAgICAgY29uc3QgcDJHYW1lYm9hcmQgPSBwMi5nZXRHYW1lYm9hcmQoKTtcbiAgICAgIHAyR2FtZWJvYXJkLmdlbmVyYXRlUmFuZG9tRmxlZXQoKTtcbiAgICB9O1xuICAgIHJlc2V0R2FtZSgpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBnZXRQbGF5ZXIxLFxuICAgIGdldFBsYXllcjIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXRVcEdhbWUsIHN0YXJ0R2FtZSB9O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSByZXF1aXJlKCcuL3NoaXAnKTtcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoJ25vbmUnKS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKCdub25lJykpO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuICAvLyBjaGVjayBzaGlwcyBkb24ndCBvdmVybGFwXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcCA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjaGVjayA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKGJvYXJkW3hDb29yZCArIGldW3lDb29yZF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoZWNrLnB1c2goYm9hcmRbeENvb3JkXVt5Q29vcmQgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGVja1tpXSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGNoZWNrID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hlY2sgPSBbXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLy8gY2hlY2sgc2hpcHMgYXJlIGluYm91bmRcbiAgY29uc3QgY2hlY2tCb3VuZHMgPSAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY2hlY2sgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaCh4Q29vcmQgKyBpKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrLnB1c2goeUNvb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKHlDb29yZCArIGkpO1xuICAgICAgfVxuICAgICAgY2hlY2sucHVzaCh4Q29vcmQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hlY2tbaV0gPiA5IHx8IGNoZWNrW2ldIDwgMCkge1xuICAgICAgICBjaGVjayA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrID0gW107XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IG1hcmtCb2FyZCA9IChzaGlwKSA9PiB7XG4gICAgICBjb25zdCB4ID0gc2hpcC5nZXRYQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBzaGlwLmdldFlDb29yZCgpO1xuICAgICAgY29uc3QgaWQgPSBzaGlwLmdldElkKCk7XG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXAuZ2V0T3JpZW50YXRpb24oKTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt4ICsgaV1beV0gPSBpZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNoZWNrID0gY2hlY2tCb3VuZHMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2sgPSBjaGVja092ZXJsYXAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSBzaGlwcy5sZW5ndGg7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCwgaWQpO1xuICAgIGJhdHRsZXNoaXAuY2hhbmdlQ29vcmRpbmF0ZXMoeENvb3JkLCB5Q29vcmQpO1xuICAgIGJhdHRsZXNoaXAuY2hhbmdlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICAgIG1hcmtCb2FyZChiYXR0bGVzaGlwKTtcbiAgICBzaGlwcy5wdXNoKGJhdHRsZXNoaXApO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIGdlbmVyYXRlIHJhbmRvbSBmbGVldCBmb3IgY3B1XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0UmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH07XG4gICAgY29uc3QgcGlja0RpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSArIDAuNSk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBudW0gPiAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuICAgIC8vIHBsYWNlIENhcnJpZXIgKDUpXG4gICAgbGV0IGNhcnJpZXIgPSBmYWxzZTtcbiAgICB3aGlsZSAoY2FycmllciA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDUsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBjYXJyaWVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGJhdHRsZXNoaXAgPSBmYWxzZTtcbiAgICB3aGlsZSAoYmF0dGxlc2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDQsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBiYXR0bGVzaGlwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNydWlzZXIgPSBmYWxzZTtcbiAgICB3aGlsZSAoY3J1aXNlciA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDMsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBjcnVpc2VyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1Ym1hcmluZSA9IGZhbHNlO1xuICAgIHdoaWxlIChzdWJtYXJpbmUgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCAzLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgc3VibWFyaW5lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRlc3Ryb3llciA9IGZhbHNlO1xuICAgIHdoaWxlIChkZXN0cm95ZXIgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCAyLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgZGVzdHJveWVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICBpZiAobG9jYXRpb24gPT09ICdtaXNzJyB8fCBsb2NhdGlvbiA9PT0gJ2hpdCcpIHtcbiAgICAgIHJldHVybiAoJ2ludmFsaWQnKTtcbiAgICB9XG4gICAgaWYgKGxvY2F0aW9uID09PSAnbm9uZScpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdtaXNzJztcbiAgICAgIHJldHVybiAoJ3ZhbGlkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXBzW2xvY2F0aW9uXS5nZXRPcmllbnRhdGlvbigpO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdoaXQnO1xuICAgICAgY29uc3QgeCA9IHNoaXBzW2xvY2F0aW9uXS5nZXRYQ29vcmQoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0geENvb3JkIC0geDtcbiAgICAgIHNoaXBzW2xvY2F0aW9uXS5oaXQoaW5kZXgpO1xuICAgICAgcmV0dXJuICgndmFsaWQnKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSAnaGl0JztcbiAgICAgIGNvbnN0IHkgPSBzaGlwc1tsb2NhdGlvbl0uZ2V0WUNvb3JkKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHlDb29yZCAtIHk7XG4gICAgICBzaGlwc1tsb2NhdGlvbl0uaGl0KGluZGV4KTtcbiAgICAgIHJldHVybiAoJ3ZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiAoJ2ludmFsaWQnKTtcbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSBzaGlwc1tpXS5pc1N1bmsoKTtcbiAgICAgIGlmIChhbnN3ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIGdlbmVyYXRlUmFuZG9tRmxlZXQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmRGYWN0b3J5O1xuIiwiY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH07XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4gcGxheWVyR2FtZWJvYXJkO1xuICBsZXQgdHVybiA9IHRydWU7XG4gIGNvbnN0IGlzVHVybiA9ICgpID0+IHR1cm47XG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7XG4gICAgdHVybiA9ICF0dXJuO1xuICB9O1xuICBjb25zdCBsYXVuY2hBdHRhY2sgPSAoZW5lbXksIHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gICAgZW5lbXkucmVjZWl2ZUF0dGFjayh4Q29vcmQsIHlDb29yZCk7XG4gIH07XG4gIC8vIGZvciBjb21wdXRlciBhdHRhY2tzXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gbnVtO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgY2hhbmdlTmFtZSxcbiAgICBpc1R1cm4sXG4gICAgY2hhbmdlVHVybixcbiAgICBsYXVuY2hBdHRhY2ssXG4gICAgZ2V0UmFuZG9tQ29vcmQsXG4gICAgZ2V0R2FtZWJvYXJkLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJGYWN0b3J5O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBpZCkgPT4ge1xuICBjb25zdCBtYXJrcyA9IFtdO1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgY29uc3QgY2hhbmdlQ29vcmRpbmF0ZXMgPSAobmV3WCwgbmV3WSkgPT4ge1xuICAgIHggPSBuZXdYO1xuICAgIHkgPSBuZXdZO1xuICB9O1xuXG4gIGNvbnN0IGdldFhDb29yZCA9ICgpID0+IHg7XG4gIGNvbnN0IGdldFlDb29yZCA9ICgpID0+IHk7XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiBvcmllbnRhdGlvbjtcbiAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSAobmV3T3JpZW50YXRpb24pID0+IHtcbiAgICBvcmllbnRhdGlvbiA9IG5ld09yaWVudGF0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldE1hcmtzID0gKCkgPT4gbWFya3M7XG4gIGxldCBoaXRDb3VudGVyID0gMDtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbWFya3MucHVzaCgnTycpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGl0ID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgbWFya3NbbG9jYXRpb25dID0gJ1gnO1xuICAgIGhpdENvdW50ZXIgKz0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRDb3VudGVyID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGNoYW5nZUNvb3JkaW5hdGVzLFxuICAgIGdldFhDb29yZCxcbiAgICBnZXRZQ29vcmQsXG4gICAgZ2V0T3JpZW50YXRpb24sXG4gICAgY2hhbmdlT3JpZW50YXRpb24sXG4gICAgaGl0LFxuICAgIHNldFVwLFxuICAgIGdldE1hcmtzLFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcEZhY3Rvcnk7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2V0VXBHYW1lLCBzdGFydEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgbWFrZURyYWdnYWJsZSwgc2V0VXBCb2FyZCB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHNldHVwID0gc2V0VXBHYW1lKCk7XG5cbmNvbnN0IHAxID0gc2V0dXAuZ2V0UGxheWVyMSgpO1xuY29uc3QgcDIgPSBzZXR1cC5nZXRQbGF5ZXIyKCk7XG5cbmNvbnN0IHAxR2FtZWJvYXJkID0gcDEuZ2V0R2FtZWJvYXJkKCk7XG5jb25zdCBwMkdhbWVib2FyZCA9IHAyLmdldEdhbWVib2FyZCgpO1xuXG5wMkdhbWVib2FyZC5nZW5lcmF0ZVJhbmRvbUZsZWV0KCk7XG5cbi8vIHN0YXJ0R2FtZShwMSwgcDIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9