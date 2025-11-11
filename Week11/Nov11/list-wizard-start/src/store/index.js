import {configureStore, createSlice} from '@reduxjs/toolkit';

// Think of a slice like a specific useReducer for a specific feature
const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers:{
        // Each is key is an individual action that can be performed on this slice of state
        // name + '/' + functionName is how you access the action type
        addSong(state,action){
            // redix toolkit uses the immer library under the hood to allow "mutating" syntax
            state.push(action.payload);
        },
        removeSong(state,action){
            // action.payload is the name of the song we want to remove and we want to get the index 
            // of the song passed via payloas as well
            const index = state.indexOf(action.payload)
            // Array.splice() - vanilla JS command way to remove an item from an array
            state.splice(index,1)
        }
    }
})

// This is where you combine/add your slices by keyname to the application wide state store
const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
    },
})

// make sure you export all the things
// First we are exporting the compiled application state to access value elsewhere
// and then we destruct and export the individual action functions form the decompiled songSlice.actions
export {store} 
export const {addSong, removeSong} = songSlice.actions