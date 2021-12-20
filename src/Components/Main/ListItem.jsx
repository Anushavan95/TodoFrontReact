import React from "react";
import BtnGroup from "./BtnGroup";

export default function ListItem({ name, important, id }) {
  const styles = {
    color: important ? "red" : "black"
  };
  return (
    <ul className="list-parent">
      <li className="list" key={id} style={styles}>
        {name} <BtnGroup />
      </li>
    </ul>
  );
}
