import React from 'react';
import './App.css';
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook
} from "react-icons/fa";

function Footer() {
  return (
    <div >
      <p style={{ color: "white", textAlign: "center", marginBottom: "0" }}>
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
      <p style={{ color: "#688290", textAlign: "center"}}>
        An initiative by ACM-VIT
      </p>
    </div>
  );
}

export default Footer;


