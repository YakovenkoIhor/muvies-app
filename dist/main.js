/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/consts.js":
/*!**********************!*\
  !*** ./js/consts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API),
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY),
/* harmony export */   "popular": () => (/* binding */ popular),
/* harmony export */   "top_rated": () => (/* binding */ top_rated),
/* harmony export */   "upcoming": () => (/* binding */ upcoming)
/* harmony export */ });
const {API_KEY} = ({"API_KEY":"bea7f0b015caef1d59ccad6af5d23103"});
const API = 'https://api.themoviedb.org/3';
const popular = '/movie/popular';
const top_rated = '/movie/top_rated';
const upcoming = '/movie/upcoming';


/***/ }),

/***/ "./js/helper.js":
/*!**********************!*\
  !*** ./js/helper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creatFetch": () => (/* binding */ creatFetch),
/* harmony export */   "creatMovie": () => (/* binding */ creatMovie)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/utils.js");


function creatMovie (data, className){
    let movies = data.results.map(({poster_path, original_title, release_date, vote_average}) => (`
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${original_title}">
            <div class="title">${original_title}</div>
            <div class="date">${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertDate)(release_date)}</div>
            <div class="rate">${vote_average*10+'%'}</div>
        </div>
`)).join('');
document.querySelector(className).innerHTML = movies
}

function creatFetch (el, className) {
    fetch((0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateUrl)(el))
    .then(res => res.json())
    .then(data => {
    creatMovie (data, className)
    })
}

    

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./js/consts.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./js/helper.js");





(0,_helper__WEBPACK_IMPORTED_MODULE_1__.creatFetch)(_consts__WEBPACK_IMPORTED_MODULE_0__.popular, '.popular')
;(0,_helper__WEBPACK_IMPORTED_MODULE_1__.creatFetch)(_consts__WEBPACK_IMPORTED_MODULE_0__.top_rated, '.top_rated')
;(0,_helper__WEBPACK_IMPORTED_MODULE_1__.creatFetch)(_consts__WEBPACK_IMPORTED_MODULE_0__.upcoming, '.upcoming')

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDate": () => (/* binding */ convertDate),
/* harmony export */   "generateUrl": () => (/* binding */ generateUrl)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./js/consts.js");

const generateUrl = path => `${_consts__WEBPACK_IMPORTED_MODULE_0__.API}${path}?api_key=${_consts__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`
const convertDate = date => new Date(date).toDateString();

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./scss/index.scss");
// js


// css


})();

/******/ })()
;
//# sourceMappingURL=main.js.map