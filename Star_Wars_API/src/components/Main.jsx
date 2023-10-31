import { Route,Routes } from "react-router-dom"

import Home from "./Home"

import FilmsList from "../catagories/FilmsList"
import FilmsPage from "../details/FilmsPage"

import PeopleList from "../catagories/PeopleList"
import PeoplePage from "../details/PeoplePage"

import PlanetsList from "../catagories/PlanetsList"
import PlanetsPage from "../details/PlanetsPage"

import SpeciesList from "../catagories/SpeciesList"
import SpeciesPage from "../details/SpeciesPage"

import VehiclesList from "../catagories/VehiclesList"
import VehiclesPage from "../details/VehiclesPage"

import StarshipList from "../catagories/StarshipList"
import StarshipPage from "../details/StarshipPage"


export default function Main (props) {
    return(
        <div className="Main">
            <h1>I am your... API call page</h1>
            <div className="routes-container">
                <Routes >
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/films" element={<FilmsList filmsList={props.filmsList}/>} />
                    <Route path="/films/:id" element={<FilmsPage filmsPage={props.filmsPage}/>} />
                    
                    <Route path="/people" element={<PeopleList peopleList={props.peopleList}/>} />
                    <Route path="/people/:id" element={<PeoplePage peoplePage={props.peoplePage}/>} />
                    
                    <Route path="/planets" element={<PlanetsList planetsList={props.planetsList}/>} />
                    <Route path="/planets/:id" element={<PlanetsPage planetsPage={props.planetsPage}/>} />
                    
                    <Route path="/species" element={<SpeciesList speciesList={props.speciesList}/>} />
                    <Route path="/species/:id" element={<SpeciesPage speciesPage={props.speciesPage}/>} />
                    
                    <Route path="/starships" element={<StarshipList starshipList={props.starshipList}/>} />
                    <Route path="/starships/:id" element={<StarshipPage starshipPage={props.starshipPage}/>} />
                    
                    <Route path="/vehicles" element={<VehiclesList vehiclesList={props.vehiclesList}/>} />
                    <Route path="/vehicles/:id" element={<VehiclesPage vehiclesPage={props.vehiclesPage}/>} />
                </Routes>
            </div>
        </div>
    )
}