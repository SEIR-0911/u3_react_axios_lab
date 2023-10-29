import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import Planets from './Planets'
import Characters from './Characters'
import Films from './Films'


export default function Main (props) {
    // console.log(props)
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipList starships={props.starships}/>}/>
                <Route path="/planets" element={<Planets planets={props.planets}/>}/>
                <Route path="/characters" element={<Characters characters={props.characters}/>}/>
                <Route path="/films" element={<Films films={props.films}/>}/>
            </Routes>
        </div>
    )
}