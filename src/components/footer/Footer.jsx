import React from "react";
import instagram from "./socials/instagram.svg"
import facebook from "./socials/facebook.svg"
import whatsapp from "./socials/whatsapp.svg"
import navlogo from './navlogo.svg';

const Footer = ({}) => {
  return (
    <footer className="Footer">
      <div className="footer-left">
        <img src={navlogo} alt="" className="footer-left-logo" />
      </div>
      <div className="footer-center">
        <h5 className="footer-center-address">Address</h5>
        <p className="footer-center-addressDetails">Svobody str.35 <br/> Kyiv <br/> Ukraine</p>
      </div>
      <div className="footer-left">
        <p className="footer-left-top">Contact us</p>
        <div className="footer-left-bottom">
          <img src={instagram} alt="" className="instagram" />
          <img src={facebook} alt="" className="facebook" />
          <img src={whatsapp} alt="" className="whatsapp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
