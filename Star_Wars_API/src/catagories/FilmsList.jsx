import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const FilmsList = () => {
    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
     // this should be a single object once you've selected one

    useEffect(() => {
        const getFilms = async() => {
            const response = await axios.get(`https://swapi.dev/api/films/`)
            console.log(response.data.results)
            setFilms(response.data.results)
        }
        getFilms()
    },[])



    function getFilmId(url) {
        let urlParts = url.split('/')
        return urlParts[urlParts.length-2]
        // return parseInt(url.split('/').slice(-2, -1)[0], 10);
    }

    return(
        <div className="film">
            <h2>List of films</h2>
            {
                films.map((film, key) => (
                    <Link key={ key } to={`/films/${getFilmId(film.url)}`}>
                    <div className="card">
                        <h3>{ film.title }</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default FilmsList