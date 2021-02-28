import React from 'react';
import './CardPlans.css'

function CardPlans(params) {
  const {color, freq, size, title, price, priceId, pCard, liCard, blueTag/*, displayLi*/} = params.infos;
  
  return (
    <section className="plans-container" id={size}>
      <span className="faixa-colorida" id={color}></span>
      <h1 className={title}>{freq}</h1>
      <div className="price">
        <p className="currency">R$</p>
        <h2 className={priceId}>{price}</h2>
      </div>
      <p className={pCard} id="price-tag">por mês</p>
      <p className={pCard} style={{color: '#0282F9'}}>{blueTag}</p>
      <ul className={liCard}>
        <li>Acesso ilimitado</li>
        <li>Sem anúncios</li>
        <li>Todo conteúdo acessível</li>
        <li>Atualizações periódicas</li>
        <li>Desconto exclusivo</li>
        {/* <li style={{display: displayLi}}>Desconto exclusivo</li> */}
        <li>E ainda mais...</li>
      </ul>
      <button className={`assine-btn ${pCard}`} id={color}>
        Assine {freq}
      </button>
    </section>
  )
}

export default CardPlans;