import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import Home from "./layout/Home";
import Beginner from "./layout/Beginner";
import Intermediate from "./layout/Intermediate";
import Advanced from "./layout/Advanced";

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <section className="container">
        <Switch>
          <Route exact path="/beginner" component={Beginner} />
          <Route exact path="/intermediate" component={Intermediate} />
          <Route exact path="/advanced" component={Advanced} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
