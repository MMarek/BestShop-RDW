import React, {Component} from 'react';
import '../sass/_style.scss';
import {
    HashRouter,
    Route,
    Switch
} from "react-router-dom";

import Footer from "./Footer";
import Contakt from "./Contakt";
import Pricing from "./Priceing";
import Main from "./Main";
import Platform from "./Platform";
import Header from "./Header";
import Navigation from "./Navigation";



class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={Footer}/>
                    <Route path='/' component={Contakt}/>
                    <Route path='/' component={Pricing}/>
                    <Route path='/' component={Main}/>
                    <Route path='/' component={Platform}/>
                    <Route path='/' component={Header}/>
                    <Route path='/' component={Navigation}/>
                </Switch>
                {/*<Navigation/>*/}
                {/*<img src={logo} alt='Logo'/>*/}
                {/*<Header/>*/}
                {/*<Platform/>*/}
                {/*<Main/>*/}
                {/*<Pricing/>*/}
                {/*<Contakt/>*/}
                {/*<Footer/>*/}
            </HashRouter>
        )
    }
}

export default App;

// ReactDOM.render(
    {/*<App/>*/}
    // , document.getElementById("app"));