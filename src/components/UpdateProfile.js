import React, {useState, useRef, useEffect} from "react";
import {Navigate, useNavigate } from 'react-router-dom'
import '../App.css'
import '../components/pages/css/register.css'
import Profile from "./pages/Profile";
import CurrentUser from "../model/CurrentUser";
import Account from "../model/Account";
import axios, { Axios } from "axios";
import { ConstructionOutlined } from "@mui/icons-material";
// var baseURL = 'https://localhost:8000/'
var baseURL = 'https://c9b80c4b-4436-4358-8ab8-2bc97afbc640.mock.pstmn.io'

var controller = '/users'
var URL = baseURL + controller

export function UpdateProfile () {

    let currentUser = new CurrentUser()
    currentUser.parse()
    const [editmode, seteditmode] = useState("")
    const [phone, setphone]=useState("")
    const [name, setname]=useState("")
    const [address, setaddress]=useState("")

    useEffect( () => {
        seteditmode(false)
        console.log(currentUser.account_id)
        setname(currentUser.name)
        setphone(currentUser.phone)
        setaddress(currentUser.address)
    }, [])

    const submit = async (e) => {
        e.preventDefault();
        let response = await Account.update(currentUser.account_id, name, phone, address)
        console.log(response)
        response = await Account.getUserByAccountId(currentUser.account_id)
        Account.setUserSession(response)
        seteditmode(false)
    }
    const edit = async (e) => {
        e.preventDefault();
        if (editmode === false) {
            seteditmode(true)
        }

        else {
            seteditmode(false)
        }
        console.log(editmode)
    }
    return(
    !editmode?
        <>
                <section>
                        <div className="auth-form-container">
                            <form className=".register-form" onSubmit={(e) => edit(e)}>
                                <div className="upper-input"> 
                                    <div className="align-left">
                                        <label htmlFor ="phone">Phone</label>
                                        <input onChange={(e)=>setphone(e.target.value)} value={phone} type='text' name="phone" />
                                        <label htmlFor="name">Name</label>
                                        <input onChange={(e)=>setname(e.target.value)} value={name} type='name' name="name"/>
                                        <label htmlFor ="address">Address</label>
                                        <input onChange={(e) =>setaddress(e.target.value)} value={address} type="address" name="address"/>
                                    </div>
                                </div>
                                <div className="downward-input"> 
                                    <button className="login-button btn-11" type="submit">Edit</button>
                                </div>
                            </form>
                        </div>
                </section>
        </>
    :
    <>
    <section>
            <div className="auth-form-container">
                <form className=".register-form" onSubmit={(e) => submit(e)}>
                    <div className="upper-input"> 
                        <div className="align-left">
                            <label htmlFor ="phone">Phone</label>
                            <input onChange={(e)=>setphone(e.target.value)} value={phone} type='text' name="phone" />
                            <label htmlFor="name">Name</label>
                            <input onChange={(e)=>setname(e.target.value)} value={name} type='name' name="name"/>
                            <label htmlFor ="address">Address</label>
                            <input onChange={(e) =>setaddress(e.target.value)} value={address} type="address" name="address"/>
                        </div>
                    </div>
                    <div className="downward-input"> 
                        <button className="login-button btn-11" type="submit">Submit</button>
                    </div>
                </form>
            </div>
    </section>
</>
    )
}