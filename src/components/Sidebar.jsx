import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../images/logo.png';
import SeirenContext from '../context/SeirenContext';

function Sidebar() {
  const [currHeart] = useState(window.location.pathname);
  const { menuMobileState, setMenuMobileState } = useContext(SeirenContext);

  const handleClickMenuMobile = () => {
    if (menuMobileState === 'activated') {
      setMenuMobileState('disabled');
    } else {
      setMenuMobileState('activated');
    }
  };

  return (
    <aside className="sidebar-container" id={ menuMobileState }>
      <section className="logo-sidebar-container">
        <Link to="/">
          <img className="logo-sidebar" src={ Logo } alt="Seiren Comics Logo" />
        </Link>
      </section>
      <section className="sidebar-menu-container">
        <NavLink
          className="sidebar-links"
          to="/profile"
          activeClassName="selected-link"
          onClick={ handleClickMenuMobile }
        >
          <div className="div-icons">
            <i className="far fa-user side-icons" />
            <p id="pro-p">Profile</p>
          </div>
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/estante"
          activeClassName="selected-link"
          onClick={ handleClickMenuMobile }
        >
          <div className="div-icons">
            <i className="fas fa-bars side-icons" />
            <p id="shelf-p">Estante</p>
          </div>
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/calendario"
          activeClassName="selected-link"
          onClick={ handleClickMenuMobile }
        >
          <div className="div-icons">
            <i className="far fa-calendar-alt side-icons" />
            <p id="cal-p">Calendário</p>
          </div>
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/categorias"
          activeClassName="selected-link"
          onClick={ handleClickMenuMobile }
        >
          <div className="div-icons">
            <i className="fas fa-list-ul side-icons" />
            <p id="cat-p">Categorias</p>
          </div>
        </NavLink>
        <NavLink
          className="sidebar-links"
          to="/favoritos"
          activeClassName="selected-link"
          onClick={ handleClickMenuMobile }
        >
          <div className="div-icons">
            {
              currHeart === '/favoritos'
                ? <i className="fas fa-heart side-icons" />
                : <i className="far fa-heart side-icons" />
            }
            <p id="fav-p">Favoritos</p>
          </div>
        </NavLink>
      </section>
      <section className="social-links">
        <a rel="noreferrer" href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram social" />
        </a>
        <a rel="noreferrer" href="https://www.twitter.com/" target="_blank">
          <i className="fab fa-twitter social" id="twitter" />
        </a>
        <a rel="noreferrer" href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f social" />
        </a>
      </section>
    </aside>
  );
}

export default Sidebar;
