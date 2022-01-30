import React from "react";
import { thousandSeparator } from "../../utils";
import './PercentageVotes.css'

function PercentageVotes({ candidates }) {
  return (
    <div className="percentageVotes__wrapper">
      {candidates.map(candidate => {
        return (
          <div className="percentageVotes__container" key={candidate.id}>
            {`Votos Candidato ${candidate.id} (${thousandSeparator(
              candidate.percentage * 100
            )}) %`}
          </div>
        );
      })}
    </div>
  );
}

export default PercentageVotes;
