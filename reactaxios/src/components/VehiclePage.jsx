import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function VehiclePage() {
    const [vehicle, setVehicle] = useState(null)
    const { vehicleUrl } = useParams()
    useEffect(() => {
        const fetchVehicleDetails = async () => {
            try {
                const response = await axios.get(decodeURIComponent(vehicleUrl))
                setVehicle(response.data)
            } catch (error) {
                console.error("Error fetching Vehicle data:", error)
            }
        }

        fetchVehicleDetails()
    }, [vehicleUrl])

    return (
        <div>
            <h2>Vehicle Details</h2>
            {vehicle ? (
                <div>
                    <h3>{vehicle.name}</h3>
                    <p>Model: {vehicle.model}</p>
                    <p>Manufacturer: {vehicle.manufacturer}</p>
                    <p>Length: {vehicle.length}m</p>
                    <p>Max Speed: {vehicle.max_atmosphering_speed} kph</p>
                    <p>Passengers: {vehicle.passengers}</p>
                </div>
            ) : (
                <p>Loading Vehicle Details...</p>
            )}
        </div>
    )
}



