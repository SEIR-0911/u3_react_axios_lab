import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../globals"
import axios from "axios"
import { Link } from "react-router-dom"

export default function StarshipDetails() {

    const initialState = {
        name: ''
    }
    const { name } = useParams()
    const [starship, setStarship] = useState(initialState)

    useEffect(() => {

        async function getStarship(name) {
            const result = await axios.get(`${BASE_URL}starships/?search=${name}`)

            setStarship(result.data.results[0])
        }
        getStarship(name)

    }, [starship])


    return (starship !== initialState ?
        (<div className='details'>
            <Link className='back' to='/starships'>Back</Link>
            <h1>{name}</h1>
            <ul>
                <li className='listItem'>Manufacturer: {starship.manufacturer}</li>
                <li className='listItem'>Class: {starship.starship_class}</li>
                <li className='listItem'>Length: {starship.length}</li>
                <li className='listItem'>MGLT: {starship.MGLT}</li>
                <li className='listItem'>Hyperdrive Rating: {starship.hyperdrive_rating}</li>
                <li className='listItem'>Crew size: {starship.crew}</li>
                <li className='listItem'>Passenger Capacity: {starship.passengers}</li>
            </ul>
        </div>): (<h1>Data loading...</h1>)
    )
}


