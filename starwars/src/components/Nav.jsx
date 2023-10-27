import { Link } from "react-router-dom"

const Nav = () => {
    return <div className="Navbar">
        <Link to="/StarshipList"> Starship </Link>
        <Link to="/"> Home </Link>
    </div>
}

export default Nav