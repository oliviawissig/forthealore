import './TeamCard.css';

function TeamCard({ href, memberName, memberImg, className  }) {

    return ( 
        <a href={href} className="team-card-container">
            <div className='card-img-container'>
                <img src={memberImg} className={className} alt={"profile avatar of " + memberName}></img>
            </div>
            <div className="card-body">
                <p style={{fontSize:'1.2rem'}}>{memberName}</p>
                <a href={href} className="card-link">Instagram 
                {/* <span className='card-arrow'>&#8594;</span> */}
                </a>
            </div>
        </a>
     );
}

export default TeamCard;