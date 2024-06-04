const express = require('express'); 
const app = express();
const mainRouter = require('./routes/index'); 
const port = 3000;
const cors = require('cors');  

app.use('/api/v1',mainRouter);
app.listen(port); 
app.use(cors()); 