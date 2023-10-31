import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function FilmsList(){

//setting our state for data to be pulled
const [films, setFilms] = useState([])

useEffect(()=>{
  const getFilms = async() => {
    const response = await axios.get(`${BASE_URL}films`)
    setFilms(response.data.results)
    console.log(response)
  }
  getFilms()
},[])

let navigate = useNavigate()

const showFilms = (key) => {
  navigate(`${key}`)
}

if (films.length === 0) {
    return <h1 className="Loading">Loading Please Wait...</h1>
} else {
    return(
        <div className="films">
            
            {
            films.map((film, key) => (
                <div key={film.title} onClick={()=>showFilms(key)} className="card">
                <h3>{film.title}</h3>
                <p>Episode: {film.episode_id}</p>
                </div>
            ))
            }
        </div>
    )
}}