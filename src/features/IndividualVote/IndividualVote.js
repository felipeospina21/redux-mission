import React from "react";
import { useDispatch } from "react-redux";
import { addTotalVotes, addVote} from "../../app/votesSlice";

function IndividualVote() {
  const dispatch = useDispatch();
  const candidates = ["candidato1", "candidato2", "candidato3", "candidato4"];

  function handleClick(candidate){
    dispatch(addTotalVotes())
    dispatch(addVote(candidate))
  }
  return (
    <>
      {candidates.map(candidate => (
        <button onClick={()=>handleClick(candidate)}>{candidate}</button>
      ))}
    </>
  );
}

export default IndividualVote;
