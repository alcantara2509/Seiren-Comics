import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SeirenProvider from './context/SeirenProvider';
import { Calendar, Categories, Profile, Shelf, Favoritos, Viewer } from './pages';
import Login from './pages/Login';

function App() {
  return (
    <SeirenProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
        <Route path="/favoritos" component={ Favoritos } />
        <Route path="/estante" component={ Shelf } />
        <Route path="/calendario" component={ Calendar } />
        <Route path="/categorias" component={ Categories } />
        <Route path="/:id" component={ Viewer } />
      </Switch>
    </SeirenProvider>
  );
}

export default App;
