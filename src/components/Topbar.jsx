import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
  return (
    <section className="topbar-container">
      <div>
        <input type="text" id="search-input" placeholder="Search..." />
        <button type="button" className="topbar-btn">Search</button>
      </div>
      <div>
        <button type="button" className="topbar-btn">Notify</button>
        <Link to="/profile" id="btn-setting">
          <button type="button" className="topbar-btn">setting</button>
        </Link>
      </div>
    </section>
  );
}
export default Topbar;
