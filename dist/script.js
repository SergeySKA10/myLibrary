/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Els = function (selector) {
  return new Els.prototype.init(selector);
};
Els.prototype.init = function (selector) {
  if (!selector) {
    return this;
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
Els.prototype.init.prototype = Els.prototype;
window.Els = Els;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Els);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// функция innerHTML
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
};

// функция поиска по номеру
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.num = function (i) {
  const elem = this[i],
    length = Object.keys(this).length;
  for (let i = 0; i < length; i++) {
    delete this[i];
  }
  this[0] = elem;
  this.length = 1;
  return this;
};

// функция определения индекса элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode,
    childs = [...parent.children];
  const findMyIndex = item => {
    return item == this[0];
  };
  return childs.findIndex(findMyIndex);
};

// функция поиска элементов по селектору
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0,
    counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) continue;
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

// функция поиска ближайшего селектра по родителям => closest
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.findCst = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
      counter++;
    } else continue;
  }
  this.length = counter;
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  console.log(this);
  return this;
};

// функция поиска соседних элементов
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0,
    counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) continue;
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// функция назначения или изменения аттрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAtr = function (attribute, value) {
  for (let i = 0; i < this.length; i++) {
    if (attribute && value) {
      this[i].setAttribute(attribute, value);
    } else {
      this[i].setAttribute(attribute, value);
      console.error(new Error("Method hasn't parametrs. Please you mast write attribute and value"));
    }
  }
  return this;
};

// функция получения аттрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAtr = function (attribute) {
  // доработать в соответствии с документацией => должно быть значение, плюс дополнительно можно получить доп свойства
  if (!attribute) throw new Error("Method hasn't parametrs. The function must contain a parameter 'attribute'");
  if (this.length === 1) {
    return this[0].getAttribute(attribute);
  } else {
    let countLength = 0;
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].getAttribute(attribute);
      if (this[i]) countLength++;
    }
    this.length = countLength;
    const objLength = Object.keys(this).length;
    for (; countLength < objLength; countLength++) {
      delete this[countLength];
    }
  }
  return this;
};

// функция удаления аттрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.delAtr = function (attribute, value) {
  if (!attribute) throw new Error("Method hasn't parametrs. The function must contain a parameter 'attribute'");
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attribute, value);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// функция добавления класса
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.newClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...classNames);
  }
  return this;
};

// функция удаления класса
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.delClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classNames);
    if (classNames.find(el => el === 'hide')) {
      this[i].style.display = '';
    }
  }
  return this;
};

// функция изменения класса
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.changeClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(className);
  }
  return this;
};

// функция поиска наличия класса
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.has = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.contains(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// функция демонстрации элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};

// функция скрытия элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};

// функция изменения свойства display
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.changeDsp = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// техническая функция анимации
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animate = function (dur, cb, fin) {
  let timeStart;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart,
      complaction = Math.min(timeElapsed / dur, 1);
    cb(complaction);
    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') fin();
    }
  }
  return _animateOverTime;
};

// функция появление элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.appear = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';
    const _appear = complaction => {
      this[i].style.opacity = complaction;
    };
    const anim = this.animate(dur, _appear, fin);
    requestAnimationFrame(anim);
  }
  return this;
};

// функция исчезновения элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.disappear = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _disappear = complaction => {
      this[i].style.opacity = 1 - complaction;
      if (complaction === 1) this[i].style.display = 'none';
    };
    const anim = this.animate(dur, _disappear, fin);
    requestAnimationFrame(anim);
  }
  return this;
};

// функция изменения состояния видимости элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.appearToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';
      const _appear = complaction => {
        this[i].style.opacity = complaction;
      };
      const anim = this.animate(dur, _appear, fin);
      requestAnimationFrame(anim);
    } else {
      const _disappear = complaction => {
        this[i].style.opacity = 1 - complaction;
        if (complaction === 1) this[i].style.display = 'none';
      };
      const anim = this.animate(dur, _disappear, fin);
      requestAnimationFrame(anim);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// обработчик событий
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.watch = function (event, callback, ...options) {
  for (let i = 0; i < this.length; i++) {
    if (event && callback && options.length === 0) {
      this[i].addEventListener(event, callback);
    } else if (event && callback && options.length !== 0) {
      this[i].addEventListener(event, callback, ...options);
    } else {
      throw new Error("Method hasn't parametrs. The function must contain a parameter 'event' and 'callback'");
    }
  }
  return this;
};

// удаление обработчика событий
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.delWatch = function (event, callback) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(event, callback);
  }
  return this;
};

// событие click и обработчик click
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};

// обработчик submit
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.submit = function (request) {
  for (let i = 0; i < this.length; i++) {
    if (request) {
      this[i].addEventListener('submit', e => {
        e.preventDefaut();
        request();
      });
    } else {
      throw new Error("submit hasn't function 'request'");
    }
  }
  return this;
};

// обработчик input
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.input = function (enter) {
  for (let i = 0; i < this.length; i++) {
    if (enter) {
      this[i].addEventListener('input', enter);
    } else {
      throw new Error("input hasn't function 'enter'");
    }
  }
  return this;
};

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


//display
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.hide').hide();
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.active').show();
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.changeDisplay').changeDsp();

//classes
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.five .newClass').newClass('addClass');
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.delClass').delClass('hide');
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.five div').changeClass('changeClass');
// console.log(Els('div').has('num'));

//atributte
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.five').setAtr('id', 'five');
// console.log(Els('.five').getAtr('id'));
// console.log(Els('div').getAtr('data-num'));
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.five').delAtr('id', 'five');

//hendlers
function callback() {
  console.log('callback');
}
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.one_button').watch('mouseenter', callback, {
  once: true
});
//Els('.one_button').delWatch('mouseenter', callback);

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.two_button').click(e => {
  console.log(e);
  e.target.style.width = '100px';
  e.target.style.height = '50px';
  setTimeout(() => {
    e.target.style.width = '';
    e.target.style.height = '';
  }, 3000);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[name="phone"]').input(function () {
  this.value = this.value.replace(/\D/g, '');
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.submit').watch('submit', () => {
  // убрать перезагрузку страницы
  console.log('hi');
});

//actions

//console.log( Els('body').html() );

// Els('body').html(`
//     <div> Hello World </div>
// `)

// console.log(Els('div').num(3));
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').num(3).changeDsp();
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').click(function () {
  console.log((0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index());
});

// console.log( Els('section').num(1).find('.more') );
// console.log( Els('.some').num(0).findCst('.actions'));
// console.log( Els('.some').num(0).findCst('.findme').newClass('act'));
// console.log( Els('.iHaveSiblings').siblings());

//effects

//effects
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.effects_btn').click(e => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.actions').disappear(1500);
  setTimeout(() => {
    (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.actions').appear(1500);
  }, 3000);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.effects_two').click(e => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.more').appearToggle(2000);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').click(() => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').num(0).disappear(2000, () => console.log('Bye'));
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').click(() => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').num(1).appear(2000);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#toggle').click(() => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').appearToggle(2000);
});
/******/ })()
;
//# sourceMappingURL=script.js.map