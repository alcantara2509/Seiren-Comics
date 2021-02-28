import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminHeader } from '.';
import SeirenContext from '../context/SeirenContext';

function AdminComics() {
  const { apiResponse, isFetching } = useContext(SeirenContext);
  const [search, setSearch] = useState();
  const allComics = apiResponse[3];

  // console.log(allComics);
  
  const isLoading = () => (
    <div className="loading-container" style={{color: 'black'}}>
      <div className="lds-spinner" style={{color: 'black'}}>
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
  
  const comicsList = () => (
    <table className="table-comics-list">
      <tr>
        <td className="table-header">Id</td>
        <td className="table-comics-title table-header">Título</td>
        <td className="table-header">Editar</td>
        <td className="table-header">Excluir</td>
      </tr>
      {
        allComics ? allComics.filter((e) => {
          if (search && e) return e.title.toLowerCase().includes(search.toLowerCase())
          return e
        })
          .map((e, i) => 
            <tr key={i}>
              <td className="table-itens">{e.id}</td>
              <td className="table-comics-title table-itens">{e.title}</td>
              <td className="table-itens"><i class="fas fa-edit"></i></td>
              <td className="table-itens"><i class="fas fa-times"></i></td>
            </tr>         
        )
        : null
      }
    </table>
  );

  return (
    <section className="admin-container">
      <AdminHeader />
      <section className="admin-commands">
        <Link to="/admin" className="dashboard">
          <i class="fas fa-arrow-left icon-margin"></i> Ir para o Dashboard
        </Link>
        <Link to="/admin" className="dashboard">
          <i class="fas fa-plus icon-margin"></i> 
          Criar novo Quadrinho
        </Link>
      </section>
      <section className="admin-comics-container">
        <section className="search-container">
          <input 
            type="text" 
            onChange={({target}) => setSearch(target.value)}
            class="fa search-comics"
            placeholder="&#xf002;"
          />
        </section>
        {isFetching ? isLoading() : comicsList()}
      </section>
    </section>
  )
}

export default AdminComics;