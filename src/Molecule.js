import React, { Component } from 'react';
import SmilesDrawer from 'smiles-drawer';

export default class Molecule extends Component {
  render() {
    let input = this.props.smiles;
    let options = {};
    
    let smilesDrawer = new SmilesDrawer.Drawer(options);
    
    SmilesDrawer.parse(input, (tree) => {
      setImmediate(() => smilesDrawer.draw(tree, 'example-canvas', 'light', false));
    });

    return (
      <canvas id="example-canvas" className="molecule" width="500" height="500"/>
    )
  }
}
