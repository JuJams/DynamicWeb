// Custom Hook for Book Management
// I learned about custom hooks from class - this makes it so easy to share logic across components!
// This hook combines Redux (useSelector, useDispatch) with localStorage persistence
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setBooks,
  addBook,
  removeBook,
  updateBookStatus,
  updateBookRating,
  updateBookNotes,
} from '../store/bookSlice'
import { loadBooksFromStorage, saveBooksToStorage } from '../services/localStorage'

export const useBooks = () => {
  // Using useSelector and useDispatch from react-redux - learned these in class
  const dispatch = useDispatch()
  const books = useSelector(state => state.book.books)

  // Load books from localStorage when component mounts
  // This useEffect pattern I learned from class - runs once on mount
  useEffect(() => {
    const savedBooks = loadBooksFromStorage()
    if (savedBooks.length > 0) {
      dispatch(setBooks(savedBooks))
        }
  }, [dispatch])

  // Save books to localStorage whenever the books array changes
  // This was interesting - automatically persisting state changes!
  useEffect(() => {
    if (books.length >= 0) {
      saveBooksToStorage(books)
    }
  }, [books])

  // Function to add a new book with default values
  const handleAddBook = (bookData) => {
    const newBook = {
        ...bookData,
      id: Date.now().toString(), // Generate unique ID
        dateAdded: new Date().toISOString(), // Track when book was added
      status: bookData.status || 'want-to-read', // Default status
      rating: bookData.rating || null,
      notes: bookData.notes || '',
      }
        dispatch(addBook(newBook))
        return newBook
  }

  // Function to delete a book
  const handleDeleteBook = (id) => {
      dispatch(removeBook(id))
  }

  // Function to update book status (want-to-read, currently-reading, read)
  const handleUpdateStatus = (id, status) => {
    dispatch(updateBookStatus({ id, status }))
  }

  // Function to update book rating (1-5 hearts)
  const handleUpdateRating = (id, rating) => {
    dispatch(updateBookRating({ id, rating }))
  }

  // Function to update book notes
  const handleUpdateNotes = (id, notes) => {
    dispatch(updateBookNotes({ id, notes }))
  }

  return {
    books,
    handleAddBook,
    handleDeleteBook,
    handleUpdateStatus,
    handleUpdateRating,
    handleUpdateNotes,
  }
}
