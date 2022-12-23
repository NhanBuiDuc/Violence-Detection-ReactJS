import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import '../..//src/components/pages/css/register.css'
import CurrentUser from "../../model/CurrentUser";
import Contact from "../../model/Contact";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header.jsx";
import "./AddContact.css";
import contact_background from "../../images/contact-background.jpg";
import { Image } from "@mantine/core";
var baseURL = "https://c9b80c4b-4436-4358-8ab8-2bc97afbc640.mock.pstmn.io";

export function AddContact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  let currentUser = new CurrentUser();

  useEffect(() => {
    setErrMsg("");
  }, [email, name, phone, address]);

  currentUser.parse();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        email == "" ||
        email == undefined ||
        name == "" ||
        name == undefined ||
        phone == "" ||
        phone == undefined ||
        address == "" ||
        address == undefined
      ) {
        setErrMsg("Field cannot be empty");
      } else {
        let response = await Contact.add(
          currentUser.account_id,
          email,
          name,
          phone,
          address
        );
        if (response.status === "200") {
          console.log("In Register Status 200: ", response);
          alert("Contact has been created");
          setErrMsg("Contact has been created");
          navigate("/contact");
        } else if (response.status === "404") {
          setErrMsg(response.message);
          console.log(response);
        } else if (!response) {
          setErrMsg("No Server Response");
          console.log("No Server Response");
        } else if (response.status === "400") {
          setErrMsg(response.message);
        } else if (response.status === "401") {
          setErrMsg("Unauthorized");
          console.log("Unauthorized");
        }
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Create Failed");
      }
      console.log("in catch");
    }
  };
  return (
    <div className="addContact">
      <div className="app dark">
        <div className="list">
          <Sidebar />
          <div className="listContainer">
              <Header
                title="Contacts"
                subtitle="Managing Your Emergency Contacts"
              />
              <div className="addContact-flex">
                {/* <Image src = {contact_background}/> */}

                <p
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <div className="addContact-form">
                  <div >
                    <form className=".register-form" onSubmit={handleSubmit}>
                      <div className="upper-input">
                        <div className="align-left">
                          <label htmlFor="email">Email</label>
                          <input
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="contactemail@gmail.com"
                            id="email"
                            name="email"
                          />
                          <label htmlFor="text">Full Name</label>
                          <input
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                          />
                        </div>

                        <div className="align-right">
                          <label htmlFor="text">Phone</label>
                          <input
                            value={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                          />
                          <label htmlFor="text">Address</label>
                          <input
                            value={address}
                            required
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="downward-input">
                        <button className="login-button btn-11" type="submit">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="addContact-image">
                  <Image src={contact_background} />
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
