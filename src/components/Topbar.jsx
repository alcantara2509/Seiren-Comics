import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SeirenContext from '../context/SeirenContext';
import './Topbar.css';
import Logo from '../images/logo.png';

function Topbar() {
  const { setSearchInput,
    menuMobileState, setMenuMobileState } = useContext(SeirenContext);
  const [currSearch, setCurrSearch] = useState('');
  const [rotate, setRotate] = useState('');

  const handleClickMenuMobile = () => {
    if (menuMobileState === 'activated') {
      setMenuMobileState('disabled');
      setRotate('rotate-false');
    } else {
      setMenuMobileState('activated');
      setRotate('rotate-true');
    }
  };

  return (
    <section className="topbar-container">
      <button
        type="button"
        className="topbar-btn set-icons menu-mobile"
        onClick={ handleClickMenuMobile }

      >
        <i className="fas fa-bars top-icons" id={ rotate } />
      </button>
      <Link to="/" className="link-logo-mobile">
        <img className="logo-sidebar logo-mobile" src={ Logo } alt="Seiren Comics Logo" />
      </Link>
      <div className="search-div">
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={ currSearch }
          onChange={ ({ target: { value } }) => setCurrSearch(value) }
        />
        <Link to="/search" className="topbar-btn">
          <button
            type="button"
            className="topbar-btn"
            id="search-btn"
            onClick={ () => {
              setSearchInput(currSearch);
            } }
          >
            <i className="fas fa-search top-icons" id="search-icon" />
          </button>
        </Link>
      </div>
      <div className="notify-conteiner">
        <button type="button" className="topbar-btn set-icons">
          <i className="far fa-bell top-icons" />
        </button>
        <Link to="/profile" id="btn-setting">
          <button type="button" className="topbar-btn set-icons">
            <i className="fas fa-cog top-icons" />
          </button>
        </Link>
      </div>
    </section>
  );
}
export default Topbar;
