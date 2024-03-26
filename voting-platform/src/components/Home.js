import React, { useState } from 'react'
import Header from './Header'
import './stylng/home.css';

function Home() {
  

  let [mvote,setMVote] = useState(0);
  let [bvote,setBVote] =useState(0);
  return (
    <div>
      <Header/>
      <div className='main_container'>
        <h1>Number of votes for murali </h1>
        <div>
          <h1>{mvote}</h1>
          <button onClick={()=>{
            setMVote(mvote+1);

          }}>Cast my vote</button>
          
        </div>

        <h1>Number of votes for bhavani </h1>
        <div>
          <h1>{bvote}</h1>
          <button onClick={()=>{
            setBVote(bvote+1);

          }}>Cast my vote</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default Home
