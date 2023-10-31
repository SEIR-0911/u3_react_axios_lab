import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const StarshipPage = () => {
    //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  const [starship, setStarship] = useState(null)


  useEffect(() => {
   const getStarship = async () => {
     try {
       const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
       setStarship(response.data);
     } catch (error) {
       console.error(error)
     }
   }
   getStarship();
 }, [])


   return starship ? (
      <div className="details">
         <h2>Ship Name: { starship.name }</h2>
         <h3>Product of: { starship.manufacturer }</h3>
         <h3>Cost: { starship.cost_in_credits } credits</h3>
         <h3>Crew Capacity: { starship.crew }</h3>
         <h3>Passenger Capacity: { starship.passengers }</h3>
         <h3>Cargo Capacity: { starship.cargo_capacity }</h3>
         <h3>Hyperdrive Rating: { starship.hyperdrive_rating }</h3>
         <button><Link to="/starships"> Return to full list </Link></button>
      </div>
   ) : (
      <div className="details">
        <h2>Retrieving your Info...</h2>
        <button>
          <Link to="/starships">Return to full list</Link>
        </button>
      </div>
    )
  }
export default StarshipPage