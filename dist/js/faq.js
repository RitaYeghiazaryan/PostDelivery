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

/***/ "./src/js/faq.js":
/*!***********************!*\
  !*** ./src/js/faq.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/js/modules/accordion.js\");\n\r\n\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__.accordionFunc)('.faqAccordionItem__header', 'faqAccordionItem__title', 'faqAccordionIcon', 'faqAccordionIcon__item', '.faqAccordionItem__item', '.faqAccordionItem__content', 'faqAccordionItem-open');\r\nlet searchInput = document.querySelector('.searchBlock__input');\r\nlet answers = document.querySelectorAll('.faqAccordionItem__content');\r\nanswers.forEach(answer => {\r\n    searchInput.addEventListener('input', () => {\r\n        if (!answer.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {\r\n            answer.parentNode.style.display = 'none';\r\n            let parentBlock = answer.closest('div.faqAccordionItem__container');\r\n            parentBlock.querySelector('.faqAccordion__headText').style.display = 'none';\r\n            parentBlock.style.marginBottom = '0';\r\n        } else {\r\n            answer.parentNode.style.display = 'block';\r\n            let parentBlock = answer.closest('div.faqAccordionItem__container');\r\n            parentBlock.querySelector('.faqAccordion__headText').style.display = 'block';\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://gulp-2022/./src/js/faq.js?");

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordionFunc\": () => (/* binding */ accordionFunc)\n/* harmony export */ });\nfunction accordionFunc(itemDescription, description, iconBlock, iconitem, contentItem, contentBlock, openItem) {\r\n    document.querySelectorAll(itemDescription).forEach(titleitem => {\r\n        titleitem.addEventListener('click', () => {\r\n            titleitem.querySelector('.'+description).classList.toggle(description + '--active')\r\n            titleitem.querySelector('.'+iconBlock).classList.toggle(iconBlock+'--active')\r\n            titleitem.querySelector('.'+iconitem).classList.toggle(iconitem+'--active')\r\n        })\r\n    })\r\n    let accordionItems = document.querySelectorAll(contentItem)\r\n    accordionItems.forEach((item) => {\r\n        let accordionHeader = item.querySelector(itemDescription)\r\n        accordionHeader.addEventListener('click', () => {\r\n            toggleItem(item)\r\n        })\r\n    })\r\n    const toggleItem = (item) => {\r\n        const accordionContent = item.querySelector(contentBlock)\r\n        if (item.classList.contains(openItem)) {\r\n            accordionContent.removeAttribute('style')\r\n            item.classList.remove(openItem)\r\n        } else {\r\n            accordionContent.style.height = accordionContent.scrollHeight + 'px'\r\n            item.classList.add(openItem)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/accordion.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/faq.js");
/******/ 	
/******/ })()
;