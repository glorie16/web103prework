import './CreatorCard.css'

function CreatorCard(props){
    return(
        <div className="creator-card">
            <h2 className="name">{props.name}</h2>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default CreatorCard