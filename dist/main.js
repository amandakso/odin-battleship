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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n}\n\n.boards, .setup {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.shade {\n    background-color: grey;\n}\n\n.color {\n    background-color: grey;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n}\n\n.boards, .setup {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.shade {\n    background-color: grey;\n}\n\n.color {\n    background-color: grey;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}\n"],"sourceRoot":""}]);
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
  info.style.display = 'inline-block';
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
    player1.changeName(document.querySelector('.name').value);
    while (info.firstChild) {
      info.removeChild(info.firstChild);
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setUpBoard)(player1);
  });
  const gameBtns = document.querySelector('.gameBtns');
  gameBtns.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDak1BLHlCQUF5QixtQkFBTyxDQUFDLHVDQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUNJOztBQUVsRCx5QkFBeUIsbUJBQU8sQ0FBQyx1Q0FBYTs7QUFFOUMsY0FBYyxnREFBUzs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkcywgLnNldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnNoYWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNvbG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmRzLCAuc2V0dXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4uc2hhZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY29sb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHBsYXllckZhY3RvcnkgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5jb25zdCBudW1iZXJPZlNxdWFyZXMgPSAxMDsgLy8gbnVtYmVyIG9mIHNxdWFyZXMgaW4gb25lIHJvd1xuXG5jb25zdCBzZXRVcEJvYXJkID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzZXR1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cCcpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2F4aXMnKTtcbiAgYnRuLmlubmVyVGV4dCA9ICdYLUFYSVMnO1xuICBidG4udmFsdWUgPSAneCc7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBheGlzID0gYnRuLnZhbHVlID09PSAneCcgPyAneScgOiAneCc7XG4gICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgYnRuLmlubmVyVGV4dCA9ICdYLUFYSVMnO1xuICAgICAgYnRuLnZhbHVlID0gYXhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgYnRuLmlubmVyVGV4dCA9ICdZLUFYSVMnO1xuICAgICAgYnRuLnZhbHVlID0gYXhpcztcbiAgICB9XG4gIH0pO1xuICBzZXR1cC5hcHBlbmRDaGlsZChidG4pO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuZGF0YXNldC54ID0gaTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBqO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYHMke2l9JHtqfWApO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgbGV0IHggPSAoc3F1YXJlLmRhdGFzZXQueCk7XG4gICAgICAgIGxldCB5ID0gKHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICBsZXQgbGVuZ3RoO1xuICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsZW5ndGggPSA1O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGVuZ3RoID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZW5ndGggPSA1O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYnRuLnZhbHVlID09PSAneCcpIHsgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zJHt4fSR7cGFyc2VJbnQoeSkgKyBpfWApO1xuICAgICAgICAgICAgaWYgKChwYXJzZUludCh5KSArIGkpID49IDAgJiYgcGFyc2VJbnQoeSkgKyBpIDw9IDkpIHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY2xhc3NMaXN0LmFkZCgnc2hhZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnMke3BhcnNlSW50KHgpKyBpfSR7eX1gKTtcbiAgICAgICAgICAgIGlmICgocGFyc2VJbnQoeCkgKyBpKSA+PSAwICYmIHBhcnNlSW50KHgpICsgaSA8PSA5KSB7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNsYXNzTGlzdC5hZGQoJ3NoYWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IChzcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgbGV0IHkgPSAoc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIHN3aXRjaCAoY291bnRlcikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBsZW5ndGggPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBsZW5ndGggPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGlmIChidG4udmFsdWUgPT09ICd4JykgeyAvLyBob3Jpem9udGFsXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnMke3h9JHtwYXJzZUludCh5KSArIGl9YCk7XG4gICAgICAgICAgICBpZiAoKHBhcnNlSW50KHkpICsgaSkgPj0gMCAmJiBwYXJzZUludCh5KSArIGkgPD0gOSkge1xuICAgICAgICAgICAgICBjb29yZGluYXRlcy5jbGFzc0xpc3QucmVtb3ZlKCdzaGFkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucyR7cGFyc2VJbnQoeCkrIGl9JHt5fWApO1xuICAgICAgICAgICAgaWYgKChwYXJzZUludCh4KSArIGkpID49IDAgJiYgcGFyc2VJbnQoeCkgKyBpIDw9IDkpIHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IChzcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgbGV0IHkgPSAoc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIHN3aXRjaCAoY291bnRlcikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBsZW5ndGggPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBsZW5ndGggPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllci5nZXRHYW1lYm9hcmQoKTtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xuICAgICAgICBpZiAoYnRuLnZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrID0gZ2FtZWJvYXJkLnBsYWNlU2hpcChwYXJzZUludCh4KSwgcGFyc2VJbnQoeSksIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidG4udmFsdWUgPT09ICd4JykgeyAvLyBob3Jpem9udGFsXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnMke3h9JHtwYXJzZUludCh5KSArIGt9YCk7XG4gICAgICAgICAgICBpZiAoKHBhcnNlSW50KHkpICsgaykgPj0gMCAmJiBwYXJzZUludCh5KSArIGsgPD0gOSkge1xuICAgICAgICAgICAgICBjb29yZGluYXRlcy5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucyR7cGFyc2VJbnQoeCkrIGt9JHt5fWApO1xuICAgICAgICAgICAgaWYgKChwYXJzZUludCh4KSArIGspID49IDAgJiYgcGFyc2VJbnQoeCkgKyBrIDw9IDkpIHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY2xhc3NMaXN0LmFkZCgnY29sb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBpZiAoY291bnRlciA+PSA1KSB7XG4gICAgICAgICAgbGV0IHNldHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwJyk7XG4gICAgICAgICAgbGV0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgICAgICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUJ0bnMnKTtcbiAgICAgICAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5heGlzJyk7XG4gICAgICAgICAgc2V0dXAucmVtb3ZlQ2hpbGQoYXhpcyk7XG4gICAgICAgICAgYnRucy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB3aGlsZSAoc2hpcHMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2hpcHMucmVtb3ZlQ2hpbGQoc2hpcHMuZmlyc3RDaGlsZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbiAgc2V0dXAuYXBwZW5kQ2hpbGQoYm9hcmQpO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKGJvYXJkMSwgYm9hcmQyKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgbGV0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBsZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnb25lJyk7XG4gICAgICBzcXVhcmUuZGF0YXNldC54ID0gaTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBqO1xuICAgICAgZGl2MS5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG4gICAgICBzcXVhcmUuZGF0YXNldC54ID0gaTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBqO1xuICAgICAgZGl2Mi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuXG4gIGJvYXJkcy5hcHBlbmRDaGlsZChkaXYxKTtcbiAgYm9hcmRzLmFwcGVuZENoaWxkKGRpdjIpO1xuXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBib2FyZDE7XG4gIGxldCBwMUJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBwMUJvYXJkLnB1c2gocGxheWVyMUJvYXJkW2ldW2pdKTtcbiAgICB9XG4gIH1cblxuICBsZXQgb25lc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vbmUnKTtcbiAgb25lc3F1YXJlcy5mb3JFYWNoKChvbmUpID0+IHtcbiAgICBpZiAocDFCb2FyZFswXSAhPT0gJ25vbmUnICYmIHAxQm9hcmRbMF0gIT09ICdoaXQnICYmIHAxQm9hcmRbMF0gIT09ICdtaXNzJykge1xuICAgICAgb25lLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XG4gICAgfTtcbiAgICBvbmUuY2xhc3NMaXN0LmFkZChwMUJvYXJkWzBdKTtcbiAgICBwMUJvYXJkLnNoaWZ0KCk7XG4gIH0pO1xuXG4gIGxldCBwbGF5ZXIyQm9hcmQgPSBib2FyZDI7XG4gIGxldCBwMkJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBwMkJvYXJkLnB1c2gocGxheWVyMkJvYXJkW2ldW2pdKTtcbiAgICB9XG4gIH1cbiAgbGV0IHR3b3NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gIHR3b3NxdWFyZXMuZm9yRWFjaCgodHdvKSA9PiB7XG4gICAgdHdvLmNsYXNzTGlzdC5hZGQocDJCb2FyZFswXSk7XG4gICAgcDJCb2FyZC5zaGlmdCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZUJvYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICB3aGlsZSAoYm9hcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICBib2FyZHMucmVtb3ZlQ2hpbGQoYm9hcmRzLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBuYW1lID0gcGxheWVyLmdldE5hbWUoKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJUZXh0ID0gbmFtZSArICcgV2lucyEnO1xufVxuXG5jb25zdCByZW5kZXJCdXR0b25zID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgbGV0IG9uZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJyk7XG4gIGxldCBwbGF5ZXIxR2FtZWJvYXJkID0gcGxheWVyMS5nZXRHYW1lYm9hcmQoKTtcbiAgb25lU3F1YXJlcy5mb3JFYWNoKChvbmVzcXVhcmUpID0+IHtcbiAgICBvbmVzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIxR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sob25lc3F1YXJlLmRhdGFzZXQueCwgb25lc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgfSk7XG4gIH0pO1xuICBsZXQgdHdvU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50d28nKTtcbiAgbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBwbGF5ZXIyLmdldEdhbWVib2FyZCgpO1xuICB0d29TcXVhcmVzLmZvckVhY2goKHR3b3NxdWFyZSkgPT4ge1xuICAgIHR3b3NxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFjazIgPSBwbGF5ZXIyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHdvc3F1YXJlLmRhdGFzZXQueCwgdHdvc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAvLyBjaGVjayB0aGF0IGF0dGFjayBpcyB2YWxpZFxuICAgICAgaWYgKGF0dGFjazIgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBnYW1lIHN0YXR1c1xuICAgICAgaWYgKHBsYXllcjJHYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIC8vIGdhbWVvdmVyIHBsYXllciAxIHdpbnNcbiAgICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMSB3aW5zJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNoYW5nZVR1cm5zXG4gICAgICBwbGF5ZXIyLmNoYW5nZVR1cm4oKTtcbiAgICAgIHBsYXllcjEuY2hhbmdlVHVybigpO1xuICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICBsZXQgeCA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGxldCB5ID0gcGxheWVyMi5nZXRSYW5kb21Db29yZCgpO1xuICAgICAgbGV0IGF0dGFjazEgPSBwbGF5ZXIyLmxhdW5jaEF0dGFjayhwbGF5ZXIxR2FtZWJvYXJkLCB4LCB5KTtcbiAgICAgIC8vIGNoZWNrIGlmIGF0dGFjayBpcyB2YWxpZFxuICAgICAgd2hpbGUgKGF0dGFjazEgPT09ICdpbnZhbGlkJykge1xuICAgICAgICB4ID0gcGxheWVyMi5nZXRSYW5kb21Db29yZCgpO1xuICAgICAgICB5ID0gcGxheWVyMi5nZXRSYW5kb21Db29yZCgpO1xuICAgICAgICBhdHRhY2sxID0gcGxheWVyMi5sYXVuY2hBdHRhY2socGxheWVyMUdhbWVib2FyZCwgeCwgeSk7XG4gICAgICB9XG4gICAgICAvL2NoZWNrIGdhbWUgc3RhdHVzXG4gICAgICBpZiAocGxheWVyMUdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgLy8gZ2FtZW92ZXIgcGxheWVyIDIgd2luc1xuICAgICAgICBkZWxldGVCb2FyZHMoKTtcbiAgICAgICAgcmVuZGVyQm9hcmRzKHBsYXllcjFHYW1lYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyMkdhbWVib2FyZC5nZXRCb2FyZCgpKTtcbiAgICAgICAgZGlzcGxheVdpbm5lcihwbGF5ZXIyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAyIHdpbnMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gICAgICBwbGF5ZXIxLmNoYW5nZVR1cm4oKTtcbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgcmVuZGVyQm9hcmRzKHBsYXllcjFHYW1lYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyMkdhbWVib2FyZC5nZXRCb2FyZCgpKTtcbiAgICAgIHJlbmRlckJ1dHRvbnMocGxheWVyMSwgcGxheWVyMik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc2V0VXBCb2FyZCwgcmVuZGVyQm9hcmRzLCBkZWxldGVCb2FyZHMsIHJlbmRlckJ1dHRvbnMgfTtcbiIsImltcG9ydCB7IHNldFVwQm9hcmQsIHJlbmRlckJvYXJkcywgZGVsZXRlQm9hcmRzLCByZW5kZXJCdXR0b25zIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgcmVuZGVyQm9hcmRzKHBsYXllcjEuZ2V0R2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSwgcGxheWVyMi5nZXRHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKTtcbiAgcmVuZGVyQnV0dG9ucyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbn07XG5cbmNvbnN0IHNldFVwR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ1BsYXllciAxJyk7XG4gIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXJGYWN0b3J5KCdDb21wdXRlcicpOyAvLyBjcHVcbiAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gIGNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBwbGF5ZXIxO1xuICBjb25zdCBnZXRQbGF5ZXIyID0gKCkgPT4gcGxheWVyMjtcbiAgLy8gbmFtZSBldmVudCBsaXN0ZW5lciBkb2Vzbid0IHJlc2V0IHdpdGggcmVzZXQgYnV0dG9uXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMUluZm8nKTtcbiAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgTmFtZTogXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lLnR5cGUgPSAndGV4dCc7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICBpbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb25zdCBuYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hbWVCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gIGluZm8uYXBwZW5kQ2hpbGQobmFtZUJ0bik7XG5cbiAgbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcGxheWVyMS5jaGFuZ2VOYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudmFsdWUpO1xuICAgIHdoaWxlIChpbmZvLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm8ucmVtb3ZlQ2hpbGQoaW5mby5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc2V0VXBCb2FyZChwbGF5ZXIxKTtcbiAgfSk7XG4gIGNvbnN0IGdhbWVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVCdG5zJyk7XG4gIGdhbWVCdG5zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0YXJ0LmlubmVyVGV4dCA9ICdTdGFydCBHYW1lJztcbiAgc3RhcnRCdG4uYXBwZW5kQ2hpbGQoc3RhcnQpO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gIH0pO1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldEJ0bicpO1xuICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldC5pbm5lclRleHQgPSAnUmVzZXQgR2FtZSc7XG4gIHJlc2V0QnRuLmFwcGVuZENoaWxkKHJlc2V0KTtcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgd2hpbGUgKHN0YXJ0QnRuLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3RhcnRCdG4ucmVtb3ZlQ2hpbGQoc3RhcnRCdG4uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB3aGlsZSAocmVzZXRCdG4uZmlyc3RDaGlsZCkge1xuICAgICAgICByZXNldEJ0bi5yZW1vdmVDaGlsZChyZXNldEJ0bi5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgY29uc3Qgc2V0dXAgPSBzZXRVcEdhbWUoKTtcbiAgICAgIGNvbnN0IHAxID0gc2V0dXAuZ2V0UGxheWVyMSgpO1xuICAgICAgY29uc3QgcDIgPSBzZXR1cC5nZXRQbGF5ZXIyKCk7XG4gICAgICBjb25zdCBwMUdhbWVib2FyZCA9IHAxLmdldEdhbWVib2FyZCgpO1xuICAgICAgY29uc3QgcDJHYW1lYm9hcmQgPSBwMi5nZXRHYW1lYm9hcmQoKTtcbiAgICAgIHAyR2FtZWJvYXJkLmdlbmVyYXRlUmFuZG9tRmxlZXQoKTtcbiAgICB9O1xuICAgIHJlc2V0R2FtZSgpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBnZXRQbGF5ZXIxLFxuICAgIGdldFBsYXllcjIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXRVcEdhbWUsIHN0YXJ0R2FtZSB9O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSByZXF1aXJlKCcuL3NoaXAnKTtcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoJ25vbmUnKS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKCdub25lJykpO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuICAvLyBjaGVjayBzaGlwcyBkb24ndCBvdmVybGFwXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcCA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjaGVjayA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKGJvYXJkW3hDb29yZCArIGldW3lDb29yZF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoZWNrLnB1c2goYm9hcmRbeENvb3JkXVt5Q29vcmQgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGVja1tpXSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGNoZWNrID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hlY2sgPSBbXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgLy8gY2hlY2sgc2hpcHMgYXJlIGluYm91bmRcbiAgY29uc3QgY2hlY2tCb3VuZHMgPSAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY2hlY2sgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaCh4Q29vcmQgKyBpKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrLnB1c2goeUNvb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKHlDb29yZCArIGkpO1xuICAgICAgfVxuICAgICAgY2hlY2sucHVzaCh4Q29vcmQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hlY2tbaV0gPiA5IHx8IGNoZWNrW2ldIDwgMCkge1xuICAgICAgICBjaGVjayA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrID0gW107XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IG1hcmtCb2FyZCA9IChzaGlwKSA9PiB7XG4gICAgICBjb25zdCB4ID0gc2hpcC5nZXRYQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBzaGlwLmdldFlDb29yZCgpO1xuICAgICAgY29uc3QgaWQgPSBzaGlwLmdldElkKCk7XG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXAuZ2V0T3JpZW50YXRpb24oKTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt4ICsgaV1beV0gPSBpZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNoZWNrID0gY2hlY2tCb3VuZHMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2sgPSBjaGVja092ZXJsYXAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSBzaGlwcy5sZW5ndGg7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCwgaWQpO1xuICAgIGJhdHRsZXNoaXAuY2hhbmdlQ29vcmRpbmF0ZXMoeENvb3JkLCB5Q29vcmQpO1xuICAgIGJhdHRsZXNoaXAuY2hhbmdlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICAgIG1hcmtCb2FyZChiYXR0bGVzaGlwKTtcbiAgICBzaGlwcy5wdXNoKGJhdHRsZXNoaXApO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIGdlbmVyYXRlIHJhbmRvbSBmbGVldCBmb3IgY3B1XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0UmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH07XG4gICAgY29uc3QgcGlja0RpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSArIDAuNSk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBudW0gPiAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuICAgIC8vIHBsYWNlIENhcnJpZXIgKDUpXG4gICAgbGV0IGNhcnJpZXIgPSBmYWxzZTtcbiAgICB3aGlsZSAoY2FycmllciA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDUsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBjYXJyaWVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGJhdHRsZXNoaXAgPSBmYWxzZTtcbiAgICB3aGlsZSAoYmF0dGxlc2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDQsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBiYXR0bGVzaGlwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNydWlzZXIgPSBmYWxzZTtcbiAgICB3aGlsZSAoY3J1aXNlciA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDMsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBjcnVpc2VyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1Ym1hcmluZSA9IGZhbHNlO1xuICAgIHdoaWxlIChzdWJtYXJpbmUgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCAzLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgc3VibWFyaW5lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRlc3Ryb3llciA9IGZhbHNlO1xuICAgIHdoaWxlIChkZXN0cm95ZXIgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCAyLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgZGVzdHJveWVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICBpZiAobG9jYXRpb24gPT09ICdtaXNzJyB8fCBsb2NhdGlvbiA9PT0gJ2hpdCcpIHtcbiAgICAgIHJldHVybiAoJ2ludmFsaWQnKTtcbiAgICB9XG4gICAgaWYgKGxvY2F0aW9uID09PSAnbm9uZScpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdtaXNzJztcbiAgICAgIHJldHVybiAoJ3ZhbGlkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXBzW2xvY2F0aW9uXS5nZXRPcmllbnRhdGlvbigpO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdoaXQnO1xuICAgICAgY29uc3QgeCA9IHNoaXBzW2xvY2F0aW9uXS5nZXRYQ29vcmQoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0geENvb3JkIC0geDtcbiAgICAgIHNoaXBzW2xvY2F0aW9uXS5oaXQoaW5kZXgpO1xuICAgICAgcmV0dXJuICgndmFsaWQnKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSAnaGl0JztcbiAgICAgIGNvbnN0IHkgPSBzaGlwc1tsb2NhdGlvbl0uZ2V0WUNvb3JkKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHlDb29yZCAtIHk7XG4gICAgICBzaGlwc1tsb2NhdGlvbl0uaGl0KGluZGV4KTtcbiAgICAgIHJldHVybiAoJ3ZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiAoJ2ludmFsaWQnKTtcbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSBzaGlwc1tpXS5pc1N1bmsoKTtcbiAgICAgIGlmIChhbnN3ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIGdlbmVyYXRlUmFuZG9tRmxlZXQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmRGYWN0b3J5O1xuIiwiY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH07XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4gcGxheWVyR2FtZWJvYXJkO1xuICBsZXQgdHVybiA9IHRydWU7XG4gIGNvbnN0IGlzVHVybiA9ICgpID0+IHR1cm47XG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7XG4gICAgdHVybiA9ICF0dXJuO1xuICB9O1xuICBjb25zdCBsYXVuY2hBdHRhY2sgPSAoZW5lbXksIHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gICAgZW5lbXkucmVjZWl2ZUF0dGFjayh4Q29vcmQsIHlDb29yZCk7XG4gIH07XG4gIC8vIGZvciBjb21wdXRlciBhdHRhY2tzXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gbnVtO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgY2hhbmdlTmFtZSxcbiAgICBpc1R1cm4sXG4gICAgY2hhbmdlVHVybixcbiAgICBsYXVuY2hBdHRhY2ssXG4gICAgZ2V0UmFuZG9tQ29vcmQsXG4gICAgZ2V0R2FtZWJvYXJkLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJGYWN0b3J5O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBpZCkgPT4ge1xuICBjb25zdCBtYXJrcyA9IFtdO1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgY29uc3QgY2hhbmdlQ29vcmRpbmF0ZXMgPSAobmV3WCwgbmV3WSkgPT4ge1xuICAgIHggPSBuZXdYO1xuICAgIHkgPSBuZXdZO1xuICB9O1xuXG4gIGNvbnN0IGdldFhDb29yZCA9ICgpID0+IHg7XG4gIGNvbnN0IGdldFlDb29yZCA9ICgpID0+IHk7XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiBvcmllbnRhdGlvbjtcbiAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSAobmV3T3JpZW50YXRpb24pID0+IHtcbiAgICBvcmllbnRhdGlvbiA9IG5ld09yaWVudGF0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldE1hcmtzID0gKCkgPT4gbWFya3M7XG4gIGxldCBoaXRDb3VudGVyID0gMDtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbWFya3MucHVzaCgnTycpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGl0ID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgbWFya3NbbG9jYXRpb25dID0gJ1gnO1xuICAgIGhpdENvdW50ZXIgKz0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRDb3VudGVyID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGNoYW5nZUNvb3JkaW5hdGVzLFxuICAgIGdldFhDb29yZCxcbiAgICBnZXRZQ29vcmQsXG4gICAgZ2V0T3JpZW50YXRpb24sXG4gICAgY2hhbmdlT3JpZW50YXRpb24sXG4gICAgaGl0LFxuICAgIHNldFVwLFxuICAgIGdldE1hcmtzLFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcEZhY3Rvcnk7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2V0VXBHYW1lLCBzdGFydEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgbWFrZURyYWdnYWJsZSwgc2V0VXBCb2FyZCB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHNldHVwID0gc2V0VXBHYW1lKCk7XG5cbmNvbnN0IHAxID0gc2V0dXAuZ2V0UGxheWVyMSgpO1xuY29uc3QgcDIgPSBzZXR1cC5nZXRQbGF5ZXIyKCk7XG5cbmNvbnN0IHAxR2FtZWJvYXJkID0gcDEuZ2V0R2FtZWJvYXJkKCk7XG5jb25zdCBwMkdhbWVib2FyZCA9IHAyLmdldEdhbWVib2FyZCgpO1xuXG5wMkdhbWVib2FyZC5nZW5lcmF0ZVJhbmRvbUZsZWV0KCk7XG5cbi8vIHN0YXJ0R2FtZShwMSwgcDIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9