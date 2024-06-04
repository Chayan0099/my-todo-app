const JWT_SECRET = require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization; 
    if (!header || !header.startsWith('Bearer')){
        return res.status(411).json({
            msg:"Token error"
        })
    } 
    const token = header.split(' ')[1]; 
     
    const decoded = jwt.verify(token, JWT_SECRET);

    if(!decoded){
        return res.status(403).json({
            msg:"verification error"
        })
    } 

    req.userId = decoded.id; 
    
    next(); 
}

module.exports = authMiddleware; 
