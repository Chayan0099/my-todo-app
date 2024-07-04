import { useState } from "react";
import axios from 'axios'; 

function Dashboard() {
    return <div>
        <TopBar></TopBar>
        <Todos></Todos>
    </div>
}

function Todos(){
    const [todos, setTodos] = useState([]); 
    const getTodo = async () => {
        const response = await axios.get('http://localhost:3000/api/v1/todo/todos', {
            headers: {
                'authorization': 'Bearer' + localStorage.getItem('token') 
            }
        })

        setTodos(response.data.todos); 
    } 
    if (!todos.length) {
        return <div>No Todos Available</div>   }
    return (
        todos.map(todo => <SingleTodos todo={todo}></SingleTodos>)

    )
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
        <button></button>
    </div>
}

function TopBar() {
    return <div>
        Todo App
    </div>
}


export default Dashboard; 