import { useState, useEffect } from 'react'
import { BASE_URL } from '../../globals'
import VehicleObj from './VehicleObj'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Vehicles() {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            const results = await axios.get(`${BASE_URL}/vehicles/`)
            setVehicles(results.data.results)
        }
        getVehicles()

    }, [])

    return (
        <div className='list'>
            <Link className='back' to='/'>Back</Link>
            <VehicleObj vehicles={vehicles} />
        </div>
    )
}