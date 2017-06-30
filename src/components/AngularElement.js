
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Mustache from 'mustache';

const esprima = require('esprima');

const ngAttributePrefix = 'ng-';
const ngAttributes = {
  'ng-init': 'expression',
  'ng-click': 'expression',
};
const ngEvents = {
  'ng-click': 'onClick',
};

function evalInContext(state, expression, tokens) {
  const res = { };
  const variables = { };
  for (const { type, value } of tokens) {
    if (type === 'Identifier') {
      variables[value] = state[value];
    }
  }
  const createVariables = Object.keys(variables).map(key => `var ${key} = ${variables[key]};`).join('');
  const retrieveVariables = `Object({ ${Object.keys(variables).map(key => `${key}: ${key}`).join(',')} })`;
  return eval(`${createVariables};${expression};${retrieveVariables}`);
}

export default class AngularElement extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    type: 'div',
    children: null,
  }

  state = { }
  tokens = { }
  events = { }

  constructor(props) {
    super(props);
    const { attrs } = this.args();
    for (const key in attrs) {
      const { [key]: attr } = attrs;
      const { [key]: type } = ngAttributes;
      const { [key]: action } = ngEvents;
      switch (type) {
        case 'expression':
          this.tokens[key] = esprima.tokenize(attr);
          this.state = {
            ...this.state,
            ...evalInContext(this.state, attr, this.tokens[key]),
          };
          break;
      }
      if (action) {
        this.events[action] = this.componentHandleAction(key, attr, action);
      }
    }
    this.componentWillInitialize();
  }

  componentWillInitialize() {
    const { 'ng-init': ngInit } = this.tokens;
  }

  componentHandleAction = (key, attr, name) => {
    return () => {
      const res = evalInContext(this.state, attr, this.tokens[key]);
      this.setState(res);
    }
  }

  args() {
    const props = { };
    const attrs = { };
    for (const key in this.props) {
      if (key.substring(0, ngAttributePrefix.length) === ngAttributePrefix) {
        attrs[key] = this.props[key];
      } else {
        props[key] = this.props[key];
      }
    }
    for (const key in this.events) {
      props[key] = this.events[key];
    }
    return { props, attrs };
  }

  renderChildren = child => {
    if (typeof child === 'string') {
      return Mustache.render(child, this.state);
    }
    return child;
  }

  render() {
    const { props } = this.args();
    const { type, children, ...other } = props;
    const childrenArray = React.Children.toArray(children).map(this.renderChildren);
    return React.createElement(type, other, childrenArray);
  }

}
