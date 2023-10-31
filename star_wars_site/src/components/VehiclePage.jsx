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
            <h1>{vehicle.name}</h1>
        </div>
    )
}