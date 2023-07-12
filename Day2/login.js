import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ()=>{
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () =>{
      if(password==="Sam@1234"){
        setShowAlert(true);
      }
  }
    return(
      <div className="div">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label className="label">Login</label>
            <input 
              value={email} 
              type="email" 
              name="email" 
              placeholder="Email" 
              onChange={(e)=> setEmail(e.target.value)}
              required 
            />

            <input 
              value={password} 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={(e)=> setPassword(e.target.value)}
              required 
            />    
            <button>Login</button>
            {showAlert && (alert("Login Successful."))}
            {showAlert&&( navigate("/"))}
            <h6>Don't have an account?</h6>
            <Link style={{textDecoration:"none"}} to="/reg"><button>Sign up</button></Link>
          </form>
        </div>
        </div>
    )
}
export default Login;