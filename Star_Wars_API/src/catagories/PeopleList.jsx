import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const PeopleList = () => {
    const [people, setPeople] = useState([])
    const [selectedPeople, setSelectedPeople] = useState(null)
     // this should be a single object once you've selected one

    useEffect(() => {
        const getPeople = async() => {
            const response = await axios.get(`https://swapi.dev/api/people/`)
            console.log(response.data.results)
            setPeople(response.data.results)
        }
        getPeople()
    },[])



    function getPeopleId(url) {
        let urlParts = url.split('/')
        return urlParts[urlParts.length-2]
        // return parseInt(url.split('/').slice(-2, -1)[0], 10);
    }

    return(
        <div className="people">
            <h2>List of people</h2>
            {
                people.map((people, key) => (
                    <Link key={ key } to={`/people/${getPeopleId(people.url)}`}>
                    <div className="card">
                        <h3>{ people.name }</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default PeopleList