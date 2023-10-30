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
                <h1 className="page-head">Films</h1>
                <div className="outer">
                    {props.films.map((film, index)=>(
                        <div className="films-card card" onClick={() => showFilm(film)} key={index}>
                            <h2>{film.title}</h2>
                            <div>Episode {film.episode_id}</div>
                        </div>
                    ))}
                </div>
                <button className="go-back"><Link to="/">Home</Link></button>
            </div>
        )
    }
}