import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Kennel from "./Kennel";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Kennel />, document.querySelector("#root"));
