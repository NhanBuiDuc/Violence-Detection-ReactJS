import React, {useState, useRef, useEffect} from "react";
import {useNavigate } from 'react-router-dom'
import '../../App.css'
import './css/register.css'

import CurrentUser from "../../model/CurrentUser";
import Account from "../../model/Account";
// var baseURL = 'https://localhost:8000/'
var baseURL = 'https://c9b80c4b-4436-4358-8ab8-2bc97afbc640.mock.pstmn.io'

var controller = '/register'
var URL = baseURL + controller

export function Register (props) {


    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [name, setName]= useState('');
    const [phone, setPhone]= useState('');
    const [address, setAddress]= useState('');
    const [errMsg, setErrMsg] = useState('')

    const emailRef = useRef()
    const errRef = useRef()

    const navigate = useNavigate()

    useEffect( () => {
        emailRef.current?.focus()
    }, [])

    useEffect( () => {
        setErrMsg('')
    }, [email, password])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const role = 'user'
        try{

            if( password != confirmPassword){
                setErrMsg("Two password don't match")

                errRef.current.focus();
            }
            else{
                let response = Account.register(email, password, name, phone, address)
                console.log("In Register ", response)
                if(response.status == "200"){
                    console.log("In Register Status 200: ", response)
                    navigate("/login")
                }
                else if(response.status == "404"){
    
                    setErrMsg(response.message)
                    console.log(response)
                    errRef.current.focus();
                }
                else if (!response) {
                    
                    setErrMsg('No Server Response');
                    console.log("No Server Response")
                    errRef.current.focus();
                } 
                else if (response.status == "400") {
                    setErrMsg(response.message);
                    errRef.current.focus();
                } 
                else if (response.status == "401") {
                    setErrMsg('Unauthorized');
                    console.log("Unauthorized")
                    errRef.current.focus();
                } 
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
    const handleLoginRedirect = () => {
        navigate("/login")
    }
    const handleSignUp=()=>{
        alert("Account has been created")
        navigate("/login")
    }
    return( 
        <>
                <section>
                    <p ref = {errRef} className = { errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="auth-form-container">
                            <form className=".register-form" onSubmit={handleSubmit}>
                                <div className="upper-input"> 
                                    <div className="align-left">
                                        <label htmlFor ="email">Email</label>
                                        <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                                        <label htmlFor="password">Password</label>
                                        <input value={password} required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                                        <label htmlFor ="password">Confirm Password</label>
                                        <input value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="******" id="confirmPassword" name="confirmPassword"/>
                                    </div>
                                
                                    <div className="align-right">
                                        <label htmlFor="text">Full Name</label>
                                        <input value={name} required onChange={(e) => setName(e.target.value)} type="text"/>
                                        <label htmlFor="text">Phone</label>
                                        <input value={phone} required onChange={(e) => setPhone(e.target.value)} type="text"/>
                                        <label htmlFor="text">Address</label>
                                        <input value={address} required onChange={(e) => setAddress(e.target.value)} type="text"/>
                                        
                                    </div>
                                </div>
                                <div className="downward-input"> 
                                    <button className="login-button btn-11" type="submit" onClick={handleSignUp}>Sign Up</button>
                                </div>
                            </form>
                            <label className="register-label"> Already have an account? </label>
                            <button className="login-button btn-7" onClick={handleLoginRedirect}> BACK TO LOGIN</button>
                        </div>
                </section>
        </>
    )
}