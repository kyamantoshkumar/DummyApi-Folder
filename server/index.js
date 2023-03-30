const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();
app.use(cors());
app.use(express.json());

const user = [
    {id : 1, email: 'user1@example.com', password: '$2b$10$G8.cwWnxs1lByfPNmbF9OegzjkKVyaLRh1Z/F5p5A4Eij8dfw.r.i' },
    {id : 2, password : '$2b$10$G8.cwWnxs1lByfPNmbF9OegzjkKVyaLRh1Z/F5p5A4Eij8dfw.r.i'}
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
   const user = users.find(user => )    
})