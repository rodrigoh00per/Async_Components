import React from "react";
import logo from "../logo.svg";

const Page2 = ({ onRouteChange }) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      Page 2
        </p>
      </header>
      <button onClick={() => onRouteChange("page1")}>Page1</button>
      <button className="disabled" onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
    </div>
  );
};
export default Page2;
