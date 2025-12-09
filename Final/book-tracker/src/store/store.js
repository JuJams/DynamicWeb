// Redux Store Configuration
// I learned Redux Toolkit from class - this is much simpler than the old Redux setup!
// Using configureStore from Redux Toolkit makes store setup really clean
import {configureStore} from '@reduxjs/toolkit'
import bookReducer from './bookSlice'

// This was interesting to set up - combining Redux with Context API for different use cases
export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
})
