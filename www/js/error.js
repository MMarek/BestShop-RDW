// import React, {Component} from 'react';
// import HeaderMain from "./Header/HeaderMain";
// import ThreeColumns from "./ThreeColumns/ThreeColumns";
// import FourSteps from "./FourSteps/FourSteps";
// import AboutUs from "./AboutUs/AboutUs";
// import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
// import ContactUs from "./ContactUs/ContactUs";
//
//
// class Home extends Component {
//
//     render() {
//         return (
//             <>
//                 <HeaderMain/>
//                 <ThreeColumns/>
//                 <FourSteps/>
//                 <AboutUs/>
//                 <WhoWeHelp/>
//                 <ContactUs/>
//             </>
//         )
//     }
// }
//
// export default Home;
//
//
//
//
//
//
//
//
//
// import React, {Component} from "react";
// import ReactDOM from "react-dom";
// import '../sass/_style.scss';
// import logo from './logo.svg';
// import {
//     HashRouter,
//     Route,
//     Switch,
// } from 'react-router-dom';
//
//
// // import Footer from "./Footer";
// // import Contakt from "./Contakt";
// // import Pricing from "./Priceing";
// // import Main from "./Main";
// // import Platform from "./Platform";
// // import Header from "./Header";
// // import Navigation from "./Navigation";
// //
// //
// function App() {
//     return (
// <HashRouter>
//     <Switch>
//         <Route exact path='/' component={js}>
// {/*// </Switch>*/}
// {/*// </HashRouter>*/}
// {/*// )*/}
// {/*}*/}
// <Route exact path='/' component={Home}/>
// <Route path='/login' component={Login}/>
// <Route path='/register' component={Register}/>
// <Route path='/logout' component={LogOut}/>
// <Route path='/thingsBack' component={ThingsBack}/>
// {/**/}
// {/**/}
// {/**/}
// {/*class App extends Component {*/}
// {/*    render() {*/}
// {/*        return (*/}
// {/*            <>*/}
// {/*                <Navigation/>*/}
//                 <img src={logo} alt='Logo'/>
//                 {/*<Header/>*/}
//                 {/*<Platform/>*/}
//                 {/*<Main/>*/}
//                 {/*<Pricing/>*/}
//                 {/*<Contakt/>*/}
//                 {/*<Footer/>*/}
//             {/*</>*/}
//         {/*)*/}
//     {/*}*/}
// {/*}*/}
// {/**/}
// {/*export default App;*/}
// {/**/}
// {/*// ReactDOM.render(*/}
// <App/>
// {/*// , document.getElementById("app"));*/}
//
//
//
//
//
//
//             import React, {Component} from "react";
//             import ReactDOM from "react-dom";
//             import './../sass/style.scss'
//             import {
//             HashRouter,
//             Route,
//             Link,
//             Switch,
//         } from 'react-router-dom';
//
//             import Jeden from "./jeden";
//             import Dwa from './dwa';
//             import Trzy from './trzy';
//             import Menu from "./menu";
//             import Help from "./help";
//
//             class App extends Component {
//             render() {
//             return (
//             <HashRouter>
//             <Switch>
//             <Route exact path='/' component={Menu}/>
//             <Route path='/jeden' component={Jeden}/>
//             <Route path='/dwa' component={Dwa}/>
//             <Route path='/trzy' component={Trzy}/>
//             <Route path='/help' component={Help}/>
//             </Switch>
//             </HashRouter>
//             )
//         }
//         }
//
//
//             ReactDOM.render(<App/>, document.getElementById("app"));