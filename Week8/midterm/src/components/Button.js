import React from 'react'

const Button = ({children, onClick, className}) => {
  let buttonClass = "button"
  if (className) {
    buttonClass = buttonClass + " " + className
  }
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
