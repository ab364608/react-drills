import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import Login from "./Components/Login"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
