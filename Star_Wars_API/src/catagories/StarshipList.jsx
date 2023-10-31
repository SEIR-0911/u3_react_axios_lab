import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const StarshipList = () => {
    const [starships, setStarships] = useState([])
    const [selectedStarship, setSelectedStarship] = useState(null)
     // this should be a single object once you've selected one

    useEffect(() => {
        const getStarships = async() => {
            const response = await axios.get(`https://swapi.dev/api/starships/`)
            console.log(response.data.results)
            setStarships(response.data.results)
        }
        getStarships()
    },[])



    function getStarshipId(url) {
        let urlParts = url.split('/')
        return urlParts[urlParts.length-2]
        // return parseInt(url.split('/').slice(-2, -1)[0], 10);
    }

    return(
        <div className="starship">
            <h2>List of Starships</h2>
            {
                starships.map((starship, key) => (
                    <Link key={ key } to={`/starships/${getStarshipId(starship.url)}`}>
                    <div className="card">
                        <h3>{ starship.name }</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default StarshipList