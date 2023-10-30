
import Main from './components/Main'
import Header from './components/Header'
// import { useState, useEffect } from "react"

import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='App-header'>
        <Header/>
      </div>
      <div className='App-main'>
        <Main/>
      </div>
    </div>
  )
}

export default App
