import React, { Component } from 'react';
import SmilesDrawer from 'smiles-drawer';

export default class Molecule extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    setImmediate(() => this.redraw());
  }
  
  componentDidUpdate = () => {
    this.redraw();
  }

  redraw = () => {
    let input = this.props.smiles;
    let options = {
      width: this.ref.current.parentNode.clientWidth,
      height: this.ref.current.parentNode.clientHeight
    };

    console.log(options);
    
    let smilesDrawer = new SmilesDrawer.Drawer(options);
    
    SmilesDrawer.parse(input, (tree) => {
      smilesDrawer.draw(tree, 'example-canvas', 'light', false);
    });
  }

  render() {
    return (
      <canvas id="example-canvas" className="Molecule" ref={this.ref}/>
    )
  }
}
