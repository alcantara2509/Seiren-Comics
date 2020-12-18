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

function Shelf() {
  const { searchInput } = useContext(SeirenContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem('login');
    console.log(store);
    if (store !== null) setRedirect(true);
  }, []);

  const renderShelf = () => (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        <div id="slider-anchor">
          <Slider />
        </div>
        <div id="keep-anchor">
          <KeepReading />
        </div>
        <div id="releases-anchor">
          <Releases />
        </div>
        <div id="series-anchor">
          <Series />
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

  const renderSearch = () => (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <div id="slider-anchor">
          <Search />
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
        !redirect ? <Login /> : searchInput === '' ? renderShelf() : renderSearch()
      }
    </section>
  );
}

export default Shelf;
