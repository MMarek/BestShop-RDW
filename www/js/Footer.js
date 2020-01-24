import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/_style.scss';
import person from '../assets/Person.svg';
import eye from '../assets/Eye.svg';
import catalog from '../assets/Catalog.svg';
import ckechmark from '../assets/Ckechmark-1.svg';
import close from '../assets/Close.svg';



class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <section className="footer-content">
                        <section className="footer-text">
                            <h3 className="footer-text-main">BestShop</h3>
                            <p className="footer-text-reserved">&copy; 2019 BestShop LTD All Rights Reserved</p>
                        </section>
                        <section className="footer-img">
                            {/*<img src="assets/Twitter.svg">*/}
                            {/*    <img src="assets/Facebook.svg">*/}
                        </section>
                    </section>
                </div>
            </footer>
        )
    }

}
