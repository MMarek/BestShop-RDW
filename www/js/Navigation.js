import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/_style.scss';
import person from '../assets/Person.svg';
import eye from '../assets/Eye.svg';
import catalog from '../assets/Catalog.svg';
import ckechmark from '../assets/Ckechmark-1.svg';
import close from '../assets/Close.svg';


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
                                <li className="navigation-item"><a href="#why">why us</a></li>
                                <li className="navigation-item"><a href="#benefits">benefits</a></li>
                                <li className="navigation-item"><a href="#pricing">pricing</a></li>
                                <li className="navigation-item"><a href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </nav>
        )
    }
}