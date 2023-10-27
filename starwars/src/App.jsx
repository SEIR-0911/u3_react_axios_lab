import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  // const [count, setCount] = useState(0)

  return (
 <div className='app'>


    <div className='main-container'>
      <Main/>
    </div>
    
 </div>
  )
}

export default App
