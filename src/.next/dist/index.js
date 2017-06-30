'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AngularDiv = require('./components/AngularDiv');

var _AngularDiv2 = _interopRequireDefault(_AngularDiv);

var _AngularButton = require('./components/AngularButton');

var _AngularButton2 = _interopRequireDefault(_AngularButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angular = {
  div: _AngularDiv2.default,
  button: _AngularButton2.default
};

exports.default = angular;