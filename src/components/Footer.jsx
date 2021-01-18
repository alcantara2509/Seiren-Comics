import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <h1>© Seiren Comics</h1>
    <section className="social-links-footer">
      <a rel="noreferrer" href="https://www.instagram.com/" target="_blank">
        <i className="fab fa-instagram social" />
      </a>
      <a rel="noreferrer" href="https://www.twitter.com/" target="_blank">
        <i className="fab fa-twitter social" id="twitter" />
      </a>
      <a rel="noreferrer" href="https://www.facebook.com/" target="_blank">
        <i className="fab fa-facebook-f social" />
      </a>
    </section>
  </div>
);

export default Footer;
