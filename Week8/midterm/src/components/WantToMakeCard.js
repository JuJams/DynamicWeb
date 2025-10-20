import React from 'react'

const WantToMakeCard = ({recipe}) => {
  return (
    <div className="want-card">
      <div className="want-layout">
        <img src={recipe.imgSrc} alt={recipe.title} className="want-img" />
        <div className="want-content">
          <h3 className="want-title">{recipe.title}</h3>
          <div className="want-ingredients">
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WantToMakeCard
