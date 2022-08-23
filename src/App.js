import '../src/styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import githubLogo from '../src/GitHub_Logo_White.png';


import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <main className="main">
        <header className="header">
          <nav className="navigation">
            <Link to="/">Home</Link>
          </nav>
        </header>

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <footer>
          <div className="media-links">
            <h4>
              find me on{' '}
              <a href="https://github.com/kashitamang">
                <img src={githubLogo} alt="black github logo" className="rotate"></img>
              </a>
            </h4>
          </div>
        </footer>
      </main>
    </Router>
  );
}

export default App;
