// Library Search Component
// Simple search input for filtering books in the user's library
// I used useState from class - this is the basic hook I learned first!
import { useState } from 'react'

// Component for searching within the user's book collection
// Calls onQueryChange callback with search query as user types
const LibrarySearch = ({ onQueryChange }) => {
  const [query, setQuery] = useState('')

  // Handle input change and notify parent component
  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    if (onQueryChange) {
      onQueryChange(newQuery)
    }
  }

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search in My library"
        className="w-full px-4 py-2 rounded-lg border border-lavender/30 focus:outline-none focus:ring-2 focus:ring-lavender"
        style={{ 
          backgroundColor: '#f7d1cd', 
          color: '#000000',
        }}
      />
    </div>
  )
}

export default LibrarySearch

