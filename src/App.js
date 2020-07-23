import React from 'react';

import Countdown from './Countdown';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  NavigationBar
} from './Navbar';
import AppStore from "./AppStore.png";
import PlayStore from "./PlayStore.png";
import Footer from './Footer';


function App() {
  return (
    <div className="main" style={{margin:"0", padding:"0" }}>
      <div className="laptop-container">
        <NavigationBar />
        <div className="flex-container">
          <div className="column-left">
            <h1
              className="appName"
              style={{ fontSize: "6em", fontWeight: "600" }}
            >
              <span className="grad" style={{ fontWeight: "700" }}>
                App
              </span>
              titude
              <hr style={{ backgroundColor: "white" }} />
            </h1>
            <p
              style={{
                fontSize: "1em",
                maxWidth: "560px",
                fontWeight: "500",
                lineHeight: "125%",
              }}
            >
              Running out of ideas, this endless quarantine? Well worry not
              student app devs, ACM-VIT has got your back. Sit back and get
              thinking as our team takes on the wheel and throws you features
              that now you have to integrate into one functional unit. Bring
              your plus one or go solo and test your creative boundaries to give
              birth to an innovation within 24 hours.
            </p>
            <br />
            <h2 style={{ fontWeight: "700" }}>
              <strong>Event Date</strong>
            </h2>
            <p>25-26 July, 2020</p>
            <br />
          </div>
          <div className="column-right">
            <Countdown classn="Countdown-col-element" eli="eli" el="el" />
            <br />
            <h2
              style={{
                marginTop: "30%",
                fontWeight: "600",
                fontSize: "2.1em",
              }}
            >
            </h2>
            <span>
            <a style={{marginRight:"10px", float:"left"}} href="https://play.google.com/store/apps/details?id=com.acmvit.apphack" target="_blank" rel="noopener noreferrer">
              <img className="imgaa" src={PlayStore} alt="Play Store link"></img>
            </a>
            <a href="http://tiny.cc/apptitude-ios" target="_blank" rel="noopener noreferrer">
              <img className="imgaa" src={AppStore} alt="App store link"></img>
            </a>
            </span>
          </div>
        </div>
        <Footer />
      </div>

      <div className="mobile-container-large">
        <NavigationBar />
        <div className="contentsh">
          <Countdown classn="Countdown-col-elemen" eli="elii" el="ell" />
          <br />
          <p
            className="description"
            style={{
              fontSize: "1em",
              fontWeight: "500",
              lineHeight: "125%",
              maxWidth: "85vw",
              margin: "0 auto",
            }}
          >
            Running out of ideas, this endless quarantine? Well worry not
            student app devs, ACM-VIT has got your back. Sit back and get
            thinking as our team takes on the wheel and throws you features that
            now you have to integrate into one functional unit. Bring your plus
            one or go solo and test your creative boundaries to give birth to an
            innovation within 24 hours.
          </p>
          <br />
          <h2
            className="des"
            style={{
              fontWeight: "800",
              marginBottom: "0",
            }}
          >
            Event Date :<span style={{ fontWeight: 300 }} > 25-26 July 2020</span>
          </h2>
          <br />
          <br />
          <span>
            <a style={{marginBottom:"10px", marginRight:"10px"}} href="https://play.google.com/store/apps/details?id=com.acmvit.apphack" target="_blank" rel="noopener noreferrer">
              <img className="imga" src={PlayStore} alt="Play Store link"></img>
              </a>
            <a href="http://tiny.cc/apptitude-ios" target="_blank" rel="noopener noreferrer">
              <img className="imga" src={AppStore} alt="App store link"></img>
              </a>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
   
}

export default App;


