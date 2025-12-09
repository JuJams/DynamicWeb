// Add Book Form Component
// Form for adding a selected book to the library with status and notes
// I used form handling patterns from class - preventDefault, controlled inputs, etc.
import { useState } from 'react'
import { useBooks } from '../hooks/useBooks'

// Component for adding a book to the library
// Allows user to set initial status and add notes when adding a book
const AddBookForm = ({ selectedBook, onClose }) => {
  // Using custom hook from class - makes it easy to access book functions
  const { handleAddBook } = useBooks()
  const [status, setStatus] = useState('want-to-read')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!selectedBook) return null

  // Handle form submission - adds book to library
  // This was interesting - combining form data with the selected book from API
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      handleAddBook({
        ...selectedBook,
        status,
        notes,
      })
      onClose()
      setNotes('')
    } catch (err) {
      setError('Failed to add book. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-black">
        Add Book
      </h2>
      
      <div className="flex gap-6 mb-6 p-4 bg-mint/40 rounded-lg">
        {selectedBook.coverUrl && (
          <div className="overflow-hidden">
            <img
              src={selectedBook.coverUrl}
              alt={selectedBook.title}
              className="w-36 h-56 object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-black">{selectedBook.title}</h3>
          <p className="text-black/70 text-lg mb-2">{selectedBook.author}</p>
          {selectedBook.genre && (
            <span className="inline-block px-3 py-1 text-xs bg-white text-black font-medium">
              {selectedBook.genre}
            </span>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block font-semibold mb-3 text-black">Status</label>
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-5 py-3 pr-10 border-2 border-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent bg-white text-black appearance-none cursor-pointer"
            >
              <option value="want-to-read">Want to Read</option>
              <option value="currently-reading">Currently Reading</option>
              <option value="read">Read</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-3 text-black">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes about this book..."
            className="w-full px-5 py-3 border-2 border-lavender/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all shadow-sm resize-none text-black placeholder-black/50"
            rows="4"
          />
        </div>

        {error && (
          <div className="mb-5 p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-lavender text-white disabled:opacity-50 font-semibold"
          >
            {loading ? 'Adding...' : 'Add Book'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 bg-sky-blue/30 text-black hover:bg-sky-blue/50 font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm
