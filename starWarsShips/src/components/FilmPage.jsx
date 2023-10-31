//show /details page
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const FilmPage = (props) => {
  //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  console.log(id)
  const [film, setFilm] = useState('')

  useEffect(()=>{
    const getFilm = async() => {
      const response = await axios.get(`https://swapi.dev/api/films/`)
      setFilm(response.data.results[id])
    }
    getFilm()
  },[])

  console.log(film)

  return film ? (
    <div className="detail">
      <p>{film.title}</p>
      <p>{film.director}</p>
      

      <Link to="/film">Back to Listings</Link>
    </div>
  ) : null;
}

export default FilmPage