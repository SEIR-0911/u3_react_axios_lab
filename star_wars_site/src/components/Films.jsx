import { Link, useNavigate } from "react-router-dom"

export default function Films (props) {
    let navigate = useNavigate()
    const showFilm = (film) => {
        navigate(`${film.episode_id}`)
    }

    if (props.films === 0){
        return (
            <h2>loading...</h2>
        )
    } else {
        return (
            <div className="films-outer">
                <h1 className="page-head film-head">Films</h1>
                <div className="outer">
                    {props.films.map((film, index)=>(
                        <div className="films-card card" id={`film${film.episode_id}`} onClick={() => showFilm(film)} key={index}>
                            <div className="film-card-info">
                                <h2>{film.title}</h2>
                                Episode {film.episode_id}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="go-back"><Link to="/" className="link">Home</Link></button>
            </div>
        )
    }
}