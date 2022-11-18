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

/***/ "./src/js/modules/paralax.js":
/*!***********************************!*\
  !*** ./src/js/modules/paralax.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paralaxFunc\": () => (/* binding */ paralaxFunc)\n/* harmony export */ });\nfunction Parallax(wrapper, layers) {\r\n    this.nameSpaces = {\r\n        wrapper: wrapper || '.parallax',\r\n        layers: layers,\r\n        deep: 'data-parallax-deep'\r\n    };\r\n    this.init = function () {\r\n        let self = this,\r\n            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);\r\n        parallaxWrappers.forEach((el, i) => {\r\n            (function (i) {\r\n                el.addEventListener('mousemove', function (e) {\r\n                    let x = e.clientX,\r\n                        y = e.clientY\r\n                    layers = el.querySelectorAll(self.nameSpaces.layers);\r\n                    layers.forEach((layer, index) => {\r\n                        (function (index) {\r\n                            let deep = layer.getAttribute(self.nameSpaces.deep),\r\n                                disallow = layer.getAttribute('data-parallax-disallow'),\r\n                                itemX = (disallow && disallow === 'x') ? 0 : x / deep,\r\n                                itemY = (disallow && disallow === 'y') ? 0 : y / deep;\r\n                            if (disallow && disallow === 'both') return;\r\n                            layer.style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';\r\n                        })(index);\r\n                    })\r\n                })\r\n            })(i);\r\n        })\r\n    };\r\n    this.init();\r\n    return this;\r\n}\r\nconst paralaxFunc = function (wrapper, layers) {\r\n        new Parallax(wrapper, layers);\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/paralax.js?");

/***/ }),

/***/ "./src/js/partniorProgramOrder.js":
/*!****************************************!*\
  !*** ./src/js/partniorProgramOrder.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_paralax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/paralax.js */ \"./src/js/modules/paralax.js\");\n\r\n\r\n\r\n\r\nconst   observer = new IntersectionObserver(entries => {\r\n    entries.forEach(entry => {\r\n\r\n        if (entry.isIntersecting) {\r\n\r\n            entry.target.classList.contains('.partniorOrder__orderRacet') \r\n                document.querySelector(\".partniorOrder__orderRacet\").classList.add(\"partniorOrder__orderRacet--active\")\r\n                setTimeout(function () {\r\n                    document.querySelector('.partniorOrder__orderRacet').style.animation = 'none';\r\n                    (0,_modules_paralax_js__WEBPACK_IMPORTED_MODULE_0__.paralaxFunc)('.parallax', ['.partniorOrder__orderRacet']);\r\n                }, 2500)\r\n            }\r\n       \r\n    });\r\n});\r\nlet served = document.querySelectorAll('.partniorOrder')\r\nserved.forEach(serve => {\r\n\r\n    observer.observe(serve);\r\n})\r\n\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/partniorProgramOrder.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/partniorProgramOrder.js");
/******/ 	
/******/ })()
;