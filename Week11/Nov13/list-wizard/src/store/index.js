import { configureStore} from '@reduxjs/toolkit';
import { songReducer, addSong, removeSong } from './slices/songSlice';
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice';
import { reset } from './actions';

const store = configureStore({
  reducer: {
    song: songReducer,
    movie: movieReducer,
  },
});

// view an action creator from a slice
console.log(addSong('You can do it with a broken heart'));

store.dispatch({ type: 'song/addSong', payload: 'Hello' });
store.dispatch(addSong('You can do it with a broken heart'));
console.log(JSON.stringify(store.getState()));

console.log(addMovie('Inception'));

export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };
