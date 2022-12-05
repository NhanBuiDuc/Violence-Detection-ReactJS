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

export function Login (props) {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false);
    // const [userInfo, setUserInfo] = useState('');
    const emailRef = useRef()
    const errRef = useRef()

    const navigate = useNavigate()

    // let response = sessionStorage.getItem("user-info")
    // console.log("After getting: ", JSON.parse(response))
    // let userInfo = new CurrentUser()
    // userInfo.parse(JSON.parse(response))

    useEffect( () => {
        // emailRef.current?.focus()
    }, [])


    useEffect( () => {
        setErrMsg('')
    }, [email, password])

    // useEffect(() => {
    //     if(response){
    //         navigate("/")
    //     }
    // }, [response])

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const role = 'user'
        try{

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
    
            if(response.status == "200"){
                console.log("Befor saving: ", response.body)
                sessionStorage.setItem("currentUser", JSON.stringify(response.body))
                
                setSuccess(true)    
                navigate("/")
            }
            else if(response.status == "404"){
                setErrMsg(response.message)
                console.log(response.message)
                errRef.current.focus();
            }
            else if (!response) {
                
                setErrMsg('No Server Response');
                console.log("No Server Response")
                errRef.current.focus();
            } 
            else if (response.status == 400) {
                setErrMsg('Missing Username or Password');
                console.log("Missing Username or Password")
                errRef.current.focus();
            } 
            else if (response.status == 401) {
                setErrMsg('Unauthorized');
                console.log("Unauthorized")
                errRef.current.focus();
            } 
        }
        catch(err){
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            console.log("in catch")
            errRef.current.focus();
        }
        
    }

    const handleRegisterRedirect = () => {
        console.log("register clicked")
        navigate("/register")
    }

    return( 
        <>
                <section>
                    <p ref = {errRef} className = { errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="auth-form-container">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <label htmlFor ="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                                <label htmlFor="password">Password</label>
                                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                                <button className="login-button btn-11" type="submit">Log In</button>
                            </form>
                            <label className="register-label"> Don't have an account? </label>
                            <button className="login-button btn-7" onClick={handleRegisterRedirect}> Register</button>
                        </div>
                </section>
        </>
    )
}