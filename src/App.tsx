import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndexScreen from "./screens";
import AboutScreen from "./screens/about";
import cn from "classnames";

import './App.scss';
import {Header} from "@/components/common/header";
import {Footer} from "@/components/common/footer";
import {useStoreSelector} from "@/store/hooks";
import {selectSkin} from "@/store/common/skin";

function App() {
    const skin = useStoreSelector(selectSkin);

    return (
        <div className={cn("App", `theme-${skin.name}`)}>
            <Header />
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
