import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const PeoplePage = () => {
    //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  const [people, setPeople] = useState(null)


  useEffect(() => {
   const getPeople = async () => {
     try {
       const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
       setPeople(response.data);
     } catch (error) {
       console.error(error)
     }
   }
   getPeople();
 }, [])


   return people ? (
      <div className="details">
         <h2>{ people.name }</h2>
         <h3>Height: { people.height } cm</h3>
         <h3>Weight: { people.mass } kg</h3>
         <h3>Hair Color: { people.hair_color }</h3>
         <h3>Skin Color: { people.skin_color }</h3>
         <h3>Eye Color: { people.eye_color }</h3>
         <h3>DOB: { people.birth_year }</h3>
         <button><Link to="/people"> Return to full list </Link></button>
      </div>
   ) : (
      <div className="details">
        <h2>Retrieving your Info...</h2>
        <button>
          <Link to="/people">Return to full list</Link>
        </button>
      </div>
    )
  }
export default PeoplePage