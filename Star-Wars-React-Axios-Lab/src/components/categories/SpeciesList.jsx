export default function SpeciesList (props) {


    if (props.speciesList.length > 0) {
        return(
            <div className="species-grid">
                {
                    props.speciesList.map((species) => (
                        <div key={species.url}> Species: {species.name} </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>Waiting for species</div>
        )
    }
    
}