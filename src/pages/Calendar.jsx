import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="calendar-container-inner">
          <div className="calendar-banner">
            <div></div>
          </div>
          <div className="months-container">
            <Link to="/search">
              <div className="calendar-month">
                {/* <h1 className="months-h1">Jan 2021</h1> */}
              </div>
            </Link>
            <Link to="/search">
              <div className="calendar-month">
                {/* <h1 className="months-h1">Jan 2021</h1> */}
              </div>
            </Link>
            <Link to="/search">
              <div className="calendar-month">
                {/* <h1 className="months-h1">Jan 2021</h1> */}
              </div>
            </Link>
            <Link to="/search">
              <div className="calendar-month">
                {/* <h1 className="months-h1">Jan 2021</h1> */}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );

  useEffect(() => {
    const store = sessionStorage.getItem('login');
    if (store !== null) setRedirect(true);
  }, []);

  return (
    renderCalendar()
  );
}

export default Calendar;
