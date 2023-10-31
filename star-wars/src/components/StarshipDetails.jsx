import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../global'
import axios from 'axios'

const StarshipDetails = () => {

    let { id } = useParams()

    const [starship, setStarship] = useState('')

    useEffect(() => {
        const getStarship = async() => {
            const response = await axios.get(`${BASE_URL}/starships`)
            setStarship(response.data.results[id])
        }
        getStarship()
    }, [])

    return starship ? (
        <div className='detail'>
            <h2>Name: {starship.name}</h2>
            <h4>Crew: {starship.crew}</h4>
            <h4>Cargo: {starship.cargo_capacity}</h4>
            <h4>Passengers: {starship.passengers}</h4>
            <button className='button-30'>
                <Link to='/starships'> Return to Starship List</Link>
            </button>
        </div>
    ) : <h3>Finding Starships....</h3>


}

export default StarshipDetails