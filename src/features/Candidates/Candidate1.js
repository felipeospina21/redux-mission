import React from 'react';
import { useSelector } from "react-redux";
import {thousandSeparator} from '../../utils'

function Candidate1(props) {
  const candidateState = useSelector(state => state.votes);

  return (
    <>
      {candidateState.isPercentage ?
        <div>Votos Candidato 1 ({candidateState.candidato1}) puntos</div>
        :
        <div>Votos Candidato 1 ({thousandSeparator(candidateState.candidato1Percentage * 100)}) %</div>
      }
    </>
  );
}

export default Candidate1;