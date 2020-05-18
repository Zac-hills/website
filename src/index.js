import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Page from "./components/Page/Page";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LeadLag from "./components/Projects/LeadLag";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpatialEval from "./components/Projects/SpatialEval";
ReactDOM.render(
  <Fragment>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route path="/Projects/LeadLag" component={() => <LeadLag />} />
          <Route path="/Projects/SpatialEval" component={SpatialEval}/>
        </Switch>
      </ScrollToTop>
    </Router>
  </Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
