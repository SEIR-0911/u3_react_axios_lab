import { Link } from 'react-router-dom'
export default function Nav() {

    return (
        <div className='navbar'>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/starships'>Starships</Link>
            <Link className='navLink' to='/planets'>Travel Destinations</Link>
            <Link className='navLink'  to='/characters'>Travel Companions</Link>
            <Link className='navLink' to='/vehicles'>On-World Rentals</Link>
        </div>
    )
}