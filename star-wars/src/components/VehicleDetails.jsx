import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../global'
import axios from 'axios'

const VehicleDetails = () => {

    let { id } = useParams()

    const [vehicles, setVehicles] = useState('')

    useEffect(() => {
        const getVehicles = async() => {
            const response = await axios.get(`${BASE_URL}/vehicles`)
            setVehicles(response.data.results[id])
        }
        getVehicles()
    }, [])

    return vehicles ? (
        <div className='detail'>
            <h2>Name: {vehicles.name}</h2>
            <h4>Cost: {vehicles.cost_in_credits}</h4>
            <h4>Passengers: {vehicles.passengers}</h4>
            <h4>Model: {vehicles.model}</h4>
            <h4>Crew: {vehicles.crew}</h4>
            <button className='button-30'>
                <Link to='/vehicles'> Return to Vehicles List</Link>
            </button>
        </div>
    ) : <h3>Finding vehicles....</h3>


}

export default  VehicleDetails