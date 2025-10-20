import React from 'react'

import WantToMakeCard from '../components/WantToMakeCard'

import {WANT_TO_MAKE} from '../data/recipe-data'

const WhatIWannaMakePage = () => {
  return (
    <section id="what-i-wanna-make" className="what-i-wanna-make-section">
      <div className="container">
        <h2 className="section-title">What I Wanna Make</h2>
        <p className="section-subtitle">Next on my baking bucket list</p>
        
        <div className="want-grid">
          {WANT_TO_MAKE.map(recipe => (
            <WantToMakeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIWannaMakePage
