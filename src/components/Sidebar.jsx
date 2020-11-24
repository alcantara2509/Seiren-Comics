import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <section className="logo-sidebar-container">
        <Link to="/">
          oi
          <img className="logo-sidebar" src="#" alt="Seiren Comics Logo" />
        </Link>
      </section>
      <section className="sidebar-menu-container">
        <Link
          className="sidebar-links"
          to="/profile"
        >
          Profile
        </Link>
        <Link
          className="sidebar-links"
          to="/estante"
        >
          Estante
        </Link>
        <Link
          className="sidebar-links"
          to="/calendario"
        >
          Calendário
        </Link>
        <Link
          className="sidebar-links"
          to="/categorias"
        >
          Categorias
        </Link>
        <Link
          className="sidebar-links"
          to="/favoritos"
        >
          Favoritos
        </Link>
      </section>
      <section className="social-links">
        <a rel="noreferrer" href="https://www.instagram.com/" target="_blank">Insta</a>
        <a rel="noreferrer" href="https://www.twitter.com/" target="_blank">twitter</a>
        <a rel="noreferrer" href="https://www.facebook.com/" target="_blank">face</a>
      </section>
    </aside>
  );
}

export default Sidebar;
