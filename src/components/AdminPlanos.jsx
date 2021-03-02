import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminHeader } from '.';
import SeirenContext from '../context/SeirenContext';

function Admin() {
  const { apiResponsePlans, isFetchingPlans } = useContext(SeirenContext);
  console.log(apiResponsePlans, isFetchingPlans);
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