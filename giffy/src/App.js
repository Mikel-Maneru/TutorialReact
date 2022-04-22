import './App.css';
import React from 'react';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          App Home
        </Link>

        <Route path="/" component={Home}></Route>
        <Route path="/search/:keyword" component={SearchResults}></Route>
        <Route path="/gif/:id" component={Detail}></Route>

      </section>
    </div>
  );
}

export default App;
