/* eslint-disable no-magic-numbers */
import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import Anchor from '../components/Anchor';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../images/shelf-banner.png';
import './Shelf.css';
// import Highligths from '../components/Highligths';
import Slider from '../components/Slider';

function Shelf() {
  // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  // useEffect(() => {
  //   const fetchUrl = async () => {
  //     const apiRequest = await fetch(url);
  //     const apiResponse = await apiRequest.json();
  //     setApiResponseState(apiResponse.meals);
  //     setMax(apiResponse.length);
  //   };

  //   fetchUrl();
  // }, []);

  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        {/* <Highligths api={ apiResponseState } /> */}
        <Slider />
      </section>
    </section>
  );
}

export default Shelf;
