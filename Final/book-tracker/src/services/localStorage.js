// LocalStorage Service for Persistence
// I learned localStorage from class - it's perfect for saving user data without a backend!
// This service handles saving and loading books from browser localStorage
const STORAGE_KEY = 'bookTracker_books'

// Function to load books from localStorage
// Returns empty array if nothing is saved or if there's an error
export const loadBooksFromStorage = () => {
  try {
    const books = localStorage.getItem(STORAGE_KEY)
    return books ? JSON.parse(books) : []
  } catch (error) {
    console.error('Error loading books from localStorage:', error)
    return []
  }
}

// Function to save books to localStorage
// This automatically persists the user's library - learned this pattern from homework!
export const saveBooksToStorage = (books) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  } catch (error) {
    console.error('Error saving books to localStorage:', error)
  }
}

