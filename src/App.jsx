import { useState } from 'react'
//Estilo
import './App.css'
//Componentes
import Main from './components/main'
import NavBar from './components/navbar'

function App() {

  return (
    <div className="container">
      <div className="navbar">
          <NavBar></NavBar>
      </div>
      <div className="main">
          <Main></Main>
      </div>
    </div>
  )
}

export default App
