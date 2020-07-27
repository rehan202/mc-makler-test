import React from "react";
import "./App.css";
import HomePage from "./Screens/HomePage";
import SearchPage from "./Screens/SearchPage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/query/:query" component={SearchPage} />
        {/* <Redirect to="/" /> */}
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
