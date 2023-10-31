import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const FilmsPage = () => {
    //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  const [film, setFilm] = useState(null)


  useEffect(() => {
   const getFilms = async () => {
     try {
       const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
       setFilm(response.data);
     } catch (error) {
       console.error(error)
     }
   }
   getFilms();
 }, [])


   return film ? (
      <div className="details">
         <h2>{ film.title }</h2>
         <h3>Episode: { film.episode_id }</h3>
         <h3>Directed by: { film.director } credits</h3>
         <h3>Date released: { film.release_date }</h3>
         <h4 className="open-text">{ film.opening_crawl }</h4>
         <button><Link to="/films"> Return to full list </Link></button>
      </div>
   ) : (
      <div className="details">
        <h2>Retrieving your Info...</h2>
        <button>
          <Link to="/films">Return to full list</Link>
        </button>
      </div>
    )
  }
export default FilmsPage