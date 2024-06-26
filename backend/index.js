const express = require('express'); 
const app = express();
const mainRouter = require('./routes/index'); 
const port = 3000;
const cors = require('cors');  

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/v1',mainRouter);
app.listen(port); 
app.use(cors()); 
