// OhF1DahZD85G60GG
// mongodb+srv://Chayan:OhF1DahZD85G60GG@todo-app.rogejqy.mongodb.net/

const {Schema, connect, model} = require('mongoose');  

connect('mongodb+srv://Chayan:OhF1DahZD85G60GG@todo-app.rogejqy.mongodb.net/'); 

const todoItemSchema = new Schema({
    name:String, 
    description: {type: String, required: false},
    completed : {type:Boolean, default: false}
})
const todoSchema = new Schema({
    userId: String, 
    todos: [todoItemSchema]
})

const userSchema = new Schema({
    userName: String, 
    email: String,
    password: String
})

const Todo = model('Todo', todoSchema); 
const User = model('User', userSchema);

module.exports = {
    Todo, 
    User
}