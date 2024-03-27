import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./stylng/signup.css";
import Header from './Header';

function SignUp() {

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let aadharInputRef = useRef();
  let dobInputRef = useRef();
  let genderInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNumberInputRef = useRef();
  let districtInputRef = useRef();
  let villageInputRef = useRef();
  let profilePicInputRef = useRef();
  let [selectedProPic,setSelectedProPic] = useState("./images/dummypropic.png")


  let sendDataToMDB = async()=>{

    let dataToSend = new FormData();
        dataToSend.append("firstName",firstNameInputRef.current.value)
        dataToSend.append("lastName",lastNameInputRef.current.value)
        dataToSend.append("aadhar",aadharInputRef.current.value)
        dataToSend.append("dateOfBirth",dobInputRef.current.value)
        dataToSend.append("gender",genderInputRef.current.value)
        dataToSend.append("email",emailInputRef.current.value)
        dataToSend.append("password",passwordInputRef.current.value)
        dataToSend.append("mobileNo",mobileNumberInputRef.current.value)
        dataToSend.append("district",districtInputRef.current.value)
        dataToSend.append("village",villageInputRef.current.value)
        // dataToSend.append("profilePic",profilePicInputRef.current.value)

        for(let i=0; i<profilePicInputRef.current.files.length; i++){
          dataToSend.append("profilePic",profilePicInputRef.current.files[i])

        }
        

    let reqOptions = {
      method: "POST",
      body:dataToSend,
    }

    let JSONData = await fetch("http://localhost:7171/signup", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
  }
  

  return (
    <div className='total_comp'>
      <Header/>
      <div>
        <h1>Sign Up</h1>
        <form>
          <img className='Profilepic' src={selectedProPic}></img>
          <br/>
            <fieldset>
              <legend>Personalia</legend>

                <div>
                    <label>First Name</label>
                    <input ref={firstNameInputRef}></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input ref={lastNameInputRef}></input>
                </div>

                <div>
                    <label>Aadhar Number</label>
                    <input ref={aadharInputRef}></input>
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input type='date' ref={dobInputRef}></input>
                </div>

                <div>
                    <label>Gender</label>
                    <input ref={genderInputRef}></input>
                </div>

                <div>
                    <label>Email</label>
                    <input ref={emailInputRef}></input>
                </div>

                <div>
                    <label>Create password</label>
                    <input ref={passwordInputRef}></input>
                </div>

                <div>
                    <label>Mobile number</label>
                    <input ref={mobileNumberInputRef}></input>
                </div>

                <div>
                    <label>Profile pic</label>
                    <input type='file' ref={profilePicInputRef} onChange={(e)=>{
                      console.log(e.target.files)
                      let selectedFileURL = URL.createObjectURL(e.target.files[0])
                      setSelectedProPic(selectedFileURL);
                    }}></input>
                </div>

            </fieldset>

            <fieldset>
              <legend>Residence</legend>
                <div>
                    <label>District</label>
                    <input ref={districtInputRef}></input>
                </div>

                <div>
                    <label>Village</label>
                    <input ref={villageInputRef}></input>
                </div>
            </fieldset>

            <div>
                  <button type="button" onClick={()=>{
                    sendDataToMDB();
                  }}>Sign Up</button>
                </div>

        </form>
      </div>
      <p>Already had an account? Login</p>
      <Link to="/">Login</Link>
      <br/>
      <br/>

    </div>
  )
}

export default SignUp
