//Show /details page
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../globals'


const PlanetsPage = (props) => {

  let { id } = useParams()
  const [planet, setPlanet] = useState()
  let navigate = useNavigate()


    useEffect(() => {
        const getPlanet = async () => {
                const response = await axios.get(`${BASE_URL}planets/`)
                setPlanet(response.data.results[id])
            }
        getPlanet()
    })


  return planet ? (
    <div className="detail">
          <h1>{planet.name}</h1>
      <div className="info-wrapper">
                <h3>Name: {planet.name}</h3>
                <h5>Rotation Period: {planet.rotation_period}</h5>
                <h5>Orbital  Period: {planet.orbital_period}</h5>
                <h5>Diameter: {planet.diameter}</h5>
                <h5>Climate: {planet.climate}</h5>
                <h5>Gravity: {planet.gravity}</h5>
                <h5>Terrain: {planet.terrain}</h5>
                <h5>Surface Water: {planet.surface_water}</h5>
                <h5>Population: {planet.population}</h5>
 

        </div>
        <button onClick={() => (navigate('/Planets'))}>  back</button>
    </div>
  ) : <h3>Finding starships...</h3>
}

export default PlanetsPage

