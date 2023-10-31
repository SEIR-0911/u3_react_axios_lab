//Show /details page
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../globals'


const FilmsPage = (props) => {

  let { id } = useParams()
  const [film, setFilm] = useState()
  let navigate = useNavigate()


    useEffect(() => {
        const getFilm = async () => {
                const response = await axios.get(`${BASE_URL}films/`)
                setFilm(response.data.results[id])
            }
        getFilm()
    })


  return film ? (
    <div className="detail">
          <h1>{film.name}</h1>
      <div className="info-wrapper">
                <h3>Name: {film.title}</h3>
                <h5>Opening Crawl: {film.opening_crawl}</h5>
                <h5>Director: {film.director}</h5>
                <h5>Producer: {film.producer}</h5>
                <h5>Release Date: {film.release_date}</h5>
 

        </div>
        <button onClick={() => (navigate('/Films'))}>  back</button>
    </div>
  ) : <h3>Finding films...</h3>
}

export default FilmsPage
