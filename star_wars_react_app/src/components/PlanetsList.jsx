import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PlanetsList = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/')
        setPlanets(response.data.results)
      } catch (error) {
        console.error('Error fetching planets:', error)
      }
    }

    fetchPlanets()
  }, [])

  return (
    <div>
      <h2>Planets List</h2>
      {planets.map((planet) => (
        <div key={planet.url}>
          <Link to={`/planets/${planet.url.split('/').slice(-2)[0]}`}>
            {planet.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PlanetsList