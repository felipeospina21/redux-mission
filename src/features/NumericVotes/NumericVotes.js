import React from "react";
import "./NumericVotes.css";

function NumericVotes({ candidates }) {
  return (
    <div className='numericVotes__wrapper'>
      {candidates.map(candidate => {
        return (
          <div
            className='numericVotes__container'
            key={
              candidate.id
            }>{`Votos Candidato ${candidate.id} (${candidate.numeric}) votos`}</div>
        );
      })}
    </div>
  );
}

export default NumericVotes;
