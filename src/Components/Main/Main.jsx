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

  // addCount = () => {
  //   this.setState({
  //     num: this.state.num + 1
  //   });
  // };

  render() {
    return (
      <div className="main">
        <AddList />
        {this.state.list.map((listItem) => {
          return <ListItem {...listItem} />;
        })}
      </div>
    );
  }
}
