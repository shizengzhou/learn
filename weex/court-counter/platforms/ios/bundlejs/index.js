// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/shizeng/learn/weex/court-counter/src/components/Button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-015de462"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "button": {
    "justifyContent": "center",
    "alignItems": "center",
    "minWidth": "88",
    "minHeight": "48",
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16",
    "borderRadius": "4"
  },
  "button-text": {
    "fontSize": "28",
    "fontWeight": "500"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('press');
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/shizeng/learn/weex/court-counter/src/components/Team.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-72a2780d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "team": {
    "flex": 1
  },
  "team-name": {
    "paddingTop": "32",
    "paddingBottom": "32",
    "fontFamily": "'sans-serif-medium'",
    "fontSize": "14wx",
    "color": "#616161",
    "textAlign": "center"
  },
  "score": {
    "marginBottom": "48",
    "fontFamily": "'sans-serif-light'",
    "fontSize": "56wx",
    "color": "#000000",
    "textAlign": "center"
  },
  "btn-container": {
    "marginLeft": "48",
    "marginRight": "48",
    "marginBottom": "16"
  },
  "btn": {
    "backgroundColor": "#ff9800"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(0);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Team',
  components: {
    Button: _Button2.default
  },
  props: {
    teamName: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  methods: {
    onAddThree: function onAddThree() {
      this.$emit('addThree');
    },
    onAddTwo: function onAddTwo() {
      this.$emit('addTwo');
    },
    onAddOne: function onAddOne() {
      this.$emit('addOne');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["team"]
  }, [_c('text', {
    staticClass: ["team-name"]
  }, [_vm._v(_vm._s(_vm.teamName))]), _c('text', {
    staticClass: ["score"]
  }, [_vm._v(_vm._s(_vm.score))]), _c('div', {
    staticClass: ["btn-container"]
  }, [_c('button', {
    staticClass: ["btn"],
    attrs: {
      "text": "+3 Points"
    },
    on: {
      "press": _vm.onAddThree
    }
  })], 1), _c('div', {
    staticClass: ["btn-container"]
  }, [_c('button', {
    staticClass: ["btn"],
    attrs: {
      "text": "+2 Points"
    },
    on: {
      "press": _vm.onAddTwo
    }
  })], 1), _c('div', {
    staticClass: ["btn-container"]
  }, [_c('button', {
    staticClass: ["btn"],
    attrs: {
      "text": "Free Throw"
    },
    on: {
      "press": _vm.onAddOne
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/shizeng/learn/weex/court-counter/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "space-between"
  },
  "team-container": {
    "flexDirection": "row"
  },
  "line": {
    "width": "2",
    "backgroundColor": "#aaaaaa",
    "marginTop": "32"
  },
  "btn-container": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginBottom": "64"
  },
  "btn": {
    "backgroundColor": "#ff9800"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Team = __webpack_require__(4);

var _Team2 = _interopRequireDefault(_Team);

var _Button = __webpack_require__(0);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  components: {
    Team: _Team2.default,
    Button: _Button2.default
  },
  data: function data() {
    return {
      scoreTeamA: 0,
      scoreTeamB: 0
    };
  },

  methods: {
    addThreeForTeamA: function addThreeForTeamA() {
      this.scoreTeamA += 3;
    },
    addTwoForTeamA: function addTwoForTeamA() {
      this.scoreTeamA += 2;
    },
    addOneForTeamA: function addOneForTeamA() {
      this.scoreTeamA += 1;
    },
    addThreeForTeamB: function addThreeForTeamB() {
      this.scoreTeamB += 3;
    },
    addTwoForTeamB: function addTwoForTeamB() {
      this.scoreTeamB += 2;
    },
    addOneForTeamB: function addOneForTeamB() {
      this.scoreTeamB += 1;
    },
    reset: function reset() {
      this.scoreTeamA = 0;
      this.scoreTeamB = 0;
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["team-container"]
  }, [_c('team', {
    attrs: {
      "teamName": "Team A",
      "score": _vm.scoreTeamA
    },
    on: {
      "addThree": _vm.addThreeForTeamA,
      "addTwo": _vm.addTwoForTeamA,
      "addOne": _vm.addOneForTeamA
    }
  }), _c('div', {
    staticClass: ["line"]
  }), _c('team', {
    attrs: {
      "teamName": "Team B",
      "score": _vm.scoreTeamB
    },
    on: {
      "addThree": _vm.addThreeForTeamB,
      "addTwo": _vm.addTwoForTeamB,
      "addOne": _vm.addOneForTeamB
    }
  })], 1), _c('div', {
    staticClass: ["btn-container"]
  }, [_c('button', {
    staticClass: ["btn"],
    attrs: {
      "text": "reset"
    },
    on: {
      "press": _vm.reset
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);