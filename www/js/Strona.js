import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../sass/_style.scss';

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

        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
