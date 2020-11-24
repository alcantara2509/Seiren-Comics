import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Calendar, Categories, Favorites, Profile, Shelf } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Shelf } />
      <Route path="/profile" component={ Profile } />
      <Route path="/estante" component={ Shelf } />
      <Route path="/calendario" component={ Calendar } />
      <Route path="/categorias" component={ Categories } />
      <Route path="/favoritos" component={ Favorites } />
    </Switch>
  );
}

export default App;
