import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
                <img className="card-image" src={profilePic} alt="Profile picture"></img>
                <h2 className="card-title">Albany</h2>
                <p className="card-text">Studying Computer Engineering and Building a better life by defying all odds</p>
        </div>
    )
}

export default Card