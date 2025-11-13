import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions'


// Think of a slice like a specific useReducer for a specific feature
const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
      // Each key is an individual action that can be performed on this slice of state
      // name + '/' + functionName is how you access the action type
      addMovie(state, action) {
        // redux toolkit uses the immer library under the hood to allow "mutating" syntax
        state.push(action.payload);
      },
      removeMovie(state, action) {
        // action.payload is the name of the movie we want to remove and we want to get the index
        // of the movie passed via payload as well
        const index = state.indexOf(action.payload);
        // Array.splice() - vanilla JS command way to remove an item from an array
        state.splice(index, 1);
      },
     extraReducers: (builder) => {
      builder.addCase(reset, (state, action) => {
        return []
      })
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
export const { reset } = movieSlice.actions;