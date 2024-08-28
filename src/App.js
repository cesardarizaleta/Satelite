import React, { useEffect } from 'react'
import Main from './pages/main'
import Content from './pages/content'

function App() {

  useEffect(() => {
    document.title = "Satelite Express" 
    document.querySelector('main button').onclick = () => {
      document.getElementById('content').classList.add('enter')
    }
  },[])

  return (
    <>
      <Main />
      <Content /> 
    </>
  )
}

export default App