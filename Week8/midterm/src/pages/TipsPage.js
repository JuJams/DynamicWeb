import React from 'react'

import TipItem from '../components/TipItem'
import Button from '../components/Button'

import tipsImage from '../assets/baking2.jpg'

const TipsPage = () => {
  const tips = [
    "Share what I bake and how it goes",
    "Help each other with hard recipes", 
    "Give each other cool tips",
    "Share nice baking photos"
  ]

  return (
    <section id="tips" className="tips-section">
      <div className="container">
        <h2 className="section-title">Let's Bake Together!</h2>
        <div className="tips-content">
          <div className="tips-text">
            <p className="tips-description">
              If you love baking like I do, let's be friends and bake together! 
              It doesn't matter if you're just starting or have been baking for a while, 
              there's always something fun to learn and make.
            </p>
            <div className="tips-list">
              {tips.map((tip, index) => (
                <TipItem key={index} text={tip} iconIndex={index} />
              ))}
            </div>
            <Button className="contact-button">Say Hi!</Button>
          </div>
          <div className="tips-image">
            <img 
              src={tipsImage} 
              alt="People baking together" 
              className="tips-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TipsPage
