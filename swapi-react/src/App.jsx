import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { BASE_URL } from './globals'
import './App.css'

function App() {


  return (
    <div className="App">
      
      <div className="App-header">
        <Header />
      </div>

      <div className="App-main">
        <Main />
      </div>


    </div>
  )
}

export default App
