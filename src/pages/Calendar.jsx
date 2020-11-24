import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Calendar.css';

function Calendar() {
  return (
    <section className="calendar-container">
      <Sidebar />
      <section className="calendar-content">
        <Topbar />
        <h1>Calendar</h1>
      </section>
    </section>
  );
}

export default Calendar;
