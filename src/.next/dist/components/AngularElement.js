'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esprima = require('esprima');

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