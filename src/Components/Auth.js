import React, { useState } from 'react';
import '../styles/Signup.css';
import '../styles/index.css';

//on form submit get info from the form
//make an api request to /api/v1/users with the info
//if user is logged in redirect /else stay here

import { 
  signUpUser, 
  signInUser, 
  // redirectIfLoggedIn,
} from '../services/fetch-utils.js';

//signup function
export default function Auth({ setCurrentUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  //clears forms
  function clearForms() {
    setSignUpEmail('');
    setSignUpPassword('');
    setSignInEmail('');
    setSignInPassword('');
  }

  //handle signup
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser({ email: signUpEmail, password: signUpPassword });
    setCurrentUser(user);
    clearForms();
  }

  //handle signup
  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser({ email: signInEmail, password: signInPassword });
    setCurrentUser(user);
    clearForms();
  }

  // redirectIfLoggedIn();

  return (
    <div className="auth-forms">

      <h1>Sign Up</h1>
      <form id="sign-up-form" onSubmit={handleSignUp}>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <button className="button is-primary">Create Account</button>
      </form>


      <h1>Sign In</h1>
      <form id="sign-in-form" onSubmit={handleSignIn}>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={signInEmail}
          onChange={(e) => setSignInEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          value={signInPassword}
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <button className="button is-primary">Sign In</button>
      </form>
      
    </div>
  );
}
