import React from "react";
import { useSelector } from "react-redux";
// import Candidate1 from "../Candidates/Candidate1";
import { thousandSeparator } from "../../utils";

function CandidatesVotes(props) {
  const candidateState = useSelector(state => state.votes);

  return (
    <>
      {/* {switch (key) {
        case 'todos':
          
          break;
      
        default:
          break;
      }} */}
    </>
  );
}

export default CandidatesVotes;

// candidateState.isPercentage ? (
//   <div>
//     <div>Votos Candidato 1 ({candidateState.candidato1}) puntos</div>
//     <div>Votos Candidato 2 ({candidateState.candidato2}) puntos</div>
//     <div>Votos Candidato 3 ({candidateState.candidato3}) puntos</div>
//     <div>Votos Candidato 4 ({candidateState.candidato4}) puntos</div>
//   </div>
// ) : (
//   <div>
//     <div>
//       Votos Candidato 1 (
//       {thousandSeparator(candidateState.candidato1Percentage * 100)}) %
//     </div>
//     <div>
//       Votos Candidato 2 (
//       {thousandSeparator(candidateState.candidato2Percentage * 100)}) %
//     </div>
//     <div>
//       Votos Candidato 3 (
//       {thousandSeparator(candidateState.candidato3Percentage * 100)}) %
//     </div>
//     <div>
//       Votos Candidato 4 (
//       {thousandSeparator(candidateState.candidato4Percentage * 100)}) %
//     </div>
//   </div>
// )
