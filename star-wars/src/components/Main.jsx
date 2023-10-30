import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import Header from './Header'


function Main () {

    return (
        
        <div className="main">
            <div className='header-container'>
                <Header/>
            </div>
            <Routes>
                <Route path='/starships' element={<StarshipList/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main