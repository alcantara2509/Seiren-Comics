import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SeirenProvider from './context/SeirenProvider';
import { Calendar, Categories, Profile, Shelf } from './pages';
import Login from './pages/Login';

function App() {
  return (
    <SeirenProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
        <Route path="/favoritos" component={ Profile } />
        <Route path="/estante" component={ Shelf } />
        <Route path="/calendario" component={ Calendar } />
        <Route path="/categorias" component={ Categories } />
      </Switch>
    </SeirenProvider>
  );
}

export default App;
