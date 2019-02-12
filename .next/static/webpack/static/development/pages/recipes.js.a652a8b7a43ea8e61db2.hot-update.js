webpackHotUpdate("static\\development\\pages\\recipes.js",{

/***/ "./pages/recipes.js":
/*!**************************!*\
  !*** ./pages/recipes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\recipePWA\\front-end\\pages\\recipes.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RecipeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "recipes__RecipeContainer",
  componentId: "sc-1f8pa12-0"
})(["margin:0 10%;"]);
var HeaderRecipe = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "recipes__HeaderRecipe",
  componentId: "sc-1f8pa12-1"
})(["h1{display:flex;text-align:center;color:", ";}img{width:100%;height:40vh;object-fit:cover;}.headerDetails{display:flex;flex-direction:row;justify-content:center;align-items:center;.detailBox{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px;width:100px;box-shadow:0 2px 4px rgba(0,0,0,0.1),0 2px 4px rgba(0,0,0,0.15);}}"], function (props) {
  return props.theme.red;
});
var IngredientsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "recipes__IngredientsContainer",
  componentId: "sc-1f8pa12-2"
})([""]);
var StepsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "recipes__StepsContainer",
  componentId: "sc-1f8pa12-3"
})([".step{padding:5%;border-radius:10;box-shadow:0 2px 4px rgba(0,0,0,0.1),0 2px 4px rgba(0,0,0,0.15);}"]);
var StepsArr = ["Make the fried shallots: In a small skillet, heat Â¼-inch of oil until shimmering. Working in small batches, add a handful of shallots, and cook, turning frequently, until golden, about 1 minute. Using a slotted spoon, transfer fried shallots to a paper towel lined plate.", "Make the soup: In a medium pot, heat the oil over medium-high. Add the chicken and brown on both sides, about 4 minutes per side. Remove the chicken to a plate.", "Reduce the heat to medium and add the ginger, turmeric, and cumin. Cook, stirring constantly, until fragrant, about 1 minute.", "Pour the broth into the pot and return the chicken. Bring to a boil and then reduce to medium-low. Cover and gently simmer until the chicken breasts are just cooked through, about 10 to 12 minutes. Turn off heat. Using tongs or a slotted spoon remove the chicken breast to a plate and let cool slightly. Discard skin and bones and shred chicken meat. Keep warm.", "Meanwhile, bring a large pot of salted water to a boil. Add the rice noodles or thin spaghetti and cook until al dente per package instructions. Drain.", "Add noodles to broth and serve brothy noodles topped with pulled chicken, herbs, fried shallots, and black pepper."];
var IngredientsArr = ["Extra-virgin olive oil", "4 shallots, thinly sliced into rings", "1/4 cup unbleached all-purpose flour", "2 tablespoons extra virgin olive oil", "2 bone-in, skin-on chicken thighs", "Kosher salt and freshly ground pepper", "One 2-inch piece of ginger, peeled and finely chopped, (1 tablespoon)", "1/4 tsp. ground cumin", "1 tsp. ground tumeric", "4 cups Swanson Chicken Broth", "8 ounces vermicelli rice noodles or thin spaghetti", "1 cup leafy herbs, such as cilantro, dill and basil"];

var Recipes =
/*#__PURE__*/
function (_Component) {
  _inherits(Recipes, _Component);

  function Recipes() {
    _classCallCheck(this, Recipes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Recipes).apply(this, arguments));
  }

  _createClass(Recipes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderRecipe, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://assets.epicurious.com/photos/5a70997409de9619fbdda443/6:4/w_1080%2Ch_720/Valentine's-Day-Steak-Dinner-For-Two-03012018.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Instant Pot Braised Lamb with White Beans and Spinach "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "headerDetails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "20mins", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Yields")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "20mins", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Yields")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "20mins", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Yields")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecipeContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IngredientsContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Ingredients: "), IngredientsArr.map(function (ingredient, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, ingredient);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StepsContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, StepsArr.map(function (step, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "step",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "Step: ", index + 1), step);
      }))));
    }
  }]);

  return Recipes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Recipes);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/recipes")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=recipes.js.a652a8b7a43ea8e61db2.hot-update.js.map