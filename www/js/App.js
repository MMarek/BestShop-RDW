import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/_style.scss';


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


ReactDOM.render(
    <App/>
    , document.getElementById("app"));