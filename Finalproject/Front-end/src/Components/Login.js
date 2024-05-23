import axios from "axios";
import React, { useEffect, useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessege, seterrormessage] = useState("");
  const [data, setData] = useState([]);
  const navig=useNavigate()

  // const
  useEffect(() => {
    axios
      .get('http://localhost:3001/users/get')
      .then((x) => {
        setData(x.data);
      })
      .catch((y) => {
        alert("login Sucessfully");
      });
  }, []);
  const handleSubmit = (e) => {
    const abc = data.find(x=>x.email === email);
    if (abc) {
        if(abc.password===password){
            navig('/')
        }
        else{
            seterrormessage("wrong password")
        }
    } else {
      seterrormessage("Wrong mail id");
    }
    e.preventDefault()
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 className="h11">LOGIN PAGE</h1>
        <label className="labels">email:</label>
        <input type="text" onChange={(e)=>setemail(e.target.value)} />
        <br />
        <label>Password</label>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} ></input><br/>
        <button type="submit">Login</button>
      </form>
      {errormessege}
    </div>
  );
}