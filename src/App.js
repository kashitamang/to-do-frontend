import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

//assets
import githubLogo from '../src/GitHub_Logo_White.png';
import '../src/styles/App.css';

//components
import Tasks from './Components/Tasks';
import Auth from './Components/Auth';

//functions
import { getUser } from './services/fetch-utils';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    //create async function to fetchData
    const fetchData = async () => {
      const user = await getUser();
      setCurrentUser(user);
    };
    //call the function and set it to user
    fetchData();
    //set currentUser to user variable
  }, []);

  //set state
  return (
    <Router>
      <main className="main">
        <header className="header">
          <nav className="navigation">
            <Link to="/">Login</Link>
            <Link to="/tasks">Tasks</Link>
            <button>Logout</button>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/tasks">
            {!currentUser ? <Redirect to="/" /> : <Tasks />}
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
