// Add Book Search Component
// This component allows users to search for books using the Open Library API
// I learned async/await from class - it makes API calls so much cleaner than callbacks!
import { useState } from 'react'
import { searchBooks } from '../services/bookAPI'

// Component for searching and selecting books to add to the library
// Uses Open Library API to search for books, then displays results in a grid
const AddBookSearch = ({ onSelectBook }) => {
  // Multiple useState hooks - learned this pattern from class for managing form state
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showResults, setShowResults] = useState(false)

  // Handle search form submission
  // This async function was challenging at first - handling loading and error states
  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) {
      setShowResults(false)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const books = await searchBooks(query)
      setResults(books)
      setShowResults(true)
    } catch (err) {
      setError('Failed to search books. Please try again.')
      console.error(err)
      setShowResults(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books to add..."
          className="w-full px-4 py-2 rounded-lg border border-lavender/30 focus:outline-none focus:ring-2 focus:ring-lavender"
          style={{ backgroundColor: '#f7d1cd', color: '#000000' }}
        />
        {loading && (
          <span className="absolute right-3 top-2.5 text-warm-brown/50 text-sm">Searching...</span>
        )}
      </form>

      {error && (
        <div className="mt-2 p-2 bg-red-50 border-l-4 border-red-500 text-sm text-red-700">
          {error}
        </div>
      )}

      {showResults && results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-lavender/20 max-h-96 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-black font-medium">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </p>
              <button
                onClick={() => {
                  setShowResults(false)
                  setQuery('')
                }}
                className="text-black hover:text-gray-700 text-lg font-bold"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {results.map((book, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onSelectBook(book)
                    setShowResults(false)
                    setQuery('')
                  }}
                  className="cursor-pointer group flex flex-col items-center p-2 hover:bg-sky-blue/20"
                >
                  <div className="mb-2 overflow-hidden">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="object-contain group-hover:opacity-90 transition-opacity"
                      style={{ width: '80px', height: '120px' }}
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="text-center w-full">
                    <h4 className="font-semibold text-xs line-clamp-2 mb-1 text-black">
                      {book.title}
                    </h4>
                    {book.author && (
                      <p className="text-xs text-black/70 line-clamp-1">{book.author}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showResults && !loading && results.length === 0 && query && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-lavender/20 p-4">
          <div className="flex justify-between items-center">
            <p className="text-black text-center">No books found. Try a different search term.</p>
            <button
              onClick={() => {
                setShowResults(false)
                setQuery('')
              }}
              className="text-black hover:text-gray-700 text-lg font-bold ml-2"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddBookSearch

