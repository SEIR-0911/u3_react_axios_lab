import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        
        <div className="nav">
            <Link className='link' to="/"> Home </Link>
            <Link className='link' to="/Planets"> Planets </Link>
            <Link className='link' to="/StarshipList"> Starship </Link>
            <Link className='link' to="/Vehicles"> Vehicles </Link>
            <Link className='link' to="/People"> People </Link>
            <Link className='link' to="/Films"> Films </Link>
            <Link className='link' to="/Species"> Species </Link>

        </div>
)
}