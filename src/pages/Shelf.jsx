/* eslint-disable no-magic-numbers */
import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import Anchor from '../components/Anchor';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../images/shelf-banner.png';
import './Shelf.css';
import Slider from '../components/Slider';

function Shelf() {
  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        <Slider />
      </section>
    </section>
  );
}

export default Shelf;
