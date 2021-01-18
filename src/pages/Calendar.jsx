import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Calendar.css';
import Login from './Login';

function Calendar() {
  const [redirect, setRedirect] = useState(false);

  const renderCalendar = () => (
    <section className="calendar-container">
      <Sidebar />
      <section className="calendar-content">
        <Topbar />
        <h1>Calendar</h1>
      </section>
    </section>
  );

  useEffect(() => {
    const store = sessionStorage.getItem('login');
    if (store !== null) setRedirect(true);
  }, []);

  return (
    redirect ? renderCalendar() : <Login />
  );
}

export default Calendar;
