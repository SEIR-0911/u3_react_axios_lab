import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const PlanetsPage = () => {
    //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  const [planet, setPlanet] = useState(null)


  useEffect(() => {
   const getPlanets = async () => {
     try {
       const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
       setPlanet(response.data);
     } catch (error) {
       console.error(error)
     }
   }
   getPlanets();
 }, [])


   return planet ? (
      <div className="details">
         <h2>{ planet.name }</h2>
         <h3>Climate: { planet.climate }</h3>
         <h3>Gravity: { planet.gravity }</h3>
         <h3>Terrain: { planet.terrain }</h3>
         <h3>Population: { planet.population }</h3>
         <button><Link to="/planets"> Return to full list </Link></button>
      </div>
   ) : (
      <div className="details">
        <h2>Retrieving your Info...</h2>
        <button>
          <Link to="/planets">Return to full list</Link>
        </button>
      </div>
    )
  }
export default PlanetsPage