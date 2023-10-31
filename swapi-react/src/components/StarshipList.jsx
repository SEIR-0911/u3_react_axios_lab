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
  return <h1 className="Loading">Loading Please Wait...</h1>
} else {
    return(
        <div className="starship">
            
            {
            starships.map((starship, key) => (
                <div key={starship.name} onClick={()=>showShip(key)} className="card">
                <h3>{starship.name}</h3>
                </div>
            ))
            }
        </div>
    )
}}