import './App.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [starships, setStarships] = useState([])
  const [selectedStarship, setSeceltedStarship] = useState(null)
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])

  useEffect(()=>{
      const getStarships = async () => {
        const response = await axios.get(`${BASE_URL}/starships`)
        // console.log(response.data.next)
        setStarships(response.data.results)
      }
      getStarships()
    }, [])
  // console.log(starships)
  useEffect(()=>{
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      console.log(response)
    }
  }, [])

  useEffect(()=>{
    const getFilms = async () => {
      // const response = await axios.get(`${BASE_URL}/`)
    }
  }, [])

  return (
    <div className='page'>
      <Header />
      <Main starships={starships}/>
    </div>
  )
}

export default App
