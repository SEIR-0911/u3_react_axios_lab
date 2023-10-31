import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'
import { useNavigate } from 'react-router-dom'


let response
const Vehicles = (props) => {


    const [vehicles, setVehicles] = useState([])
    
    useEffect(() => {
        const getVehicles = async () => {
            response = await axios.get(`${BASE_URL}/vehicles`)
            console.log(response)
            setVehicles(response.data.results)
        }
        getVehicles()
    }, [])

    let navigate = useNavigate()

    const showVehicles = (index) => {
        navigate(`${index}`)
    }


    if( !response ) {
        return <h2>May the Force be with you....</h2> //this is a guard operator that will show something while something else is missing or loading
    } else {
        return(
            <div className="vehicles">
                {
                    vehicles.map((vehicles, index) => (
                        <div className='vehicle-card' onClick={() => showVehicles(index)} key={index}>
                            <h3>{vehicles.name}</h3>
                        </div>
                    ))}
            </div>
            )
    }
}

export default Vehicles