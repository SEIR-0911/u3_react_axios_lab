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
    return <h1 className="Loading">Loading Please Wait...</h1>
} else {
    return(
        <div className="planets">
            
            {
            planets.map((planet, key) => (
                <div key={planet.name} onClick={()=>showPlanets(key)} className="card">
                <h3>{planet.name}</h3>
                </div>
            ))
            }
        </div>
    )
}}