// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';  // Importing the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if credentials match
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Redirect to the dashboard
      navigate('/dashboard');

    } else {
      alert('Invalid credentials. Please try again.');
    }
  };



  return (
        <div class="wrapper">
            <div class="title">
                Login Form
            </div>
            <form action="#">
                <div class="field">
                    <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                    <label>User Name</label>
                </div>
                <div class="field">
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                    <label>Password</label>
                </div>
                <div class="content">
                    <div class="checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <div class="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div class="field">
                    <input type="button" onClick={handleLogin} value="Login" />
                </div>
                <div class="signup-link">
                    Not a member? <a href="/register">Signup now</a>
                </div>
            </form>
        </div>
  );
};

export default Login;
