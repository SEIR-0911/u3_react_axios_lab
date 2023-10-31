import { Link, useNavigate } from "react-router-dom"

export default function Species (props) {
    console.log(props.species)
    let navigate = useNavigate()
    const showSpecies = (specie) => {
        navigate(`${specie.name}`)
    }

    if (!props.species.length === 0) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        return (
            <div className="species-outer">
                <h1 className="page-head species-head">Species</h1>
                <div className="outer">
                    {props.species.map((specie, index)=>(
                        <div className="species-card card" onClick={() => showSpecies(specie)} key={index}>
                            <h2>{specie.name}</h2>
                            <div className="species-basics">
                                <div>Classification: {specie.classification}</div>
                                <div>Average Height: {specie.average_height}</div>
                                <div>Average Lifespan: {specie.average_lifespan}</div>
                            </div>
                            <div className="species-img" id={`species${index}`}></div>
                        </div>
                    ))}
                </div>
                <button className="go-back"><Link to="/" className="link">Home</Link></button>
            </div>
        )
    }
}