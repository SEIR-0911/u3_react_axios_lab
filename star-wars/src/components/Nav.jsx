import { Link } from 'react-router-dom'

const Nav = () => {
    return <div className='navbar'>
        <Link to='/'> Home </Link>
        <Link to='/Starships'> Starships </Link>
    </div>
}