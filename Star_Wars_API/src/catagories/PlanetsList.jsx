import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const PlanetsList = () => {
    const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState(null)
     // this should be a single object once you've selected one

    useEffect(() => {
        const getPlanets = async() => {
            const response = await axios.get(`https://swapi.dev/api/planets/`)
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanets()
    },[])



    function getPlanetId(url) {
        let urlParts = url.split('/')
        return urlParts[urlParts.length-2]
        // return parseInt(url.split('/').slice(-2, -1)[0], 10);
    }

    return(
        <div className="planet">
            <h2>List of planets</h2>
            {
                planets.map((planet, key) => (
                    <Link key={ key } to={`/planets/${getPlanetId(planet.url)}`}>
                    <div className="card">
                        <h3>{ planet.name }</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default PlanetsList