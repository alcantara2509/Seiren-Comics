/* eslint-disable no-magic-numbers */
import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import Anchor from '../components/Anchor';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../images/shelf-banner.png';
import './Shelf.css';
import Slider from '../components/Slider';
import KeepReading from '../components/KeepReading';
import Releases from '../components/Releases';
import Series from '../components/Series';

function Shelf() {
  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        <Slider />
        <KeepReading />
        <Releases />
        <Series />
        <h3 className="seiren-comunity-h3">Comunidade Seiren</h3>
        <section className="seiren-comunity">
          <section className="publicated-pages">
            <h5 className="seiren-comunity-h5">Páginas Publicadas</h5>
            <h1 className="seiren-comunity-h1">57345</h1>
          </section>
          <section className="online-users">
            <h5 className="seiren-comunity-h5">Usuários Online</h5>
            <h1 className="seiren-comunity-h1">345</h1>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Shelf;
