import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import { BASE_URL } from './globals'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const responseArray1 = await axios.get(`${BASE_URL}/starships/?page=1`)
      const responseArray2 = await axios.get(`${BASE_URL}/starships/?page=2`)
      await setStarshipList([...responseArray1,...responseArray2])
    }
    getStarships()
  },[])

  console.log(starshipList)

  return (
    <div className='App'>
      <Header />
      <Main starshipList={starshipList}/>
    </div>
  )
}

export default App
