import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../sass/_style.scss';
import person from '../assets/Person.svg';
import eye from '../assets/Eye.svg';
import catalog from '../assets/Catalog.svg';
import ckechmark from '../assets/Ckechmark-1.svg';
import close from '../assets/Close.svg';



class Platform extends Component {

    render() {
        return (
            <section className="platform" id="why">
                <div className="container">
                    <section className="platform-content">
                        <h2 className="platform-content-main-text">The most popular sales platform in country</h2>
                        <section className="platform-icons">
                            <section className="platform-icons-content">
                                <img src={person}/>
                                <div className="jeden">
                                    <p className="platform-icons-numbers">10000+</p>
                                    <p className="platform-icons-text">daily entries</p>
                                </div>
                            </section>
                            <section className="platform-icons-content">
                                <img src={eye}/>
                                <p className="platform-icons-numbers">200000+</p>
                                <p className="platform-icons-text">seen products every day</p>
                            </section>
                            <section className=" platform-icons-content">
                                <img src={catalog}/>
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
