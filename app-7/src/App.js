import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import Todo from "./Components/Todo";
import newTask from "./Components/newTask";
import List from "./Components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] })
  }
  
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <newTask add={this.handleAddTask} />
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
