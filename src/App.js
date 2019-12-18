import React, { Component } from "react";
import HeaderHeader from "./components/HeaderHeader";
import Todos from "./components/Todo";
import InProgres from "./components/InProgres";
import Done from "./components/Done";
// import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    stageOne: [
      { id: uuid.v4(), title: "Do homework", stage: "1" },
      { id: uuid.v4(), title: "Buy milk", stage: "1" },
      { id: uuid.v4(), title: "Make dinner", stage: "1" }
    ],
    stageTwo: [
      { id: uuid.v4(), title: "Wash dishes", stage: "2" },
      { id: uuid.v4(), title: "Play computer game", stage: "2" }
    ],
    stageThree: [
      { id: uuid.v4(), title: "Do exercise", stage: "3" },
      { id: uuid.v4(), title: "Debug code", stage: "3" },
      { id: uuid.v4(), title: "Brush the teeths", stage: "3" }
    ]
  };

  addItem = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      stage: "1"
    };

    this.setState({
      stageOne: [...this.state.stageOne, newTodo]
    });
  };

  oneToTwo = id => {
    let tempItem = this.state.stageOne.find(curr => curr.id === id);
    tempItem.stage = "2";
    //let tempItem = this.state.stageOne.filter(item => item.id === id)[0];

    this.setState({
      stageOne: [...this.state.stageOne.filter(item => item.id !== id)],
      stageTwo: [...this.state.stageTwo, tempItem]
    });
  };

  twoToThree = id => {
    let tempItem = this.state.stageTwo.find(curr => curr.id === id);
    tempItem.stage = "3";
    //let tempItem = this.state.stageTwo.filter(item => item.id === id);

    this.setState({
      stageTwo: [...this.state.stageTwo.filter(item => item.id !== id)],
      stageThree: [...this.state.stageThree, tempItem]
    });
  };

  deleteFromDone = id => {
    this.setState({
      stageThree: [...this.state.stageThree.filter(item => item.id !== id)]
    });
  };

  foo = (id, stage) => {
    switch (stage) {
      case "1":
        this.oneToTwo(id);
        break;
      case "2":
        this.twoToThree(id);
        break;
      case "3":
        this.deleteFromDone(id);
        break;
      default:
        console.log(
          `Stucked in switch case in App.js id: ${id} stage: ${stage}`
        );
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <HeaderHeader />
        <AddTodo addItem={this.addItem} />
        <div className="row">
          <div className="col s4">
            <h4 className="stageTitle">NOT STARTED</h4>
            <hr className="customhr" />

            <Todos todos={this.state.stageOne} foo={this.foo} />
          </div>
          <div className="col s4">
            <h4 className="stageTitle">IN PROGRES</h4>{" "}
            <hr className="customhr" />
            <InProgres todos={this.state.stageTwo} foo={this.foo} />
          </div>
          <div className="col s4">
            <h4 className="stageTitle">FINISHED</h4>
            <hr className="customhr" />
            <Done todos={this.state.stageThree} foo={this.foo} />
          </div>
        </div>
        <hr className="customhr" />
      </div>
    );
  }
}

export default App;
