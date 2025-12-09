// Main Entry Point
// Sets up Redux Provider and Context Provider, then renders the App
// I learned about Provider components from class - they make state available to all children
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import { store } from './store/store'
import { ReadingStatsProvider } from './context/ReadingStatsContext'

// Render the app with all providers
// This was interesting - nesting Redux Provider and Context Provider
// Learned this pattern from class - providers wrap the app to share state
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ReadingStatsProvider>
        <App />
      </ReadingStatsProvider>
    </Provider>
  </StrictMode>
)
