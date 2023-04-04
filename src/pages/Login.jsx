import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/Login.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    alert('Email :'+ email + '  Password: '+ password)
     console.log('Email :'+ email + '  Password: '+ password);
    e.preventDefault();
    axios.post('/api/login', { email, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.href = '/dashboard'; // redirect to dashboard page
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
  <div className='container'> 
    <div className='col-lg-12 col-md-6 col-sm-12 '> 
    <div className='row formD center'>
      <form className="form1" onSubmit={handleSubmit}>
      <div>
        <label className='label1' htmlFor="email">Email:</label>
        <input
           className="shadow"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /> 
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className= "shadow"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn1" type="submit">Login</button>
    </form>
  </div>
    </div>
    </div>
  );
}

export default Login;
