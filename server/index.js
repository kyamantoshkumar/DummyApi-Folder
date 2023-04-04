const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    {id : 1, email: 'user1@example.com', password: '$2b$10$G8.cwWnxs1lByfPNmbF9OegzjkKVyaLRh1Z/F5p5A4Eij8dfw.r.i' },
    {id : 2, email: 'user2@example.com', password : '$2b$10$G8.cwWnxs1lByfPNmbF9OegzjkKVyaLRh1Z/F5p5A4Eij8dfw.r.i'}
  ];

const secret = 'mysecretkey';

function generateToken (user) {
    const payload = {
        email: user.email,
        id: user.id
    };
    return jwt.sign(payload, secret, { expiresIn: '1h'});
}

app.post('/api/login', async (req, res) => {
   const {email, password} = req.body;
   const user = users.find(user => user.email === email);
   if (!user) {
    return res.status(404).json({message: 'User not found'});
   } 
  const isValidPassword = await bcrypt.compare(password, user.password);
  if(!isValidPassword) {
    return res.status(401).json({message: 'Invalid password'});
  }
  const token = generateToken(user);
  return res.status(200).json({token});
});

app.listeners(5000, () => {
    console.log('Server is Running on Port 5000');
})