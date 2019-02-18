import React from "react";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Page 1</p>
      </header>
      <button className="disabled" onClick={() => onRouteChange("page1")}>Page1</button>
      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
    </div>
  );
};
export default Page1;
