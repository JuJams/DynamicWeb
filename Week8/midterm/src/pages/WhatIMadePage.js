import React, {useState, useEffect} from 'react'
import axios from 'axios'

import RecipeCard from '../components/RecipeCard'

import {MADE_RECIPES} from '../data/recipe-data'

const WhatIMadePage = () => {
  const [madeRecipes, setMadeRecipes] = useState(MADE_RECIPES)

  useEffect(() => {
    console.log('Recipes loaded!')
    
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
        console.log('API Response:', response.data)
      } catch (error) {
        console.log('API Error (this is okay):', error.message)
      }
    }

    fetchRecipes()
  }, [])

  const handleRatingChange = (recipeId, newRating) => {
    setMadeRecipes(prevRecipes => 
      prevRecipes.map(recipe => 
        recipe.id === recipeId ? { ...recipe, rating: newRating } : recipe
      )
    )
  }

  return (
    <section id="what-i-made" className="what-i-made-section">
      <div className="container">
        <h2 className="section-title">What I Made</h2>
        <p className="section-subtitle">My baking adventures and delicious results</p>
        
        <div className="made-slider">
          <div className="made-scroll">
            {madeRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onRatingChange={handleRatingChange} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIMadePage
