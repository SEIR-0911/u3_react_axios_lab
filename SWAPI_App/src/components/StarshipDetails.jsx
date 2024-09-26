import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

export default function StarshipDetails() {
//useParams() is taking the id from what's in the route in Main.js. Destructuring the id to what is at the end of the url in Main.
    const {id} = useParams()

    //useState is the state of the component variable
    const [starship, setStarship] = useState(null)

    useEffect(() => {
        const getStarship = async() => {
            const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
            setStarship(response.data)
        }
        getStarship()
    }, [])
console.log(starship)
    return starship ? (
        <div className='detail'>
            <h2>Name: {starship.name}</h2>
            <h4>Crew: {starship.crew}</h4>
            <h4>Cargo: {starship.cargo_capacity}</h4>
            <h4>Passengers: {starship.passengers}</h4>
            {/* <h4>Films: {starship.films[i]}</h4> */}
            <Link to='/starships'> Return to Starship List</Link>
        </div>
    ) : <h3>Finding Starships....</h3>

  }