//show /details page
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const StarShipPage = (props) => {
  
  let { id } = useParams()
  console.log(id)
  const [starship, setStarship] = useState('')

  useEffect(()=>{
    const getStarship = async() => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarship(response.data.results[id])
    }
    getStarship()
  },[])

  console.log(starship)

  return starship ? (
    <div className="detail">
      <p>{starship.name}</p>
      <p>{starship.model}</p>
      <p>{starship.manufacturer}</p>
      

      <Link to="/starship">Back to Listings</Link>
    </div>
  ) : null;
}

export default StarShipPage