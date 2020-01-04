import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/style.scss';
// import svg from '../assets';




//
// import dupa from './assets/Person.svg';

// import { ReactComponent as assets } from '/assets/Person.svg';

//
// class Image extends React.Component{
//     render(){
//         return(
//             <img className='profile-image' alt='icon' src={image}/>
//         );
//     }
// }





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
                                <li className="navigation-item"><a href="#1">benefits</a></li>
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

class Platform extends Component {

    render() {
        return (
            <section className="platform" id="1">
                <div className="container">
                    <section className="platform-content">
                        <h2 className="platform-content-main-text">The most popular sales platform in country</h2>
                        <section className="platform-icons">
                            <section className="platform-icons-content">
                                    {/*<img src={dupa}/>*/}

                                <div className="jeden">
                                    <p className="platform-icons-numbers">10000+</p>
                                    <p className="platform-icons-text">daily entries</p>
                                </div>
                            </section>
                            <section className="platform-icons-content">
                                    <img src='./assets/Eye.svg'/>
                                <p className="platform-icons-numbers">200000+</p>
                                <p className="platform-icons-text">seen products every day</p>
                            </section>
                            <section className=" platform-icons-content">
                                    <img src='./assets/Catalog.svg'/>
                                <p className="platform-icons-numbers">10000+</p>
                                <p className="platform-icons-text">added posts daily</p>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}


class Main extends Component {
    render() {
        return (
            <main>
                <div className="container">
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


class Pricing extends Component {
    render() {
        return (
            <section className="pricing">
                <div className="container">
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
                                        <li>100MB HDD</li>
                                            <svg src="../assets/Ckechmark-1.svg" alt=""/>
                                        {/*<li><svg src="../assets/Ckechmark-1.svg" alt=""/>1 Subdomain</li>*/}
                                        {/*<li><svg src="../assets/Ckechmark-1.svg" alt=""/>2 E-mails</li>*/}
                                        {/*<li><svg src="../assets/Close.svg" alt=""/>Two years license</li>*/}
                                        {/*<li><svg src="../assets/Close.svg" alt=""/>Full support</li>*/}
                                    </ul>
                                </section>
                                <section className="begin">
                                    <a href="calculator.html">
                                        <button className="button-begin">Begin</button>
                                    </a>
                                </section>
                            </section>
                            <section className="pricing-content-desc">
                                <section className="pricing-content-main-text">
                                    <p className="main-text">Professional</p>
                                    <p className="main-cash-text">$25</p>
                                    <p className="main-limited-text">Limited offer</p>
                                </section>
                                <section className="pricing-content-desc-text">
                                    <ul className="pricing-values">
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">500MB HDD</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">2 Subdomains</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">5 E-mails</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">One year license</li>*/}
                                        {/*<li><img src="assets/Close.svg" alt="">Full support</li>*/}
                                    </ul>
                                </section>
                                <section className="begin">
                                    <a href="calculator.html">
                                        <button className="button-begin">Begin</button>
                                    </a>
                                </section>
                            </section>
                            <section className="pricing-content-desc">
                                <section className="pricing-content-main-text">
                                    <p className="main-text">Premium</p>
                                    <p className="main-cash-text">$60</p>
                                    <p className="main-limited-text">Limited offer</p>
                                </section>
                                <section className="pricing-content-desc-text">
                                    <ul className="pricing-values">
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">2GB HDD</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">5 Subdomains</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">20 E-mails</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">Two years license</li>*/}
                                        {/*<li><img src="assets/Ckechmark-1.svg" alt="">Full support</li>*/}
                                    </ul>
                                </section>
                                <section className="begin">
                                    <a href="calculator.html">
                                        <button className="button-begin">Begin</button>
                                    </a>
                                </section>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}


class Contakt extends Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
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


class App extends Component {
    render() {
        return (
            <>
                <Navigation/>
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