import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import Header from './Header'



function Main () {
    

    return (
        
        <div className="Main">
            <div className='header-container'>
                <Header/>
            </div>
            <Routes>
                <Route path='/Starshiplist' element={<StarshipList/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main