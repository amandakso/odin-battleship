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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n}\n\n.boards, .setup {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n}\n\n.boards, .setup {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}\n"],"sourceRoot":""}]);
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

const setUpBoard = () => {
  const setup = document.querySelector('.setup');
  const board = document.createElement('div');
  board.classList.add('board');
  for (let i = 0; i < numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.dataset.x = i;
      square.dataset.y = j;
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
    console.log(player1.getName());
    document.getElementById('player1').value = '';
    console.log(document.getElementById('player1').value);
    // get player 1 name
    // reset input
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setUpBoard)();
  });
  return {
    getPlayer1,
    getPlayer2,
  };
};


const startGame = (player1, player2) => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(player1.getGameboard().getBoard(), player2.getGameboard().getBoard());
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderButtons)(player1, player2);
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
// Carrier (5)
p1Gameboard.placeShip(0, 1, 5, 'horizontal');

// Battleship (4)
p1Gameboard.placeShip(0, 8, 4, 'vertical');

// Cruiser (3)
p1Gameboard.placeShip(2, 1, 3, 'horizontal');

// Submarine (3)
p1Gameboard.placeShip(4, 1, 3, 'horizontal');

// Destroyer (2)
p1Gameboard.placeShip(7, 3, 2, 'vertical');

// setUpBoard();

