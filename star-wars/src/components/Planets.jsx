import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'
import { useNavigate } from 'react-router-dom'


let response
const Planets = (props) => {


    const [planets, setPlanets] = useState([])
    
    useEffect(() => {
        const getPlanets = async () => {
            response = await axios.get(`${BASE_URL}/planets`)
            console.log(response)
            setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    let navigate = useNavigate()

    const showPlanet = (index) => {
        navigate(`${index}`)
    }


    if( !response ) {
        return <h2>Let the Force be with you....</h2> //this is a guard operator that will show something while something else is missing or loading
    } else {
        return(
            <div className="planets">
                {
                    planets.map((planet, index) => (
                        <div className='planet-card' onClick={() => showPlanet(index)} key={index}>
                            <h3>{planet.name}</h3>
                        </div>
                    ))}
            </div>
            )
    }
}

export default Planets