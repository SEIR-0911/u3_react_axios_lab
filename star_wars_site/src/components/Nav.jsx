import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/" className='link'>Home</Link>
            <Link to="/starships" className='link'>Starships</Link>
            <Link to="/planets" className='link'>Planets</Link>
            <Link to="/characters" className='link'>Characters</Link>
            <Link to="/species" className='link'>Species</Link>
            <Link to="/vehicles" className='link'>Vehicles</Link>
            <Link to="/films" className='link'>Films</Link>
        </div>
    )
}