import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalVotes: 0,
  candidato1: 0,
  candidato2: 0,
  candidato3: 0,
  candidato4: 0,
  candidato1Percentage: 0,
  candidato2Percentage: 0,
  candidato3Percentage: 0,
  candidato4Percentage: 0,
  isPercentage: false,
  selectFilter: 'todos'
}

export const counterSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    addTotalVotes: (state) => {
      state.totalVotes += 1
    },
    addVote: (state, action) => {
      state[action.payload] += 1 
      state.candidato1Percentage = state.candidato1 / state.totalVotes  
      state.candidato2Percentage = state.candidato2 / state.totalVotes 
      state.candidato3Percentage = state.candidato3 / state.totalVotes   
      state.candidato4Percentage = state.candidato4 / state.totalVotes  
    },

    filterByPercentage: (state, action) => {
      state.isPercentage = action.payload
    },

    filterSelect: (state, action) => {
      state.selectFilter = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTotalVotes, addVote, filterByPercentage, filterSelect } = counterSlice.actions

export default counterSlice.reducer