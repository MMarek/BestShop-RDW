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

class App extends Component {
    render() {
        return (
            <>
                <Navigation/>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));