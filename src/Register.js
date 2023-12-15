
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';  // Importing the CSS file
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Validate input if needed
    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify({ username, password, phone,email}));
    navigate('/login');
  };

  return (
            <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div class="wrapper wrapper--w680">
                    <div class="card card-4">
                        <div class="card-body">
                            <h2 class="title">Registration</h2>
                            <form method="POST">
                                <div class="row row-space">
                                    <div class="col-4">
                                        <div class="input-group">
                                            <label class="label">first name</label>
                                            <input class="input--style-4" type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)} 
                                            name="first_name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-4">
                                        <div class="input-group">
                                            <label class="label">password</label>
                                            <input class="input--style-4" 
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-4">
                                        <div class="input-group">
                                            <label class="label">Email</label>
                                            <input class="input--style-4" 
                                            type="email" name="email"
                                            placeholder="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                <div class="col-4">
                                        <div class="input-group">
                                            <label class="label">Phone Number</label>
                                            <input class="input--style-4" 
                                            type="text"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="p-t-15">
                                    <button class="btn btn--radius-2 btn--blue" onClick={handleRegister}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default Register;