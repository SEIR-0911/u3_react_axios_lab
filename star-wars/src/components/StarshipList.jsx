import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'
import { useNavigate } from 'react-router-dom'


let response
const StarshipList = (props) => {


    const [starships, setStarships] = useState([])
    
    useEffect(() => {
        const getStarships = async () => {
            response = await axios.get(`${BASE_URL}/starships`)
            console.log(response)
            setStarships(response.data.results)
        }
        getStarships()
    }, [])

    let navigate = useNavigate()

    const showShip = (index) => {
        navigate(`${index}`)
    }


    if( !response ) {
        return <h2>May the Force be with you....</h2> //this is a guard operator that will show something while something else is missing or loading
    } else {
        return(
            <div className="starship">
                {
                    starships.map((starship, index) => (
                        <div className='ship-card' onClick={() => showShip(index)} key={index}>
                            <h3>{starship.name}</h3>
                        </div>
                    ))}
            </div>
            )
    }
}

export default StarshipList