import React from 'react'
import cx from 'classnames'

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full'
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    secondary: 'bg-purple-100 text-purple-800'
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-base'
  }

  const badgeClasses = cx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  )
}

export default Badge
