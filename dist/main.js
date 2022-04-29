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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate */ \"./src/modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 april 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_validate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://glo_3d/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcInput = document.querySelectorAll('#calc input');\r\n\r\n    for (let i = 0; i < calcInput.length; i++) {\r\n        calcInput[i].addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n        });\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo_3d/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const body = document.querySelector('body');\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n\r\n\r\n    const classActive = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if (menu.classList.contains('active-menu') && e.target.closest('button')) {\r\n            e.preventDefault();\r\n            classActive();\r\n        };\r\n\r\n        if (menu.classList.contains('active-menu') && !e.target.closest('menu')) {\r\n            classActive();\r\n        };\r\n\r\n        if (menuBtn.contains(e.target) || e.target === closeBtn) {\r\n            e.preventDefault();\r\n            classActive();\r\n        };\r\n\r\n        if (e.target.matches('menu>ul>li>a')) {\r\n            classActive();\r\n        };\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://glo_3d/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const popupContent = modal.querySelector('.popup-content');\r\n    let count = -750;\r\n    let idInterval;\r\n\r\n    const modalAnimate = () => {\r\n        idInterval = requestAnimationFrame(modalAnimate);\r\n\r\n        if (count < -400) {\r\n            count = count + 25;\r\n            popupContent.style.transform = 'translateX(' + count + 'px)';\r\n        } else if (count < -200) {\r\n            count = count + 20;\r\n            popupContent.style.transform = 'translateX(' + count + 'px)';\r\n        } else if (count < -50) {\r\n            count = count + 15;\r\n            popupContent.style.transform = 'translateX(' + count + 'px)';\r\n        } else {\r\n            cancelAnimationFrame(idInterval);\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block';\r\n            if (screen.width > 768) { modalAnimate() };\r\n        })\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n            count = -750;\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://glo_3d/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const sliders = document.querySelectorAll('.portfolio-item');\r\n    const dots = document.querySelectorAll('.dot');\r\n    const timeInterval = 2000;\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(sliders, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        currentSlide++;\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(sliders, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(sliders, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            })\r\n        };\r\n\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = sliders.length - 1;\r\n        }\r\n\r\n        nextSlide(sliders, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://glo_3d/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://glo_3d/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    let interval\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining ();\r\n        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(interval);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n    }\r\n\r\n    interval = setInterval(updateClock, 500);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo_3d/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n    const userName = document.querySelectorAll('[name=\"user_name\"]');\r\n    const formEmail = document.querySelectorAll('[name=\"user_email\"]');\r\n    const userPhone = document.querySelectorAll('[name=\"user_phone\"]');\r\n    const userMessage = document.querySelectorAll('[name=\"user_message\"]');\r\n\r\n    for (let i = 0; i < userName.length; i++) {\r\n        userName[i].addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/, \"\");\r\n        });\r\n    };\r\n\r\n    for (let i = 0; i < formEmail.length; i++) {\r\n        formEmail[i].addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^-\\w\\d_\\.\\!~\\*\\'@]/i, \"\");\r\n        });\r\n    };\r\n\r\n    for (let i = 0; i < userPhone.length; i++) {\r\n        userPhone[i].addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\d)(-]/, \"\");\r\n        });\r\n    };\r\n\r\n    for (let i = 0; i < userMessage.length; i++) {\r\n        userMessage[i].addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/, \"\");\r\n        });\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://glo_3d/./src/modules/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;