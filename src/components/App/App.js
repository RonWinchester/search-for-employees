import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="page__container">
      <NavigationBar></NavigationBar>
      <Switch></Switch>
    </div>
  );
}

export default App;
