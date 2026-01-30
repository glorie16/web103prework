import './CreatorCard.css'
import instaIcon from '../assets/icons/instagram.png'
import ytIcon from '../assets/icons/youtube.png'

function CreatorCard(props){
    return(
        <div className="creator-card"
            style={{backgroundImage: `url(${props.imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    }}>
            <div className="card-content">
                <div className="top-row">
                    <h2 className="name">{props.name}</h2>
                    <div className="btn-container">
                        <button className="yt-btn" alt="like">
                            <img src={ytIcon}/>
                        </button>
                        <button className="insta-btn">
                            <img src={instaIcon}>
                            </img>
                        </button>
               
                </div>
            </div>
           
           <div className="bottom-row">
                <p className="description">{props.description}</p>
            </div>
                 </div>
        </div>
    )
}

export default CreatorCard