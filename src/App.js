import React from 'react';
import Header from './components/Header';
import Games from './components/Games';
import Streams from './components/Streams';
import { Route } from 'react-router-dom';
import './App.css';
// import '*bootstrap/dist/css/bootstrap.min.css';
// import '*shards-ui/dist/css/shards.min.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path='/' component={Games} />
      <Route exact path='/top-streams' component={Streams} />
    </div>
  );
}

export default App;
