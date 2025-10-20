import React from 'react'

import StatCard from '../components/StatCard'

import aboutMeImage from '../assets/baking1.jpg'

const AboutMePage = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">My Baking Journey</h1>
            <p className="about-description">
              Hi! I'm Sanjana and I love baking. It's so fun and calming for me. 
              This is where I keep track of what I've made and what I want to try next. 
              I also like to share tips with other people who love baking.
            </p>
            <p className="about-description">
              From making simple cookies to trying hard recipes, 
              I think every bake has a fun story. Come join me in the cool world of baking!
            </p>
            <div className="stats">
              <StatCard number="12" label="Recipes Tried" />
              <StatCard number="8" label="On My List" />
            </div>
          </div>
          <div className="about-image">
            <img 
              src={aboutMeImage} 
              alt="Baking setup and ingredients" 
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMePage
