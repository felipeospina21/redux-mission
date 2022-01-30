import React from "react";
import { useDispatch } from "react-redux";
import { addTotalVotes, addVote } from "../../app/votesSlice";
import './VoteBtn.css'

function VoteBtn() {
  const dispatch = useDispatch();
  const candidatesNumber = [1, 2, 3, 4];

  function handleClick(candidate) {
    dispatch(addTotalVotes());
    dispatch(addVote(candidate));
  }
  return (
    <div className='voteBtn__container'>
      {candidatesNumber.map(candidate => (
        <button className='voteBtn' key={candidate} onClick={() => handleClick(candidate)}>
          {candidate}
        </button>
      ))}
    </div>
  );
}

export default VoteBtn;
