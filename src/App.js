import React, { useEffect } from 'react'
import Main from './pages/main'
import Content from './pages/content'
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

function App() {

  useEffect(() => {
    document.title = "Satelite Express" 
  },[])

  return (
    <>
      <Main />
      <Content /> 
    </>
  )
}

export default App