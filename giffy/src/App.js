import './App.css';
import React from 'react';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { Link, Route } from 'wouter';
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext';

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'mikel',
      elMejor: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            App Home
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home}></Route>
            <Route path="/search/:keyword" component={SearchResults}></Route>
            <Route path="/gif/:id" component={Detail}></Route>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
