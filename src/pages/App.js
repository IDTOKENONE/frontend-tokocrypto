import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import List from '../components/List'

class App extends Component {
  componentDidMount () {
  }

  render() {
    return (
      <div className="App">
        <List
          data={"list"}
        />
        {/*<header className="App-header">
          <h1 className="App-title">TokoCrypto</h1>
        </header>
        <p className="App-intro">
          Top 100 Cryptocurrencies by Market Capitalization.
        </p>*/}
      </div>
    );
  }
}

export default App;
