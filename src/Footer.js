import React from 'react';
import './App.css';

import instaIcon from './instaIcon.svg';
import LinkedinIcon from './LinkedinIcon.svg';
import FacebookIcon from './FacebookIcon.svg';
function Footer() {
  return (
    <div style={{ marginBottom: "0", paddingBottom: "0", position:'fixed', width:'100%', bottom:'0' }}>
      <p style={{ color: "white", textAlign: "center", marginBottom: "0" }}>
        <a
          href="https://www.instagram.com/acmvit/"
          target="_blank"
          rel = "noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img src={instaIcon} alt="Ig" />
          <span> </span>
        </a>
        <a
          href="https://www.facebook.com/ACM.VITU"
          target="_blank"
          rel = "noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img src={FacebookIcon} alt="Fb"/>
          <span> </span>
        </a>
        <a
          href="https://www.linkedin.com/company/acm-vit-chapter/"
          target="_blank"
          rel = "noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
      </p>
      <p
        style={{
          color: "#688290",
          textAlign: "center",
          paddingBottom: "0",
        }}
      >
        An initiative by ACM-VIT
      </p>
    </div>
  );
}

export default Footer;


