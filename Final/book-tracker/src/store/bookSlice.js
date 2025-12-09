// Redux Slice for Book Management
// I used createSlice from Redux Toolkit - learned this from class and it's so much easier than writing all the boilerplate!
// This handles all the book state management: adding, removing, updating status, rating, and notes
import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [], // Array to store all books in the library
  },
  reducers: {
    // Set all books at once (used when loading from localStorage)
    setBooks: (state, action) => {
      state.books = action.payload
    },
    // Add a new book to the collection
    addBook: (state, action) => {
        state.books.push(action.payload)
    },
    // Remove a book by ID
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload)
    },
    // Update book status (want-to-read, currently-reading, read)
    // This was tricky at first - making sure to find the right book before updating
    updateBookStatus: (state, action) => {
      const { id, status } = action.payload
      const book = state.books.find(b => b.id === id)
      if (book) {
        book.status = status
      }
    },
    // Update rating for completed books (1-5 hearts)
    updateBookRating: (state, action) => {
      const { id, rating } = action.payload
      const book = state.books.find(b => b.id === id)
      if (book) {
        book.rating = rating
      }
    },
    // Update notes for a book
    updateBookNotes: (state, action) => {
      const { id, notes } = action.payload
      const book = state.books.find(b => b.id === id)
      if (book) {
        book.notes = notes
      }
    },
  },
})

export const {
  setBooks,
  addBook,
  removeBook,
  updateBookStatus,
  updateBookRating,
  updateBookNotes,
} = bookSlice.actions

export default bookSlice.reducer
