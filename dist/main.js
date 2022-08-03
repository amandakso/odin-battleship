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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 2px solid black;\n}\n\n.boards {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n.square {\n    height: 50px;\n    width: 50px;\n    border: 2px solid black;\n}\n\n.boards {\n    display: grid;\n    gap: 50px;\n    grid-auto-flow: column;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 550px;\n}\n\n.miss {\n    background-color: red;\n}\n\n.hit {\n    background-color: green;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "renderButtons": () => (/* binding */ renderButtons)
/* harmony export */ });
const playerFactor = __webpack_require__(/*! ./player */ "./src/player.js");

const numberOfSquares = 10; // number of squares in one row

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
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(player1.getGameboard().getBoard(), player2.getGameboard().getBoard());
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderButtons)(player1, player2);
  return {
    getPlayer1,
    getPlayer2,
  };
};


const startGame = (player1, player2) => {
  const player1Gameboard = player1.getGameboard();
  const player2Gameboard = player2.getGameboard();

  /*
  let gameOver = false;

  while (gameOver != true) {
    console.log(gameOver);
  }
*/
/*

  do {
    let currentTurn = 1;
    if (currentTurn == 1) {
      if (player1.isTurn() === true) {
        currentTurn = 1;
      } else {
        currentTurn = 2;
      }
    } else {
      console.log('else');
      /*
      console.log("hi");
      let x = player2.getRandomCoord();
      let y = player2.getRandomCoord();
      let status = player2.launchAttack(player1Gameboard, x, y);
      if (status === 'miss') {
        // query onesquare that has coordinates, mark as miss
        console.log("boo");
      } else if (status === 'hit') {
        // query onesquare that has coordinates, mark as hit
        console.log("yay");
      }
      deleteBoards();
      player2.changeTurn();
      player1.changeTurn();
      currentTurn = 1;
    }
  } while (player1Gameboard.allSunk() === false && player2Gameboard.allSunk() === false);
  */
  // while there is no loser...
  // switch turns
  // while player1 turn is true
  //click button
  // receive attack
  //switch turns
  // while its player2 turn
  // generate random attack
  // receive attack
  // change turns
  //announce winner
  
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

(0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)(p1, p2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwbGF5ZXJGYWN0b3IgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5jb25zdCBudW1iZXJPZlNxdWFyZXMgPSAxMDsgLy8gbnVtYmVyIG9mIHNxdWFyZXMgaW4gb25lIHJvd1xuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAoYm9hcmQxLCBib2FyZDIpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICBsZXQgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGxldCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXM7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICBkaXYxLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXM7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzOyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd0d28nKTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICBkaXYyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgYm9hcmRzLmFwcGVuZENoaWxkKGRpdjEpO1xuICBib2FyZHMuYXBwZW5kQ2hpbGQoZGl2Mik7XG5cbiAgbGV0IHBsYXllcjFCb2FyZCA9IGJvYXJkMTtcbiAgbGV0IHAxQm9hcmQgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgcDFCb2FyZC5wdXNoKHBsYXllcjFCb2FyZFtpXVtqXSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG9uZXNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJyk7XG4gIG9uZXNxdWFyZXMuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgb25lLmNsYXNzTGlzdC5hZGQocDFCb2FyZFswXSk7XG4gICAgcDFCb2FyZC5zaGlmdCgpO1xuICB9KTtcblxuICBsZXQgcGxheWVyMkJvYXJkID0gYm9hcmQyO1xuICBsZXQgcDJCb2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mU3F1YXJlczsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXM7IGorKykge1xuICAgICAgcDJCb2FyZC5wdXNoKHBsYXllcjJCb2FyZFtpXVtqXSk7XG4gICAgfVxuICB9XG4gIGxldCB0d29zcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR3bycpO1xuICB0d29zcXVhcmVzLmZvckVhY2goKHR3bykgPT4ge1xuICAgIHR3by5jbGFzc0xpc3QuYWRkKHAyQm9hcmRbMF0pO1xuICAgIHAyQm9hcmQuc2hpZnQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgd2hpbGUgKGJvYXJkcy5maXJzdENoaWxkKSB7XG4gICAgYm9hcmRzLnJlbW92ZUNoaWxkKGJvYXJkcy5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVdpbm5lciA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgbmFtZSA9IHBsYXllci5nZXROYW1lKCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVyVGV4dCA9IG5hbWUgKyAnIFdpbnMhJztcbn1cblxuY29uc3QgcmVuZGVyQnV0dG9ucyA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGxldCBvbmVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9uZScpO1xuICBsZXQgcGxheWVyMUdhbWVib2FyZCA9IHBsYXllcjEuZ2V0R2FtZWJvYXJkKCk7XG4gIG9uZVNxdWFyZXMuZm9yRWFjaCgob25lc3F1YXJlKSA9PiB7XG4gICAgb25lc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheWVyMUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG9uZXNxdWFyZS5kYXRhc2V0LngsIG9uZXNxdWFyZS5kYXRhc2V0LnkpO1xuICAgIH0pO1xuICB9KTtcbiAgbGV0IHR3b1NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHdvJyk7XG4gIGxldCBwbGF5ZXIyR2FtZWJvYXJkID0gcGxheWVyMi5nZXRHYW1lYm9hcmQoKTtcbiAgdHdvU3F1YXJlcy5mb3JFYWNoKCh0d29zcXVhcmUpID0+IHtcbiAgICB0d29zcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdHRhY2syID0gcGxheWVyMkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHR3b3NxdWFyZS5kYXRhc2V0LngsIHR3b3NxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgLy8gY2hlY2sgdGhhdCBhdHRhY2sgaXMgdmFsaWRcbiAgICAgIGlmIChhdHRhY2syID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgZ2FtZSBzdGF0dXNcbiAgICAgIGlmIChwbGF5ZXIyR2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAvLyBnYW1lb3ZlciBwbGF5ZXIgMSB3aW5zXG4gICAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgICByZW5kZXJCb2FyZHMocGxheWVyMUdhbWVib2FyZC5nZXRCb2FyZCgpLCBwbGF5ZXIyR2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHBsYXllcjEpO1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDEgd2lucycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGFuZ2VUdXJuc1xuICAgICAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gICAgICBwbGF5ZXIxLmNoYW5nZVR1cm4oKTtcbiAgICAgIGRlbGV0ZUJvYXJkcygpO1xuICAgICAgbGV0IHggPSBwbGF5ZXIyLmdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBsZXQgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGxldCBhdHRhY2sxID0gcGxheWVyMi5sYXVuY2hBdHRhY2socGxheWVyMUdhbWVib2FyZCwgeCwgeSk7XG4gICAgICAvLyBjaGVjayBpZiBhdHRhY2sgaXMgdmFsaWRcbiAgICAgIHdoaWxlIChhdHRhY2sxID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgeCA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgICAgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgICAgYXR0YWNrMSA9IHBsYXllcjIubGF1bmNoQXR0YWNrKHBsYXllcjFHYW1lYm9hcmQsIHgsIHkpO1xuICAgICAgfVxuICAgICAgLy9jaGVjayBnYW1lIHN0YXR1c1xuICAgICAgaWYgKHBsYXllcjFHYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIC8vIGdhbWVvdmVyIHBsYXllciAyIHdpbnNcbiAgICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgMiB3aW5zJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBsYXllcjIuY2hhbmdlVHVybigpO1xuICAgICAgcGxheWVyMS5jaGFuZ2VUdXJuKCk7XG4gICAgICBkZWxldGVCb2FyZHMoKTtcbiAgICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIxR2FtZWJvYXJkLmdldEJvYXJkKCksIHBsYXllcjJHYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICByZW5kZXJCdXR0b25zKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkcywgZGVsZXRlQm9hcmRzLCByZW5kZXJCdXR0b25zIH07XG4iLCJpbXBvcnQgeyByZW5kZXJCb2FyZHMsIGRlbGV0ZUJvYXJkcywgcmVuZGVyQnV0dG9ucyB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNvbnN0IHNldFVwR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ1BsYXllciAxJyk7XG4gIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXJGYWN0b3J5KCdDb21wdXRlcicpOyAvLyBjcHVcbiAgcGxheWVyMi5jaGFuZ2VUdXJuKCk7XG4gIGNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBwbGF5ZXIxO1xuICBjb25zdCBnZXRQbGF5ZXIyID0gKCkgPT4gcGxheWVyMjtcbiAgcmVuZGVyQm9hcmRzKHBsYXllcjEuZ2V0R2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKSwgcGxheWVyMi5nZXRHYW1lYm9hcmQoKS5nZXRCb2FyZCgpKTtcbiAgcmVuZGVyQnV0dG9ucyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgcmV0dXJuIHtcbiAgICBnZXRQbGF5ZXIxLFxuICAgIGdldFBsYXllcjIsXG4gIH07XG59O1xuXG5cbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGNvbnN0IHBsYXllcjFHYW1lYm9hcmQgPSBwbGF5ZXIxLmdldEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXIyR2FtZWJvYXJkID0gcGxheWVyMi5nZXRHYW1lYm9hcmQoKTtcblxuICAvKlxuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICB3aGlsZSAoZ2FtZU92ZXIgIT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUubG9nKGdhbWVPdmVyKTtcbiAgfVxuKi9cbi8qXG5cbiAgZG8ge1xuICAgIGxldCBjdXJyZW50VHVybiA9IDE7XG4gICAgaWYgKGN1cnJlbnRUdXJuID09IDEpIHtcbiAgICAgIGlmIChwbGF5ZXIxLmlzVHVybigpID09PSB0cnVlKSB7XG4gICAgICAgIGN1cnJlbnRUdXJuID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRUdXJuID0gMjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Vsc2UnKTtcbiAgICAgIC8qXG4gICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xuICAgICAgbGV0IHggPSBwbGF5ZXIyLmdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBsZXQgeSA9IHBsYXllcjIuZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGxldCBzdGF0dXMgPSBwbGF5ZXIyLmxhdW5jaEF0dGFjayhwbGF5ZXIxR2FtZWJvYXJkLCB4LCB5KTtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdtaXNzJykge1xuICAgICAgICAvLyBxdWVyeSBvbmVzcXVhcmUgdGhhdCBoYXMgY29vcmRpbmF0ZXMsIG1hcmsgYXMgbWlzc1xuICAgICAgICBjb25zb2xlLmxvZyhcImJvb1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnaGl0Jykge1xuICAgICAgICAvLyBxdWVyeSBvbmVzcXVhcmUgdGhhdCBoYXMgY29vcmRpbmF0ZXMsIG1hcmsgYXMgaGl0XG4gICAgICAgIGNvbnNvbGUubG9nKFwieWF5XCIpO1xuICAgICAgfVxuICAgICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgICBwbGF5ZXIyLmNoYW5nZVR1cm4oKTtcbiAgICAgIHBsYXllcjEuY2hhbmdlVHVybigpO1xuICAgICAgY3VycmVudFR1cm4gPSAxO1xuICAgIH1cbiAgfSB3aGlsZSAocGxheWVyMUdhbWVib2FyZC5hbGxTdW5rKCkgPT09IGZhbHNlICYmIHBsYXllcjJHYW1lYm9hcmQuYWxsU3VuaygpID09PSBmYWxzZSk7XG4gICovXG4gIC8vIHdoaWxlIHRoZXJlIGlzIG5vIGxvc2VyLi4uXG4gIC8vIHN3aXRjaCB0dXJuc1xuICAvLyB3aGlsZSBwbGF5ZXIxIHR1cm4gaXMgdHJ1ZVxuICAvL2NsaWNrIGJ1dHRvblxuICAvLyByZWNlaXZlIGF0dGFja1xuICAvL3N3aXRjaCB0dXJuc1xuICAvLyB3aGlsZSBpdHMgcGxheWVyMiB0dXJuXG4gIC8vIGdlbmVyYXRlIHJhbmRvbSBhdHRhY2tcbiAgLy8gcmVjZWl2ZSBhdHRhY2tcbiAgLy8gY2hhbmdlIHR1cm5zXG4gIC8vYW5ub3VuY2Ugd2lubmVyXG4gIFxufTtcblxuZXhwb3J0IHsgc2V0VXBHYW1lLCBzdGFydEdhbWUgfTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKCdub25lJykubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCgnbm9uZScpKTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcbiAgLy8gY2hlY2sgc2hpcHMgZG9uJ3Qgb3ZlcmxhcFxuICBjb25zdCBjaGVja092ZXJsYXAgPSAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY2hlY2sgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaChib2FyZFt4Q29vcmQgKyBpXVt5Q29vcmRdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGVjay5wdXNoKGJvYXJkW3hDb29yZF1beUNvb3JkICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hlY2tbaV0gIT09ICdub25lJykge1xuICAgICAgICBjaGVjayA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrID0gW107XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIC8vIGNoZWNrIHNoaXBzIGFyZSBpbmJvdW5kXG4gIGNvbnN0IGNoZWNrQm91bmRzID0gKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNoZWNrID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoZWNrLnB1c2goeENvb3JkICsgaSk7XG4gICAgICB9XG4gICAgICBjaGVjay5wdXNoKHlDb29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hlY2sucHVzaCh5Q29vcmQgKyBpKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrLnB1c2goeENvb3JkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVjay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoZWNrW2ldID4gOSB8fCBjaGVja1tpXSA8IDApIHtcbiAgICAgICAgY2hlY2sgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGVjayA9IFtdO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXAgPSAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBtYXJrQm9hcmQgPSAoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgeCA9IHNoaXAuZ2V0WENvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gc2hpcC5nZXRZQ29vcmQoKTtcbiAgICAgIGNvbnN0IGlkID0gc2hpcC5nZXRJZCgpO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBzaGlwLmdldE9yaWVudGF0aW9uKCk7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeCArIGldW3ldID0gaWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjaGVjayA9IGNoZWNrQm91bmRzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrID0gY2hlY2tPdmVybGFwKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gc2hpcHMubGVuZ3RoO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgsIGlkKTtcbiAgICBiYXR0bGVzaGlwLmNoYW5nZUNvb3JkaW5hdGVzKHhDb29yZCwgeUNvb3JkKTtcbiAgICBiYXR0bGVzaGlwLmNoYW5nZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcbiAgICBtYXJrQm9hcmQoYmF0dGxlc2hpcCk7XG4gICAgc2hpcHMucHVzaChiYXR0bGVzaGlwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBnZW5lcmF0ZSByYW5kb20gZmxlZXQgZm9yIGNwdVxuICBjb25zdCBnZW5lcmF0ZVJhbmRvbUZsZWV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldFJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmV0dXJuIG51bTtcbiAgICB9O1xuICAgIGNvbnN0IHBpY2tEaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKyAwLjUpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gbnVtID4gMCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgIH1cbiAgICAvLyBwbGFjZSBDYXJyaWVyICg1KVxuICAgIGxldCBjYXJyaWVyID0gZmFsc2U7XG4gICAgd2hpbGUgKGNhcnJpZXIgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCA1LCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgY2FycmllciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBiYXR0bGVzaGlwID0gZmFsc2U7XG4gICAgd2hpbGUgKGJhdHRsZXNoaXAgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCA0LCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgYmF0dGxlc2hpcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBjcnVpc2VyID0gZmFsc2U7XG4gICAgd2hpbGUgKGNydWlzZXIgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21Db29yZCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGlja0RpcmVjdGlvbigpO1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHBsYWNlU2hpcCh4LCB5LCAzLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgY3J1aXNlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdWJtYXJpbmUgPSBmYWxzZTtcbiAgICB3aGlsZSAoc3VibWFyaW5lID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgMywgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIHN1Ym1hcmluZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZXN0cm95ZXIgPSBmYWxzZTtcbiAgICB3aGlsZSAoZGVzdHJveWVyID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUNvb3JkKCk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBpY2tEaXJlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwbGFjZVNoaXAoeCwgeSwgMiwgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIGRlc3Ryb3llciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBib2FyZFt4Q29vcmRdW3lDb29yZF07XG4gICAgaWYgKGxvY2F0aW9uID09PSAnbWlzcycgfHwgbG9jYXRpb24gPT09ICdoaXQnKSB7XG4gICAgICByZXR1cm4gKCdpbnZhbGlkJyk7XG4gICAgfVxuICAgIGlmIChsb2NhdGlvbiA9PT0gJ25vbmUnKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSAnbWlzcyc7XG4gICAgICByZXR1cm4gKCd2YWxpZCcpO1xuICAgIH1cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBzaGlwc1tsb2NhdGlvbl0uZ2V0T3JpZW50YXRpb24oKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSAnaGl0JztcbiAgICAgIGNvbnN0IHggPSBzaGlwc1tsb2NhdGlvbl0uZ2V0WENvb3JkKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHhDb29yZCAtIHg7XG4gICAgICBzaGlwc1tsb2NhdGlvbl0uaGl0KGluZGV4KTtcbiAgICAgIHJldHVybiAoJ3ZhbGlkJyk7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gJ2hpdCc7XG4gICAgICBjb25zdCB5ID0gc2hpcHNbbG9jYXRpb25dLmdldFlDb29yZCgpO1xuICAgICAgY29uc3QgaW5kZXggPSB5Q29vcmQgLSB5O1xuICAgICAgc2hpcHNbbG9jYXRpb25dLmhpdChpbmRleCk7XG4gICAgICByZXR1cm4gKCd2YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gKCdpbnZhbGlkJyk7XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYW5zd2VyID0gc2hpcHNbaV0uaXNTdW5rKCk7XG4gICAgICBpZiAoYW5zd2VyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICBnZW5lcmF0ZVJhbmRvbUZsZWV0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkRmFjdG9yeTtcbiIsImNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuZXdOYW1lO1xuICB9O1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHBsYXllckdhbWVib2FyZDtcbiAgbGV0IHR1cm4gPSB0cnVlO1xuICBjb25zdCBpc1R1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4gPSAhdHVybjtcbiAgfTtcbiAgY29uc3QgbGF1bmNoQXR0YWNrID0gKGVuZW15LCB4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGVuZW15LnJlY2VpdmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICB9O1xuICAvLyBmb3IgY29tcHV0ZXIgYXR0YWNrc1xuICBjb25zdCBnZXRSYW5kb21Db29yZCA9ICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIG51bTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGNoYW5nZU5hbWUsXG4gICAgaXNUdXJuLFxuICAgIGNoYW5nZVR1cm4sXG4gICAgbGF1bmNoQXR0YWNrLFxuICAgIGdldFJhbmRvbUNvb3JkLFxuICAgIGdldEdhbWVib2FyZCxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyRmFjdG9yeTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgaWQpID0+IHtcbiAgY29uc3QgbWFya3MgPSBbXTtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGxldCBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGNoYW5nZUNvb3JkaW5hdGVzID0gKG5ld1gsIG5ld1kpID0+IHtcbiAgICB4ID0gbmV3WDtcbiAgICB5ID0gbmV3WTtcbiAgfTtcblxuICBjb25zdCBnZXRYQ29vcmQgPSAoKSA9PiB4O1xuICBjb25zdCBnZXRZQ29vcmQgPSAoKSA9PiB5O1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4gb3JpZW50YXRpb247XG4gIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKG5ld09yaWVudGF0aW9uKSA9PiB7XG4gICAgb3JpZW50YXRpb24gPSBuZXdPcmllbnRhdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRNYXJrcyA9ICgpID0+IG1hcmtzO1xuICBsZXQgaGl0Q291bnRlciA9IDA7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG1hcmtzLnB1c2goJ08nKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhpdCA9IChsb2NhdGlvbikgPT4ge1xuICAgIG1hcmtzW2xvY2F0aW9uXSA9ICdYJztcbiAgICBoaXRDb3VudGVyICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaGl0Q291bnRlciA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldElkLFxuICAgIGdldExlbmd0aCxcbiAgICBjaGFuZ2VDb29yZGluYXRlcyxcbiAgICBnZXRYQ29vcmQsXG4gICAgZ2V0WUNvb3JkLFxuICAgIGdldE9yaWVudGF0aW9uLFxuICAgIGNoYW5nZU9yaWVudGF0aW9uLFxuICAgIGhpdCxcbiAgICBzZXRVcCxcbiAgICBnZXRNYXJrcyxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXBGYWN0b3J5O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldFVwR2FtZSwgc3RhcnRHYW1lIH0gZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHNldHVwID0gc2V0VXBHYW1lKCk7XG5cbmNvbnN0IHAxID0gc2V0dXAuZ2V0UGxheWVyMSgpO1xuY29uc3QgcDIgPSBzZXR1cC5nZXRQbGF5ZXIyKCk7XG5cbmNvbnN0IHAxR2FtZWJvYXJkID0gcDEuZ2V0R2FtZWJvYXJkKCk7XG5jb25zdCBwMkdhbWVib2FyZCA9IHAyLmdldEdhbWVib2FyZCgpO1xuXG5wMkdhbWVib2FyZC5nZW5lcmF0ZVJhbmRvbUZsZWV0KCk7XG4vLyBDYXJyaWVyICg1KVxucDFHYW1lYm9hcmQucGxhY2VTaGlwKDAsIDEsIDUsICdob3Jpem9udGFsJyk7XG5cbi8vIEJhdHRsZXNoaXAgKDQpXG5wMUdhbWVib2FyZC5wbGFjZVNoaXAoMCwgOCwgNCwgJ3ZlcnRpY2FsJyk7XG5cbi8vIENydWlzZXIgKDMpXG5wMUdhbWVib2FyZC5wbGFjZVNoaXAoMiwgMSwgMywgJ2hvcml6b250YWwnKTtcblxuLy8gU3VibWFyaW5lICgzKVxucDFHYW1lYm9hcmQucGxhY2VTaGlwKDQsIDEsIDMsICdob3Jpem9udGFsJyk7XG5cbi8vIERlc3Ryb3llciAoMilcbnAxR2FtZWJvYXJkLnBsYWNlU2hpcCg3LCAzLCAyLCAndmVydGljYWwnKTtcblxuc3RhcnRHYW1lKHAxLCBwMik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=