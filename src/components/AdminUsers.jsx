import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminHeader } from '.';
import SeirenContext from '../context/SeirenContext';
import Popup from 'reactjs-popup';

function Admin() {
  const { apiResponseUser, isFetchingUser } = useContext(SeirenContext);
  const [search, setSearch] = useState();

  console.log(apiResponseUser);
  
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
        <td className="table-comics-title table-header">Nome</td>
        <td className="table-header">Email</td>
        <td className="table-header">Editar</td>
        <td className="table-header">Excluir</td>
      </tr>
      {
        !apiResponseUser || apiResponseUser[0] === "Token is Expired" 
        ? <h1>Token is Expired</h1>
        : apiResponseUser.filter((e) => {
          console.log(e);
          if (search && e.name) return e.name.toLowerCase().includes(search.toLowerCase())
          return e
        })
          .map((e, i) => 
            <tr key={i}>
              <td className="table-itens">{e.id}</td>
              <td className="table-comics-title table-itens">{e.name}</td>
              <td className="table-itens">{e.email}</td>
              <td 
                className="table-itens" style={{cursor: 'pointer'}}>
                  <Popup trigger={<i class="fas fa-edit"></i>} position="center">
                    <section className="admin-pop">
                      <div>{e.id}</div>
                      <div>{e.name}</div>
                    </section>
                  </Popup>
              </td>
              <td className="table-itens"><i class="fas fa-times"></i></td>
            </tr>         
        )
      }
    </table>
  );

  return (
    <section className="admin-container">
      <AdminHeader />
      <Link to="/admin" className="dashboard">
      <i class="fas fa-arrow-left icon-margin"></i> Ir para o Dashboard
      </Link>
      <section className="admin-comics-container">
        <section className="search-container">
          <input 
            type="text" 
            onChange={({target}) => setSearch(target.value)}
            class="fa search-comics"
            placeholder="&#xf002;"
          />
        </section>
        {isFetchingUser ? isLoading() : comicsList()}
      </section>
    </section>
  )
}

export default Admin;