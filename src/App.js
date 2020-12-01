import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SeirenProvider from './context/SeirenProvider';
import { Calendar, Categories, Favorites, Profile, Shelf } from './pages';

function App() {
  return (
    <SeirenProvider>
      <Switch>
        <Route exact path="/" component={ Shelf } />
        <Route path="/profile" component={ Profile } />
        <Route path="/estante" component={ Shelf } />
        <Route path="/calendario" component={ Calendar } />
        <Route path="/categorias" component={ Categories } />
        <Route path="/favoritos" component={ Favorites } />
      </Switch>
    </SeirenProvider>
  );
}

export default App;
