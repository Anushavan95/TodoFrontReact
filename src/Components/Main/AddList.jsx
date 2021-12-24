import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class AddList extends Component {
  state = {
    name: ""
  };
  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  addNewTodoList = (e) => {
    e.preventDefault();
    if (this.state.name !== "") {
      this.props.addTodoListItem(this.state.name);
    } else {
      alert("empty state");
    }
    this.setState({
      name: ""
    });
  };

  render() {
    console.log(this.state.name, "state");
    return (
      <form onSubmit={this.addNewTodoList}>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          placeholder="AddList"
          onChange={this.handleInputChange}
          value={this.state.name}
        />

        <Button variant="contained" color="success">
          Add List
        </Button>
      </form>
    );
  }
}
