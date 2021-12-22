import React, { Component } from "react";
import AddList from "./AddList";
import ListItem from "./ListItem";

export default class Main extends Component {
  state = {
    num: 1,
    list: [
      { name: "Watch Tv", id: 0, important: true },
      { name: "Have Lunch", id: 1, important: false },
      { name: "Have Dinner", id: 2, important: true }
    ],

    addClass: false
  };

  delListItem = (index) => {
    const elem = [...this.state.list];
    elem.splice(index, 1);
    this.setState({
      list: elem
    });
  };
  render() {
    return (
      <div className="main">
        {this.props.number}
        <AddList />
        {this.state.list.map((listItem, index) => {
          return (
            <ListItem
              {...listItem}
              delListItem={() => this.delListItem(index)}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
