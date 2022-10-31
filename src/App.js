import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';

import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ () => <Home/> }/>
          <Route path="/inicio" component ={ () => <Home/>  }/>
          <Route  component ={ () => <Error/>  }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
