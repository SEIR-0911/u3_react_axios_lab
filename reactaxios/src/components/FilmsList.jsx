import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function FilmsList(){
  const [films, setFilms] = useState([])
  const navigate = useNavigate()

useEffect(() => {
  const getFilms = async () => {
    try {
      const response = await axios.get(`${BASE_URL}films`)
      setFilms(response.data.results)
    } catch (error) {
      console.error("Error fetching films data:", error)
    }
  }
  getFilms()
},[])

const showFilm = (filmURL) => {
  navigate(`/FilmsList/${encodeURIComponent(filmURL)}`)
}

if (films.length === 0) {
    return <h2>Loading...</h2>
} else {
    return(
        <div className="films">
            <h2>List of Films</h2>
            {films.map((film) => (
                <div key={film.title} onClick={()=>showFilm(film.url)} className="card">
                <h3>{film.title}</h3>
                <p>Episode: {film.episode_id}</p>
                <p>Director: {film.director} days</p>
                <p>Producer: {film.producer}m</p>
                <p>Release Date: {film.release_date}</p>
                </div>
            ))
            }
        </div>
    )
}}