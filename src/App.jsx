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

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import StarshipPage from './components/StarshipPage'
import FilmPage from './components/FilmPage'
import PlanetPage from './components/PlanetPage'
import PeoplePage from './components/PeoplePage'


function App() {

  //setting our state for data to be pulled
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
  }, [])

  return (
    <div>
      <Header/>
      <Main/>
        <Routes>
          <Route path = "/" element = {<Home /> } />
          {/* We pass in the prop of starships, giving the StarshipList component access to the array of boats in state. */}
          <Route path = "/starships" element = { <StarshipList starships={starships}/>} />
          <Route path = "/films" element = { <FilmList films={films}/>} />
          <Route path = "/planets" element = {<PlanetList planets={planets}/>} />
          <Route path = "/peoples" element = {<PeopleList peoples={peoples}/>} />
          <Route path = "/starships/:id" element = { <StarshipPage starships={starships}/>} />
          <Route path = "/films/:id" element = { <FilmPage films={films}/>} />
          <Route path = "/planets/:id" element = { <PlanetPage planets={planets}/>} />
          <Route path = "/peoples/:id" element = { <PeoplePage peoples={peoples}/>} />
        </Routes>
    </div>
  )
  
}
export default App