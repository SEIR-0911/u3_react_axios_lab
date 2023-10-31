import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'

export default function SpeciePage (props) {
    let { name } = useParams()

    const [specie, setSpecie] = useState('')

    useEffect(() => {
        let selectedSpecie = props.species.find((specie) => specie.name === name)
        setSpecie(selectedSpecie)
    }, [props.species, name])

    return (
        <div className="specie-outer">
            <h1 className="page-head species-head">{specie.name}</h1>
            <div className="specie-info">
                <div>Classification: {specie.classification}</div>
                <div>Designation: {specie.designation}</div>
                <div>Average Height: {specie.averge_height}</div>
                <div>Skin Colors: {specie.skin_colors}</div>
                <div>Hair Colors: {specie.hair_colors}</div>
                <div>Eye Colors: {specie.eye_colors}</div>
                <div>Average Lifespan: {specie.average_lifespan}</div>
                <div>Language: {specie.language}</div>
            </div>
            <button className="go-back"><Link to='/species' className="link">Back to Species</Link></button>
        </div>
    )
}