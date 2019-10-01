import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sports: ['Soccer', 'Football', 'Basketball', 'Hockey','Golf'],
      filterStr: ''
    }
  }

  handleChange(filter) {
    this.setState({ filterStr: filter })
  }
  
  render() {
    let sportsToDisplay = this.state.sports
    .filter((element) => {
      return element.includes(this.state.filterStr);
    })
    .map((element, index) => {
        return <h2 key={index}> {element} </h2>
    });
    return <div className="App"> 
              <input onChange={e => this.handleChange(e.target.value)} type="text" />
          {sportsToDisplay}
          </div>
  }
}

export default App;
