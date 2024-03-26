import React from 'react'
import { Link } from 'react-router-dom'
import "./stylng/signup.css";
import Header from './Header';

function SignUp() {
  return (
    <div className='total_comp'>
      <Header/>
      <div>
        <h1>Sign Up</h1>
        <form>
            <fieldset>
                <div>
                    <label>First Name</label>
                    <input></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input></input>
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input></input>
                </div>

                <div>
                    <label>Gender</label>
                    <input></input>
                </div>

                <div>
                    <label>District</label>
                    <input></input>
                </div>

                <div>
                    <label>Village</label>
                    <input></input>
                </div>

                <div>
                  <button>Sign Up</button>
                </div>
            </fieldset>
        </form>
      </div>
      <p>Already had an account? Login</p>
      <Link to="/">Login</Link>

    </div>
  )
}

export default SignUp
