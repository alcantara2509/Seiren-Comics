import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Shelf.css';

function Shelf() {
  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <h1>Shelf</h1>
      </section>
    </section>
  );
}

export default Shelf;
