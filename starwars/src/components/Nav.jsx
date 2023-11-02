import { Link } from "react-router-dom"


const Nav = () => {

    const linkStyle = {
        fontSize: '24px', 
        
    };

    return <div className="Navbar">
        <Link to="/StarshipList" style={linkStyle}> Starship </Link>
        <Link to="/Characters" style={linkStyle}> Character </Link>
        <Link to="/Films" style={linkStyle}> Films </Link>
        <Link to="/" style={linkStyle}> Home </Link>
    </div>
}

export default Nav