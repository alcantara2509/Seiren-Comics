import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Categories.css';

function Categories() {
  return (
    <section className="categories-container">
      <Sidebar />
      <section className="categories-content">
        <Topbar />
        <h1>Categories</h1>
      </section>
    </section>
  );
}

export default Categories;
