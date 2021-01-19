/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect, useState } from 'react';
import './Slider.scss';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import SeirenContext from '../context/SeirenContext';

function Slider(name, number) {
  const { apiResponse, isFetching } = useContext(SeirenContext);
  const novidades = apiResponse[name.number];

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
    { width: 1,
      itemsToShow: 1,
      itemsToScroll: 1,
      showArrows: false,
      autoTabIndexVisibleItems: false },
    { width: 340,
      itemsToShow: 2,
      itemsToScroll: 1,
      showArrows: false,
      autoTabIndexVisibleItems: false },
    { width: 515, itemsToShow: 3, itemsToScroll: 2, showArrows: false },
    { width: 720, itemsToShow: 4, itemsToScroll: 2 },
    { width: 920, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1350, itemsToShow: 6, itemsToScroll: 2 },
  ];

  const renderCards = () => (
  <Carousel
    disableArrowsOnEnd={ false }
    breakPoints={ breakPoints }
    pagination={ false }
    className="tales-container"
    showEmptySlots
  >
  {
    novidades !== undefined ? novidades.map((tales, index) => (
      <Link
        to={ `/comics/${tales.id}` }
        key={ index }
        style={ {
                  padding: '0',
                  textTransform: 'none',
                  backgroundImage: `url(${tales.capa})`,
      } }
        className="tales-card"
      >
        <div style={ { height: '100%', width: '100%' } }>
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
                <p className="chapter-title">{tales.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))
    : null
  }
  </Carousel>
  );

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">{name.name}</h2>
      {isFetching ? isLoading() : renderCards()}
    </div>
  );
}

export default Slider;
