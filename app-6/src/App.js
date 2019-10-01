import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import Todo from "./Components/Todo"

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      userInput: ''
    }

    this.addToList = this.addToList.bind(this);
  }

  hanldeUserInputChange(val) {
    this.setState({ userInput: val })
  }

  addToList(){
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    })
  }
  
  render() {
    let list = this.state.list.map((element, index)=> {
      return <Todo key={index} task={element}/>
    })
    return (
      <div className="App">
        <h1> My Todo List </h1>

        <div>
          <input 
          value={this.state.userInput}
          placeholder="enter new task"
          onChange={e => this.hanldeUserInputChange(e.target.value)}
          />
          <button onClick={this.addToList}> Add Item </button>
        
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
