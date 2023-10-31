import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    
    <div className='navbar'>
        <Link to='/'> Home </Link>
        <Link to='/Starships'> Starships </Link>
        <Link to='/Planets'> Planets </Link>
        <Link to='/Films'> Films </Link>
        <Link to='/Characters'> Characters </Link>
        <Link to='Vehicles'> Vehicles </Link>
    </div>
    )
}

export default Nav