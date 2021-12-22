import React, { Component } from "react";
import BtnGroup from "./BtnGroup";

export default class ListItem extends Component {
  state = {
    important: false
  };

  handleImportantClick = (name) => {
    this.setState({
      important: !this.state.important
    });
  };

  render() {
    const { name, id } = this.props;
    const { important } = this.state;
    // let classItems = "list";
    // if (important) {
    //   classItems += " important ";
    // }
    console.log(this.props);
    return (
      <ul className="list-parent">
        <li className={`list ${important ? "important" : ""}`}>
          {name}
          <BtnGroup
            handleImportantClick={() => this.handleImportantClick(name)}
            delListItem={() => this.props.delListItem(id)}
          />
        </li>
      </ul>
    );
  }
}
