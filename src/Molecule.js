import React, { Component } from 'react';
import SmilesDrawer from 'smiles-drawer';

const THEMES = {
  material: {
    C: '#616161',
    O: '#f44336',
    N: '#2196f3',
    F: '#4caf50',
    CL: '#009688',
    BR: '#FF5722',
    I: '#9c27b0',
    P: '#FF9800',
    S: '#ffeb3b',
    B: '#ffc107',
    SI: '#afb42b',
    H: '#00bcd4',
    BACKGROUND: '#fff'
  }
}

export default class Molecule extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
    this.lastInput = this.props.smiles;
  }

  componentDidMount = () => {
    setImmediate(() => this.redraw());
    window.addEventListener("resize", this.redraw);
  }
  
  componentDidUpdate = () => {
    if (this.lastInput !== this.props.smiles) this.redraw();
  }

  redraw = () => {
    let input = this.props.smiles;
    this.lastInput = input;
    let options = {
      width: this.ref.current.parentNode.clientWidth,
      height: this.ref.current.parentNode.clientHeight - 13,
      themes: THEMES,
      compactDrawing: false,
    };

    let smilesDrawer = new SmilesDrawer.Drawer(options);
    
    SmilesDrawer.parse(input, (tree) => {
      smilesDrawer.draw(tree, 'example-canvas', 'material', false);
    }, (error) => {
      if (error) this.props.onInputError(`${error.name} in col. ${error.location.start.column}: ${error.message}`);
    });
  }

  render() {
    return (
      <canvas id="example-canvas" className="Molecule" ref={this.ref}/>
    )
  }
}
