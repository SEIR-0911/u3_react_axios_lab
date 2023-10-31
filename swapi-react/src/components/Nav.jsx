import { Link, useLocation } from 'react-router-dom'
import lightsaberAudio from '../assets/lightsaber.mp3'


//used chatgpt for adding audio and active menu item
function Nav () {
    const location = useLocation()
    const activeMenuItemClass = 'active-menu-item'

    const lightsaberSound = new Audio(lightsaberAudio)
    const playLightsaberSound = () => {
        lightsaberSound.play()
        lightsaberSound.volume = 0.5
    }
    return (
        <div className="Navbar">
            <Link to="/" className={location.pathname === '/' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>Home</Link>
            <Link to="/StarshipList" className={location.pathname === '/StarshipList' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>Starships</Link>
            <Link to="/SpeciesList" className={location.pathname === '/SpeciesList' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>Species</Link>
            <Link to="/PeopleList" className={location.pathname === '/PeopleList' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>People</Link>
            <Link to="/FilmsList" className={location.pathname === '/FilmsList' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>Films</Link>
            <Link to="/VehiclesList" className={location.pathname === '/VehiclesList' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>Vehicles</Link>
            <Link to="/PlanetsList" className={location.pathname === '/PlanetsList' ? activeMenuItemClass : ''} onClick={playLightsaberSound}>Planets</Link>
        </div>
    )
}

export default Nav