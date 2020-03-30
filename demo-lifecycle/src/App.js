import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }
  componentDidUpdate() {
    console.log('App update');
  }
  removeCounter() {
    this.setState({
      showCounter: false
    });
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <button onClick={() => this.removeCounter()}>Remove counter</button>
        <div className="App">
          { this.state.showCounter && <Counter /> }
        </div></div>

    );
  }
}

export default App;
