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
            <h1 className="page-head film-head">{film.title}</h1>
            <div className="film-scroll">
                <div className="film-text">
                    <h3>Episode {film.episode_id}</h3>
                    <div>{film.opening_crawl}</div>
                </div>
            </div>
            <button className="go-back"><Link to="/films" className="link">All Films</Link></button>
        </div>
    ) : <h3>Not Found</h3>
}