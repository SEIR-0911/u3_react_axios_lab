import { useState, useEffect } from 'react'
import { BASE_URL } from '../../globals'
import PlanetObj from './PlanetObj'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Planets() {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
            const result = await axios.get(`${BASE_URL}/planets`)
            // console.log(result)
            setPlanets(result.data.results)
        }
        getPlanets()
    })

    return (
        <div className='list'>
            <Link className='back' to='/'>Back</Link>
            <PlanetObj planets={planets} />
        </div>
    )
}