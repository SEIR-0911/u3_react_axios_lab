import { Link, useNavigate } from "react-router-dom"

export default function Species (props) {
    console.log(props.species)
    let navigate = useNavigate()
    const showSpecies = (specie) => {
        navigate(`${specie.name}`)
    }

    return (
        <div className="species-outer">
            <h1 className="page-head species-head">Species</h1>
            <div className="outer">
                {props.species.map((specie, index)=>(
                    <div className="species-card card" onClick={() => showSpecies(specie)} key={index}>
                        <h2>{specie.name}</h2>
                        <div className="ship-basics">
                            <div>Classification: {specie.classification}</div>
                            <div>Average Height: {specie.average_height}</div>
                            <div>Average Lifespan: {specie.average_lifespan}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="go-back"><Link to="/">Home</Link></button>
        </div>
    )
}