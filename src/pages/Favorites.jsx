import React from 'react';
import Sidebar from '../components/Sidebar';
import './Favorites.css';

function Favorites() {
  return (
    <section className="favorites-container">
      <Sidebar />
      <h1>Favorites</h1>
    </section>
  );
}

export default Favorites;
