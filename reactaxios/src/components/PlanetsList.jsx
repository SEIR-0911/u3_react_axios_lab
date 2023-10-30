import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function PlanetsList() {
  const [planets, setPlanets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await axios.get(`${BASE_URL}planets`)
        setPlanets(response.data.results)
      } catch (error) {
        console.error("Error fetching plaents data:", error)
      }
    }
    getPlanets()
  }, [])

  const showPlanet = (planetUrl) => {
    navigate(`${encodeURIComponent(planetUrl)}`)
  }

  if (planets.length === 0) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div className="planet">
        <h2>List of Planets</h2>
        {planets.map((planet) => (
          <div key={planet.name} onClick={() => showPlanet(planet.url)} className="card">
            <h3>{planet.name}</h3>
            <p>Rotation Period: {planet.rotation_period} hours</p>
            <p>Orbital Period: {planet.orbital_period} days</p>
            <p>Diameter: {planet.diameter}m</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
          </div>
        ))}
      </div>
    )
  }
}
