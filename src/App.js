import '../src/styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//assets
import githubLogo from '../src/GitHub_Logo_White.png';

//components
import Tasks from './Components/Tasks';
import Login from './Components/Login';
import Logout from './Components/Logout';
import SignUp from './Components/SignUp';

//functions 


function App() {

  //set state 
  return (
    <Router>
      <main className="main">
        <header className="header">
          <nav className="navigation">
            <Link to="/">Tasks</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Tasks />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>

        <footer>
          <div className="media-links">
            <h4>
              find the dev on
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
