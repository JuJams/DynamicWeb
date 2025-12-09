// Main App Component
// Handles navigation between pages and displays the sidebar with "Continue Reading"
// I used useSelector from react-redux here - learned this from class for accessing Redux state!
import { useState } from 'react'
import { useSelector } from 'react-redux'
import HomePage from './pages/HomePage'
import WantToReadPage from './pages/WantToReadPage'
import CurrentlyReadingPage from './pages/CurrentlyReadingPage'
import ReadPage from './pages/ReadPage'
import BookCard from './components/BookCard'

// Main app component with sidebar navigation
// This was one of the first components I built - the navigation logic was straightforward
const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  // Using useSelector to get currently reading book for sidebar
  // Learned this from class - much easier than connecting components!
  const currentlyReading = useSelector((state) =>
    state.book.books.find(b => b.status === 'currently-reading')
  )

  // Function to render the current page based on navigation
  const renderPage = () => {
    switch (currentPage) {
      case 'want-to-read':
        return <WantToReadPage />
      case 'currently-reading':
        return <CurrentlyReadingPage />
      case 'read':
        return <ReadPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-warm-brown">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-lavender fixed h-screen left-0 top-0 p-6 flex flex-col z-10">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Sanju's Buklife</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1 -mx-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`w-full text-left px-6 py-3 text-lg ${
                currentPage === 'home'
                  ? 'bg-lavender text-warm-brown font-semibold'
                  : 'text-white hover:bg-lavender/80'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('want-to-read')}
              className={`w-full text-left px-6 py-3 text-lg ${
                currentPage === 'want-to-read'
                  ? 'bg-lavender text-warm-brown font-semibold'
                  : 'text-white hover:bg-lavender/80'
              }`}
            >
              Want to Read
            </button>
            <button
              onClick={() => setCurrentPage('currently-reading')}
              className={`w-full text-left px-6 py-3 text-lg ${
                currentPage === 'currently-reading'
                  ? 'bg-lavender text-warm-brown font-semibold'
                  : 'text-white hover:bg-lavender/80'
              }`}
            >
              Currently Reading
            </button>
            <button
              onClick={() => setCurrentPage('read')}
              className={`w-full text-left px-6 py-3 text-lg ${
                currentPage === 'read'
                  ? 'bg-lavender text-warm-brown font-semibold'
                  : 'text-white hover:bg-lavender/80'
              }`}
            >
              Read
            </button>
          </nav>

          {/* Continue Reading Section */}
          {currentlyReading && (
            <div className="mt-auto pt-6 flex flex-col items-center">
              <p className="text-base font-semibold mb-3 text-white">Continue reading</p>
              <div className="w-32">
                <BookCard book={currentlyReading} shelfView={true} textColor="white" />
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 bg-warm-brown min-h-screen overflow-x-hidden">
          <div className="h-screen flex flex-col overflow-x-hidden">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
