/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SeirenContext from '../context/SeirenContext';
import './Viewer.css';

function Viewer() {
  const itemId = useLocation().pathname.slice(1);
  const { apiResponse, isFetching } = useContext(SeirenContext);
  const [newComment, setNewComment] = useState('');
  const [oldComment, setOldComment] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  console.log(apiResponse);

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

  useEffect(() => {
    apiResponse.filter((e) => e.id === +(itemId))
      .map((taleC) => setOldComment([taleC.comments]));
    // tirar do array quando for atualizado backend
  }, [isFetching]);

  const handleSetComment = () => {
    if (newComment !== '') {
      let newArrComents = oldComment;
      newArrComents = [...newArrComents, newComment];
      setOldComment(newArrComents);
    }
  };

  const renderComments = () => oldComment.map((taleC, idC) => {
    console.log(taleC.comments);
    return (
      <div key={ idC }>
        <p>{taleC}</p>
      </div>
    );
  }).reverse();

  const pages = [
    { page: 'https://br.web.img3.acsta.net/medias/nmedia/18/79/96/51/19694367.jpg' },
    { page: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif ' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderHistory = () => (
    apiResponse.filter((e) => e.id === +(itemId)).map((tale, id) => (
      <div className="history-viewer-container" key={ id }>
        <Slider { ...settings } id="slider-viwer" key={ id }>
          {
            pages.map((g, t) => (
              <div key={ t }>
                <div
                  className="history-page"
                  style={ { backgroundImage: `url(${g.page})` } }
                >
                  <h1>{tale.title}</h1>
                </div>
              </div>))
          }
        </Slider>
        <div className="tales-comments-container">
          <h2>Comente esta história</h2>
          <textarea
            name="tale-comments"
            id="tale-comments"
            cols="30"
            rows="10"
            placeholder="Dígite seu comentário"
            onChange={ ({ target: { value } }) => setNewComment(value) }
          />
          <button type="button" onClick={ handleSetComment }>Comentar</button>
          <div>
            {
              renderComments()
            }
          </div>
        </div>
      </div>
    ))
  );

  return (
    <section className="viewer-container">
      <Sidebar />
      <section className="viewer-content">
        <Topbar />
        {
          isFetching ? isLoading() : renderHistory()
        }
      </section>
    </section>
  );
}

export default Viewer;
