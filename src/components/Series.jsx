/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './Series.scss';
import { useMediaQuery } from 'react-responsive';

function Series() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [xSeries, setXSeries] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  const isWide = useMediaQuery({ query: '(min-width: 1800px)' });

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

  const handleLeftSeries = () => {
    if (isWide) {
      return xSeries === 0
        ? setXSeries(-78 * (apiResponseState.length - 1))
        : setXSeries(xSeries + 312);
    }
    return xSeries === 0
      ? setXSeries(-86.5 * (apiResponseState.length - 1))
      : setXSeries(xSeries + 346);
  };
  const handleRightSeries = () => {
    if (isWide) {
      return xSeries === -78 * (apiResponseState.length - 1)
        ? setXSeries(0) : setXSeries(xSeries - 312);
    }
    return xSeries === -86.5 * (apiResponseState.length - 1)
      ? setXSeries(0) : setXSeries(xSeries - 346);
  };

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

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Séries</h2>
      <div className="tales-container slider">
        { isFetching
          ? isLoading()
          : apiResponseState.map((tales, id) => (
            <div
              style={ { transform: `translateX(${xSeries}%)`,
                backgroundImage: `url(${tales.strMealThumb})` } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strMeal}</p>
            </div>
          ))}
        <button type="button" id="goLeftSeries" onClick={ handleLeftSeries }>
          {'<'}
        </button>
        <button type="button" id="goRightSeries" onClick={ handleRightSeries }>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Series;
