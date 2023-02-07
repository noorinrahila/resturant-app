import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (

<div className="app__footer section__padding"id="contact">
 
 <div className="app__footer-links" >
 <div className="app__footer-links_contact">
<h1 className="app__footer-headtext" style={{color:'#000000'}}>Contact Us</h1>
<p className="p__cormorant">24/6 XYZ street,Vepery Road ,Chennai-600003. </p>
<p className="p__cormorant">+91 9876543210 , +44 22654316</p>

   </div>
    <div className="app__footer-links_logo">
<h1 style={{color:'#000000'}}>GRestaurant</h1>
<p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others".</p>
<img src={images.spoon} className="spoon__img" style={{marginTop:15}}/>
   <div className="app__footer-links_icons">
    <FaFacebook/>
    <FaTwitter/>
    <FaInstagram/>
      </div>
   </div>
   <div className="app__footer-links_work">
   <h1 className="app__footer-headtext" style={{color:'#000000'}}>Working Hours</h1>
<p className="p__cormorant">Monday-Friday:10:00 am -10:00 pm</p>

<p className="p__cormorant">Saturday-Sunday:09:00 am - 11:00 pm</p>

   </div>
    </div>
 
  </div>
);

export default Footer;
