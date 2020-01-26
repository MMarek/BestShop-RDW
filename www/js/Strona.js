import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../sass/_style.scss';
// import {
//     HashRouter,
//     Route,
//     Switch
// } from "react-router-dom";

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
            <>
                <Navigation/>
                <Header/>
                <Platform/>
                <Main/>
                <Pricing/>
                <Contakt/>
                <Footer/>

            </>


            // <HashRouter>
            //     <Switch>
            //         <Route path='/' component={Footer}/>
            //         <Route path='/' component={Contakt}/>
            //         <Route path='/' component={Pricing}/>
            //         <Route path='/' component={Main}/>
            //         <Route path='/' component={Platform}/>
            //         <Route path='/' component={Header}/>
            //         <Route path='/' component={Navigation}/>
            //      </Switch>
            //     <Navigation/>
            //     <img src={logo} alt='Logo'/>
            //     <Header/>
            //     <Platform/>
            //     <Main/>
            //     <Pricing/>
            //     <Contakt/>
            //     <Footer/>
            //  </HashRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

// ReactDOM.render(
{/*<App/>*/
}
// , document.getElementById("app"));