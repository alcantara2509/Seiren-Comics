import React from 'react';
import { Link } from 'react-router-dom';
import { AdminHeader } from '.';

function Admin() {
  return (
    <section className="admin-container">
      <AdminHeader />
      <Link to="/admin" className="dashboard">
      <i class="fas fa-arrow-left icon-margin"></i> Ir para o Dashboard
      </Link>
    </section>
  )
}

export default Admin;