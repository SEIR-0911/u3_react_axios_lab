import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const FilmDetails = () => {
  const { id } = useParams()
  const [film, setFilm] = useState(null)

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}/`)
        setFilm(response.data)
      } catch (error) {
        console.error('Error fetching film details:', error)
      }
    }

    fetchFilmDetails()
  }, [id])

  return (
    <div>
      <h2>Film Details</h2>
      {film && (
        <div>
          <h3>{film.title}</h3>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <Link to="/films">Return to Films List</Link>
        </div>
      )}
    </div>
  )
}

export default FilmDetails