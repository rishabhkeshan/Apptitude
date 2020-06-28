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
import FormInput from './FormInput';


function App() {
  return (
    <div style={{margin:"0", padding:"0" }}>
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
            <p>10-11 July, 2020</p>
            <br />
            <h2>Coming soon on</h2>
            <span>
              <img
                className="imgaa"
                src={PlayStore}
                alt="Play Store link"
              ></img>
              <span> </span>
              <img className="imgaa" src={AppStore} alt="App store link"></img>
            </span>
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
              <p
                style={{
                  marginBottom: "0",
                  paddingBottom: "0",
                  lineHeight: "90%",
                }}
              >
                Get notified
              </p>
              <p style={{ marginTop: "0", paddingBottom: "0" }}>
                when we launch
              </p>
            </h2>
            <FormInput sub="subm" emai="ema" />
          </div>
        </div>
        <Footer />
      </div>

      <div className="mobile-container-small">
        <NavigationBar />
        <div className="contents">
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
            Event Date :
            <span style={{ fontWeight: 300 }}> 10-11 July 2020</span>
          </h2>
          <br />
          <FormInput sub="sub" emai="emai" />
          <br />
          <h1 className="desc">Coming soon on</h1>
          <span>
            <img className="imga" src={PlayStore} alt="Play Store link"></img>
            <span> </span>
            <img className="imga" src={AppStore} alt="App store link"></img>
          </span>
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
              maxWidth: "84vw",
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
            Event Date :<span className="des"> 10-11 July 2020</span>
          </h2>
          <br />
          <FormInput sub="sub" emai="emai" />
          <br />
          <h1 className="desc">Coming soon on</h1>
          <span>
            <img className="imga" src={PlayStore} alt="Play Store link"></img>
            <span> </span>
            <img className="imga" src={AppStore} alt="App store link"></img>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
   
}

export default App;


