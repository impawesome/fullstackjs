import React, { Component } from 'react';
import logo from './logo.svg';

//class HelloWorld extends Component {
//  render() {
//    return (<div>Hello, World! hehe</div>);
//  }
//}

const HelloWorld = ({text}) => {
  return (<div>Hello, {text}! hehe</div>);
};

export default HelloWorld;
//export default () => { return (<div>Hello, World! hehe</div>) }; ;
