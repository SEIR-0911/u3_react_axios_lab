import { Link } from "react-router-dom"

const Nav = () => {
    return <div className="Navbar">
        <button><Link to="/"> Home </Link></button>
        <button><Link to="/starshiplist"> Starships</Link></button>
        <button><Link to="/filmslist"> Films</Link></button>
        <button><Link to="/peopleList"> People</Link></button>
        <button><Link to="/planetList"> Planets</Link></button>
    </div>
}

export default Nav