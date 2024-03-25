import React, { useRef } from 'react'
import SignUp from './SignUp'
import { Link, useNavigate } from 'react-router-dom'
import './stylng/login.css' ;
import Header from './Header';


function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  
  let navigate = useNavigate();
  return (
    <div className='total_comp'>
      <Header/>
      <div>
        <h1>Login</h1>
        <form>
            <fieldset>
            <div>
                <label>Email id</label>
                <input ref={emailInputRef}></input>
            </div>
            
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input><br></br>
                <small>atleast one special character,Uppercase,Lowercase,number</small>
            </div>
            <button onClick={()=>{
              let typedEmail = emailInputRef.current.value;
              let typedPassword = passwordInputRef.current.value;
              if (typedEmail == "bhavaniviyyapu9@gmail.com" && typedPassword == "bhavani") {
                navigate("/home");
                
              } else {
                alert("Invalid email or password");
              }
             
            }}>Login</button>
            </fieldset>
        </form>
        
      </div>

      <p>No account? Sign Up</p>
      <Link to="/SignUP">Sign up</Link> <br/>
      <Link to="/ContactUs">contact us</Link>

      
    </div>
  )
}

export default Login
