import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([])
    const [selectedVehicle, setSelectedVehicle] = useState(null)
     // this should be a single object once you've selected one

    useEffect(() => {
        const getVehicles = async() => {
            const response = await axios.get(`https://swapi.dev/api/vehicles/`)
            console.log(response.data.results)
            setVehicles(response.data.results)
        }
        getVehicles()
    },[])



    function getVehicleId(url) {
        let urlParts = url.split('/')
        return urlParts[urlParts.length-2]
        // return parseInt(url.split('/').slice(-2, -1)[0], 10);
    }

    return(
        <div className="vehicle">
            <h2>List of vehicles</h2>
            {
                vehicles.map((vehicle, key) => (
                    <Link key={ key } to={`/vehicles/${getVehicleId(vehicle.url)}`}>
                    <div className="card">
                        <h3>{ vehicle.name }</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default VehicleList