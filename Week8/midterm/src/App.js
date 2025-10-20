import React from 'react'

import Navbar from './components/Navbar'

import AboutMePage from './pages/AboutMePage'
import WhatIMadePage from './pages/WhatIMadePage'
import WhatIWannaMakePage from './pages/WhatIWannaMakePage'
import TipsPage from './pages/TipsPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMePage />
      <WhatIMadePage />
      <WhatIWannaMakePage />
      <TipsPage />
    </div>
  )
}

export default App