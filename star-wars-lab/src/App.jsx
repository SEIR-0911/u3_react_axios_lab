import { useState, useEffect } from 'react'
import './App.css'
import { BASE_URL } from './globals'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import { useNavigate } from 'react-router-dom'



const App = () => {
  //SET STATE
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  let navigate = useNavigate()

//STARSHIP -- AXIOS CALL
    useEffect(() => {
        const getStarships = async () => {

          const response = await axios.get(`${BASE_URL}starships`)
          console.log(response.data.results)
          setStarships(response.data.results)
        }
        getStarships()

//FILMS -- AXIOS CALL
const getFilms = async () => {

  const response = await axios.get(`${BASE_URL}films`)
  console.log(response.data.results)
  setFilms(response.data.results)
}
getFilms()

//CHARACTERS -- AXIOS CALL
const getCharacters = async () => {

  const response = await axios.get(`${BASE_URL}people`)
  console.log(response.data.results)
  setCharacters(response.data.results)
}
getCharacters()


//PLANETS -- AXIOS CALL
const getPlanets = async () => {

  const response = await axios.get(`${BASE_URL}planets`)
  console.log(response.data.results)
  setPlanets(response.data.results)
}
getPlanets()


}, [])







// const [selectedStarship, setselectedStarship] = useState(null)


  return (
   <div>
    <Header/>
    <Main starship={starships}
                film={films}
                character={characters}
                planet={planets} />
   

   </div>

  )
}

export default App
