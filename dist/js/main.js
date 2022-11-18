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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgerMenu.js */ \"./src/js/modules/burgerMenu.js\");\n/* harmony import */ var _modules_paralax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/paralax.js */ \"./src/js/modules/paralax.js\");\n/* harmony import */ var _modules_sliders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliders.js */ \"./src/js/modules/sliders.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/js/modules/accordion.js\");\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator.js */ \"./src/js/modules/calculator.js\");\n/* harmony import */ var _modules_emailValidation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/emailValidation.js */ \"./src/js/modules/emailValidation.js\");\n/* harmony import */ var _modules_scrollIntoView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollIntoView.js */ \"./src/js/modules/scrollIntoView.js\");\n\r\n// import * as parallax from \"./modules/mainHeader.js\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//parallax\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n    setTimeout(function () {\r\n        document.querySelector('.mainHeader_animationMan').style.animation = 'none';\r\n        document.querySelector('.mainHeader_animationPlane').style.animation = 'none';\r\n        (0,_modules_paralax_js__WEBPACK_IMPORTED_MODULE_1__.paralaxFunc)('.parallax', ['.mainHeader_animationMan', '.mainHeader_animationPlane']);\r\n\r\n    }, 3000)\r\n\r\n});\r\n(0,_modules_paralax_js__WEBPACK_IMPORTED_MODULE_1__.paralaxFunc)('.parallax', ['.mainOrder__parallaxGirl'], );\r\n(0,_modules_paralax_js__WEBPACK_IMPORTED_MODULE_1__.paralaxFunc)('.parallax', ['.mainOrderSecond__parallaxTv'], );\r\n\r\n\r\n// scroll functions\r\n(0,_modules_scrollIntoView_js__WEBPACK_IMPORTED_MODULE_6__.scrollIntoView)('.mainHeader_orderBtn','.mainAddress')\r\n;(0,_modules_scrollIntoView_js__WEBPACK_IMPORTED_MODULE_6__.scrollIntoView)('.mainOrder__orderBtn','.mainCalculator')\r\n\r\n// // category slider\r\n;(0,_modules_sliders_js__WEBPACK_IMPORTED_MODULE_2__.sliderFunc)('.categorySlider__slides', '.categorySlider__slide', '.categorySlider__arrowLeftBtn', '.categorySlider__arrowRightBtn', 6)\r\n// // productSlider\r\n;(0,_modules_sliders_js__WEBPACK_IMPORTED_MODULE_2__.sliderFunc)('.productSlider__slides', '.productSlider__slide', '.productSlider__leftBtn', '.productSlider__rightBtn', 1)\r\n\r\n\r\n;(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__.accordionFunc)('.contentItem__itemDescription', 'contentItem__description', 'contentItem__arrows', 'contentItem__mobileArrowIcon', '.contentItem', '.contentItem__pricing', 'mainDeliveryOptions-open')\r\n\r\n;(0,_modules_calculator_js__WEBPACK_IMPORTED_MODULE_4__.calculator)()\r\n\r\n//mailValidation\r\n;(0,_modules_emailValidation_js__WEBPACK_IMPORTED_MODULE_5__.emailValidation)()\n\n//# sourceURL=webpack://gulp-2022/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordionFunc\": () => (/* binding */ accordionFunc)\n/* harmony export */ });\nfunction accordionFunc(itemDescription, description, iconBlock, iconitem, contentItem, contentBlock, openItem) {\r\n    document.querySelectorAll(itemDescription).forEach(titleitem => {\r\n        titleitem.addEventListener('click', () => {\r\n            titleitem.querySelector('.'+description).classList.toggle(description + '--active')\r\n            titleitem.querySelector('.'+iconBlock).classList.toggle(iconBlock+'--active')\r\n            titleitem.querySelector('.'+iconitem).classList.toggle(iconitem+'--active')\r\n        })\r\n    })\r\n    let accordionItems = document.querySelectorAll(contentItem)\r\n    accordionItems.forEach((item) => {\r\n        let accordionHeader = item.querySelector(itemDescription)\r\n        accordionHeader.addEventListener('click', () => {\r\n            toggleItem(item)\r\n        })\r\n    })\r\n    const toggleItem = (item) => {\r\n        const accordionContent = item.querySelector(contentBlock)\r\n        if (item.classList.contains(openItem)) {\r\n            accordionContent.removeAttribute('style')\r\n            item.classList.remove(openItem)\r\n        } else {\r\n            accordionContent.style.height = accordionContent.scrollHeight + 'px'\r\n            item.classList.add(openItem)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/accordion.js?");

/***/ }),

