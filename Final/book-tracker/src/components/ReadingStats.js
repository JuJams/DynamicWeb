// Reading Statistics Component
// Displays reading statistics and an animated quote
// I used Context API here from class - it's so clean to get stats without prop drilling!
import { useState, useEffect } from 'react'
import { useReadingStats } from '../context/ReadingStatsContext'

// Array of reading quotes for the animated display
const readingQuotes = [
  "A reader lives a thousand lives before he dies.",
  "Books are a uniquely portable magic.",
  "The more that you read, the more things you will know.",
  "Reading is dreaming with open eyes.",
  "A book is a dream that you hold in your hand.",
  "So many books, so little time.",
  "Reading is to the mind what exercise is to the body.",
  "Books are the quietest and most constant of friends."
]

// Component for displaying reading statistics
// Uses Context API to get stats - learned this pattern from class!
const ReadingStats = () => {
  // Use Reading Stats Context instead of calculating directly
  // This is much cleaner than passing props through multiple components
  const {
    totalBooks,
    wantToReadCount,
    currentlyReadingCount,
    readCount,
    averageRating
  } = useReadingStats()

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // Cycle through quotes with fade animation
  // I learned useEffect from class - this was fun to implement the animation!
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % readingQuotes.length)
        setFade(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 mb-0" style={{ backgroundColor: '#b23a48' }}>
      <h2 className="text-2xl font-bold text-white mb-4">Reading Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Books */}
        <div className="bg-white/80 rounded-lg p-4">
          <p className="text-sm text-black/70 mb-1">Total Books</p>
          <p className="text-3xl font-bold text-black">{totalBooks}</p>
        </div>

        {/* Want to Read */}
        <div className="bg-white/80 rounded-lg p-4">
          <p className="text-sm text-black/70 mb-1">Want to Read</p>
          <p className="text-3xl font-bold text-black">{wantToReadCount}</p>
        </div>

        {/* Currently Reading */}
        <div className="bg-white/80 rounded-lg p-4">
          <p className="text-sm text-black/70 mb-1">Currently Reading</p>
          <p className="text-3xl font-bold text-black">{currentlyReadingCount}</p>
        </div>

        {/* Read */}
        <div className="bg-white/80 rounded-lg p-4">
          <p className="text-sm text-black/70 mb-1">Completed</p>
          <p className="text-3xl font-bold text-black">{readCount}</p>
        </div>
      </div>

      {/* Additional Stats Row */}
      {averageRating > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {/* Average Rating - same width as other cards */}
          <div className="bg-white/80 rounded-lg p-4">
            <p className="text-sm text-black/70 mb-1">Average Rating</p>
            <p className="text-3xl font-bold text-black">{averageRating.toFixed(1)}</p>
          </div>
          
          {/* Animated Quote - takes remaining space */}
          <div className="flex items-center justify-center p-4 col-span-1 md:col-span-3">
            <p 
              className={`text-white text-lg md:text-xl italic text-center transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            >
              "{readingQuotes[currentQuoteIndex]}"
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReadingStats

