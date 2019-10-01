import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      userText: ''
    }
  }

  handleChange(val) {
    this.setState({ userText: val })
  }

  render() {
    return (
      <div className="App">
       <input onChange={e => this.handleChange(e.target.value)}
       type="text"
       ></input>
       <p>{this.state.userText}</p>
      </div>
    );
  }
}

export default App;
