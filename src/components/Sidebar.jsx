import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <section className="logo-sidebar-container">
        <Link to="/">
          Logo
          {/* <img className="logo-sidebar" src="#" alt="Seiren Comics Logo" /> */}
        </Link>
      </section>
      <section className="sidebar-menu-container">
        <NavLink
          className="sidebar-links"
          to="/profile"
          activeClassName="selected-link"
        >
          Profile
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/estante"
          activeClassName="selected-link"
        >
          Estante
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/calendario"
          activeClassName="selected-link"
        >
          Calendário
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/categorias"
          activeClassName="selected-link"
        >
          Categorias
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/favoritos"
          activeClassName="selected-link"
        >
          Favoritos
        </NavLink>
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
