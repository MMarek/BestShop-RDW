import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/style.scss';


class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <section className="menu">
                        <a href="#" className="menu-logo-text">BestShop</a>
                        <button className="hamburger">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
                        </button>
                        <div className="navigation">
                            <ul className="navigation-list">
                                <li className="navigation-item"><a href="#">why us</a></li>
                                <li className="navigation-item"><a href="#">benefits</a></li>
                                <li className="navigation-item"><a href="#">pricing</a></li>
                                <li className="navigation-item"><a href="#">contact</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </nav>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-content">
                        <h1 className="header-main-text">Sell More!</h1>
                        <p className="header-extra-text">Open shop on our platform and increase your sales</p>
                        <a href="#" className="header-button">
                            <button className="header-button-container"><p>Open your shop</p></button>
                        </a>
                    </div>
                </div>
            </header>
        )
    }



}


class App extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <Header/>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));