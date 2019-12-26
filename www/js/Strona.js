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

class Platform extends Component {

    render() {
        return (
            <section className="platform">
                <div className="container">
                    <section className="platform-content">
                        <h2 className="platform-content-main-text">The most popular sales platform in country</h2>
                        <section className="platform-icons">
                            <section className="platform-icons-content">
                            {/*    <img src="assets/Person.svg">*/}
                            <div className="jeden">
                                    <p className="platform-icons-numbers">10000+</p>
                                    <p className="platform-icons-text">daily entries</p>
                            </div>
                            </section>
                            <section className="platform-icons-content">
                            {/*    <img src="assets/Eye.svg">*/}
                                    <p className="platform-icons-numbers">200000+</p>
                                    <p className="platform-icons-text">seen products every day</p>
                            </section>
                            <section className=" platform-icons-content">
                            {/*    <img src="assets/Catalog.svg">*/}
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
                                {/*<img src="assets/Macbook.png">*/}
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
                                {/*<img src="assets/iPhone.png">*/}
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
                                    {/*<img src="assets/Trumpet.png">*/}
                                </section>
                            </article>
                        </section>
                    </div>
                </div>
            </main>
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
            </>
        )
    }
}


ReactDOM.render(
    <App/>
    , document.getElementById("app"));