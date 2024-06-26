const express = require('express'); 
const router = express.Router(); 
const { User, Todo } = require('../db'); 
const zod = require('zod'); 
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./config');
router.use(express.json());   

router.post('/signup', async (req, res) => { 

    const userSchema = zod.object({ 
        userName: zod.string('user name must be string'),
        email: zod.string('email is not valid'),
        password: zod.string('password is not right')
    });
    const parsed = userSchema.safeParse(req.body); 

    if(!parsed.success) {
        console.log('invalid input')
        return res.status(403).json({
            msg:'Invalid Input'
        }) 
    }

    const existingUser = await User.findOne({
        userName: req.body.userName
    })

    if(existingUser){
        console.log('user already exists')
        return res.status(403).json({
            msg:'User already exists'
        })
    }

    const user = await User.create({
        userName: req.body.userName, 
        password: req.body.password,
        email: req.body.email
    }) 

    const todo = await Todo.create({
        userId: user._id,
        todos:[]
    })

    const token = jwt.sign({id: user._id}, JWT_SECRET);   
  
    res.json({
        token:token,
        msg:"User created successfully"
    })
})

router.post('/signin', async (req, res) => {
    const loginSchema = zod.object({
        userName: zod.string(), 
        password: zod.string()
    })

    const {success} = loginSchema.safeParse(req.body); 

    if(!success) {
        return res.status(403).json({
            msg: "Invalid input"
        })
    }

    const user = await User.findOne({
        userName: req.body.userName, 
        password: req.body.password
    })

    if (!user) {
        return res.status(411).json({
            msg:'User does not exists'
        })
    }

    const token = jwt.sign({id: user._id}, JWT_SECRET); 

    res.json({
        token: token
    })
})

module.exports = router; 