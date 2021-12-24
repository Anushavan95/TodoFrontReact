import React, { Component } from "react";
import AddList from "./AddList";
import ListItem from "./ListItem";

export default class Main extends Component {
  id = 3;
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

  addTodoListItem = (InputValue) => {
    let lisItem = {
      name: InputValue,
      important: false,
      id: this.id++
    };
    console.log(lisItem, "lisItem");
    // this.setState({
    //   list: newListItem
    // });

    this.setState(({ list }) => {
      const newListItem = [...list, lisItem];
      return {
        list: newListItem
      };
    });
  };
  render() {
    return (
      <div className="main">
        {this.props.number}
        <AddList addTodoListItem={this.addTodoListItem} />
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
