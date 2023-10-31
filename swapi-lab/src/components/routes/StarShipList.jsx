import { useState, useEffect } from 'react'
import { BASE_URL } from '../../globals'
import StarShipObj from './StarShipObj'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function StarShipList() {

    const [starships, setStarShips] = useState([]) //this is going to be an empty array because we're going to get an array of starships from the api

    useEffect(() => {

        //the useEffect callback function itself can't ba async, but you can stick an async function into it
        const getStarShips = async () => {
            const result = await axios.get(`${BASE_URL}/starships/`)
            // console.log(result)
            setStarShips(result.data.results) //race condition! setting is non-blocking!
        }
        getStarShips()


    }, [])

    return (
        <div className='list'>
            <Link className='back' to='/'>Back</Link>
            <StarShipObj starships={starships} />
        </div>
    )
}