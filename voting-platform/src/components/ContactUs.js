import React from 'react'
import "./stylng/contactus.css" ;
import Header from './Header';
<script src="https://kit.fontawesome.com/cd8bbe99ff.js" crossorigin="anonymous"></script>

function ContactUs() {
  return (
    
    <div className="contact_page">
      <Header/>
      <div>
        <h1>CONTACT US!</h1>
        <p>We Cannot solve your issue if you don't tell us about it!</p>
      </div>

      <div>
        <form>
            <input placeholder='Name'></input> <br/>
            <input placeholder='email'></input> <br/>
            <input type="text" placeholder="tell us your problem"></input> <br/>
        </form>
      </div>

      <div>
        <p>India</p>
        <p>9381566159</p>
        <p>bhavaniviyyapu9@gmail.com</p>
      </div>
      <div className='icons_row'>
        <div className='icons_col'>
          <img className='icon' src="./images/icons8-facebook-16.png"/>
          <p>facebook</p>
        </div>
        <div className='icons_col'>
          <img className='icon' src='./images/icons8-instagram-16.png'/>
          <p>instagram</p>
        </div>
        <div className='icons_col'>
          <img className='icon' src='./images/icons8-twitter-16.png'/>
          <p>twitter</p>
        </div>
        <div className='icons_col'>
          <img className='icon' src='./images/icons8-linkedin-16.png'/>
          <p>linkedin</p>
        </div> 
          
      </div>
    </div>
  )
}

export default ContactUs
