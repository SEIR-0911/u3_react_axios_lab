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
    return <h2>Loading Please Wait...</h2>
} else {
    return(
        <div className="films">
            <h2>List of Films</h2>
            {
            films.map((film, key) => (
                <div key={film.title} onClick={()=>showFilms(key)} className="card">
                <h3>{film.title}</h3>
                <p>Episode: {film.episode_id}</p>
                <p>Director: {film.director} days</p>
                <p>Producer: {film.producer}m</p>
                <p>Release Date: {film.release_date}</p>
                <p>{film.opening_crawl}</p>
                </div>
            ))
            }
        </div>
    )
}}