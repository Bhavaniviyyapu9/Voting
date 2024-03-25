import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./stylng/header.css";

function Header() {
    let navigate = useNavigate();
  return (
    <div>
      <nav>
        <button onClick={()=>{
            navigate("/home")

        }}>Home</button>

        <button onClick={()=>{
            navigate("/");
        }}>Login</button>

        <button onClick={()=>{
            navigate("/signup")
        }}>Sign up</button>

        <button onClick={()=>{
            navigate("/contactus")
        }}>Contact us</button>

        <button onClick={()=>{
            navigate("/not defined")
        }}>notdefined</button>

        <button onClick={()=>{
            navigate("/casting")
        }}>Cast your vote</button>

        <button onClick={()=>{
            navigate("/")
        }}>Logout</button>
      </nav>

      
    </div>
  )
}

export default Header