/***/ "./src/js/modules/burgerMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/burgerMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burgerMenu\": () => (/* binding */ burgerMenu)\n/* harmony export */ });\nconst burgerMenu = ()=>{\r\n    document.querySelector(\".buttonBurger\").addEventListener(\"click\", (e)=> {\r\n        // e.preventDefault();\r\n        document.querySelector(\".buttonBurger__burger\").classList.toggle(\"buttonBurger__burger--active\")\r\n        document.querySelector(\".mobileMenu\").classList.toggle(\"mobileMenu__show\")\r\n        // document.querySelector(\".mobileMenu\").classList.toggle(\"mobileMenu__hide\")\r\n        document.querySelector(\".navMobile\").classList.toggle(\"navMobile__show\")\r\n    })\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/burgerMenu.js?");

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculator\": () => (/* binding */ calculator)\n/* harmony export */ });\nconst calculator = () => {\r\n    let serviceOption = document.querySelector('[name=\"deliveryOptions\"]');\r\n    let countryOption = document.querySelector('[name=\"country\"]');\r\n    let calcInputs = document.querySelectorAll('.selectionBlocks__input')\r\n    serviceOption.options[0].setAttribute('disabled', 'disabled')\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/calculator.js?");

/***/ }),

/***/ "./src/js/modules/emailValidation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/emailValidation.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emailValidation\": () => (/* binding */ emailValidation)\n/* harmony export */ });\nlet emailInput = document.querySelector('.mainSubscribtion__mailInput')\r\nlet form = document.querySelector('.mainSubscribtion__form')\r\nfunction emailValidation() {\r\n\r\n    let email = document.querySelector('.mainSubscribtion__mailInput').value\r\n    let text = document.querySelector('.mainSubscribtion__mailValidMsg')\r\n    let pattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/\r\n\r\n    if (email.match(pattern)) {\r\n        form.classList.add('valid')\r\n        form.classList.remove('invalid')\r\n        text.innerHTML = \"\"\r\n    } else {\r\n        form.classList.remove('valid')\r\n        form.classList.add('invalid')\r\n        text.innerHTML = \"Please Enter Valid Email Address\"\r\n        text.style.color = '#ff0000'\r\n    }\r\n\r\n    if (email === '') {\r\n        form.classList.remove('valid')\r\n        form.classList.remove('invalid')\r\n        text.innerHTML = \"\"\r\n        text.style.color = '#00ff00'\r\n    }\r\n}\r\nemailInput.addEventListener('input',() => emailValidation());\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/emailValidation.js?");

/***/ }),

