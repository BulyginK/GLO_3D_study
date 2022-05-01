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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validate */ \"./src/modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('04 may 2022')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_validate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n\n//# sourceURL=webpack://glo_3d/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n    const calcInput = document.querySelectorAll('#calc input');\n\n    for (let i = 0; i < calcInput.length; i++) {\n        calcInput[i].addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\n        });\n    };\n\n    console.log(price);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo_3d/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const body = document.querySelector('body');\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n\n    const classActive = () => {\n        menu.classList.toggle('active-menu');\n    };\n\n    body.addEventListener('click', (e) => {\n        if (menuBtn.contains(e.target) || e.target === closeBtn || e.target.matches('menu>ul>li>a') || (menu.classList.contains('active-menu') && !e.target.closest('menu'))) {\n            e.preventDefault();\n            classActive();\n        };\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://glo_3d/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n    const popupContent = modal.querySelector('.popup-content');\n    let count = -750;\n    let idInterval;\n\n    const modalAnimate = () => {\n        idInterval = requestAnimationFrame(modalAnimate);\n\n        if (count < -400) {\n            count = count + 25;\n            popupContent.style.transform = 'translateX(' + count + 'px)';\n        } else if (count < -200) {\n            count = count + 20;\n            popupContent.style.transform = 'translateX(' + count + 'px)';\n        } else if (count < -50) {\n            count = count + 15;\n            popupContent.style.transform = 'translateX(' + count + 'px)';\n        } else {\n            cancelAnimationFrame(idInterval);\n        }\n    };\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            modal.style.display = 'block';\n            if (screen.width > 768) { modalAnimate() };\n        })\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            modal.style.display = 'none';\n            count = -750;\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://glo_3d/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const itemMenu = document.querySelectorAll('menu>ul>li>a');\n    const scrollBtn = document.querySelector('main>a');\n\n    itemMenu.forEach(item => {\n        item.addEventListener('click', (e) => {\n            e.preventDefault();\n            document.querySelector(item.hash).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            });\n        });\n    });\n\n    scrollBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        document.querySelector(scrollBtn.hash).scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    });    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://glo_3d/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content');\n    const sliders = document.querySelectorAll('.portfolio-item');\n    const portfolioDots = document.querySelector('.portfolio-dots');\n\n    const timeInterval = 2000;\n    let currentSlide = 0;\n    let interval;\n    let dots;\n\n    for (let i = 0; i < sliders.length; i++) {\n        let dot = document.createElement('li');\n        portfolioDots.appendChild(dot);\n        dot.classList.add('dot');\n        if (i == 0) {\n            dot.classList.add('dot-active');\n        }\n        dots = document.querySelectorAll('.dot');\n    }\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass);\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass);\n    }\n\n    const autoSlide = () => {\n        prevSlide(sliders, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n        currentSlide++;\n        if (currentSlide >= sliders.length) {\n            currentSlide = 0;\n        }\n        nextSlide(sliders, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    };\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return\n        }\n\n        prevSlide(sliders, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++;\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--;\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index;\n                }\n            })\n        };\n\n        if (currentSlide >= sliders.length) {\n            currentSlide = 0;\n        }\n\n        if (currentSlide < 0) {\n            currentSlide = sliders.length - 1;\n        }\n\n        nextSlide(sliders, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    })\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide();\n        }\n    }, true);\n\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval);\n        }\n    }, true);\n\n    startSlide(timeInterval);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://glo_3d/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabs = document.querySelectorAll('.service-header-tab');\n    const tabContent = document.querySelectorAll('.service-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab');\n\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove('active');\n                    tabContent[index].classList.add('d-none');\n                }\n\n            })\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://glo_3d/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n    let interval\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor(timeRemaining / 60 / 60);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n        return { timeRemaining, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining ();\n        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\n        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\n        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\n\n        if (getTime.timeRemaining <= 0) {\n            clearInterval(interval);\n            timerHours.textContent = '00';\n            timerMinutes.textContent = '00';\n            timerSeconds.textContent = '00';\n        }\n    }\n\n    interval = setInterval(updateClock, 500);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo_3d/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\n    const userName = document.querySelectorAll('[name=\"user_name\"]');\n    const formEmail = document.querySelectorAll('[name=\"user_email\"]');\n    const userPhone = document.querySelectorAll('[name=\"user_phone\"]');\n    const userMessage = document.querySelectorAll('[name=\"user_message\"]');\n\n    for (let i = 0; i < userName.length; i++) {\n        userName[i].addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/, \"\");\n        });\n    };\n\n    for (let i = 0; i < formEmail.length; i++) {\n        formEmail[i].addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^-\\w\\d_\\.\\!~\\*\\'@]/i, \"\");\n        });\n    };\n\n    for (let i = 0; i < userPhone.length; i++) {\n        userPhone[i].addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^\\d)(-]/, \"\");\n        });\n    };\n\n    for (let i = 0; i < userMessage.length; i++) {\n        userMessage[i].addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\s-]/, \"\");\n        });\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://glo_3d/./src/modules/validate.js?");

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