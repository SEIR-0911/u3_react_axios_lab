import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../global'
import axios from 'axios'

const FilmDetails = () => {

    let { id } = useParams()

    const [films, setFilms] = useState('')

    useEffect(() => {
        const getFilms = async() => {
            const response = await axios.get(`${BASE_URL}/films`)
            setFilms(response.data.results[id])
        }
        getFilms()
    }, [])

    return films ? (
        <div className='detail'>
            <h2>Title: {films.title}</h2>
            <h4>Episode: {films.episode_id}</h4>
            <h4>Director: {films.director}</h4>
            <h4>Release Date: {films.release_date}</h4>
            {/* <h4>Characters: {films.characters}</h4> */}
            <Link to='/films'> Return to Films List</Link>
        </div>
    ) : <h3>Finding films....</h3>


}

export default FilmDetails