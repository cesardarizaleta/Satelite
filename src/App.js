import React, { useEffect } from 'react'
import Main from './pages/main'

function App() {

  useEffect(() => {
    document.title = "Satelite Express" 
  })

  return (
    <>
      <Main />
    </>
  )
}

export default App