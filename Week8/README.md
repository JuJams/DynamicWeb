# Baking Recipe Tracker - Midterm Project

A personal website to track baking recipes I've made and want to make. 

## How to Use

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the app:**
   ```bash
   npm start
   ```

3. **Navigate the site:**
   - Use the navbar to scroll to different sections
   - Click heart icons to rate recipes you've made
   - View your completed baking projects and future goals

## Color Scheme

- **Navigation & About Me:** Light Yellow `#FFF9B4`
- **What I Made:** Muted Rose `#D79F90` 
- **What I Wanna Make:** Deep Red `#8E1913`
- **Tips:** Dark Olive `#3D351B`
- **Text:** Dark Brown `#3D351B`
- **Accent:** Red `#8E1913`

## Midterm Requirements

### JSX and Componentization
- Created multiple reusable components (Navbar, RecipeCard, StatCard, TipItem, WantToMakeCard, Button)
- Proper JSX structure throughout

### Props System
- RecipeCard receives `recipe` and `onRatingChange` props
- StatCard receives `number` and `label` props
- Button, TipItem, and other components use props for customization

### useState() Hook
- Used in WhatIMadePage to manage recipe ratings
- State updates when hearts are clicked

### useEffect() Hook
- Used to make API calls when component loads
- Demonstrates proper lifecycle management

### API Requests
- Uses axios to fetch data from TheMealDB API
- External data retrieval from `https://www.themealdb.com/api/json/v1/1/search.php?s=cake`

### React Router DOM
- BrowserRouter configured in index.js
- Navigation between sections using smooth scrolling

### External Libraries
- **axios**: For API requests
- **@material-design-icons/svg**: For heart icons

### Controlled Components
- Heart rating system with onClick handlers
- Interactive elements that update state

## Code Snippet I Figured Out

Here's the heart rating system that demonstrates state management:

```javascript
// Heart Rating Component (RecipeCard.js)
{[...Array(5)].map((_, i) => (
  <span 
    key={i} 
    className={`heart ${i < recipe.rating ? 'filled' : ''}`}
    onClick={() => onRatingChange(recipe.id, i + 1)}
  >
    <Favorite />
  </span>
))}

// State Management (WhatIMadePage.js)
const handleRatingChange = (recipeId, newRating) => {
  setMadeRecipes(prevRecipes => 
    prevRecipes.map(recipe => 
      recipe.id === recipeId ? { ...recipe, rating: newRating } : recipe
    )
  )
}
```

This code shows how to create interactive heart ratings that turn red when clicked and update state across multiple recipe cards.

## Project Structure

```
src/
├── components/          
├── pages/             
├── data/               
├── assets/             
└── index.css          
```

