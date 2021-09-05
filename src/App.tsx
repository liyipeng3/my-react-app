import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndexScreen from "./screens";
import AboutScreen from "./screens/about";

import './App.scss';
import {Header} from "@/commpoents/common/header";
import {Footer} from "@/commpoents/common/footer";

function App() {
    return (
        <div className="App">
            <Header onLogin={()=>{}} onLogout={()=>{}} onCreateAccount={()=>{}} />
            <Router>
                <Switch>
                    <Route path="/" exact component={IndexScreen}/>
                    <Route path="/about" component={AboutScreen}/>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
