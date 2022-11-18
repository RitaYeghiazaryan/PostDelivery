/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/pagination.js":
/*!**************************************!*\
  !*** ./src/js/modules/pagination.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pagination\": () => (/* binding */ pagination)\n/* harmony export */ });\nconst pagination = function (itemClass, itemsCount) {\r\n    const numBtnClass = '.globalPageBtns__numBtn'\r\n    const items = document.querySelectorAll(itemClass)\r\n    const numBtns = document.querySelectorAll(numBtnClass)\r\n    const arrowLeftBtn = document.querySelector('.globalPageBtns__arrowLeftBtn')\r\n    const arrowRightBtn = document.querySelector('.globalPageBtns__arrowRightBtn')\r\n    const numBtnActiveClass = `${numBtnClass}_active`\r\n    const itemsCopy = Array.from(items)\r\n\r\n    let curPage = 1\r\n\r\n\r\n    const changePage = () => {\r\n        const sliceFrom = (curPage - 1) * itemsCount\r\n        const sliceTo = itemsCount * curPage\r\n        const slicedArr = itemsCopy.slice(sliceFrom, sliceTo)\r\n        items.forEach(el => {\r\n            setTimeout(() => {\r\n                if (slicedArr.includes(el)) {\r\n                    el.classList.add(`${itemClass.slice(1)}_active`)\r\n                } else {\r\n                    el.classList.remove(`${itemClass.slice(1)}_active`)\r\n                }\r\n            },250)\r\n            const animProgress = [{\r\n                    transform: 'scale(1)'\r\n                },\r\n                {\r\n                    transform: 'scale(0.5)'\r\n                },\r\n                {\r\n                    transform: 'scale(1)'\r\n                }\r\n            ];\r\n            const animOptions = {\r\n                duration: 500,\r\n                iterations: 1,\r\n            }\r\n            el.animate(animProgress,animOptions)\r\n        })\r\n    }\r\n\r\n    const arrowFunc = function (isLeft) {\r\n        numBtns.forEach(el => el.classList.remove(numBtnActiveClass.slice(1)))\r\n        if (isLeft) {\r\n            curPage > 1 ? curPage-- : curPage = numBtns.length\r\n        } else {\r\n            curPage < numBtns.length ? curPage++ : curPage = 1\r\n        }\r\n        numBtns[curPage - 1].classList.add(numBtnActiveClass.slice(1))\r\n        changePage()\r\n    }\r\n\r\n    changePage()\r\n\r\n    numBtns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            numBtns.forEach(el => el.classList.remove(numBtnActiveClass.slice(1)))\r\n            btn.classList.add(numBtnActiveClass.slice(1))\r\n            const numBtnActive = document.querySelector(numBtnActiveClass)\r\n            curPage = +numBtnActive.textContent\r\n\r\n            changePage()\r\n        })\r\n    })\r\n\r\n    arrowLeftBtn.addEventListener('click', () => {\r\n        arrowFunc(true)\r\n    })\r\n    arrowRightBtn.addEventListener('click', () => {\r\n        arrowFunc(false)\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/pagination.js?");

/***/ }),

/***/ "./src/js/shops.js":
/*!*************************!*\
  !*** ./src/js/shops.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pagination.js */ \"./src/js/modules/pagination.js\");\n\r\n\r\n\r\n(0,_modules_pagination_js__WEBPACK_IMPORTED_MODULE_0__.pagination)('.shopsPage__link',30)\n\n//# sourceURL=webpack://gulp-2022/./src/js/shops.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/shops.js");
/******/ 	
/******/ })()
;