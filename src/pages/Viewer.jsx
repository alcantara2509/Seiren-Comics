import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SeirenContext from '../context/SeirenContext';
import './Viewer.css';

function Viewer() {
  const itemId = useLocation().pathname.slice(1);
  const { apiResponse, isFetching } = useContext(SeirenContext);

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

  const renderHistory = () => (
    apiResponse.filter((e) => e.id === +(itemId)).map((tale, id) => (
      <div className="history-viewer-container" key={ id }>
        <div className="history-viewer-content">
          <button type="button" className="viewer-btn">
            <i className="fas fa-chevron-circle-left" />
          </button>
          <div className="history-page">
            <h1>{tale.title}</h1>
          </div>
          <button type="button" className="viewer-btn">
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
          />
          <button type="button">Comentar</button>
          {
            apiResponse.filter((e) => e.id === +(itemId)).map((taleC, idC) => (
              <div key={ idC }>
                <p>{taleC.comments}</p>
              </div>
            ))
          }
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
