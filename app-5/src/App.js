import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://placeholder.com/"}/>
      </div>
    );
  }
}

export default App;
