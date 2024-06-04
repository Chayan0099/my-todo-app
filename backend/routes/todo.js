const express = require('express'); 
const router = express.Router(); 
const { Todo } = require('../db');
const authMiddleware = require('./authMiddleware'); 
router.use(express.json());
const zod = require('zod');  

router.post('/create', authMiddleware, async (req, res) => {
    const todoSchema = zod.object({
        name: zod.string(),
        description: zod.string().optional()
    }) 

    const {success} = todoSchema.safeParse(req.body); 

    if(!success) {
        return res.status(403).json({
            msg:'Invalid Input'
        })
    }  

    const todo = await Todo.findOne({
        userId: req.userId
    })

    todo.todos.push({
        name: req.body.name,
        description: req.body.description
    })

    await todo.save(); 

    res.json({
        msg:"Todo created successfully"
    })

})

router.put('/mark', authMiddleware, async (req, res) => {
    const todo = await Todo.findOne({
        userId:req.userId
    })

    if (!todo){
        return res.status(411).json({
            msg:"No todos for this user"
        })
    }
    const todoNo = parseInt(req.query.todoNo); 
 
    todo.todos[todoNo].completed = true;

    await todo.save();
    
    res.json({
        msg:"Todo marked as complete"
    })
})

router.delete('/delete', authMiddleware, async (req, res) => {
    const todo = await Todo.findOne({
        userId: req.userId
    })

    if(!todo) {
        return res.status(411).json({
            msg:'No todos to delete'
        })
    }

    const todoNo = req.query.todoNo; 

    todo.todos.splice(todoNo, 1); 
    
    await todo.save(); 

    res.json({
        msg:"Todo deleted successfully"
    })
})
module.exports = router; 