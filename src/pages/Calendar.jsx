import React from 'react';
import Sidebar from '../components/Sidebar';
import './Calendar.css';

function Calendar() {
  return (
    <section className="calendar-container">
      <Sidebar />
      <h1>Calendar</h1>
    </section>
  );
}

export default Calendar;
