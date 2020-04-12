import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Page from "./components/Page/Page";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeadLag from "./components/Projects/LeadLag";

ReactDOM.render(
    <Router>
        <Switch>
		    <Route exact path='/Projects/LeadLag' component={LeadLag}/>
            <Route exact path='/' component={Page}/>
            </Switch>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
