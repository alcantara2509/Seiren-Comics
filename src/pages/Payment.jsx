import React from 'react';
import { Footer, Sidebar, Topbar, CardPlans } from '../components';
import './Shelf.css';

function Payment() {

  const pinkCard = {
    color: 'pink',
    freq: 'Mensal',
    size: 'size2',
    title: 'h1-freq',
    price: '12,00',
    priceId: 'priceId',
    pCard: 'p-card',
    liCard: 'li-card',
    blueTag: 'Valor base mensal sem desconto'
  }
  
  const yellowCard = {
    color: 'yellow',
    freq: 'Semestral',
    size: 'size1',
    title: 'h1-freq-mid',
    price: '10,33',
    priceId: 'priceId-mid',
    pCard: 'p-card-mid',
    liCard: 'li-card-mid',
    blueTag: 'Pagamento único de R$ 62,00'
  }
  const cyanCard = {
    color: 'cyan',
    freq: 'Anual',
    size: 'size2',
    title: 'h1-freq',
    price: '11,00',
    priceId: 'priceId',
    pCard: 'p-card',
    liCard: 'li-card',
    blueTag: 'Pagamento único de R$33,00'
  }

  const renderShelf = () => (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content" style={ {height: "100vh"} }>
        <Topbar />
        <div className="title-plans">
          <h1 className="h1-plans">Planos e Preços</h1>
          <h2 className="h2-plans">
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt
          </h2>
        </div>
        <section className="cards-container">
          <CardPlans infos={pinkCard} />
          <CardPlans infos={yellowCard} />
          <CardPlans infos={cyanCard} />
        </section>
        <Footer />
      </section>
    </section>
  );

  return (
    <section>
      {
        renderShelf()
      }
    </section>
  );
}

export default Payment;

