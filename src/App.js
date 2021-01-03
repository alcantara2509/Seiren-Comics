import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import SeirenProvider from './context/SeirenProvider';
import { Calendar, Categories, Profile, Shelf, Viewer } from './pages';

function App() {
  return (
    <SeirenProvider>
      <Switch>
        <Route exact path="/" component={ Shelf } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/favoritos" component={ Profile } />
        <Route exact path="/estante" component={ Shelf } />
        <Route exact path="/calendario" component={ Calendar } />
        <Route exact path="/categorias" component={ Categories } />
        <Route exact path="/:id" component={ Viewer } />
      </Switch>
    </SeirenProvider>
  );
}

export default App;
