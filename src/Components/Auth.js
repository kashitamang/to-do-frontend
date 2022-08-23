import React, { useState } from 'react';
import '../styles/Signup.css';
import '../styles/index.css';

//on form submit get info from the form
//make an api request to /api/v1/users with the info
//if user is logged in redirect /else stay here

import { signUpUser } from '../services/fetch-utils.js';

//signup function
export default function Auth({ setCurrentUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  //clears forms
  function clearForms() {
    setSignUpEmail('');
    setSignUpPassword('');
  }

  //handle signup
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser({ email: signUpEmail, password: signUpPassword });
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div className="signup">
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
    </div>
  );
}
