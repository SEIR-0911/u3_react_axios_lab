import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/starships">Starships</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/films">Films</Link>
        </div>
    )
}