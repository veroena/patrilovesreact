import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: true
    }
    this.changeToBlue = this.changeToBlue.bind(this);
    this.changeToRed = this.changeToRed.bind(this);
  }

  changeToBlue() {
    this.setState({red: false});
  }

  changeToRed() {
    this.setState({red: true});
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn1" onClick={this.changeToRed}>Red</button>
        <button className="btn btn2" onClick={this.changeToBlue}>Blue</button>
        <div className={`square ${this.state.red ? 'red' : 'blue'}`}></div>
      </div>
    );
  }
}

export default App;
