import React from 'react';
import './Footer.css'
import logo from '../../../images/Header/header logo.png'

const Footer = () => {
         return (
                  <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} alt="" />
              <h3>Healthy heart, healthy family</h3>
              <p>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>Quick Links</h4>
                <ul>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu"> Career</li>
                  <li className="footer-menu">News</li>
                  <li className="footer-menu">Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>Pages</h4>
                <ul>
                  <li className="footer-menu">Pricing</li>
                  <li className="footer-menu">Testimonials</li>
                  <li className="footer-menu">Cost calculator</li>
                  <li className="footer-menu">Procedures</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Sign up for the newsletter</h3>
                <div className="mt-3">
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <button className="text-center btn btn-light text-dark fw-bold ms-2">Submit</button>
                </div>
                <h6 className="mt-4">*Please Note : We do not spam your mail.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         );
};

export default Footer;