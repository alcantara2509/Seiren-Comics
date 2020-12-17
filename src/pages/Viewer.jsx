import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Viewer.css';

function Viewer() {
  const itemId = useLocation().pathname;
  return (
    <section className="viewer-container">
      <Sidebar />
      <section className="viewer-content">
        <Topbar />
        <h1>{itemId}</h1>
      </section>
    </section>
  );
}

export default Viewer;
