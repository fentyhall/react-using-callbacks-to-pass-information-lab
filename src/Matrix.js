import React, { Component } from 'react';
import learnSymbol from './data.js';
import Cell from './Cell.js';
import ColorSelector from './ColorSelector.js';

export default class Matrix extends Component {

  constructor() {
    super()
    // set up state
    this.state = {
      selectedColor: '#FFF'
    }
  }

  // a method to update state
  setSelectedColor = (newColor) => {
    this.setState({ 
      selectedColor: newColor
    })
  }

  // with arrow functions, you can use parentheses to implicitly return a value
  genRow = (vals) => (
    // pass data to Cell
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}