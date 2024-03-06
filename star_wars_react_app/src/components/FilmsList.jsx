import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FilmsList = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/')
        setFilms(response.data.results)
      } catch (error) {
        console.error('Error fetching films:', error)
      }
    }

    fetchFilms()
  }, [])

  return (
    <div>
      <h2>Films List</h2>
      {films.map((film) => (
        <div key={film.url}>
          <Link to={`/films/${film.url.split('/').slice(-2)[0]}`}>
            {film.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default FilmsList