import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function VehiclesList() {
  const [vehicles, setVehicles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}vehicles`)
        setVehicles(response.data.results)
      } catch (error) {
        console.error("Error fetching Vehicle data:", error)
      }
    }
    getVehicles()
  }, [])

  const showVehicle = (vehicleUrl) => {
    navigate(`${encodeURIComponent(vehicleUrl)}`)
  }

  if (vehicles.length === 0) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div className="vehicles">
        <h2>List of Vehicles</h2>
        {vehicles.map((vehicle) => (
          <div key={vehicle.name} onClick={() => showVehicle(vehicle.url)} className="card">
            <h3>{vehicle.name}</h3>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Length: {vehicle.length}m</p>
            <p>Max Speed: {vehicle.max_atmosphering_speed} kph</p>
            <p>Passengers: {vehicle.passengers}</p>
          </div>
        ))}
      </div>
    )
  }
}
