import React, {Component} from "react";
import '../sass/_style.scss';
import ckechmark from '../assets/Ckechmark-1.svg';
import close from '../assets/Close.svg';



class Pricing extends Component {
    render() {
        return (
            <section className="pricing">
                <div className="container" id="pricing">
                    <section className="pricing-content">
                        <h2 className="pricing-text">Pricing</h2>
                        <section className="pricing-content-box">
                            <section className="pricing-content-desc">
                                <section className="pricing-content-main-text">
                                    <p className="main-text">Basic</p>
                                    <p className="main-cash-text">$0</p>
                                </section>
                                <section className="pricing-content-desc-text">
                                    <ul className="pricing-values">
                                        <li><img src={ckechmark}/> 100MB HDD </li>
                                        <li><img src={ckechmark}/> 1 Subdomain </li>
                                        <li><img src={ckechmark}/> 2 E-mails</li>
                                        <li><img src={close}/> Two years license</li>
                                        <li><img src={close}/> Full support</li>
                                    </ul>
                                </section>
                                {/*<section className="begin">*/}
                                {/*    <a href="calculator.html">*/}
                                {/*        <button className="button-begin">Begin</button>*/}
                                {/*    </a>*/}
                                {/*</section>*/}
                            </section>
                            <section className="pricing-content-desc">
                                <section className="pricing-content-main-text">
                                    <p className="main-text">Professional</p>
                                    <p className="main-cash-text">$25</p>
                                    <p className="main-limited-text">Limited offer</p>
                                </section>
                                <section className="pricing-content-desc-text">
                                    <ul className="pricing-values">
                                        <li><img src={ckechmark}/> 500MB HDD </li>
                                        <li><img src={ckechmark}/> 2 Subdomain </li>
                                        <li><img src={ckechmark}/> 5 E-mails</li>
                                        <li><img src={ckechmark}/> Two years license</li>
                                        <li><img src={close}/> Full support</li>
                                    </ul>
                                </section>
                                {/*<section className="begin">*/}
                                {/*    <a href="calculator.html">*/}
                                {/*        <button className="button-begin">Begin</button>*/}
                                {/*    </a>*/}
                                {/*</section>*/}
                            </section>
                            <section className="pricing-content-desc">
                                <section className="pricing-content-main-text">
                                    <p className="main-text">Premium</p>
                                    <p className="main-cash-text">$60</p>
                                    <p className="main-limited-text">Limited offer</p>
                                </section>
                                <section className="pricing-content-desc-text">
                                    <ul className="pricing-values">
                                        <li><img src={ckechmark}/> 2GB HDD </li>
                                        <li><img src={ckechmark}/> 5 Subdomain </li>
                                        <li><img src={ckechmark}/> 20 E-mails</li>
                                        <li><img src={ckechmark}/> Two years license</li>
                                        <li><img src={ckechmark}/> Full support</li>
                                    </ul>
                                </section>
                                {/*<section className="begin">*/}
                                {/*    <a href="calculator.html">*/}
                                {/*        <button className="button-begin">Begin</button>*/}
                                {/*    </a>*/}
                                {/*</section>*/}
                            </section>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}


export default Pricing;