// Hearts Rating Component
// This component displays a 1-5 heart rating system for completed books
// I used react-icons from class - it makes adding icons so easy!
import { FaHeart } from 'react-icons/fa'

// Component for displaying and interacting with heart ratings
// Props: rating (current rating 0-5), onRatingChange (callback), interactive (whether user can click)
const HeartsRating = ({ rating = 0, onRatingChange, interactive = true }) => {
  // Handle click on a heart - updates rating if interactive
  const handleClick = (newRating) => {
    if (interactive && onRatingChange) {
      onRatingChange(newRating)
    }
  }

  // Render 5 hearts, filled based on rating
  // This was fun to make - the conditional styling was a bit tricky at first
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((heart) => (
        <button
          key={heart}
          onClick={() => handleClick(heart)}
          disabled={!interactive}
          className={`${
            interactive ? 'cursor-pointer' : 'cursor-default'
          } ${
            rating >= heart
              ? 'text-red-500'
              : 'text-gray-300'
          }`}
        >
          <FaHeart className="text-xl" />
        </button>
      ))}
    </div>
  )
}

export default HeartsRating

