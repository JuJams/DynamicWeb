// 3. Added the header wrapper
import RecipeCard from './components/RecipeCard'

const App = () => {
  return (
    <div>
      <header className="app-header">
        <h1>Hearts Counter</h1>
      </header>
      <main className="app-container">
        <RecipeCard />
      </main>
    </div>
  )
}

export default App
