import React, { Component } from "react";

export default class Item extends Component {
  getButtonText = stageNum => {
    if (stageNum === "1") return "Start";
    else if (stageNum === "2") return "Finish";
    else return "Remove";
  };

  render() {
    const { id, title, stage } = this.props.todo;

    return (
      <div>
        {title}{" "}
        <button onClick={this.props.foo.bind(this, id, stage)}>
          {this.getButtonText(stage)}
        </button>
      </div>
    );
  }
}
