import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/')
        setVehicles(response.data.results)
      } catch (error) {
        console.error('Error fetching vehicles:', error)
      }
    }

    fetchVehicles()
  }, [])

  return (
    <div>
      <h2>Vehicles List</h2>
      {vehicles.map((vehicle) => (
        <div key={vehicle.url}>
          <Link to={`/vehicles/${vehicle.url.split('/').slice(-2)[0]}`}>
            {vehicle.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default VehiclesList