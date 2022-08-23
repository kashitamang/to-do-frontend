import React from 'react';
import '../styles/Signup.css';
import '../styles/index.css';

import { signUpUser } from '../services/fetch-utils.js';

export default function SignUp() {
  return (
    <div className="signup">
      <form id="sign-up-form">
        <input type="email" name="email" className="input" placeholder="Email" />
        <input type="password" name="password" className="input" placeholder="Password" />
        <button className="button is-primary">Create Account</button>
      </form>
    </div>
  );
}
