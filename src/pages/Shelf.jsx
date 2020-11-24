import React from 'react';
import Sidebar from '../components/Sidebar';
import './Shelf.css';

function Shelf() {
  return (
    <section className="shelf-container">
      <Sidebar />
      <h1>Shelf</h1>
    </section>
  );
}

export default Shelf;
