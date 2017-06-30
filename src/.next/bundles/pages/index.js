
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(548);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _getIterator2 = __webpack_require__(40);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mustache = __webpack_require__(551);

var _mustache2 = _interopRequireDefault(_mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esprima = __webpack_require__(549);

var ngAttributePrefix = 'ng-';
var ngAttributes = {
  'ng-init': 'expression',
  'ng-click': 'expression'
};
var ngEvents = {
  'ng-click': 'onClick'
};

function evalInContext(state, expression, tokens) {
  var res = {};
  var variables = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(tokens), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;
      var type = _ref.type,
          value = _ref.value;

      if (type === 'Identifier') {
        variables[value] = state[value];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var createVariables = (0, _keys2.default)(variables).map(function (key) {
    return 'var ' + key + ' = ' + variables[key] + ';';
  }).join('');
  var retrieveVariables = 'Object({ ' + (0, _keys2.default)(variables).map(function (key) {
    return key + ': ' + key;
  }).join(',') + ' })';
  return eval(createVariables + ';' + expression + ';' + retrieveVariables);
}

var AngularElement = function (_PureComponent) {
  (0, _inherits3.default)(AngularElement, _PureComponent);

  function AngularElement(props) {
    (0, _classCallCheck3.default)(this, AngularElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AngularElement.__proto__ || (0, _getPrototypeOf2.default)(AngularElement)).call(this, props));

    _this.state = {};
    _this.tokens = {};
    _this.events = {};

    _this.componentHandleAction = function (key, attr, name) {
      return function () {
        var res = evalInContext(_this.state, attr, _this.tokens[key]);
        _this.setState(res);
      };
    };

    _this.renderChildren = function (child) {
      if (typeof child === 'string') {
        return _mustache2.default.render(child, _this.state);
      }
      return child;
    };

    var _this$args = _this.args(),
        attrs = _this$args.attrs;

    for (var key in attrs) {
      var attr = attrs[key];
      var type = ngAttributes[key];
      var action = ngEvents[key];

      switch (type) {
        case 'expression':
          _this.tokens[key] = esprima.tokenize(attr);
          _this.state = (0, _extends3.default)({}, _this.state, evalInContext(_this.state, attr, _this.tokens[key]));
          break;
      }
      if (action) {
        _this.events[action] = _this.componentHandleAction(key, attr, action);
      }
    }
    _this.componentWillInitialize();
    return _this;
  }

  (0, _createClass3.default)(AngularElement, [{
    key: 'componentWillInitialize',
    value: function componentWillInitialize() {
      var ngInit = this.tokens['ng-init'];
    }
  }, {
    key: 'args',
    value: function args() {
      var props = {};
      var attrs = {};
      for (var key in this.props) {
        if (key.substring(0, ngAttributePrefix.length) === ngAttributePrefix) {
          attrs[key] = this.props[key];
        } else {
          props[key] = this.props[key];
        }
      }
      for (var _key in this.events) {
        props[_key] = this.events[_key];
      }
      return { props: props, attrs: attrs };
    }
  }, {
    key: 'render',
    value: function render() {
      var _args = this.args(),
          props = _args.props;

      var type = props.type,
          children = props.children,
          other = (0, _objectWithoutProperties3.default)(props, ['type', 'children']);

      var childrenArray = _react2.default.Children.toArray(children).map(this.renderChildren);
      return _react2.default.createElement(type, other, childrenArray);
    }
  }]);

  return AngularElement;
}(_react.PureComponent);

AngularElement.propTypes = {
  type: _propTypes2.default.string,
  children: _propTypes2.default.node
};
AngularElement.defaultProps = {
  type: 'div',
  children: null
};
exports.default = AngularElement;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularElement.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularElement.js"); } } })();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(_2.default.div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Welcome to next.js!", _react2.default.createElement(_2.default.button, { "ng-click": "count = count + 1", "ng-init": "count = 0", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Increment count ", "{{count}}"));
};

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _ = __webpack_require__(546);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/sam/Projects/I-am-an-angular-fanboy/src/pages/index.js?entry";

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sam/Projects/I-am-an-angular-fanboy/src/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sam/Projects/I-am-an-angular-fanboy/src/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AngularDiv = __webpack_require__(547);

var _AngularDiv2 = _interopRequireDefault(_AngularDiv);

var _AngularButton = __webpack_require__(550);

var _AngularButton2 = _interopRequireDefault(_AngularButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angular = {
  div: _AngularDiv2.default,
  button: _AngularButton2.default
};

exports.default = angular;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sam/Projects/I-am-an-angular-fanboy/src/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sam/Projects/I-am-an-angular-fanboy/src/index.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _AngularElement = __webpack_require__(543);

var _AngularElement2 = _interopRequireDefault(_AngularElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularDiv.js';

exports.default = function (props) {
  return _react2.default.createElement(_AngularElement2.default, (0, _extends3.default)({}, props, { type: 'div', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularDiv.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularDiv.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _AngularElement = __webpack_require__(543);

var _AngularElement2 = _interopRequireDefault(_AngularElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularButton.js';

exports.default = function (props) {
  return _react2.default.createElement(_AngularElement2.default, (0, _extends3.default)({}, props, { type: 'button', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularButton.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sam/Projects/I-am-an-angular-fanboy/src/components/AngularButton.js"); } } })();

/***/ })

},[544]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5ndWxhckVsZW1lbnQuanM/Mjg5YzJjMCIsIndlYnBhY2s6Ly8vLi9wYWdlcz8yODljMmMwIiwid2VicGFjazovLy8uL2luZGV4LmpzPzI4OWMyYzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bbmd1bGFyRGl2LmpzPzI4OWMyYzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bbmd1bGFyQnV0dG9uLmpzPzI4OWMyYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuXG5jb25zdCBlc3ByaW1hID0gcmVxdWlyZSgnZXNwcmltYScpO1xuXG5jb25zdCBuZ0F0dHJpYnV0ZVByZWZpeCA9ICduZy0nO1xuY29uc3QgbmdBdHRyaWJ1dGVzID0ge1xuICAnbmctaW5pdCc6ICdleHByZXNzaW9uJyxcbiAgJ25nLWNsaWNrJzogJ2V4cHJlc3Npb24nLFxufTtcbmNvbnN0IG5nRXZlbnRzID0ge1xuICAnbmctY2xpY2snOiAnb25DbGljaycsXG59O1xuXG5mdW5jdGlvbiBldmFsSW5Db250ZXh0KHN0YXRlLCBleHByZXNzaW9uLCB0b2tlbnMpIHtcbiAgY29uc3QgcmVzID0geyB9O1xuICBjb25zdCB2YXJpYWJsZXMgPSB7IH07XG4gIGZvciAoY29uc3QgeyB0eXBlLCB2YWx1ZSB9IG9mIHRva2Vucykge1xuICAgIGlmICh0eXBlID09PSAnSWRlbnRpZmllcicpIHtcbiAgICAgIHZhcmlhYmxlc1t2YWx1ZV0gPSBzdGF0ZVt2YWx1ZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IGNyZWF0ZVZhcmlhYmxlcyA9IE9iamVjdC5rZXlzKHZhcmlhYmxlcykubWFwKGtleSA9PiBgdmFyICR7a2V5fSA9ICR7dmFyaWFibGVzW2tleV19O2ApLmpvaW4oJycpO1xuICBjb25zdCByZXRyaWV2ZVZhcmlhYmxlcyA9IGBPYmplY3QoeyAke09iamVjdC5rZXlzKHZhcmlhYmxlcykubWFwKGtleSA9PiBgJHtrZXl9OiAke2tleX1gKS5qb2luKCcsJyl9IH0pYDtcbiAgcmV0dXJuIGV2YWwoYCR7Y3JlYXRlVmFyaWFibGVzfTske2V4cHJlc3Npb259OyR7cmV0cmlldmVWYXJpYWJsZXN9YCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ3VsYXJFbGVtZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gIH1cblxuICBzdGF0ZSA9IHsgfVxuICB0b2tlbnMgPSB7IH1cbiAgZXZlbnRzID0geyB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBhdHRycyB9ID0gdGhpcy5hcmdzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgIGNvbnN0IHsgW2tleV06IGF0dHIgfSA9IGF0dHJzO1xuICAgICAgY29uc3QgeyBba2V5XTogdHlwZSB9ID0gbmdBdHRyaWJ1dGVzO1xuICAgICAgY29uc3QgeyBba2V5XTogYWN0aW9uIH0gPSBuZ0V2ZW50cztcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdleHByZXNzaW9uJzpcbiAgICAgICAgICB0aGlzLnRva2Vuc1trZXldID0gZXNwcmltYS50b2tlbml6ZShhdHRyKTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIC4uLmV2YWxJbkNvbnRleHQodGhpcy5zdGF0ZSwgYXR0ciwgdGhpcy50b2tlbnNba2V5XSksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbYWN0aW9uXSA9IHRoaXMuY29tcG9uZW50SGFuZGxlQWN0aW9uKGtleSwgYXR0ciwgYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnRXaWxsSW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbEluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgeyAnbmctaW5pdCc6IG5nSW5pdCB9ID0gdGhpcy50b2tlbnM7XG4gIH1cblxuICBjb21wb25lbnRIYW5kbGVBY3Rpb24gPSAoa2V5LCBhdHRyLCBuYW1lKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGV2YWxJbkNvbnRleHQodGhpcy5zdGF0ZSwgYXR0ciwgdGhpcy50b2tlbnNba2V5XSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgYXJncygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHsgfTtcbiAgICBjb25zdCBhdHRycyA9IHsgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnByb3BzKSB7XG4gICAgICBpZiAoa2V5LnN1YnN0cmluZygwLCBuZ0F0dHJpYnV0ZVByZWZpeC5sZW5ndGgpID09PSBuZ0F0dHJpYnV0ZVByZWZpeCkge1xuICAgICAgICBhdHRyc1trZXldID0gdGhpcy5wcm9wc1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNba2V5XSA9IHRoaXMucHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5ldmVudHMpIHtcbiAgICAgIHByb3BzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldO1xuICAgIH1cbiAgICByZXR1cm4geyBwcm9wcywgYXR0cnMgfTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuID0gY2hpbGQgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gTXVzdGFjaGUucmVuZGVyKGNoaWxkLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXMuYXJncygpO1xuICAgIGNvbnN0IHsgdHlwZSwgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBwcm9wcztcbiAgICBjb25zdCBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubWFwKHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHR5cGUsIG90aGVyLCBjaGlsZHJlbkFycmF5KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FuZ3VsYXJFbGVtZW50LmpzIiwiXG5pbXBvcnQgYW5ndWxhciBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8YW5ndWxhci5kaXY+XG4gICAgICBXZWxjb21lIHRvIG5leHQuanMhXG4gICAgICA8YW5ndWxhci5idXR0b24gbmctY2xpY2s9XCJjb3VudCA9IGNvdW50ICsgMVwiIG5nLWluaXQ9XCJjb3VudCA9IDBcIj5JbmNyZW1lbnQgY291bnQge2B7e2NvdW50fX1gfTwvYW5ndWxhci5idXR0b24+XG4gICAgPC9hbmd1bGFyLmRpdj5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiXG5pbXBvcnQgZGl2IGZyb20gJy4vY29tcG9uZW50cy9Bbmd1bGFyRGl2JztcbmltcG9ydCBidXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0FuZ3VsYXJCdXR0b24nO1xuXG5jb25zdCBhbmd1bGFyID0ge1xuICBkaXYsXG4gIGJ1dHRvbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmd1bGFyRWxlbWVudCBmcm9tICcuL0FuZ3VsYXJFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gPEFuZ3VsYXJFbGVtZW50IHsuLi5wcm9wc30gdHlwZT1cImRpdlwiIC8+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FuZ3VsYXJEaXYuanMiLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5ndWxhckVsZW1lbnQgZnJvbSAnLi9Bbmd1bGFyRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IDxBbmd1bGFyRWxlbWVudCB7Li4ucHJvcHN9IHR5cGU9XCJidXR0b25cIiAvPlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FuZ3VsYXJCdXR0b24uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQWdCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQ0E7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdkRBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7Ozs7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUE3RUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFTQTtBQUFBO0FBREE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        