import { Link } from 'react-router-dom'

function Nav() {
    return (
    <div className="nav-links">
        <Link to = "/"><h2>Home</h2></Link>
        <Link to = "/starships"><h2>Starships</h2></Link>
    </div>
    )
}

export default Nav