import Card from '../components/Card'; 
import Header from '../components/Header'; 
import InputBox from '../components/InputBox';
import BottomWarning from '../components/BottomWarning';
import Button from '../components/Button';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function SignUp() {
    const navigate = useNavigate(); 
    const [userName, setUserName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    return <Card>
        <Header label="Sign Up"></Header>
        <InputBox onchange={(e) => {setUserName(e.target.value)}} label="User Name"></InputBox>
        <InputBox onchange={(e) => {setEmail(e.target.value)}} label="Email"></InputBox>
        <InputBox onchange={(e) => {setPassword(e.target.value)}} label="Password"></InputBox>
        <Button label='Sign Up' onclick={ async() => {
            const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                userName,
                email,
                password
            }) 

            localStorage.setItem('token', response.data.token); 
            navigate('/dashboard'); 

        }}></Button>
        <BottomWarning label="Already have an accoutn?" path="Sign in" to='/signin'></BottomWarning>
    </Card> 
}

export default SignUp; 