import { useState } from "react";
import axios from 'axios'; 

function Dashboard() {
    return <div>
        <TopBar></TopBar>
        <Todos></Todos>
    </div>
}

function Todos(){
    const getTodo = async () => {
        const response = await axios.get('http://localhost:3000/api/v1/todo/todos', {
            headers: {
                authorization: 'Bearer' + localStorage.getItem('token') 
            }
        })
        return response.data.todos;  
    }

    const todos = getTodo(); 
    if (todos) {
        return todos.map(todo => <SingleTodos todo={todo}></SingleTodos>)
    }
    else {
        return <did></did>
    }
}

function SingleTodos({todo}) {
    return <div>
        <div>
            <div>{todo.name}</div>
            <div>{todo.description}</div>
        </div>
        <div>
            <div>complete</div>
            <div>edit</div>
            <div>delete</div>
        </div>
    </div>
}

function CreateTodo() {
    return <div>

    </div>
}

function TopBar() {
    return <div>
        Todo App
    </div>
}


export default Dashboard; 