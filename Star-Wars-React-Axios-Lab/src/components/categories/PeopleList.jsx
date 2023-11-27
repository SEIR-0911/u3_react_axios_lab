export default function PeopleList (props) {


    if (props.peopleList.length > 0) {
        return(
            <div className="people-grid">
                {
                    props.peopleList.map((person) => (
                        <div key={person.url}> Name: {person.name} </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>Waiting for people</div>
        )
    }
    
}