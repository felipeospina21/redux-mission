import React from "react";
import { useSelector } from "react-redux";
import './TotalVotes.css'

function TotalVotes() {
  const votes = useSelector(state => state.votes.totalVotes);
  return (
    <div className="totalVotes__container">
      <strong>Total votos {votes}</strong>
    </div>
  );
}

export default TotalVotes;
