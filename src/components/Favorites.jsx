/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect, useState } from 'react';
// import './Slider.scss';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import SeirenContext from '../context/SeirenContext';

function Favorites() {
  const { apiResponse, isFetching, apiResponseProfile } = useContext(SeirenContext);
  const [favsState, setFavsState] = useState([]);

  useEffect(() => {
    apiResponseProfile.map((e) => setFavsState(e.favorites.map((f) => f.comic_id)));
  }, [apiResponseProfile]);

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

  const renderCards = () => apiResponse
  .filter((elem) => favsState.includes(elem.id))
  .map((tales, index) => (
    <Link
      to={ `/${tales.id}` }
      key={ index }
      style={ {
                padding: '0',
                textTransform: 'none',
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
                  <p className="history-title">{tales.title}</p>
                  <p className="is-favorite">
                    {
                      index % 2 !== 0
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

  const breakPoints = [
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1350, itemsToShow: 6, itemsToScroll: 2 },
  ];

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Favoritos</h2>
      <Carousel
        disableArrowsOnEnd={ false }
        breakPoints={ breakPoints }
        pagination={ false }
        className="tales-container"
        showEmptySlots
      >
            {isFetching ? isLoading() : renderCards()}
      </Carousel>
    </div>
  );
}

export default Favorites;
