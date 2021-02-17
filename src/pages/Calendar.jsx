import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SeirenContext from '../context/SeirenContext';
import './Calendar.css';

function Calendar() {

  const dates = ['2-2021', '12-2020 ', '10-2020 ', '10-2020 ', '11-2020 ', '11-2020 ', '1-2021'];

  const duplicates = [...new Set(dates)].sort((a, b) => a - b)

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
         {
          duplicates.map((e, f) => {
            return (
            <div key={f}>
              <h1>{e}</h1>
            </div>
            )
          })
          }       
          </div>
        </div>
      </section>
    </section>
  );

  return (
    renderCalendar()
  );
}

export default Calendar;
