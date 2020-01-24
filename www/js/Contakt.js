import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/_style.scss';
import person from '../assets/Person.svg';
import eye from '../assets/Eye.svg';
import catalog from '../assets/Catalog.svg';
import ckechmark from '../assets/Ckechmark-1.svg';
import close from '../assets/Close.svg';



class Contakt extends Component {
    render() {
        return (
            <section className="contact">
                <div className="container" id="contact">
                    <section className="contact-content">
                        <section className="contact-desc">
                            <h2 className="contact-desc-title">Any questions?</h2>
                            <p className="contact-add-text">Leave your email address or call us!</p>
                            <section className="contact-address">
                                <div className="contact-email">
                                    {/*<img src="assets/Mail%20Icon.svg">*/}
                                    <p>info@bestshop.xyz</p>
                                </div>
                                <div className="contact-number">
                                    {/*<img src="assets/Phone%20Icon.svg">*/}
                                    <p>123 456 789</p>
                                </div>
                            </section>
                        </section>
                        <form className="contact-form">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name">
                                {/*<label htmlFor="email">Email</label>*/}
                                {/*<input type="text" id="email" name="email">*/}
                                {/*    <div className="agreement">*/}
                                {/*        <input type="checkbox" id="agree" name="agree">*/}
                                {/*            <label htmlFor="agree">I hereby give consent for my personal data included*/}
                                {/*                in my application to be*/}
                                {/*                processed for the purposes of the recruitment process under the European*/}
                                {/*                Parliament’s and Council of*/}
                                {/*                the*/}
                                {/*                European Union Regulation on the Protection of Natural Persons as of 27*/}
                                {/*                April 2016, with regard to*/}
                                {/*                the*/}
                                {/*                processing of personal data and on the free movement of such data, and*/}
                                {/*                repealing Directive 95/46/EC*/}
                                {/*                (Data Protection Directive)</label>*/}
                                {/*        </input>*/}
                                {/*    </div>*/}
                                {/*    <button className="contact-form-button">Send</button>*/}
                                {/**/}
                                {/*</input>*/}
                            </input>
                        </form>
                    </section>
                </div>
            </section>
        )
    }
}