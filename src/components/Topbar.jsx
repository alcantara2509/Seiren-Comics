import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
  return (
    <section className="topbar-container">
      <div>
        <input type="text" />
        <button type="button">Search</button>
      </div>
      <div>
        <button type="button">Notify</button>
        <Link to="/profile">
          <button type="button">setting</button>
        </Link>
      </div>
    </section>
  );
}
export default Topbar;
