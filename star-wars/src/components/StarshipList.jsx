import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'


let response
const StarshipList = () => {

    const [starships, setStarships] = useState([])
    
    useEffect(() => {
        const getStarships = async () => {
            response = await axios.get(`${BASE_URL}/starships`)
            console.log(response)
            setStarships(response.data.results)
        }
        getStarships()
    }, [])


    if( !response ) {
        return <h2>Let the Force be with you....</h2> //this is a guard operator that will show something while something else is missing or loading
    } else {
        return(
            <div className="starship">
                {
                    starships.map((starship, index) => (
                        <div key={index}>
                            <h3>{starship.name}</h3>
                        </div>
                    ))}
            </div>
            )
    }
}

export default StarshipList