import { Link } from "react-router-dom"

const Nav = () => {
    return <div className="Navbar">
        <Link to="/starshiplist"> StarshipList </Link>
        <Link to="/filmslist"> Filmslist </Link>
        <Link to="/"> Home </Link>
    </div>
}

export default Nav