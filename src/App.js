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
    <div class="contained">
      <NavigationBar />
      <div class="flex-container">
        <div class="column-left">
          <h1 style={{ fontSize: "6em", fontWeight:"600" }}>
            <span style={{ color: "#7289D9" }}>App</span>titude
            <hr style={{ backgroundColor: "white" }} />
          </h1>
          <p style={{ fontSize: "1.1em", maxWidth:'600px', fontWeight:'500', lineHeight:'120%' } }>
            Running out of ideas, this endless quarantine? Well worry not
            student app devs, ACM-VIT has got your back. Sit back and get
            thinking as our team takes on the wheel and throws you features that
            now you have to integrate into one functional unit. Bring your plus
            one or go solo and test your creative boundaries to give birth to an
            innovation within 24 hours.
          </p>
          <br />
          <h2 style={{fontWeight:'700'}}><strong>Event Date</strong></h2>
          <p>10-11 July, 2020</p>
          <br />
          <h1>Coming soon on</h1>
          <span>
            <img src={PlayStore} alt="Play Store link"></img>
            <span>  </span>
            <img src={AppStore} alt="App store link"></img>
          </span>
        </div>
        <div class="column-right">
          <Countdown />
          <br />
          <h2 style={{marginTop:'55%', fontWeight:'600'}}>
            Get notified
            <br />
            when we launch
          </h2>
          <FormInput/>
        </div>
       </div>
      <Footer/>
    </div>
  );
}

export default App;


