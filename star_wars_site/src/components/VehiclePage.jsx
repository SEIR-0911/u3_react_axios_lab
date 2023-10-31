import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'

export default function VehiclePage (props) {
    let { name } = useParams()
    const [vehicle, setVehicle] = useState('')

    useEffect(() => {
        let selectedVehicle = props.vehicles.find((vehicle) => vehicle.name === name)
        setVehicle(selectedVehicle)
    }, [props.vehicles, name])
    return (
        <div className="vehicle-outer">
            <h1 className="page-head vehicle-head">{vehicle.name}</h1>
            <div className="vehicle-info">
                <div>Model: {vehicle.model}</div>
                <div>Manufacturer: {vehicle.manufacturer}</div>
                <div>Cost in Credits: {vehicle.cost_in_credits}</div>
                <div>Max Speed: {vehicle.max_atmosphering_speed}</div>
            </div>
            <div className="vehicle-info">
                <div>Length: {vehicle.length}</div>
                <div>Crew: {vehicle.crew}</div>
                <div>Passengers: {vehicle.passengers}</div>
                <div>Cargo Capacity: {vehicle.cargo_capacity}</div>
                <div>Vehicle Class: {vehicle.vehicle_class}</div>
            </div>
            <button className="go-back"><Link to='/vehicles' className="link">Back to Vehicles</Link></button>
        </div>
    )
}