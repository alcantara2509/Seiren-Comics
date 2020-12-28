/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    // tirar do array quando for atualizado
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
    { page: 'https://exame.com/wp-content/uploads/2018/05/os-simpsons.jpg?quality=70&strip=info' },
  ];

  const renderHistory = () => (
    apiResponse.filter((e) => e.id === +(itemId)).map((tale, id) => (
      <div className="history-viewer-container" key={ id }>
        <div className="history-viewer-content">
          <button
            type="button"
            className="viewer-btn"
            onClick={ () => {
              if (pageIndex !== 0) setPageIndex(pageIndex - 1);
            } }
          >
            <i className="fas fa-chevron-circle-left" />
          </button>
          <div
            className="history-page"
            style={ { backgroundImage: `url(${pages[pageIndex].page})` } }
          >
            <h1>{tale.title}</h1>
          </div>
          <button
            type="button"
            className="viewer-btn"
            onClick={ () => {
              if (pageIndex !== pages.length - 1) setPageIndex(pageIndex + 1);
              console.log(pages.length, pageIndex);
            } }
          >
            <i className="fas fa-chevron-circle-right" />
          </button>
        </div>
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
