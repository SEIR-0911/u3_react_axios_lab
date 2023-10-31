//show /details page
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const PlanetPage = (props) => {
  //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  console.log(id)
  const [planet, setPlanet] = useState('')

  useEffect(()=>{
    const getPlanet = async() => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)
      setPlanet(response.data.results[id])
    }
    getPlanet()
  },[])

  console.log(planet)

  return planet ? (
    <div className="detail">
      <p>{planet.name}</p>
      <p>Diameter:{planet.diameter}</p>
      <p>Climate:{planet.climate}</p>
      

      <Link to="/planet">Back to Listings</Link>
    </div>
  ) : null;
}

export default PlanetPage