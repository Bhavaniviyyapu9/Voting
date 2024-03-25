import React, { useState } from 'react';
import Header from './Header';

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
    

    <div className='main_container'>
        <Header/>
        <h1>Vote for your favourite one</h1>
      <button disabled={!!votedFor} onClick={() => handleVote('Murali')}>
        Vote for Murali
      </button>
      <button disabled={!!votedFor} onClick={() => handleVote('Bhavani')}>
        Vote for Bhavani
      </button>
    </div>
  );
}

export default Casting;
