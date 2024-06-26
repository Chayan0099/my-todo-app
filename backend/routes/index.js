const express = require('express'); 
const router = express.Router(); 
const userRouter = require('./user');
const todoRouter = require('./todo'); 
const cors = require('cors');  

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

router.use('/user', userRouter);
router.use('/todo', todoRouter);
router.use(cors()); 


module.exports = router; 