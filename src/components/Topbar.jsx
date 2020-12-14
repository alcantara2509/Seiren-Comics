import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
  return (
    <section className="topbar-container">
      <div className="search-div">
        <input type="text" id="search-input" placeholder="Search..." />
        <button type="button" className="topbar-btn">
          <i className="fas fa-search top-icons" id="search-icon" />
        </button>
      </div>
      <div>
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
