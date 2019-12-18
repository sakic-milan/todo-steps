import React, { Component } from "react";
import Item from "./Item";

export default class InProgres extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Item key={todo.id} todo={todo} foo={this.props.foo} />
    ));
  }
}
