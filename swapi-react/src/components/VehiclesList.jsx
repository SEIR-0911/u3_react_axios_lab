import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function VehiclesList(){

//setting our state for data to be pulled
const [vehicles, setVehicles] = useState([])

useEffect(()=>{
  const getVehicles = async() => {
    const response = await axios.get(`${BASE_URL}vehicles`)
    setVehicles(response.data.results)
    console.log(response)
  }
  getVehicles()
},[])

let navigate = useNavigate()

const showVehicles = (key) => {
  navigate(`${key}`)
}

if (vehicles.length === 0) {
  return <h1 className="Loading">Loading Please Wait...</h1>
} else {
    return(
        <div className="vehicles">
            
            {
            vehicles.map((vehicle, key) => (
                <div key={vehicle.name} onClick={()=>showVehicles(key)} className="card">
                <h3>{vehicle.name}</h3>
                </div>
            ))
            }
        </div>
    )
}}