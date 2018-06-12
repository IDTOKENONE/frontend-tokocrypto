import React from 'react';
import './style.css'

class List extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log("->", this.props.data);
  }

  render () {
    console.log("render","<--");
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">TokoCrypto</h1>
        </header>
        <p className="App-intro">
          Top 100 Cryptocurrencies by Market Capitalization.
        </p>
      </div>
    )
  }
}

export default List
