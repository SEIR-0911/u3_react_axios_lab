import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function StarshipsList(){

//setting our state for data to be pulled
const [starships, setStarships] = useState([])

useEffect(()=>{
  const getStarships = async() => {
    const response = await axios.get(`${BASE_URL}starships`)
    setStarships(response.data.results)
    console.log(response)
  }
  getStarships()
},[])

let navigate = useNavigate()

const showShip = (key) => {
  navigate(`${key}`)
}

if (starships.length === 0) {
  return <h2>Loading Please Wait...</h2>
} else {
    return(
        <div className="starship">
            <h2>List of Starships</h2>
            {
            starships.map((starship, key) => (
                <div key={starship.name} onClick={()=>showShip(key)} className="card">
                <h3>{starship.name}</h3>
                <p>Model: {starship.model}</p>
                <p>Class: {starship.starship_class}</p>
                <p>Crew: {starship.crew}</p>
                </div>
            ))
            }
        </div>
    )
}}