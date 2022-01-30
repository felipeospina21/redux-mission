import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NumericVotes from "../NumericVotes/NumericVotes";
import PercentageVotes from "../PercentageVotes/PercentageVotes";

function CandidatesVotes() {
  const candidateState = useSelector(state => state.votes);
  const [filteredCandidates, setFilteredCandidates] = useState([
    ...candidateState.candidates,
  ]);

  useEffect(() => {
    let filtered;
    switch (candidateState.selectFilter) {
      case "todos":
        setFilteredCandidates(candidateState.candidates);
        break;
      case "candidato1":
        filtered = candidateState.candidates.filter(cand => cand.id === 1);
        setFilteredCandidates(filtered);
        break;
      case "candidato2":
        filtered = candidateState.candidates.filter(cand => cand.id === 2);
        setFilteredCandidates(filtered);
        break;
      case "candidato3":
        filtered = candidateState.candidates.filter(cand => cand.id === 3);
        setFilteredCandidates(filtered);
        break;
      case "candidato4":
        filtered = candidateState.candidates.filter(cand => cand.id === 4);
        setFilteredCandidates(filtered);
        break;
      default:
        break;
    }
  }, [candidateState.selectFilter, candidateState.candidates]);
  return (
    <>
      {!candidateState.isPercentage ? (
        <NumericVotes candidates={filteredCandidates} />
      ) : (
        <PercentageVotes candidates={filteredCandidates} />
      )}
    </>
  );
}

export default CandidatesVotes;
