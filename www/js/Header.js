import React, {Component} from "react";
import '../sass/_style.scss';

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
                        <img className="header-photo" src={require("../assets/Background.png")}/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;