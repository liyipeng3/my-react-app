import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndexScreen from "./screens";
import AboutScreen from "./screens/about";

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={IndexScreen}/>
                    <Route path="/about" component={AboutScreen}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
