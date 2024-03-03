import './TeamCard.css';

function TeamCard({ href, memberName, memberImg, className  }) {

    return ( 
        <a href={href} className="team-card-container">
            <div className='card-img-container'>
                <img src={memberImg} className={className} alt={"profile avatar of " + memberName} style={memberName === 'SHINO SMOKE' ? {alignSelf:'flex-start'} : {}}></img>
            </div>
            <div className="card-body">
                <p>{memberName}</p>
                <a href='' className="card-link">Instagram &#8594;</a>
            </div>
        </a>
     );
}

export default TeamCard;