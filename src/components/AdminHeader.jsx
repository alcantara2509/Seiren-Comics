import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/Admin.css'

function Admin() {
  return (
    <section className="admin-header-container">
      <NavLink 
        to='/admin/comics' 
        className="comics-btn"
        activeClassName="selected-link-admin"
      >
        comics
      </NavLink>
      <NavLink 
        to='/admin/users' 
        className="users-btn"
        activeClassName="selected-link-admin"
      >
        users
      </NavLink>

      <NavLink 
        to='/admin/planos' 
        className="planos-btn"
        activeClassName="selected-link-admin"
      >
        Planos
      </NavLink>

    </section>
  )
}


export default Admin;