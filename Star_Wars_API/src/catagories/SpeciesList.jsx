import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const SpeciesList = () => {
    const [species, setSpecies] = useState([])
    const [selectedSpecies, setSelectedSpecies] = useState(null)
     // this should be a single object once you've selected one

    useEffect(() => {
        const getSpecies = async() => {
            const response = await axios.get(`https://swapi.dev/api/species/`)
            console.log(response.data.results)
            setSpecies(response.data.results)
        }
        getSpecies()
    },[])



    function getSpeciesId(url) {
        let urlParts = url.split('/')
        return urlParts[urlParts.length-2]
        // return parseInt(url.split('/').slice(-2, -1)[0], 10);
    }

    return(
        <div className="species">
            <h2>List of species</h2>
            {
                species.map((species, key) => (
                    <Link key={ key } to={`/species/${getSpeciesId(species.url)}`}>
                    <div className="card">
                        <h3>{ species.name }</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default SpeciesList