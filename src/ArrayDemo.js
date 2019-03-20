import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class ArrayDemo extends Component {
  render() {
    let arr=[10,20,30,30,20,10,80]
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}


ArrayDemo.defaultProps ={
    name:'Stranger'
}