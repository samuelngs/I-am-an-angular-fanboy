webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ODI1NDM1NmUwMGI4ZTVlMGNjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bbmd1bGFyRWxlbWVudC5qcz8yYTE5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxuY29uc3QgZXNwcmltYSA9IHJlcXVpcmUoJ2VzcHJpbWEnKTtcblxuY29uc3QgbmdBdHRyaWJ1dGVQcmVmaXggPSAnbmctJztcbmNvbnN0IG5nQXR0cmlidXRlcyA9IHtcbiAgJ25nLWluaXQnOiAnZXhwcmVzc2lvbicsXG4gICduZy1jbGljayc6ICdleHByZXNzaW9uJyxcbn07XG5jb25zdCBuZ0V2ZW50cyA9IHtcbiAgJ25nLWNsaWNrJzogJ29uQ2xpY2snLFxufTtcblxuZnVuY3Rpb24gZXZhbEluQ29udGV4dChzdGF0ZSwgZXhwcmVzc2lvbiwgdG9rZW5zKSB7XG4gIGNvbnN0IHJlcyA9IHsgfTtcbiAgY29uc3QgdmFyaWFibGVzID0geyB9O1xuICBmb3IgKGNvbnN0IHsgdHlwZSwgdmFsdWUgfSBvZiB0b2tlbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gJ0lkZW50aWZpZXInKSB7XG4gICAgICB2YXJpYWJsZXNbdmFsdWVdID0gc3RhdGVbdmFsdWVdO1xuICAgIH1cbiAgfVxuICBjb25zdCBjcmVhdGVWYXJpYWJsZXMgPSBPYmplY3Qua2V5cyh2YXJpYWJsZXMpLm1hcChrZXkgPT4gYHZhciAke2tleX0gPSAke3ZhcmlhYmxlc1trZXldfTtgKS5qb2luKCcnKTtcbiAgY29uc3QgcmV0cmlldmVWYXJpYWJsZXMgPSBgT2JqZWN0KHsgJHtPYmplY3Qua2V5cyh2YXJpYWJsZXMpLm1hcChrZXkgPT4gYCR7a2V5fTogJHtrZXl9YCkuam9pbignLCcpfSB9KWA7XG4gIHJldHVybiBldmFsKGAke2NyZWF0ZVZhcmlhYmxlc307JHtleHByZXNzaW9ufTske3JldHJpZXZlVmFyaWFibGVzfWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyRWxlbWVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICB9XG5cbiAgc3RhdGUgPSB7IH1cbiAgdG9rZW5zID0geyB9XG4gIGV2ZW50cyA9IHsgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgYXR0cnMgfSA9IHRoaXMuYXJncygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJzKSB7XG4gICAgICBjb25zdCB7IFtrZXldOiBhdHRyIH0gPSBhdHRycztcbiAgICAgIGNvbnN0IHsgW2tleV06IHR5cGUgfSA9IG5nQXR0cmlidXRlcztcbiAgICAgIGNvbnN0IHsgW2tleV06IGFjdGlvbiB9ID0gbmdFdmVudHM7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbic6XG4gICAgICAgICAgdGhpcy50b2tlbnNba2V5XSA9IGVzcHJpbWEudG9rZW5pemUoYXR0cik7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAuLi5ldmFsSW5Db250ZXh0KHRoaXMuc3RhdGUsIGF0dHIsIHRoaXMudG9rZW5zW2tleV0pLFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2FjdGlvbl0gPSB0aGlzLmNvbXBvbmVudEhhbmRsZUFjdGlvbihrZXksIGF0dHIsIGFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50V2lsbEluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxJbml0aWFsaXplKCkge1xuICAgIGNvbnN0IHsgJ25nLWluaXQnOiBuZ0luaXQgfSA9IHRoaXMudG9rZW5zO1xuICB9XG5cbiAgY29tcG9uZW50SGFuZGxlQWN0aW9uID0gKGtleSwgYXR0ciwgbmFtZSkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBldmFsSW5Db250ZXh0KHRoaXMuc3RhdGUsIGF0dHIsIHRoaXMudG9rZW5zW2tleV0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIGFyZ3MoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB7IH07XG4gICAgY29uc3QgYXR0cnMgPSB7IH07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wcm9wcykge1xuICAgICAgaWYgKGtleS5zdWJzdHJpbmcoMCwgbmdBdHRyaWJ1dGVQcmVmaXgubGVuZ3RoKSA9PT0gbmdBdHRyaWJ1dGVQcmVmaXgpIHtcbiAgICAgICAgYXR0cnNba2V5XSA9IHRoaXMucHJvcHNba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzW2tleV0gPSB0aGlzLnByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICBwcm9wc1trZXldID0gdGhpcy5ldmVudHNba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJvcHMsIGF0dHJzIH07XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9IGNoaWxkID0+IHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIE11c3RhY2hlLnJlbmRlcihjaGlsZCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzLmFyZ3MoKTtcbiAgICBjb25zdCB7IHR5cGUsIGNoaWxkcmVuLCAuLi5vdGhlciB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLm1hcCh0aGlzLnJlbmRlckNoaWxkcmVuKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlLCBvdGhlciwgY2hpbGRyZW5BcnJheSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Bbmd1bGFyRWxlbWVudC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQWdCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQ0E7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdkRBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7Ozs7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUE3RUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFTQTtBQUFBO0FBREE7QUFSQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9