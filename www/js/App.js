import React, {Component} from "react";

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
                {/*<img src={logo} alt='Logo'/>*/}
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

export default App;

// ReactDOM.render(
    {/*<App/>*/}
    // , document.getElementById("app"));