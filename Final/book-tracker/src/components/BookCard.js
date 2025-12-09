// Book Card Component
// Main component for displaying book information with different view modes
// This was one of the more complex components - handling multiple view types and interactions
import { useBooks } from '../hooks/useBooks'
import HeartsRating from './HeartsRating'

// Component for displaying a book card
// Props: book (book object), shelfView (compact view), showStatusTag (show status badge),
//        compactWithButtons (compact view with action buttons), textColor (text color override)
const BookCard = ({ book, shelfView = false, showStatusTag = false, compactWithButtons = false, textColor = 'black' }) => {
  // Using custom hook to get book management functions
  const { handleDeleteBook, handleUpdateStatus, handleUpdateRating } = useBooks()

  // Handle status change (want-to-read -> currently-reading -> read)
  const handleStatusChange = (newStatus) => {
    handleUpdateStatus(book.id, newStatus)
  }

  // Handle rating click - only works for completed books
  const handleRatingClick = (rating) => {
    if (book.status === 'read') {
      handleUpdateRating(book.id, rating)
    }
  }

  // Handle book deletion with confirmation
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to remove "${book.title}"?`)) {
      handleDeleteBook(book.id)
    }
  }

  // Compact shelf view
  if (shelfView) {
    return (
      <div className="overflow-hidden cursor-pointer relative w-full">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-48 object-cover border-0"
          />
        ) : (
          <div className="w-full h-48 bg-mint flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Cover</span>
          </div>
        )}
        {showStatusTag && (
          <div className="absolute top-2 right-2">
            {book.status === 'want-to-read' && (
              <span className="px-2 py-1 bg-sky-blue text-warm-brown text-xs font-semibold">Want to Read</span>
            )}
            {book.status === 'currently-reading' && (
              <span className="px-2 py-1 bg-lavender text-warm-brown text-xs font-semibold">Reading</span>
            )}
            {book.status === 'read' && (
              <span className="px-2 py-1 bg-pink text-warm-brown text-xs font-semibold">Read</span>
            )}
          </div>
        )}
        <div className="p-2 bg-transparent">
          <h4 className={`text-sm font-semibold line-clamp-2 mb-1 ${textColor === 'white' ? 'text-white' : 'text-black'}`}>{book.title || 'Untitled'}</h4>
          {book.author && (
            <p className={`text-sm line-clamp-1 ${textColor === 'white' ? 'text-white/90' : 'text-black/70'}`}>{book.author}</p>
          )}
        </div>
      </div>
    )
  }

  // Compact view with buttons (for Want to Read, Currently Reading, and Read pages)
  if (compactWithButtons) {
    return (
      <div className="overflow-hidden relative w-full">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-48 object-cover border-0"
          />
        ) : (
          <div className="w-full h-48 bg-mint flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Cover</span>
          </div>
        )}
        <div className="p-2 bg-transparent">
          <h4 className="text-sm font-semibold text-black line-clamp-2 mb-1">{book.title || 'Untitled'}</h4>
          {book.author && (
            <p className="text-sm text-black/70 line-clamp-1 mb-3">{book.author}</p>
          )}
          <div className="space-y-2">
            {book.status === 'want-to-read' && (
              <button
                onClick={() => handleStatusChange('currently-reading')}
                className="w-full px-3 py-2 text-sm font-semibold"
                style={{ color: '#a53860' }}
              >
                Start Reading
              </button>
            )}
            {book.status === 'currently-reading' && (
              <button
                onClick={() => handleStatusChange('read')}
                className="w-full px-3 py-2 text-sm font-semibold"
                style={{ color: '#da627d' }}
              >
                Mark as Read
              </button>
            )}
            {book.status === 'read' && (
              <div className="flex justify-center mb-2">
                <HeartsRating 
                  rating={book.rating || 0} 
                  onRatingChange={handleRatingClick}
                  interactive={true}
                />
              </div>
            )}
            <button
              onClick={handleDelete}
              className="w-full text-red-500 hover:text-red-600 text-sm py-1 font-medium transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Full card view
  return (
    <div className="bg-white overflow-hidden border border-lavender/20">
      {/* Cover Image */}
      <div className="w-full bg-mint/30 flex items-center justify-center relative overflow-hidden" style={{ height: '300px' }}>
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="max-w-full max-h-full object-contain p-2"
          />
        ) : (
          <div className="text-gray-400 text-sm">No Cover</div>
        )}
        {showStatusTag && (
          <div className="absolute top-3 right-3">
            {book.status === 'want-to-read' && (
              <span className="px-3 py-1 bg-sky-blue text-warm-brown text-xs font-semibold">Want to Read</span>
            )}
            {book.status === 'currently-reading' && (
              <span className="px-3 py-1 bg-lavender text-warm-brown text-xs font-semibold">Reading</span>
            )}
            {book.status === 'read' && (
              <span className="px-3 py-1 bg-pink text-warm-brown text-xs font-semibold">Read</span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-warm-brown leading-tight">{book.title || 'Untitled'}</h3>
        <p className="text-sm text-warm-brown/70 mb-3">{book.author || 'Unknown Author'}</p>

        {/* Genre */}
        {book.genre && (
          <span className="inline-block px-3 py-1 text-xs bg-yellow text-warm-brown mb-3 font-medium">
            {book.genre}
          </span>
        )}

        {/* Notes */}
        {book.notes && (
          <div className="mb-3 p-3 bg-sky-blue/20 border-l-4 border-lavender">
            <p className="text-xs text-warm-brown/70 italic line-clamp-2">"{book.notes}"</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2 mt-4">
          {book.status === 'want-to-read' && (
            <button
              onClick={() => handleStatusChange('currently-reading')}
              className="w-full px-4 py-2.5 bg-lavender text-warm-brown text-sm font-semibold"
            >
              Start Reading
            </button>
          )}
          {book.status === 'currently-reading' && (
            <button
              onClick={() => handleStatusChange('read')}
              className="w-full px-4 py-2.5 bg-mint text-warm-brown text-sm font-semibold"
            >
              Mark as Read
            </button>
          )}
          {book.status === 'read' && (
            <div className="flex justify-center">
              <HeartsRating 
                rating={book.rating || 0} 
                onRatingChange={handleRatingClick}
                interactive={true}
              />
            </div>
          )}
          
          <button
            onClick={handleDelete}
            className="w-full text-red-500 hover:text-red-600 text-sm py-2 font-medium transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
