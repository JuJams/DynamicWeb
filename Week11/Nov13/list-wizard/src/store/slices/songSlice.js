import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions'
// Think of a slice like a specific useReducer for a specific feature
const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
      // Each key is an individual action that can be performed on this slice of state
      // name + '/' + functionName is how you access the action type
      addSong(state, action) {
        // redux toolkit uses the immer library under the hood to allow "mutating" syntax
        state.push(action.payload);
      },
      removeSong(state, action) {
        // action.payload is the name of the song we want to remove and we want to get the index
        // of the song passed via payload as well
        const index = state.indexOf(action.payload);
        // Array.splice() - vanilla JS command way to remove an item from an array
        state.splice(index, 1);
      },
  
      reset(state,action){
        // we cannot just say state = []
        // because this does not chnage the value
        // It reassigns the value and redux-toolkit does not know about it
        // so we have to return a new empty array
        return []
      }
    },
    extraReducers: (builder) => {
      // Think of this an an action type listener
      // The first argument is a string action type to listen for
      // The second argument is the mini reducer to execute
      builder.addCase(reset, (state, action) => {
        return []
      })
    }
  });

export const { addSong, removeSong } = songSlice.actions;
export const songReducer = songSlice.reducer;
export const { reset } = songSlice.actions;