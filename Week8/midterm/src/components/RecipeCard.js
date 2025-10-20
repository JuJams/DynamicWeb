import React from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'

const RecipeCard = ({recipe, onRatingChange}) => {
  return (
    <div className="made-card">
      <img src={recipe.imgSrc} alt={recipe.title} className="made-img" />
      <div className="made-content">
        <h3 className="made-title">{recipe.title}</h3>
        <p className="made-description">{recipe.description}</p>
        <div className="made-meta">
          <span className="made-date">{recipe.date}</span>
          <div className="made-rating">
            {[...Array(5)].map((_, i) => {
              let heartClass = "heart"
              if (i < recipe.rating) {
                heartClass = "heart filled"
              }
              return (
                <span 
                  key={i} 
                  className={heartClass}
                  onClick={() => onRatingChange(recipe.id, i + 1)}
                >
                  <Favorite />
                </span>
              )
            })}
          </div>
        </div>
        <p className="made-notes">"{recipe.notes}"</p>
      </div>
    </div>
  )
}

export default RecipeCard
