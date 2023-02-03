/** @format */

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="NewFooter">
        <div>
          <p className="head">Contact</p>
          <ul>
            <li>Expert Technologies LLC</li>
            <li>1205 BMC Drive Suite 1803-E, Cedar Park, TX 78613.</li>
            <li>+1 (646) 727 9169</li>
            <li>sales@expert-works.com</li>
            <li>
            <div style={{display : 'flex' , gap : '10px' , marginTop  : '20px'}}>

            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
            </div> 
            </li>
          </ul>
        </div>
        <div>
          <p className="head">Quick Links</p>
          <ul>
            <li>Frequently asked questions </li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="head">More</p>
          <ul>
            <li>About us </li>
            <li>Login</li>
          </ul>
          </div>

      </div>

    </>
  );
};

export default Footer;