/***/ "./src/js/modules/paralax.js":
/*!***********************************!*\
  !*** ./src/js/modules/paralax.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paralaxFunc\": () => (/* binding */ paralaxFunc)\n/* harmony export */ });\nfunction Parallax(wrapper, layers) {\r\n    this.nameSpaces = {\r\n        wrapper: wrapper || '.parallax',\r\n        layers: layers,\r\n        deep: 'data-parallax-deep'\r\n    };\r\n    this.init = function () {\r\n        let self = this,\r\n            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);\r\n        parallaxWrappers.forEach((el, i) => {\r\n            (function (i) {\r\n                el.addEventListener('mousemove', function (e) {\r\n                    let x = e.clientX,\r\n                        y = e.clientY\r\n                    layers = el.querySelectorAll(self.nameSpaces.layers);\r\n                    layers.forEach((layer, index) => {\r\n                        (function (index) {\r\n                            let deep = layer.getAttribute(self.nameSpaces.deep),\r\n                                disallow = layer.getAttribute('data-parallax-disallow'),\r\n                                itemX = (disallow && disallow === 'x') ? 0 : x / deep,\r\n                                itemY = (disallow && disallow === 'y') ? 0 : y / deep;\r\n                            if (disallow && disallow === 'both') return;\r\n                            layer.style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';\r\n                        })(index);\r\n                    })\r\n                })\r\n            })(i);\r\n        })\r\n    };\r\n    this.init();\r\n    return this;\r\n}\r\nconst paralaxFunc = function (wrapper, layers) {\r\n        new Parallax(wrapper, layers);\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/paralax.js?");

/***/ }),

/***/ "./src/js/modules/scrollIntoView.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollIntoView.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollIntoView\": () => (/* binding */ scrollIntoView)\n/* harmony export */ });\nconst scrollIntoView = function (btn,section) {\r\n    document.querySelector(btn).addEventListener('click', () => {\r\n        document.querySelector(section).scrollIntoView({\r\n            behavior: 'smooth'\r\n        });\r\n    })\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/scrollIntoView.js?");

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderFunc\": () => (/* binding */ sliderFunc)\n/* harmony export */ });\nlet filter = 'clothes';\r\nlet animationDuration = 1000\r\nlet animationTimeOut = animationDuration / 2\r\nlet isMoved = false\r\n\r\nclass Slider {\r\n   constructor(slider, slides, btnLeft, btnRight, slidesCount) {\r\n      this.slider = document.querySelector(slider)\r\n      this.slides = document.querySelectorAll(slides)\r\n      this.btnLeft = document.querySelectorAll(btnLeft)\r\n      this.btnRight = document.querySelectorAll(btnRight)\r\n\r\n      this.slidesCount = slidesCount\r\n      this.maxSlides = this.slides.length\r\n      this.curSlide = 0\r\n      this.isMultiSlide = slidesCount > 1\r\n\r\n      // for drag\r\n      this.pressed = false;\r\n      this.startX;\r\n      this.x;\r\n      this.clientX;\r\n   }\r\n\r\n   goToSlide(slide) {\r\n      this.slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)\r\n   }\r\n   updateSlidesCount() {\r\n      this.slidesCount = Math.round(this.slider.clientWidth / this.slides[0].clientWidth)\r\n   }\r\n   updateClientX(e) {\r\n      this.clientX = e.clientX ? e.clientX : e.touches[0].clientX\r\n   }\r\n   arrowLeft() {\r\n      this.updateSlidesCount()\r\n      this.curSlide !== 0 ? this.curSlide-- : this.curSlide = this.maxSlides - this.slidesCount\r\n      this.goToSlide(this.curSlide)\r\n   }\r\n   arrowRight() {\r\n      this.updateSlidesCount()\r\n      this.curSlide <= this.maxSlides - this.slidesCount - 1 ? this.curSlide++ : this.curSlide = 0\r\n      this.goToSlide(this.curSlide)\r\n   }\r\n   init() {\r\n      this.goToSlide(this.curSlide)\r\n   }\r\n   // drag events\r\n\r\n   checkBoundary() {\r\n      if (this.isMultiSlide) {\r\n         const curSlideNum = Math.ceil(parseInt(this.slider.style.left) / this.slides[0].getBoundingClientRect().width)\r\n         this.updateSlidesCount()\r\n         if (parseInt(this.slider.style.left) > 0) {\r\n            this.curSlide - curSlideNum >= 0 ? this.curSlide -= curSlideNum : this.curSlide = this.maxSlides - this.slidesCount\r\n         } else if (parseInt(this.slider.style.left) < 0) {\r\n            this.curSlide + this.slidesCount + curSlideNum * -1 + 1 <= this.maxSlides ? this.curSlide += curSlideNum * -1 + 1 : this.curSlide = 0\r\n         }\r\n         this.goToSlide(this.curSlide)\r\n      } else {\r\n         if (parseInt(this.slider.style.left) > 0) {\r\n            this.arrowLeft()\r\n         } else if (parseInt(this.slider.style.left) < 0) {\r\n            this.arrowRight()\r\n         }\r\n      }\r\n   }\r\n\r\n   dragMouseDown(e) {\r\n      e.preventDefault()\r\n      this.updateClientX(e)\r\n      this.pressed = true;\r\n      this.startX = this.clientX - this.slider.offsetLeft;\r\n      this.slider.style.transition = 'none'\r\n   }\r\n   dragMouseMove(e) {\r\n      e.preventDefault()\r\n      if (!this.pressed) return;\r\n      this.updateClientX(e)\r\n      if (this.isMultiSlide) isMoved = true\r\n      this.x = this.clientX;\r\n      this.slider.style.left = `${this.x - this.startX}px`\r\n\r\n   }\r\n   dragMouseUp(e) {\r\n      e.preventDefault()\r\n      if (this.isMultiSlide) {\r\n         if (isMoved) {\r\n            this.checkBoundary()\r\n            this.slider.style.left = '0px'\r\n            this.slider.style.transition = 'all 1s'\r\n         }\r\n      } else {\r\n         this.checkBoundary()\r\n         this.slider.style.left = '0px'\r\n         this.slider.style.transition = 'all 1s'\r\n      }\r\n      this.pressed = false;\r\n   }\r\n\r\n   // resize event\r\n   updateSlidesCountResize() {\r\n      if (this.isMultiSlide) {\r\n         this.updateSlidesCount()\r\n         if (this.curSlide > this.maxSlides - this.slidesCount - 1) {\r\n            this.goToSlide(this.maxSlides - this.slidesCount - 1)\r\n         }\r\n      }\r\n   }\r\n}\r\n\r\nclass ProductSlider extends Slider {\r\n   constructor(slider, slides, btnLeft, btnRight, slidesCount) {\r\n      super(slider, slides, btnLeft, btnRight, slidesCount)\r\n\r\n      this.btnImgRight = document.querySelector('.productSlider__footerRightImg')\r\n      this.btnImgLeft = document.querySelector('.productSlider__footerLeftImg')\r\n      this.productSliderFooterImg = document.querySelectorAll('.productSlider__footerImg')\r\n   }\r\n   changeBtnImg(curSlide) {\r\n      const nextSlide = curSlide + 2 > 3 ? 1 : curSlide + 2\r\n      const prevSlide = nextSlide === 3 ? 1 : nextSlide + 1\r\n      this.productSliderFooterImg.forEach(el => {\r\n         this.animFunc(el)\r\n      })\r\n      setTimeout(() => {\r\n         this.btnImgRight.src = `img/${filter}${nextSlide}.png`\r\n         this.btnImgLeft.src = `img/${filter}${prevSlide}.png`\r\n      }, animationTimeOut)\r\n   }\r\n   animFunc(el) {\r\n      const animateProcess = [{\r\n            transform: 'translateY(0%)'\r\n         },\r\n         {\r\n            transform: 'translateY(-150%)'\r\n         },\r\n         {\r\n            transform: 'translateY(0%)'\r\n         },\r\n\r\n\r\n      ];\r\n      const animationOptions = {\r\n         duration: animationDuration,\r\n         iterations: 1,\r\n      }\r\n      el.animate(animateProcess, animationOptions)\r\n   }\r\n   arrowLeft() {\r\n      super.arrowLeft()\r\n      this.changeBtnImg(this.curSlide)\r\n   }\r\n   arrowRight() {\r\n      super.arrowRight()\r\n      this.changeBtnImg(this.curSlide)\r\n   }\r\n   changeFilter(arr, slide) {\r\n      if (!isMoved) {\r\n         arr.forEach(el => el.classList.remove('categorySlider__slide_active'))\r\n         filter = slide.dataset.filter.toLowerCase()\r\n         document.querySelectorAll(`[data-filter='${filter[0].toUpperCase() + filter.slice(1)}']`).forEach(item => item.classList.add('categorySlider__slide_active'))\r\n         this.changeBtnImg(this.curSlide)\r\n         this.slides.forEach((el, i) => {\r\n            setTimeout(() => el.querySelector('img').src = `img/${filter}${i + 1}.png`, animationTimeOut)\r\n            this.animFunc(el.querySelector('img'))\r\n         })\r\n      }\r\n      isMoved = false\r\n   }\r\n\r\n}\r\n\r\n\r\nconst sliderFunc = function (slider, slides, btnLeft, btnRight, slidesCount) {\r\n   let sliderClass\r\n   if (slidesCount > 1) {\r\n      sliderClass = new Slider(slider, slides, btnLeft, btnRight, slidesCount)\r\n   } else {\r\n      sliderClass = new ProductSlider(slider, slides, btnLeft, btnRight, slidesCount)\r\n   }\r\n   sliderClass.init()\r\n   sliderClass.btnRight.forEach(btn => {\r\n      btn.addEventListener('click', function () {\r\n         sliderClass.arrowRight()\r\n      })\r\n   })\r\n   sliderClass.btnLeft.forEach(btn => {\r\n      btn.addEventListener('click', function () {\r\n         sliderClass.arrowLeft()\r\n      })\r\n   });\r\n   ['mousedown', 'touchstart'].forEach(evt => {\r\n      sliderClass.slider.addEventListener(evt, (e) => {\r\n         sliderClass.dragMouseDown(e)\r\n      })\r\n   });\r\n   ['mousemove', 'touchmove'].forEach(evt => {\r\n      sliderClass.slider.addEventListener(evt, (e) => {\r\n         sliderClass.dragMouseMove(e)\r\n      })\r\n   });\r\n   ['mouseup', 'touchend'].forEach(evt => {\r\n      sliderClass.slider.addEventListener(evt, (e) => {\r\n         sliderClass.dragMouseUp(e)\r\n      })\r\n   });\r\n   window.addEventListener('resize', () => {\r\n      sliderClass.updateSlidesCountResize()\r\n   })\r\n   const categorySliderSlides = document.querySelectorAll('.categorySlider__slide')\r\n\r\n\r\n   categorySliderSlides.forEach((el, _, arr) => {\r\n      !sliderClass.isMultiSlide && sliderClass.changeFilter(arr, arr[0])\r\n      el.addEventListener('click', () => {\r\n         !sliderClass.isMultiSlide && sliderClass.changeFilter(arr, el)\r\n      })\r\n   })\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/sliders.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;