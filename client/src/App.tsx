import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default () => {
  let [apiResponse, setApiResponse] = useState("Attempting to contact API...");

  useEffect(() => {
    fetch("http://localhost:9000/_health")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }, []);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{apiResponse}</p>
    </div>
  );
};
