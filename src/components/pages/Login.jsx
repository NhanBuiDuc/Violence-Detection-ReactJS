import React, {useState, useRef, useEffect} from "react";
import {useNavigate } from 'react-router-dom'
import '../../App.css'
import './css/login.css'
import Register from './Register'
import CurrentUser from "../../model/CurrentUser";
// var baseURL = 'https://localhost:8000/'
var baseURL = 'https://c9b80c4b-4436-4358-8ab8-2bc97afbc640.mock.pstmn.io'
var controller = '/login'
var URL = baseURL + controller

export const Login = (props) => {


    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [isPending, setIsPending] = useState(false);
    const [errMsg, setErrMsg] = useState('')

    const emailRef = useRef()
    const errRef = useRef()

    const navigate = useNavigate()

    useEffect( () => {
        emailRef.current?.focus()
        if(localStorage.getItem('user-info')){
            navigate("/add")
        }
    }, [])

    useEffect( () => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const role = 'user'

        setIsPending(true)

        const loginBody = {email, password, role}
        let response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(loginBody)
        }).then(function(response){
            return response.json();
        }).then(function(myJson) {
            return myJson
        });
        console.log("Befor saving: ", response.body)
        sessionStorage.setItem("currentUser", JSON.stringify(response.body))

        response = sessionStorage.getItem("currentUser")
        console.log("After getting: ", JSON.parse(response))
        let testUser = new CurrentUser()
        testUser.parse(JSON.parse(response))
        console.log(testUser)
    }

    return( 
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor ="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={ () => props.onFormSwitch('register')}>Don't have an account? Register</button>
        </div>
    )
}