import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Favorites.css';

function Favorites() {
  return (
    <section className="favorites-container">
      <Sidebar />
      <section className="favorites-content">
        <Topbar />
        <h1>Favorites</h1>
      </section>
    </section>
  );
}

export default Favorites;
