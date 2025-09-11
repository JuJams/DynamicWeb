import {useState} from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'
import './index.css'

export const UserRating = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count >= 5) {
      return 
    }
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }

// 1. Show [-] only when count > 0 and [+] only when count < 5
// (prevents going below 0 and above 5; hides buttons at the limits)
// Used Conditional Rendering 
  let minusButton = null
  let plusButton = null

  if (count > 0) {
    minusButton = <button className="btn" onClick={handleMinusClick}>-</button>
  }

  if (count < 5) {
    plusButton = <button className="btn" onClick={handlePlusClick}>+</button>
  }

  return (
    <div className="row">
      {minusButton}
      {[...Array(count)].map((i, index) => {
        return (
          <span key={index}>
            <Favorite />
          </span>
        )
      })}
      {plusButton}
    </div>
  )
}

export default UserRating
