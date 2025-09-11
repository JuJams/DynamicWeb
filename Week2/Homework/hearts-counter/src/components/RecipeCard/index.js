import Card from './Card'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import RecipeImg from './RecipeImg'
import UserRating from '../UserRating'
import './RecipeCard.css'

import {RECIPE} from './recipe-data'

const RecipeCard = () => {
  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className="card_text">
        <UserRating />
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className="card_lists">
          <IngredientsList data={RECIPE.ingredients} />
          <InstructionsList data={RECIPE.instructions} />
        </div>
      </div>
    </Card>
  )
}

export default RecipeCard
