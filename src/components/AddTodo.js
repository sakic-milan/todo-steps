import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({
      title: ""
    });
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            placeholder="Add new TODO..."
          />
          <input
            type="submit"
            value="Submit new item to TODO list"
            className="waves-effect waves-light btn"
          />
        </form>
      </div>
    );
  }
}
