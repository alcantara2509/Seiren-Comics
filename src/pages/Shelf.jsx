import React from 'react';
import Banner from '../images/shelf-banner.png';
import { Anchor, Footer, Sidebar, Slider, Topbar } from '../components';
import './Shelf.css';

function Shelf() {
  const renderShelf = () => (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <div style={ { width: '100%' } }>
          <img src={ Banner } alt="banner" id="shelf-banner" />
        </div>
        <Anchor />
        <div id="slider-anchor">
          <Slider name="Destaques" number={0} />
          <div id="keep-anchor">
            <Slider name="Continue Lendo" number={2} />
          </div>
          <div id="releases-anchor">
            <Slider name="Próximos Lançamentos" number={1} />
          </div>
          <div id="series-anchor">
            <Slider name="Séries" number={0} />
          </div>
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

export default Shelf;
