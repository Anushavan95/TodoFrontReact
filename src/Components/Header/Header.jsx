import React from "react";
import Logo from "../../Images/react-logo.png";
export default function Header() {
  return (
    <div className="header">
      <h1>React Title</h1>
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  );
}
