import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios'

import { BASE_URL } from './globals'
import StarshipList from './components/StarshipList'
import FilmList from './components/FilmList'
import PlanetList from './components/PlanetList'
import PeopleList from './components/PeopleList'


function App() {

  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [peoples, setPeoples] = useState([])

  useEffect(() => { 
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`)
      setFilms(response.data.results)
    }
    getFilms()
  }, [])

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  useEffect (() => {
    const getPeoples = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      setPeoples(response.data.results)
    }
    getPeoples()
    console.log (peoples)
  }, [])

  return (
    <div>
      <Header/>
      <Main/>
      <StarshipList starships={starships}/>
      <FilmList films={films}/>
      <PlanetList planets={planets}/>
      <PeopleList peoples={peoples}/>
    </div>
  )
  
}
export default App