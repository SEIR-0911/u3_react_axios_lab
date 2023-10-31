import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function vehiclesDetails() {

const [vehicles, setVehicles] = useState()

let {id} = useParams()

useEffect(() => {
    const getVehicles = async() => {
        const response = await axios.get(`${BASE_URL}vehicles`)
        setVehicles(response.data.results[id])
    }
    getVehicles()
}, [])

return vehicles ? (
    <div className="detail">
        <h3>{vehicles.name}</h3>
        <p>Model: {vehicles.model}</p>
        <p>Manufacturer: {vehicles.manufacturer}</p>
        <p>Length: {vehicles.length}m</p>
        <p>Max Speed: {vehicles.max_atmosphering_speed} kph</p>
        <p>Passengers: {vehicles.passengers}</p>
        <Link to="/VehiclesList"> Return to Vehicles list</Link>
    </div>
) : <h2 className="Finding">Finding Vehicles...</h2>

}