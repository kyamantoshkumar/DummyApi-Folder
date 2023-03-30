import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
     e.preventDefault();
     axios.post('./api/login',{email, password});
     .then(res => {
        const token = res.data.token; 
        localStorage.setItem('token', token);
        window.location.href = './dashboard'; 
    })
    .catch(error => {
        console.log(error);
    },[])
 }
  return (
      <div> 
 <form onSubmit={handleSubmit}>
     <div> 
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' value={email} onchange={e => setEmail(e.target.value)} required />
     </div>
     <div> 
        <label htmlFor='password'>Password: </label>
        <input type="password" name="password" value={password} onchange={e => setPassword(e.target.value)} required />
     </div> 
     <button type="submit">Login</button>
   </form>
      </div>
  )
}

export default Login