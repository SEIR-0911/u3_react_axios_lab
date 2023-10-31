import { useState, useEffect } from 'react'
import  Header  from './components/Header'
import  Main  from './components/Main'
import axios from 'axios'

import './App.css'
import { BASE_URL } from './globals'

function App() {
  const [starships, setShips] = useState([])
  const [planets, setPlanets] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [people, setPeople] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecies] = useState([])

  useEffect(() => {
    const getShips = async () => {      
      const response = await axios.get(`${BASE_URL}starships`)
      console.log(response.data.results)
      setShips(response.data.results)
  }
  getShips()
  },[])
  
  useEffect(() => {
    const getPlanets = async () => {      
      const response = await axios.get(`${BASE_URL}planets`)
      console.log(response.data.results)
      setPlanets(response.data.results)
  }  
  getPlanets()
  },[])

  useEffect(() => {
    const getVehicles = async () => {      
      const response = await axios.get(`${BASE_URL}vehicles`)
      console.log(response.data.results)
      setVehicles(response.data.results)
  }
  getVehicles()
  },[])
  
  useEffect(() => {
    const getPeople = async () => {      
      const response = await axios.get(`${BASE_URL}people`)
      console.log(response.data.results)
      setPeople(response.data.results)
  }
  getPeople()
  },[])

  useEffect(() => {
    const getFilms = async () => {      
      const response = await axios.get(`${BASE_URL}films`)
      console.log(response.data.results)
      setFilms(response.data.results)
  }
  getFilms()
  },[])

  useEffect(() => {
    const getSpecies = async () => {      
      const response = await axios.get(`${BASE_URL}species`)
      console.log(response.data.results)
      setSpecies(response.data.results)
  }
  getSpecies()
  },[])

  return (

      <div className="App">

        <Header></Header>

        
        <Main starships={starships} 
              planets={planets}
              vehicles={vehicles}
              people={people}
              films={films}
              species={species}></Main>
      </div>
 
  )
}

export default App
