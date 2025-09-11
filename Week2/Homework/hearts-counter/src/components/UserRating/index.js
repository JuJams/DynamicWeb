import {useState} from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'

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

  let minusButton = null
  let plusButton = null

  if (count > 0) {
    minusButton = <button onClick={handleMinusClick}>[-]</button>
  }

  if (count < 5) {
    plusButton = <button onClick={handlePlusClick}>[+]</button>
  }

  return (
    <div>
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
