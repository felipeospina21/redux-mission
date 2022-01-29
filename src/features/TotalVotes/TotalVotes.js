import React from 'react';
import {useSelector} from 'react-redux'

function TotalVotes(props) {
  const votes = useSelector(state => state.votes.totalVotes)
  console.log(votes)
  return (
    <div>
      {votes}
    </div>
  );
}

export default TotalVotes;