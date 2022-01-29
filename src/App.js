import React from 'react';
import './App.css';
import CandidatesVotes from './features/CandidateVotes/CandidatesVotes';
import Filter from './features/filter/Filter';
import IndividualVote from './features/IndividualVote/IndividualVote';
import TotalVotes from './features/TotalVotes/TotalVotes';

function App() {
  return (
    <div className="App">
      <IndividualVote/>
      <TotalVotes/>
      <CandidatesVotes/>
      <Filter/>
    </div>
  );
}

export default App;
