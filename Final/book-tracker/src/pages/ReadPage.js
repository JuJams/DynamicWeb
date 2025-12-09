// Read Page
// Displays all books with "read" status (completed books)
// This page shows books where users can rate them - learned conditional rendering from class!
import { useState } from 'react'
import { useBooks } from '../hooks/useBooks'
import BookCard from '../components/BookCard'
import LibrarySearch from '../components/LibrarySearch'

// Page for displaying books the user has completed
const ReadPage = () => {
  const { books } = useBooks()
  const [searchQuery, setSearchQuery] = useState('')

  // Filter books by search query (title or author)
  const filterBooks = (bookList) => {
    if (!searchQuery.trim()) {
      return bookList
    }
    const query = searchQuery.toLowerCase()
    return bookList.filter(book => 
      book.title?.toLowerCase().includes(query) ||
      book.author?.toLowerCase().includes(query)
    )
  }

  const readBooks = filterBooks(books.filter(book => book.status === 'read'))

  return (
    <div className="h-full flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-warm-brown z-20 p-8 pb-6">
        <div className="flex justify-between items-center gap-4 mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-black">
              Read
            </h1>
            <p className="text-black/70">Books you've completed</p>
          </div>
          <div className="flex-1 max-w-md">
            <LibrarySearch onQueryChange={setSearchQuery} />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-8 pb-8">
        {readBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {readBooks.map((book) => (
              <div key={book.id} className="w-32">
                <BookCard book={book} compactWithButtons={true} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/90 backdrop-blur-sm border border-lavender/20">
            <p className="text-xl text-black font-medium mb-2">
              {searchQuery ? 'No books found' : 'No completed books yet'}
            </p>
            <p className="text-black/70">
              {searchQuery ? 'Try a different search term' : 'Mark books as read to build your collection!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReadPage
