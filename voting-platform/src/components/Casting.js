import React, { useState } from 'react';
import Header from './Header';
import "./stylng/casting.css"

function Casting() {
  const [votedFor, setVotedFor] = useState(null);

  const handleVote = (candidate) => {
    if (votedFor) {
      alert('Already voted.');
    } else {
      setVotedFor(candidate);
      alert(`You have successfully voted for ${candidate}.`);
    }
  };

  return (
    

    <div>
        <Header/>
        <div className='main_container'> 
          <h1>Vote for your favourite one</h1>
          <button id="button" disabled={!!votedFor} onClick={() => handleVote('Murali')}>
            Vote for Murali
          </button>
          <button id="button" disabled={!!votedFor} onClick={() => handleVote('Bhavani')}>
            Vote for Bhavani
          </button>
        </div>
      
    </div>
  );
}

export default Casting;
