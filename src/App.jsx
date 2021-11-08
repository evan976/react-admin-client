import React from 'react'
import routes from './routes'
import renderRoutes from './utils/render-routes'

function App() {
  return (
    <div className="app">
      {renderRoutes(routes)}
    </div>
  )
}

export default App
