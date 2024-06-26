import Card from "../components/Card";
import Header from "../components/Header";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 

function SignIn(){
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 

    return <Card>
        <Header label='Sign In'></Header>
        <InputBox label='User Name' onclick={(e) => {setUserName(e.target.value)}}></InputBox>
        <InputBox label='Password' onclick={(e) => {setPassword(e.target.value)}}></InputBox>
        <Button label="Sign In" onclick={ async () => {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                userName,
                password
            })

            localStorage.setItem('token', response.data.token); 
            navigate('/dashboard'); 

        }}></Button>
        <BottomWarning label="Don't have an accout?" path='Sign Up' to='/signup'></BottomWarning>
    </Card>
}

export default SignIn; 