/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect, useState } from 'react';
import Banner from '../images/shelf-banner.png';
import SeirenContext from '../context/SeirenContext';
import { Anchor, Footer, KeepReading,
  Releases, Series, Sidebar, Slider, Topbar } from '../components';
import './Shelf.css';
import Search from '../components/Search';
import Login from './Login';

function Categories() {

  const renderShelf = () => (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <div style={ { width: '100%' } }>
          <img src={ Banner } alt="banner" id="shelf-banner" />
        </div>
        <div id="slider-anchor">
          <Slider name="Séries" number={0}/>
          <Slider name="Contos" number={1}/>
          <Slider name="Paródias" number={2}/>
        </div>
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
        <Footer />
      </section>
    </section>
  );

  return (
    <section>
      {
        renderShelf()
      }
    </section>
  );
}

export default Categories;

