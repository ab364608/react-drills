import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sports: ['Soccer', 'Football', 'Basketball', 'Hockey','Golf'],
    }
  }

  render() {
    let sportsToDisplay = this.state.sports.map((element, index)=> {
          return <h2 key={index}> {element} </h2>
    });

    return <div className='App'> {sportsToDisplay} </div>
  }
}

export default App;
