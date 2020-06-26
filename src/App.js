import React from 'react';

import Countdown from './Countdown';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  NavigationBar
} from './Navbar';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div class="contained">
      <NavigationBar />
      <div class="flex-container">
        <div class="column-left">
          <h1 style={{ fontSize: "6em" }}>
            <span style={{ color: "#7289D9" }}>App</span>titude
            <hr style={{ backgroundColor: "white" }} />
          </h1>
          <p style={{ fontSize: "1.2em" }}>
            Running out of ideas, this endless quarantine? Well worry not
            student app devs, ACM-VIT has got your back. Sit back and get
            thinking as our team takes on the wheel and throws you features that
            now you have to integrate into one functional unit. Bring your plus
            one or go solo and test your creative boundaries to give birth to an
            innovation within 24 hours.
          </p>
          <br />
          <h4>Event Date</h4>
          <p>10-11 July, 2020</p>
          <br />
          <h1>Coming soon on</h1>
          <span>
            <img src="PlayStore.png"></img>

            <img src="AppStore.png"></img>
          </span>
        </div>
        <div class="column-right">
          <Countdown />
          <br />
          <h2>
            Get notified
            <br />
            when we launch
          </h2>
        </div>
      </div>
      <p style={{ color: "white", textAlign: "center" }}>
        <a href="https://www.instagram.com/acmvit/" style={{ color: "white" }}>
          <FaInstagram />
          <span> </span>
        </a>
        <a href="https://www.facebook.com/ACM.VITU" style={{ color: "white" }}>
          <FaFacebook />
          <span> </span>
        </a>
        <a
          href="https://www.linkedin.com/company/acm-vit-chapter/"
          style={{ color: "white" }}
        >
          <FaLinkedin />
        </a>
      </p>
      <p style={{ color: "#688290", textAlign: "center" }}>
        An initiative by ACM-VIT
      </p>
    </div>
  );
}

export default App;


