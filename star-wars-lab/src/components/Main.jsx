import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import Characters from './Characters'
import Films from './Films'
import Planets from './Planets'
import StarshipPage from './StarshipPage'
import PlanetsPage from './PlanetsPage'
import FilmsPage from './FilmsPage'
import CharactersPage from './CharactersPage'

export default function Main (props){
    return (
        
        <div className="main">
            <Routes>
                <Route exact path ="/" element ={<Home/>} />
                <Route exact path ="/StarshipList" element ={<StarshipList starships={props.starship}/>} />    
                <Route exact path ="/Films" element ={<Films film={props.film}/>} />    
                <Route exact path ="/Planets" element ={<Planets planet={props.planet}/>} />    
                <Route exact path ="/Characters" element ={<Characters character={props.character}/>} />   
                <Route exact path ="/StarshipList/:id" element ={<StarshipPage starship={props.starship}/>} />   
                <Route exact path ="/Planets/:id" element ={<PlanetsPage planets={props.planets}/>} />   
                <Route exact path ="/Films/:id" element ={<FilmsPage films={props.films}/>} />   
                <Route exact path ="/Characters/:id" element ={<CharactersPage characters={props.characters}/>} />   
            </Routes>
        </div>
)
} 