import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import { setUsername, setPassword, setEmails, setLogged} from "./action";
import "./log.css";

function Login({ username, email, password,logged, setUsername, setEmails, setPassword,setLogged }) {
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmails(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };

  const handleShowAlert = () => {
    if(password==="Sam@1234"){
      setShowAlert(true);
      setLogged(true);
    }
    else{
      alert("wrong password");
    }
  };
  
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      {logged && <div className="login">
        <button><a style={{textDecoration:"none",color:"white"}}href="/">Logout</a></button>
      </div>}
      {!logged && <div className="login">
        <form onSubmit={handleShowAlert}>
            <label className="label">Login</label>
            <input 
              value={username} 
              type="text" 
              name="name" 
              placeholder="UserName" 
              onChange={handleUsernameChange}
              required 
            />

            <input 
              value={email} 
              type="email" 
              name="email" 
              placeholder="Email" 
              onChange={handleEmailChange}
              required 
            />

            <input 
              value={password} 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handlePasswordChange}
              required 
            />    
            <button>Login</button>
            {showAlert && (alert("Login Successful."+username))}
            {showAlert && ( navigate("./"))}
            <h6>Don't have an account?</h6>
            <Link style={{textDecoration:"none"}} to="/reg"><button>Sign up</button></Link>
          </form> 
      </div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
  password: state.password, 
  logged: state.logged,
});

const mapDispatchToProps = {
  setUsername,
  setEmails,
  setPassword,
  setLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);