// startGame(p1, p2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUNJOztBQUVsRCx5QkFBeUIsbUJBQU8sQ0FBQyx1Q0FBYTs7QUFFOUMsY0FBYyxnREFBUzs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkcywgLnNldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmRzLCAuc2V0dXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHBsYXllckZhY3RvcnkgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5jb25zdCBudW1iZXJPZlNxdWFyZXMgPSAxMDsgLy8gbnVtYmVyIG9mIHNxdWFyZXMgaW4gb25lIHJvd1xuXG5jb25zdCBzZXRVcEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBzZXR1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cCcpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG4gIHNldHVwLmFwcGVuZENoaWxkKGJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9IChib2FyZDEsIGJvYXJkMikgPT4ge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gIGxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ29uZScpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gajtcbiAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICBib2FyZHMuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gIGJvYXJkcy5hcHBlbmRDaGlsZChkaXYyKTtcblxuICBsZXQgcGxheWVyMUJvYXJkID0gYm9hcmQxO1xuICBsZXQgcDFCb2FyZCA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBwMUJvYXJkLnB1c2gocGxheWVyMUJvYXJkW2ldW2pdKTtcbiAgICB9XG4gIH1cblxuICBsZXQgb25lc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vbmUnKTtcbiAgb25lc3F1YXJlcy5mb3JFYWNoKChvbmUpID0+IHtcbiAgICBvbmUuY2xhc3NMaXN0LmFkZChwMUJvYXJkWzBdKTtcbiAgICBwMUJvYXJkLnNoaWZ0KCk7XG4gIH0pO1xuXG4gIGxldCBwbGF5ZXIyQm9hcmQgPSBib2FyZDI7XG4gIGxldCBwMkJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlck9mU3F1YXJlczsgaisrKSB7XG4gICAgICBwMkJvYXJkLnB1c2gocGxheWVyMkJvYXJkW2ldW2pdKTtcbiAgICB9XG4gIH1cbiAgbGV0IHR3b3NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gIHR3b3NxdWFyZXMuZm9yRWFjaCgodHdvKSA9PiB7XG4gICAgdHdvLmNsYXNzTGlzdC5hZGQocDJCb2FyZFswXSk7XG4gICAgcDJCb2FyZC5zaGlmdCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZUJvYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICB3aGlsZSAoYm9hcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICBib2FyZHMucmVtb3ZlQ2hpbGQoYm9hcmRzLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBuYW1lID0gcGxheWVyLmdldE5hbWUoKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJUZXh0ID0gbmFtZSArICcgV2lucyEnO1xufVxuXG5jb25zdCByZW5kZXJCdXR0b25zID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgbGV0IG9uZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJyk7XG4gIGxldCBwbGF5ZXIxR2FtZWJvYXJkID0gcGxheWVyMS5nZXRHYW1lYm9hcmQoKTtcbiAgb25lU3F1YXJlcy5mb3JFYWNoKChvbmVzcXVhcmUpID0+IHtcbiAgICBvbmVzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIxR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sob25lc3F1YXJlLmRhdGFzZXQueCwgb25lc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgfSk7XG4gIH0pO1xuICBsZXQgdHdvU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50d28nKTtcbiAgbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBwbGF5ZXIyLmdldEdhbWVib2FyZCgpO1xuICB0d29TcXVhcmVzLmZvckVhY2goKHR3b3NxdWFyZSkgPT4ge1xuICAgIHR3b3NxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFjazIgPSBwbGF5ZXIyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHdvc3F1YXJlLmRhdGFzZXQueCwgdHdvc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAvLyBjaGVjayB0aGF0IGF0dGFjayBpcyB2YWxpZFxuICAgICAgaWYgKGF0dGFjazIgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBnYW1lIHN0YXR1c1xuICAgICAgaWYgKHBsYXllcjJHYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIC8vIGdhbWVvdmVyIHBsYXllciAxIHdpbnNcbiAgICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMSB3aW5zJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNoYW5nZVR1cm5zXG4gICAgICBwbGF5ZXIyLmNoYW5nZVR1cm4oKTtcbiAgICAgIHBsYXllcjEuY2hhbmdlVHVybigpO1xuICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICBsZXQgeCA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGxldCB5ID0gcGxheWVyMi5nZXRSYW5kb21Db29yZCgpO1xuICAgICAgbGV0IGF0dGFjazEgPSBwbGF5ZXIyLmxhdW5jaEF0dGFjayhwbGF5ZXIxR2FtZWJvYXJkLCB4LCB5KTtcbiAgICAgIC8vIGNoZWNrIGlmIGF0dGFjayBpcyB2YWxpZFxuICAgICAgd2hpbGUgKGF0dGFjazEgPT09ICdpbnZhbGlkJykge1xuICAgICAgICB4ID0gcGxheWVyMi5nZXRSYW5kb21Db29yZCgpO1xuICAgICAgICB5ID0gcGxheWVyMi5nZXRSYW5kb21Db29yZCgpO1xuICAgICAgICBhdHRhY2sxID0gcGxheWVyMi5sYXVuY2hBdHRhY2socGxheWVyMUdhbWVib2FyZCwgeCwgeSk7XG4gICAgICB9XG4gICAgICAvL2NoZWNrIGdhbWUgc3RhdHVzXG4gICAgICBpZiAocGxheWVyMUdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgLy8gZ2FtZW92ZXIgcGxheWVyIDIgd2luc1xuICAgICAgICBkZWxldGVCb2FyZHMoKTtcbiAgICAgICAgcmVuZGVyQm9hcmRzKHBsYXllcjFHYW1lYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyMkdhbWVib2FyZC5nZXRCb2FyZCgpKTtcbiAgICAgICAgZGlzcGxheVdpbm5lcihwbGF5ZXIyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAyIHdpbnMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gICAgICBwbGF5ZXIxLmNoYW5nZVR1cm4oKTtcbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgcmVuZGVyQm9hcmRzKHBsYXllcjFHYW1lYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyMkdhbWVib2FyZC5nZXRCb2FyZCgpKTtcbiAgICAgIHJlbmRlckJ1dHRvbnMocGxheWVyMSwgcGxheWVyMik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc2V0VXBCb2FyZCwgcmVuZGVyQm9hcmRzLCBkZWxldGVCb2FyZHMsIHJlbmRlckJ1dHRvbnMgfTtcbiIsImltcG9ydCB7IHNldFVwQm9hcmQsIHJlbmRlckJvYXJkcywgZGVsZXRlQm9hcmRzLCByZW5kZXJCdXR0b25zIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcblxuY29uc3Qgc2V0VXBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxID0gcGxheWVyRmFjdG9yeSgnUGxheWVyIDEnKTtcbiAgY29uc3QgcGxheWVyMiA9IHBsYXllckZhY3RvcnkoJ0NvbXB1dGVyJyk7IC8vIGNwdVxuICBwbGF5ZXIyLmNoYW5nZVR1cm4oKTtcbiAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IHBsYXllcjE7XG4gIGNvbnN0IGdldFBsYXllcjIgPSAoKSA9PiBwbGF5ZXIyO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjFJbmZvJyk7XG4gICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHBsYXllcjEuY2hhbmdlTmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdldE5hbWUoKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKS52YWx1ZSA9ICcnO1xuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxJykudmFsdWUpO1xuICAgIC8vIGdldCBwbGF5ZXIgMSBuYW1lXG4gICAgLy8gcmVzZXQgaW5wdXRcbiAgICBzZXRVcEJvYXJkKCk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGdldFBsYXllcjEsXG4gICAgZ2V0UGxheWVyMixcbiAgfTtcbn07XG5cblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgcmVuZGVyQm9hcmRzKHBsYXllcjEuZ2V0R2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSwgcGxheWVyMi5nZXRHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKTtcbiAgcmVuZGVyQnV0dG9ucyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbn07XG5cbmV4cG9ydCB7IHNldFVwR2FtZSwgc3RhcnRHYW1lIH07XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgnbm9uZScpLm1hcCgoKSA9PiBuZXcgQXJyYXkoMTApLmZpbGwoJ25vbmUnKSk7XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG4gIC8vIGNoZWNrIHNoaXBzIGRvbid0IG92ZXJsYXBcbiAgY29uc3QgY2hlY2tPdmVybGFwID0gKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNoZWNrID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoZWNrLnB1c2goYm9hcmRbeENvb3JkICsgaV1beUNvb3JkXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaChib2FyZFt4Q29vcmRdW3lDb29yZCArIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVjay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoZWNrW2ldICE9PSAnbm9uZScpIHtcbiAgICAgICAgY2hlY2sgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGVjayA9IFtdO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvLyBjaGVjayBzaGlwcyBhcmUgaW5ib3VuZFxuICBjb25zdCBjaGVja0JvdW5kcyA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjaGVjayA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKHhDb29yZCArIGkpO1xuICAgICAgfVxuICAgICAgY2hlY2sucHVzaCh5Q29vcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoZWNrLnB1c2goeUNvb3JkICsgaSk7XG4gICAgICB9XG4gICAgICBjaGVjay5wdXNoKHhDb29yZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGVja1tpXSA+IDkgfHwgY2hlY2tbaV0gPCAwKSB7XG4gICAgICAgIGNoZWNrID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hlY2sgPSBbXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgbWFya0JvYXJkID0gKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHggPSBzaGlwLmdldFhDb29yZCgpO1xuICAgICAgY29uc3QgeSA9IHNoaXAuZ2V0WUNvb3JkKCk7XG4gICAgICBjb25zdCBpZCA9IHNoaXAuZ2V0SWQoKTtcbiAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcC5nZXRPcmllbnRhdGlvbigpO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IGlkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IGlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgY2hlY2sgPSBjaGVja0JvdW5kcyh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjaGVjayA9IGNoZWNrT3ZlcmxhcCh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IHNoaXBzLmxlbmd0aDtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkobGVuZ3RoLCBpZCk7XG4gICAgYmF0dGxlc2hpcC5jaGFuZ2VDb29yZGluYXRlcyh4Q29vcmQsIHlDb29yZCk7XG4gICAgYmF0dGxlc2hpcC5jaGFuZ2VPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG4gICAgbWFya0JvYXJkKGJhdHRsZXNoaXApO1xuICAgIHNoaXBzLnB1c2goYmF0dGxlc2hpcCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gZ2VuZXJhdGUgcmFuZG9tIGZsZWV0IGZvciBjcHVcbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21GbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRSYW5kb21Db29yZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHJldHVybiBudW07XG4gICAgfTtcbiAgICBjb25zdCBwaWNrRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICsgMC41KTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG51bSA+IDAgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICB9XG4gICAgLy8gcGxhY2UgQ2FycmllciAoNSlcbiAgICBsZXQgY2FycmllciA9IGZhbHNlO1xuICAgIHdoaWxlIChjYXJyaWVyID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgNSwgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIGNhcnJpZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYmF0dGxlc2hpcCA9IGZhbHNlO1xuICAgIHdoaWxlIChiYXR0bGVzaGlwID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgNCwgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIGJhdHRsZXNoaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgY3J1aXNlciA9IGZhbHNlO1xuICAgIHdoaWxlIChjcnVpc2VyID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgMywgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIGNydWlzZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3VibWFyaW5lID0gZmFsc2U7XG4gICAgd2hpbGUgKHN1Ym1hcmluZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDMsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBzdWJtYXJpbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGVzdHJveWVyID0gZmFsc2U7XG4gICAgd2hpbGUgKGRlc3Ryb3llciA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwaWNrRGlyZWN0aW9uKCk7XG4gICAgICBjb25zdCBwbGFjZWRTaGlwID0gcGxhY2VTaGlwKHgsIHksIDIsIGRpcmVjdGlvbik7XG4gICAgICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICBkZXN0cm95ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gYm9hcmRbeENvb3JkXVt5Q29vcmRdO1xuICAgIGlmIChsb2NhdGlvbiA9PT0gJ21pc3MnIHx8IGxvY2F0aW9uID09PSAnaGl0Jykge1xuICAgICAgcmV0dXJuICgnaW52YWxpZCcpO1xuICAgIH1cbiAgICBpZiAobG9jYXRpb24gPT09ICdub25lJykge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gJ21pc3MnO1xuICAgICAgcmV0dXJuICgndmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcHNbbG9jYXRpb25dLmdldE9yaWVudGF0aW9uKCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gJ2hpdCc7XG4gICAgICBjb25zdCB4ID0gc2hpcHNbbG9jYXRpb25dLmdldFhDb29yZCgpO1xuICAgICAgY29uc3QgaW5kZXggPSB4Q29vcmQgLSB4O1xuICAgICAgc2hpcHNbbG9jYXRpb25dLmhpdChpbmRleCk7XG4gICAgICByZXR1cm4gKCd2YWxpZCcpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdoaXQnO1xuICAgICAgY29uc3QgeSA9IHNoaXBzW2xvY2F0aW9uXS5nZXRZQ29vcmQoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0geUNvb3JkIC0geTtcbiAgICAgIHNoaXBzW2xvY2F0aW9uXS5oaXQoaW5kZXgpO1xuICAgICAgcmV0dXJuICgndmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuICgnaW52YWxpZCcpO1xuICB9O1xuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFuc3dlciA9IHNoaXBzW2ldLmlzU3VuaygpO1xuICAgICAgaWYgKGFuc3dlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXRCb2FyZCxcbiAgICBnZXRTaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2VuZXJhdGVSYW5kb21GbGVldCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZEZhY3Rvcnk7XG4iLCJjb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBjaGFuZ2VOYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiBwbGF5ZXJHYW1lYm9hcmQ7XG4gIGxldCB0dXJuID0gdHJ1ZTtcbiAgY29uc3QgaXNUdXJuID0gKCkgPT4gdHVybjtcbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICB0dXJuID0gIXR1cm47XG4gIH07XG4gIGNvbnN0IGxhdW5jaEF0dGFjayA9IChlbmVteSwgeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcbiAgfTtcbiAgLy8gZm9yIGNvbXB1dGVyIGF0dGFja3NcbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHJldHVybiBudW07XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBjaGFuZ2VOYW1lLFxuICAgIGlzVHVybixcbiAgICBjaGFuZ2VUdXJuLFxuICAgIGxhdW5jaEF0dGFjayxcbiAgICBnZXRSYW5kb21Db29yZCxcbiAgICBnZXRHYW1lYm9hcmQsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllckZhY3Rvcnk7XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIGlkKSA9PiB7XG4gIGNvbnN0IG1hcmtzID0gW107XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICBjb25zdCBjaGFuZ2VDb29yZGluYXRlcyA9IChuZXdYLCBuZXdZKSA9PiB7XG4gICAgeCA9IG5ld1g7XG4gICAgeSA9IG5ld1k7XG4gIH07XG5cbiAgY29uc3QgZ2V0WENvb3JkID0gKCkgPT4geDtcbiAgY29uc3QgZ2V0WUNvb3JkID0gKCkgPT4geTtcblxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IG9yaWVudGF0aW9uO1xuICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IChuZXdPcmllbnRhdGlvbikgPT4ge1xuICAgIG9yaWVudGF0aW9uID0gbmV3T3JpZW50YXRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0TWFya3MgPSAoKSA9PiBtYXJrcztcbiAgbGV0IGhpdENvdW50ZXIgPSAwO1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBtYXJrcy5wdXNoKCdPJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoaXQgPSAobG9jYXRpb24pID0+IHtcbiAgICBtYXJrc1tsb2NhdGlvbl0gPSAnWCc7XG4gICAgaGl0Q291bnRlciArPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdENvdW50ZXIgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXRJZCxcbiAgICBnZXRMZW5ndGgsXG4gICAgY2hhbmdlQ29vcmRpbmF0ZXMsXG4gICAgZ2V0WENvb3JkLFxuICAgIGdldFlDb29yZCxcbiAgICBnZXRPcmllbnRhdGlvbixcbiAgICBjaGFuZ2VPcmllbnRhdGlvbixcbiAgICBoaXQsXG4gICAgc2V0VXAsXG4gICAgZ2V0TWFya3MsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwRmFjdG9yeTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzZXRVcEdhbWUsIHN0YXJ0R2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBtYWtlRHJhZ2dhYmxlLCBzZXRVcEJvYXJkIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuY29uc3Qgc2V0dXAgPSBzZXRVcEdhbWUoKTtcblxuY29uc3QgcDEgPSBzZXR1cC5nZXRQbGF5ZXIxKCk7XG5jb25zdCBwMiA9IHNldHVwLmdldFBsYXllcjIoKTtcblxuY29uc3QgcDFHYW1lYm9hcmQgPSBwMS5nZXRHYW1lYm9hcmQoKTtcbmNvbnN0IHAyR2FtZWJvYXJkID0gcDIuZ2V0R2FtZWJvYXJkKCk7XG5cbnAyR2FtZWJvYXJkLmdlbmVyYXRlUmFuZG9tRmxlZXQoKTtcbi8vIENhcnJpZXIgKDUpXG5wMUdhbWVib2FyZC5wbGFjZVNoaXAoMCwgMSwgNSwgJ2hvcml6b250YWwnKTtcblxuLy8gQmF0dGxlc2hpcCAoNClcbnAxR2FtZWJvYXJkLnBsYWNlU2hpcCgwLCA4LCA0LCAndmVydGljYWwnKTtcblxuLy8gQ3J1aXNlciAoMylcbnAxR2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAxLCAzLCAnaG9yaXpvbnRhbCcpO1xuXG4vLyBTdWJtYXJpbmUgKDMpXG5wMUdhbWVib2FyZC5wbGFjZVNoaXAoNCwgMSwgMywgJ2hvcml6b250YWwnKTtcblxuLy8gRGVzdHJveWVyICgyKVxucDFHYW1lYm9hcmQucGxhY2VTaGlwKDcsIDMsIDIsICd2ZXJ0aWNhbCcpO1xuXG4vLyBzZXRVcEJvYXJkKCk7XG5cbi8vIHN0YXJ0R2FtZShwMSwgcDIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9