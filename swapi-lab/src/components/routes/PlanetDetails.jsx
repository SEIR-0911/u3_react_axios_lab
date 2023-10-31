import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../globals"
import axios from "axios"
import { Link } from "react-router-dom"

export default function PlanetDetauls() {
    
    const initialState={
        name: ''
    }
    const {name} = useParams()
    const [planet, setPlanet] = useState(initialState)

    useEffect(() => {
        async function getPlanet(name){
            const result = await axios.get(`${BASE_URL}planets/?search=${name}`)

            setPlanet(result.data.results[0])
        }
        getPlanet(name)
    }, [planet])

    return ( planet !== initialState ?
        <div className='details'>
            <Link className='back' to='/planets'>Back</Link>
            <h1>{name}</h1>
            <ul>
                <li className='listItem'>Diameter: {planet.diameter}</li>
                <li className='listItem'>Gravity: {planet.gravity}</li>
                <li className='listItem'>Terrain: {planet.terrain}</li>
                <li className='listItem'>Climate: {planet.climate}</li>
                <li className='listItem'>Surface Water Rating: {planet.surface_water}</li>
                <li className='listItem'>Pop.: {planet.population}</li>
            </ul>
        </div> : <h1>Data loading...</h1>
    )
}

