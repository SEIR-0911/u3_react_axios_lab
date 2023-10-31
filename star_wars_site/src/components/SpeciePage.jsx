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
            <h1>{specie.name}</h1>
            <button className="go-back"><Link to='/species'>Back to Species</Link></button>
        </div>
    )
}