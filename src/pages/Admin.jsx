import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminHeader } from '../components';
import SeirenContext from '../context/SeirenContext';
import './Admin.css'

function Admin() {
  // const { apiResponse } = useContext(SeirenContext);
  
  // const totalComics = async() => {
  //   // const apitotal = await apiResponse
  //   return 0;
  // }

  return (
    <section className="admin-container">
      <AdminHeader />
      <section className="dash-infos">
        <Link to='/admin/comics' 
          className="dash-users-container" style={{color: '#222643'}}
        >
            <h1>Comics</h1>
            <h2>417</h2>
        </Link>
        <Link to='/admin/users' 
          className="dash-users-container" style={{color: '#222643'}}
        >
            <h1>Usuários</h1>
            <h2>1496</h2>
        </Link>
      </section>
    </section>
  )
}

export default Admin;