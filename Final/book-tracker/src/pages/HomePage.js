// Home Page Component
// Main page with shelves view and "All Books" view with sorting
// This was the most complex page - handling multiple views, search, and sorting!
import { useState } from 'react'
import { useBooks } from '../hooks/useBooks'
import LibrarySearch from '../components/LibrarySearch'
import AddBookSearch from '../components/AddBookSearch'
import AddBookForm from '../components/AddBookForm'
import BookCard from '../components/BookCard'
import ReadingStats from '../components/ReadingStats'

// Main home page with two view modes: shelves and all books
// I learned about managing complex state from class - multiple useState hooks for different features
const HomePage = () => {
  const { books } = useBooks()
  const [selectedBook, setSelectedBook] = useState(null)
  const [viewMode, setViewMode] = useState('shelves') // 'shelves' or 'all'
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date-newest')

  // Handle book selection from search results
  const handleSelectBookToAdd = (book) => {
    setSelectedBook(book)
  }

  // Close the add book form
  const handleCloseForm = () => {
    setSelectedBook(null)
  }

  // Filter books by search query (title or author)
  // I learned array methods like filter from class - they're so useful!
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

  // Sort books based on selected sort option
  // This was challenging - handling different sort types and edge cases
  const sortBooks = (bookList) => {
    const sorted = [...bookList]
    
    switch (sortBy) {
      case 'date-newest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.dateAdded || 0)
          const dateB = new Date(b.dateAdded || 0)
          return dateB - dateA
        })
      case 'date-oldest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.dateAdded || 0)
          const dateB = new Date(b.dateAdded || 0)
          return dateA - dateB
        })
      case 'title-az':
        return sorted.sort((a, b) => {
          const titleA = (a.title || '').toLowerCase()
          const titleB = (b.title || '').toLowerCase()
          return titleA.localeCompare(titleB)
        })
      case 'title-za':
        return sorted.sort((a, b) => {
          const titleA = (a.title || '').toLowerCase()
          const titleB = (b.title || '').toLowerCase()
          return titleB.localeCompare(titleA)
        })
      case 'author-az':
        return sorted.sort((a, b) => {
          const authorA = (a.author || '').toLowerCase()
          const authorB = (b.author || '').toLowerCase()
          return authorA.localeCompare(authorB)
        })
      case 'author-za':
        return sorted.sort((a, b) => {
          const authorA = (a.author || '').toLowerCase()
          const authorB = (b.author || '').toLowerCase()
          return authorB.localeCompare(authorA)
        })
      default:
        return sorted
    }
  }

  const currentlyReading = filterBooks(books.filter(book => book.status === 'currently-reading'))
  const wantToRead = filterBooks(books.filter(book => book.status === 'want-to-read'))
  const read = filterBooks(books.filter(book => book.status === 'read'))
  const filteredBooks = filterBooks(books)
  const allBooks = sortBooks(filteredBooks)

  return (
    <div className="h-full flex flex-col">
      {/* Header with Tabs and Search - Sticky */}
      <div className="sticky top-0 bg-warm-brown z-20 p-8 pb-6">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('shelves')}
              className="px-4 py-2 text-black font-semibold"
            >
              Shelves
            </button>
            <button
              onClick={() => setViewMode('all')}
              className="px-4 py-2 text-black font-semibold"
            >
              All Books
            </button>
          </div>
          <div className="flex-1 max-w-md">
            <LibrarySearch onQueryChange={setSearchQuery} />
          </div>
          <div className="flex-1 max-w-md">
            <AddBookSearch onSelectBook={handleSelectBookToAdd} />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-8">
        {selectedBook && (
          <div className="px-8">
            <AddBookForm selectedBook={selectedBook} onClose={handleCloseForm} />
          </div>
        )}

        {!selectedBook && viewMode === 'shelves' && (
        <div className="overflow-x-hidden">
          {/* Reading Statistics */}
          <ReadingStats />

          {/* Currently Reading Shelf */}
          <div className="bg-sky-blue p-6">
            <h2 className="text-xl font-bold text-white mb-4">Currently reading</h2>
            {currentlyReading.length > 0 ? (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {currentlyReading.map((book) => (
                  <div key={book.id} className="flex-shrink-0 w-32 flex-shrink-0">
                    <BookCard book={book} shelfView={true} textColor="white" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/80">No books currently being read</p>
            )}
          </div>

          {/* Next Up / Want to Read Shelf */}
          <div className="bg-mint/40 p-6 mt-0 overflow-x-hidden">
            <h2 className="text-xl font-bold text-black mb-4">Next up</h2>
            {wantToRead.length > 0 ? (
              <div className="overflow-x-auto overflow-y-visible pb-2 -mx-6 px-6" style={{ scrollbarWidth: 'thin' }}>
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {wantToRead.map((book) => (
                    <div key={book.id} className="flex-shrink-0 w-32">
                      <BookCard book={book} shelfView={true} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-black/60">No books in your reading list</p>
            )}
          </div>

          {/* Finished / Read Shelf */}
          <div className="bg-yellow/40 p-6 mt-0 overflow-x-hidden">
            <h2 className="text-xl font-bold text-black mb-4">Finished</h2>
            {read.length > 0 ? (
              <div className="overflow-x-auto overflow-y-visible pb-2 -mx-6 px-6" style={{ scrollbarWidth: 'thin' }}>
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {read.map((book) => (
                    <div key={book.id} className="flex-shrink-0 w-32">
                      <BookCard book={book} shelfView={true} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-black/60">No finished books yet</p>
            )}
          </div>
          </div>
        )}

        {!selectedBook && viewMode === 'all' && (
          <div className="px-8">
            {/* Sort Controls */}
            <div className="mb-6 mt-6 flex items-center gap-4">
              <label className="text-black font-semibold">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-lavender/30 focus:outline-none focus:ring-2 focus:ring-lavender appearance-none cursor-pointer"
                style={{ 
                  backgroundColor: '#f7d1cd',
                  color: '#000000',
                  minWidth: '200px'
                }}
              >
                <option value="date-newest">Date Added (Newest)</option>
                <option value="date-oldest">Date Added (Oldest)</option>
                <option value="title-az">Title (A-Z)</option>
                <option value="title-za">Title (Z-A)</option>
                <option value="author-az">Author (A-Z)</option>
                <option value="author-za">Author (Z-A)</option>
              </select>
            </div>

            {allBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {allBooks.map((book) => (
                  <div key={book.id} className="w-32">
                    <BookCard book={book} shelfView={true} showStatusTag={true} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/90 backdrop-blur-sm border border-lavender/20">
                <p className="text-xl text-black font-medium mb-2">
                  {searchQuery ? 'No books found' : 'No books yet'}
                </p>
                <p className="text-black/70">
                  {searchQuery ? 'Try a different search term' : 'Start building your reading list!'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
