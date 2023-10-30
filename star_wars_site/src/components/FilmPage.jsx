import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function FilmPage (props) {
    let { episode_id } = useParams()
    const [film, setFilm] = useState('')
    console.log(props)
    useEffect(() => {
        let selectedFilm = props.films.find((film) => film.episode_id === parseInt(episode_id))
        setFilm(selectedFilm)
    }, [props.films, episode_id])
    
    return film ? (
        <div className="film-outer">
            <h1>{film.title}</h1>
            <button className="go-back"><Link to="/films">All Films</Link></button>
        </div>
    ) : <h3>Not Found</h3>
}