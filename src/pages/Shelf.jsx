import React from 'react';
import Anchor from '../components/Anchor';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../images/shelf-banner.png';
import './Shelf.css';

function Shelf() {
  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        <h1>Destaques</h1>
      </section>
    </section>
  );
}

export default Shelf;
