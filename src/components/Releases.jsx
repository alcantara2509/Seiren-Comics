/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './Releases.scss';
import Carousel from 'react-elastic-carousel';

function Releases() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    setIsFetching(true);
    const fetchUrl = async () => {
      const apiRequest = await fetch(url);
      const apiResponse = await apiRequest.json();
      setApiResponseState(apiResponse.meals);
      setIsFetching(false);
    };

    fetchUrl();
  }, []);

  const isLoading = () => (
    <div className="loading-container">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );

  const breakPoints = [
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 6, itemsToScroll: 2 },
  ];

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Lançamento</h2>
      {/* <div className="tales-container slider"> */}
      <Carousel
        disableArrowsOnEnd={ false }
        breakPoints={ breakPoints }
      >
        { isFetching
          ? isLoading()
          : apiResponseState.map((tales, id) => (
            <div
              style={ { backgroundImage: `url(${tales.strMealThumb})` } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strMeal}</p>
            </div>
          ))}
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default Releases;
