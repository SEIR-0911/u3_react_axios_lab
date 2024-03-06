import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const VehicleDetails = () => {
  const { id } = useParams()
  const [vehicle, setVehicle] = useState(null)

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`)
        setVehicle(response.data)
      } catch (error) {
        console.error('Error fetching vehicle details:', error)
      }
    }

    fetchVehicleDetails()
  }, [id])

  return (
    <div>
      <h2>Vehicle Details</h2>
      {vehicle && (
        <div>
          <h3>{vehicle.name}</h3>
          <p>Model: {vehicle.model}</p>
          <p>Manufacturer: {vehicle.manufacturer}</p>
          <Link to="/vehicles">Return to Vehicles List</Link>
        </div>
      )}
    </div>
  )
}

export default VehicleDetails