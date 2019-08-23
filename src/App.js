import React from 'react';
import './App.css';
import Molecule from './Molecule';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  
  render = () => (
    <div className="App stretched-to-margins">
      <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
      <div className="flex-grow-1">
        <Molecule smiles={this.state.input}/>
      </div>
    </div>
  );
}

export default App;
