import React, {Component} from "react";
import '../sass/_style.scss';

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
                                    <p>info@bestshop.xyz</p>
                                </div>
                                <div className="contact-number">
                                    <p>123 456 789</p>
                                </div>
                            </section>
                        </section>
                        <form className="contact-form">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name">

                            </input>
                        </form>
                    </section>
                </div>
            </section>
        )
    }
}

export default Contakt;