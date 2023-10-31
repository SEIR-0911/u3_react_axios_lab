import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../global'
import axios from 'axios'

const planetDetails = () => {

    let { id } = useParams()

    const [planet, setPlanet] = useState('')

    useEffect(() => {
        const getplanet = async() => {
            const response = await axios.get(`${BASE_URL}/planets`)
            setPlanet(response.data.results[id])
        }
        getplanet()
    }, [])

    return planet ? (
        <div className='detail'>
            <h2>Name: {planet.name}</h2>
            <h4>Population: {planet.population}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Climate: {planet.climate}</h4>
            <button className='button-30'>
                <Link to='/planets'> Return to Planet List</Link>
            </button>
        </div>
    ) : <h3>Finding Planets....</h3>


}

export default planetDetails