import React from 'react';
import './App.css';
import Molecule from './Molecule';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
      error: undefined
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputError = this.handleInputError.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
      error: undefined
    });
  }

  handleInputError = (message) => {
    this.setState({
      error: message
    });
  }
  
  render = () => (
    <div className="App stretched-to-margins">
      <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
      {this.state.error && <div className="error"><code>{this.state.error}</code></div>}
      <div className="flex-grow-1">
        <Molecule smiles={this.state.input} onInputError={this.handleInputError}/>
      </div>
      <div className="copyright">Based on <a href="http://dx.doi.org/10.1021/acs.jcim.7b00425" target="_blank" rel="noopener noreferrer">Smiles Drawer</a> library</div>
    </div>
  );
}

export default App;
