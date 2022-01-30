import React from 'react';
import './App.css';
import CandidatesVotes from './features/CandidateVotes/CandidatesVotes';
import Filter from './features/filter/Filter';
import VoteBtn from './features/VoteBtn/VoteBtn';
import TotalVotes from './features/TotalVotes/TotalVotes';

function App() {
  return (
    <div className="App">
      <VoteBtn/>
      <TotalVotes/>
      <CandidatesVotes/>
      <Filter/>
    </div>
  );
}

export default App;
