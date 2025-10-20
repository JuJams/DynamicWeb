import React from 'react'

import icon1 from '../assets/icon1.jpg'
import icon2 from '../assets/icon2.jpg'
import icon3 from '../assets/icon3.jpg'
import icon4 from '../assets/icon4.jpg'

const TipItem = ({text, iconIndex = 0}) => {
  const icons = [icon1, icon2, icon3, icon4] 
  
  return (
    <div className="tip-item">
      <img 
        src={icons[iconIndex] || icon1} 
        alt="tip icon" 
        className="tip-icon-img"
      />
      <span>{text}</span>
    </div>
  )
}

export default TipItem
