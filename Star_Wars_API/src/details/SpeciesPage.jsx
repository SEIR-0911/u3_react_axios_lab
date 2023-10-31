import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const SpeciesPage = () => {
    //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  const [species, setSpecies] = useState(null)


  useEffect(() => {
   const getSpecies = async () => {
     try {
       const response = await axios.get(`https://swapi.dev/api/species/${id}/`);
       setSpecies(response.data);
     } catch (error) {
       console.error(error)
     }
   }
   getSpecies();
 }, [])


   return species ? (
      <div className="details">
         <h2>{ species.name }</h2>
         <h3>Classification: { species.classification }</h3>
         <h3>Designation: { species.designation }</h3>
         <h3>Average Lifespan: { species.average_lifespan }</h3>
         <h3>Language: { species.language }</h3>
         <button><Link to="/species"> Return to full list </Link></button>
      </div>
   ) : (
      <div className="details">
        <h2>Retrieving your Info...</h2>
        <button>
          <Link to="/species">Return to full list</Link>
        </button>
      </div>
    )
  }
export default SpeciesPage