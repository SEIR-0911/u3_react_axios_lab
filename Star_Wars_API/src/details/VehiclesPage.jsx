import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const VehiclesPage = () => {
    //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  const [vehicles, setVehicles] = useState(null)


  useEffect(() => {
   const getVehicles = async () => {
     try {
       const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`);
       setVehicles(response.data);
     } catch (error) {
       console.error(error)
     }
   }
   getVehicles();
 }, [])


   return vehicles ? (
      <div className="details">
         <h2>{ vehicles.name }</h2>
         <h3>Product of: { vehicles.manufacturer }</h3>
         <h3>Cost: { vehicles.cost_in_credits } credits</h3>
         <h3>Crew Capacity: { vehicles.crew }</h3>
         <h3>Passenger Capacity: { vehicles.passengers }</h3>
         <h3>Cargo Capacity: { vehicles.cargo_capacity }</h3>
         <h3>Vehicle Class: { vehicles.vehicle_class }</h3>
         <button><Link to="/vehicles"> Return to full list </Link></button>
      </div>
   ) : (
      <div className="details">
        <h2>Retrieving your Info...</h2>
        <button>
          <Link to="/vehicles">Return to full list</Link>
        </button>
      </div>
    )
  }
export default VehiclesPage