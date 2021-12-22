import React from "react";

export default function BtnGroup(props) {
  const { handleImportantClick, delListItem } = props;
  return (
    <div>
      <button onClick={delListItem}>Delete</button>
      <button onClick={handleImportantClick}>Important</button>
    </div>
  );
}
