import React from 'react';
import { Link } from 'react-router-dom';

console.log('not found')
const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Página inicial
    </Link>
  </div>
);

export default NotFound;