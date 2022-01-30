import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalVotes: 0,
  isPercentage: false,
  selectFilter: "todos",
  candidates: [
    {
      id: 1,
      numeric: 0,
      percentage: 0,
    },
    {
      id: 2,
      numeric: 0,
      percentage: 0,
    },
    {
      id: 3,
      numeric: 0,
      percentage: 0,
    },
    {
      id: 4,
      numeric: 0,
      percentage: 0,
    },
  ],
};

export const counterSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    addTotalVotes: state => {
      state.totalVotes += 1;
    },
    addVote: (state, action) => {
      const candidateIdx = state.candidates.findIndex(
        candidate => candidate.id === action.payload
      );
      state.candidates[candidateIdx].numeric += 1;
      state.candidates.map(candidate => {
        return (candidate.percentage = candidate.numeric / state.totalVotes);
      });
    },

    filterByPercentage: (state, action) => {
      state.isPercentage = action.payload;
    },

    filterSelect: (state, action) => {
      state.selectFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTotalVotes, addVote, filterByPercentage, filterSelect } =
  counterSlice.actions;

export default counterSlice.reducer;
