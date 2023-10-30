import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function PlanetsList(){

//setting our state for data to be pulled
const [planets, setPlanets] = useState([])

useEffect(()=>{
  const getPlanets = async() => {
    const response = await axios.get(`${BASE_URL}planets`)
    setPlanets(response.data.results)
    console.log(response)
  }
  getPlanets()
},[])

let navigate = useNavigate()

const showPlanets = (key) => {
  navigate(`${key}`)
}

if (planets.length === 0) {
    return <h2>Loading Please Wait...</h2>
} else {
    return(
        <div className="planets">
            <h2>List of Planets</h2>
            {
            planets.map((planet, key) => (
                <div key={planet.name} onClick={()=>showPlanets(key)} className="card">
                <h3>{planet.name}</h3>
                <p>Rotation Period: {planet.rotation_period} hours</p>
                <p>Orbital Period: {planet.orbital_period} days</p>
                <p>Diameter: {planet.diameter}m</p>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                </div>
            ))
            }
        </div>
    )
}}