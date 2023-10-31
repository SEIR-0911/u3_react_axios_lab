import axios from "axios"
import { useState, useEffect } from 'react'
import { BASE_URL } from "../../globals"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function VehicleDetails() {

    const initialState = {
        name: ''
    }
    const { name } = useParams()
    const [vehicle, setVehicle] = useState(initialState)

    useEffect(() => {
        async function getVehicle() {

            const result = await axios.get(`${BASE_URL}vehicles/?search=${name}`)

            setVehicle(result.data.results[0])
        }

        getVehicle(name)

    }, [vehicle])

    return( vehicle !== initialState?
        <div className="details">
            <Link className="back" to='/vehicles'>Back</Link>
            <h1 className='detailName'>{name}</h1>
            <ul>
                <li className='listItem'>Model: {vehicle.model}</li>
                <li className='listItem'>Mfr: {vehicle.manufacturer}</li>
                <li className='listItem'>Class: {vehicle.vehicle_class}</li>
                <li className='listItem'>Top Speed: {vehicle.max_atmosphering_speed}</li>
                <li className='listItem'>Length: {vehicle.length}</li>
                <li className='listItem'>Crew: {vehicle.crew}</li>
                <li className='listItem'>Passenger Capacity: {vehicle.passengers}</li>
                <li className='listItem'>Cargo Capacity: {vehicle.cargo_capacity}</li>
            </ul>
        </div> : <h1>Loading Vehicle Data...</h1>
    ) 
}