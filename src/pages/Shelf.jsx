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
        <div className="categories-list">
          <h2 className="shelf-h2">Destaques</h2>
          <h2 className="shelf-h2">Continue Lendo</h2>
          <h2 className="shelf-h2">Próximos Lançamentos</h2>
          <h2 className="shelf-h2">Séries</h2>
        </div>
      </section>
    </section>
  );
}

export default Shelf;
