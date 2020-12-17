/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect, useState } from 'react';
import './Slider.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import SeirenContext from '../context/SeirenContext';

function Slider() {
  const [x, setX] = useState(0);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  const { apiResponse, isFetching } = useContext(SeirenContext);

  const isWide = useMediaQuery({ query: '(min-width: 1800px)' });

  const handleLeft = () => {
    if (isWide) {
      return x === 0 ? setX(-78 * (apiResponse.length - 1)) : setX(x + 156);
    }
    return x === 0 ? setX(-86.5 * (apiResponse.length - 1)) : setX(x + 173);
  };
  const handleRight = () => {
    if (isWide) {
      return x === -78 * (apiResponse.length - 1) ? setX(0) : setX(x - 156);
    }
    return x === -86.5 * (apiResponse.length - 1) ? setX(0) : setX(x - 173);
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

  const renderCards = () => apiResponse.map((tales, id) => (
    <Link
      to={ `/${tales.idMeal}` }
      key={ id }
      style={ {
                padding: '0',
                textTransform: 'none',
                transform: `translateX(${x}%)`,
      backgroundImage: `url(${tales.strMealThumb})`,
    } }
      className="tales-card"
    >
      <div style={ { height: '100%' } }>
            <div className="card-infos-container">
              <div className="card-top">
                <p className="sup-left-p">Lorem Ipsum</p>
                <p className="sup-left-p">
                  <i className="fas fa-clock timer" />
                  <span style={ { textTransform: 'lowercase' } }>1h ago</span>
                </p>
              </div>
              <div className="card-bottom">
                <div className="history-container">
                  <p className="history-title">{`Nome história #${id + 1}`}</p>
                  <p className="is-favorite">
                    {
                      id % 2 !== 0
                        ? <span
                            style={ {
                            fontSize: '14px',
                            color: 'white',
                            textTransform: 'uppercase' } }
                        >
                          novo
                          </span>
                        : <i className="fas fa-heart" />
                    }
                  </p>
                </div>
                <div className="history-container chapter-container">
                  <p className="chapter-title">Nome capítulo</p>
                </div>
              </div>
            </div>
      </div>
    </Link>
  ));

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Destaques</h2>
      <div className="tales-container slider">
        {isFetching ? isLoading() : renderCards()}
        <button type="button" id="goLeft" onClick={ handleLeft }>
          <i className="fas fa-chevron-left" />
        </button>
        <button type="button" id="goRight" onClick={ handleRight }>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
