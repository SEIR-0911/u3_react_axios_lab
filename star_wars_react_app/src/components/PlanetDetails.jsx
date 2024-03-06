import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const PlanetDetails = () => {
  const { id } = useParams()
  const [planet, setPlanet] = useState(null)

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}/`)
        setPlanet(response.data)
      } catch (error) {
        console.error('Error fetching planet details:', error)
      }
    }

    fetchPlanetDetails()
  }, [id])

  return (
    <div>
      <h2>Planet Details</h2>
      {planet && (
        <div>
          <h3>{planet.name}</h3>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <Link to="/planets">Return to Planets List</Link>
        </div>
      )}
    </div>
  )
}

export default PlanetDetails