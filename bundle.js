/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./sass/style.scss");
;




/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

(function () {

  const scrollButtons = document.querySelectorAll(".main__scroller");
  const footerContacts = document.querySelector(".footer__contacts");
  const mainForm = document.querySelector(".form__main");
  const aboutHeader = document.querySelector(".about__header");

  const scrollButtonsClickHandler = (evt) => {
    switch (evt.target.id) {
      case "up-contacts":
        footerContacts.scrollIntoView({
          behavior: "smooth"
        });
        break;
      case "up-button":
        mainForm.scrollIntoView({
          behavior: "smooth"
        });
        break;
      case "upscroll-button":
        aboutHeader.scrollIntoView({
          behavior: "smooth"
        });
        break;
    }
  }

  scrollButtons.forEach((button) => {
    button.addEventListener("click", scrollButtonsClickHandler)
  });
})();


/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

(function () {

const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const mainForm = document.querySelector(".form__main");
const formName = document.querySelector(".form__name")
const formEmail = document.querySelector(".form__email");
const formPhone = document.querySelector(".form__phone");

const modalEscPressHandler = (evt) => {
  if (evt.key === "Escape") {
    closeModal();
    evt.preventDefault();
  }
};

const windowClickHandler = (evt) => {
  if (evt.target === modal) {
    closeModal();
  }
}

const openModal = () => {
  modal.classList.remove("hidden");
  modal.addEventListener("click", windowClickHandler);
  closeModalButton.addEventListener("click", closeModal)
  document.addEventListener("keydown", modalEscPressHandler);
}

const closeModal = () => {
  modal.classList.add("hidden");
  closeModalButton.removeEventListener("click", closeModal)
  modal.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", modalEscPressHandler);
}


mainForm.addEventListener("submit", function (evt) {
  openModal();
  evt.preventDefault();
  formName.value = "";
  formEmail.value = "";
  formPhone.value = "";
})
})();



/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

const slides = document.querySelectorAll(".slide");
const slide = document.querySelector(".slide");
const buttonRight = document.querySelector(".slider__button--right");
const buttonLeft = document.querySelector(".slider__button--left");
const slidesField = document.querySelector(".slider__wrapperinner");
width = window.getComputedStyle(slide).width;

let offset = 0;

buttonRight.addEventListener("click", () => {
  if (offset === +width.slice(0, width.length - 2) * (slides.length - 2)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(-${offset}px )`
})

buttonLeft.addEventListener("click", () => {
  if (offset === 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 2)
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(+${offset}px )`
})





/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	__webpack_require__("./js/modal.js");
/******/ 	__webpack_require__("./js/slider.js");
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;