import React, {Component} from "react";
import '../sass/_style.scss';

class Main extends Component {
    render() {
        return (
            <main>
                <div className="container" id="benefits">
                    <div className="main-content">
                        <article className="main-box">
                            <section className="main-box-text">
                                <h2 className="main-box-primary-text">Be always first</h2>
                                <p className="main-box-additional-text">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore
                                    et dolore
                                    magna aliqua. Ut enim ad minim veniam.</p>
                            </section>
                            <section className="main-box-image">
                                <img src={require("../assets/Macbook.png")}/>
                            </section>
                        </article>
                        <article className="main-box">
                            <section className="main-box-text">
                                <h2 className="main-box-primary-text">Your shop is where you are!</h2>
                                <p className="main-box-additional-text">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore
                                    et dolore
                                    magna aliqua. Ut enim ad minim veniam.</p>
                            </section>
                            <section className="main-box-image">
                                <img src={require("../assets/iPhone.png")}/>
                            </section>
                        </article>
                        <section className="main-box-sepparate">
                            <article className="main-box">
                                <section className="main-box-text">
                                    <h2 className="main-box-primary-text">Increase recognition your brand!</h2>
                                    <p className="main-box-additional-text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore
                                        et dolore
                                        magna aliqua. Ut enim ad minim veniam.</p>
                                </section>
                            </article>
                            <article className="main-box">
                                <section className="main-box-image">
                                    <img src={require("../assets/Trumpet.png")}/>
                                </section>
                            </article>
                        </section>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
