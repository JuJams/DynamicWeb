// Reading Stats Context API
// I learned Context API from class - this was one of the concepts I needed to demonstrate!
// Using Context API to share reading statistics across components without prop drilling
// This was interesting to implement - combining Context with useMemo for performance
import { createContext, useContext, useMemo } from 'react'
import { useBooks } from '../hooks/useBooks'

const ReadingStatsContext = createContext(null)

// Provider component that calculates and provides reading statistics
// I used useMemo here from class - it only recalculates when books change
export const ReadingStatsProvider = ({ children }) => {
  const { books } = useBooks()

  // Calculate all reading statistics
  const stats = useMemo(() => {
    const totalBooks = books.length
    const wantToReadCount = books.filter(book => book.status === 'want-to-read').length
    const currentlyReadingCount = books.filter(book => book.status === 'currently-reading').length
    const readCount = books.filter(book => book.status === 'read').length

    // Calculate average rating for read books
    const readBooks = books.filter(book => book.status === 'read' && book.rating)
    const averageRating = readBooks.length > 0
      ? (readBooks.reduce((sum, book) => sum + (book.rating || 0), 0) / readBooks.length).toFixed(1)
      : 0

    return {
      totalBooks,
      wantToReadCount,
      currentlyReadingCount,
      readCount,
      averageRating: parseFloat(averageRating),
      readBooks,
    }
  }, [books])

  return (
    <ReadingStatsContext.Provider value={stats}>
      {children}
    </ReadingStatsContext.Provider>
  )
}

// Custom hook to access reading stats from context
// Learned this pattern from class - makes it easy to use context in any component
export const useReadingStats = () => {
  const context = useContext(ReadingStatsContext)
  if (!context) {
    throw new Error('useReadingStats must be used within a ReadingStatsProvider')
  }
  return context
}

