import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Account from "../../model/Account";
import Navbar from "../../components/Navbar";
import rocketImage from "../../images/rocket.png"
import { Image } from "@mantine/core";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // const [userInfo, setUserInfo] = useState('');
  const emailRef = useRef();
  const errRef = useRef();
  // const homepageURL = new URL('http://localhost:3000/');
  // const myHomepageUrlString = homepageURL.toString();
  const navigate = useNavigate();

  // let response = sessionStorage.getItem("user-info")
  // console.log("After getting: ", JSON.parse(response))
  // let userInfo = new CurrentUser()
  // userInfo.parse(JSON.parse(response))

  useEffect(() => {
    // emailRef.current?.focus()
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // useEffect(() => {
  //     if(response){
  //         navigate("/")
  //     }
  // }, [response])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("press login");
    let response = await Account.login(email, password);
    console.log("In login: ", response);
    if (response.status === "200") {
      const { email } = response.body[0];
      // save email into session
      sessionStorage.setItem("Email", email);
      navigate("/");
    } else if (response.status === "404") {
      setErrMsg(response.message)
      console.log(response.message);
      errRef.current.focus();
    } else if (!response) {
      setErrMsg("No Server Response");
      console.log("No Server Response");
      errRef.current.focus();
    } else if (response.status === "400") {
      setErrMsg("Missing Username or Password");
      console.log("Missing Username or Password");
      errRef.current.focus();
    } else if (response.status === "401") {
      setErrMsg("Unauthorized");
      console.log("Unauthorized");
      errRef.current.focus();
    }
  };

  const handleRegisterRedirect = () => {
    console.log("register clicked");
    navigate("/register");
  };
  return (
    <>
      <Navbar/>
      <section className="flex">
      <div className="flex-left">
        <Image src = {rocketImage}/>
      </div>
      <div className="login flex-right">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="auth-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              id="password"
              name="password"
            />
            <button className="login-button btn-11" type="submit">
              Log In
            </button>
          </form>
          <label className="register-label"> Don't have an account? </label>
          <button
            className="login-button btn-7"
            onClick={handleRegisterRedirect}
          >
            {" "}
            Register
          </button>
        </div>
      </div>
      </section>
    </>
  );
}
