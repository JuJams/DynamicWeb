import React from 'react'

const StatCard = ({number, label}) => {
  return (
    <div className="stat">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default StatCard
