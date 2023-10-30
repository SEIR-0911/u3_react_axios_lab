import { Link } from 'react-router-dom'

function Nav() {
    return (
    <div className="nav-links">
        <Link to = "/"><h2>Home</h2></Link>
        <Link to = "/starships"><h2 id="starships">Starships</h2></Link>
        <Link to = "/films"><h2>Films</h2></Link>
        <Link to = "/planets"><h2>Planets</h2></Link>
        <Link to = "/people"><h2>Characters</h2></Link>
    </div>
    )
}

export default Nav